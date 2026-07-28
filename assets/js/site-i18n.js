/* 다국어 적용 엔진 — 한국어로 작성된 페이지를 영어/일본어로 바꿔서 보여줍니다.
 *
 * 동작 방식
 *  1. 페이지의 모든 텍스트 노드와 번역 대상 속성을 훑습니다.
 *  2. 한국어 원문을 WeakMap 에 보관해 두고, 사전에서 찾은 번역으로 교체합니다.
 *     원문을 보관하기 때문에 언어를 몇 번 바꿔도 원본이 손상되지 않습니다.
 *  3. 자바스크립트가 나중에 만들어 낸 요소(모달, 시뮬레이터 안내문 등)는
 *     MutationObserver 가 감지해서 같은 방식으로 번역합니다.
 *
 * 번역하지 못한 문장은 한국어 원문 그대로 남깁니다.
 * 문장 일부만 바꾸면 "Power을 공급하기" 같은 읽을 수 없는 문장이 되기 때문에,
 * 사전에 정확히 일치하는 항목이 있을 때만 교체합니다.
 *
 * 사전은 assets/js/i18n-dict.js 에 있습니다. 이 파일보다 먼저 불러와야 합니다.
 */
(function () {
 'use strict';

 var STORAGE_KEY = 'wsh-language';
 var TRANSLATABLE_ATTRIBUTES = ['title', 'aria-label', 'placeholder', 'alt', 'data-title', 'data-full'];
 var SKIP_TAGS = /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i;
 var HAS_KOREAN = /[가-힣]/;

 /* 사전은 호출할 때마다 읽습니다.
  * 로드 시점에 붙들어 두면 i18n-dict.js 만 다시 불러왔을 때 반영되지 않습니다. */
 function dict() { return window.WSH_I18N_DICT || {}; }
 function ruleList() { return window.WSH_I18N_RULES || []; }

 var lang = readSavedLanguage();
 var originalText = new WeakMap();   // 텍스트 노드 → 한국어 원문
 var originalAttrs = new WeakMap();  // 요소 → { 속성이름: 한국어 원문 }
 var originalTitle = document.title;
 var untranslated = {};              // 사전에 없는 문장 모음 (디버깅용)

 function readSavedLanguage() {
  try {
   return localStorage.getItem(STORAGE_KEY) || 'ko';
  } catch (e) {
   return 'ko';
  }
 }

 function saveLanguage(next) {
  try {
   localStorage.setItem(STORAGE_KEY, next);
  } catch (e) {
   /* 시크릿 모드 등에서 저장이 막혀도 번역 자체는 동작해야 합니다. */
  }
 }

 /* 한국어 원문 하나를 현재 언어로 바꿉니다.
  * 앞뒤 공백은 원문 그대로 유지해야 인접한 인라인 요소와 붙지 않습니다. */
 function convert(source) {
  if (lang === 'ko') return source;
  if (!source) return source;

  var leading = source.match(/^\s*/)[0];
  var trailing = source.match(/\s*$/)[0];
  var body = source.trim();
  if (!body) return source;
  if (!HAS_KOREAN.test(body)) return source;

  /* HTML 의 &nbsp;(U+00A0)는 눈으로는 일반 공백과 구별되지 않습니다.
   * 사전에 보이지 않는 문자를 넣어 두면 나중에 반드시 어긋나므로,
   * 찾을 때만 일반 공백으로 바꿔서 조회합니다. */
  var key = body.replace(/\u00A0/g, ' ');

  var entry = dict()[key];
  if (entry) {
   var translated = entry[langIndex()];
   /* 빈 문자열도 정상적인 번역입니다.
    * (인라인 태그로 쪼개진 조각 중 다른 언어에서는 사라져야 하는 부분이 있습니다) */
   if (typeof translated === 'string') return leading + translated + trailing;
  }

  var rules = ruleList();
  for (var i = 0; i < rules.length; i++) {
   var rule = rules[i];
   if (rule.find.test(key)) {
    return leading + key.replace(rule.find, rule[lang]) + trailing;
   }
  }

  untranslated[key] = true;
  return source;
 }

 function langIndex() {
  if (lang === 'ja') return 1;
  return 0;
 }

 function walkTextNode(node) {
  var parent = node.parentElement;
  if (!parent || SKIP_TAGS.test(parent.tagName)) return;

  if (!originalText.has(node)) originalText.set(node, node.nodeValue);

  var next = convert(originalText.get(node));
  if (node.nodeValue !== next) node.nodeValue = next;
 }

 function walkElement(node) {
  var saved = originalAttrs.get(node);
  if (!saved) {
   saved = {};
   originalAttrs.set(node, saved);
  }

  for (var i = 0; i < TRANSLATABLE_ATTRIBUTES.length; i++) {
   var name = TRANSLATABLE_ATTRIBUTES[i];
   if (!node.hasAttribute(name)) continue;
   if (!(name in saved)) saved[name] = node.getAttribute(name);

   var next = convert(saved[name]);
   if (node.getAttribute(name) !== next) node.setAttribute(name, next);
  }

  var children = node.childNodes;
  for (var c = 0; c < children.length; c++) walk(children[c]);
 }

 function walk(node) {
  if (node.nodeType === 3) {
   walkTextNode(node);
   return;
  }
  if (node.nodeType === 1) walkElement(node);
 }

 function applyDocumentTitle() {
  var next = convert(originalTitle);
  if (document.title !== next) document.title = next;
 }

 function apply(next) {
  if (next) lang = next;
  saveLanguage(lang);
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  untranslated = {};
  walk(document.body);
  applyDocumentTitle();

  document.querySelectorAll('[data-lang-btn]').forEach(function (button) {
   var selected = button.getAttribute('data-lang-btn') === lang;
   button.classList.toggle('active', selected);
   button.setAttribute('aria-pressed', String(selected));
  });

  document.dispatchEvent(new CustomEvent('wsh-language-change', { detail: { lang: lang } }));
 }

 /* 언어 버튼 클릭 — 버튼이 나중에 만들어져도 동작하도록 위임 처리합니다. */
 document.addEventListener('click', function (event) {
  if (!event.target.closest) return;
  var button = event.target.closest('[data-lang-btn]');
  if (!button) return;
  apply(button.getAttribute('data-lang-btn'));
 });

 /* 자바스크립트가 만들어 낸 요소도 같은 언어로 맞춥니다. */
 var observer = new MutationObserver(function (records) {
  if (lang === 'ko') return;

  records.forEach(function (record) {
   record.addedNodes.forEach(walk);

   if (record.type === 'characterData') {
    var node = record.target;
    /* 앱 코드가 한국어를 새로 써 넣었을 때만 원문을 갱신합니다.
     * 우리가 방금 넣은 번역문을 원문으로 착각하지 않기 위한 조건입니다. */
    if (HAS_KOREAN.test(node.nodeValue)) originalText.set(node, node.nodeValue);
    walkTextNode(node);
   }
  });
 });

 function start() {
  observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  apply(lang);
 }

 if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
 } else {
  start();
 }

 /* 사전을 채워 나갈 때 쓰는 도구입니다.
  * 콘솔에서 WSH_I18N.missing() 을 부르면 이 페이지에서 번역되지 않은 문장이 나옵니다. */
 window.WSH_I18N = {
  apply: apply,
  current: function () { return lang; },
  missing: function () { return Object.keys(untranslated).sort(); }
 };
})();
