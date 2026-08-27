(function () {
  'use strict';

  var models = {
    '9055': {
      name: 'WSM-9055', image: 'assets/img/warm-wsm-9055-hq.png',
      usage: '축사용 가빠·방수포 권장', safeCurrent: '3.5A', maxCurrent: '4.8A',
      safeRpm: '2.7rpm', maxRpm: '2.6rpm', safeTorque: '9Kg·m', maxTorque: '13Kg·m',
      limit: '55회전', weight: '4.0kg'
    },
    '15033': {
      name: 'WSM-15033', image: 'assets/img/warm-wsm-15033-hq.png',
      usage: '다겹누빔 보온피복재용', safeCurrent: '3.3A', maxCurrent: '4.2A',
      safeRpm: '1.6rpm', maxRpm: '1.5rpm', safeTorque: '15Kg·m', maxTorque: '20Kg·m',
      limit: '33회전', weight: '5.2kg'
    },
    '15016': {
      name: 'WSM-15016', image: 'assets/img/warm-wsm-15033-hq.png',
      usage: '다겹누빔 보온피복재용 · 정밀 리미트 설정', safeCurrent: '3.3A', maxCurrent: '4.2A',
      safeRpm: '1.6rpm', maxRpm: '1.5rpm', safeTorque: '15Kg·m', maxTorque: '20Kg·m',
      limit: '16회전', weight: '5.2kg'
    },
    '15066': {
      name: 'WSM-15066', image: 'assets/img/warm-wsm-15033-hq.png',
      usage: '다겹누빔 보온피복재용 · 넓은 리미트 범위', safeCurrent: '3.3A', maxCurrent: '4.2A',
      safeRpm: '1.6rpm', maxRpm: '1.5rpm', safeTorque: '15Kg·m', maxTorque: '20Kg·m',
      limit: '66회전', weight: '5.2kg'
    },
    '16033': {
      name: 'WSM-16033', image: 'assets/img/warm-wsm-16033-hq.png',
      usage: '다겹누빔 보온피복재용', safeCurrent: '5.0A', maxCurrent: '6.0A',
      safeRpm: '2.4rpm', maxRpm: '2.2rpm', safeTorque: '16Kg·m', maxTorque: '20Kg·m',
      limit: '33회전', weight: '6.1kg'
    },
    '18033': {
      name: 'WSM-18033', image: 'assets/img/warm-wsm-18033-hq.png',
      usage: '고중량 다겹누빔 보온피복재용', safeCurrent: '4.3A', maxCurrent: '5.3A',
      safeRpm: '1.5rpm', maxRpm: '1.4rpm', safeTorque: '18Kg·m', maxTorque: '24Kg·m',
      limit: '33회전', weight: '6.1kg'
    },
    '18016': {
      name: 'WSM-18016', image: 'assets/img/warm-wsm-18033-hq.png',
      usage: '고중량 다겹누빔 보온피복재용 · 정밀 리미트 설정', safeCurrent: '4.3A', maxCurrent: '5.3A',
      safeRpm: '1.5rpm', maxRpm: '1.4rpm', safeTorque: '18Kg·m', maxTorque: '24Kg·m',
      limit: '16회전', weight: '6.1kg'
    },
    '18066': {
      name: 'WSM-18066', image: 'assets/img/warm-wsm-18033-hq.png',
      usage: '고중량 보온피복재·넓은 리미트 범위', safeCurrent: '4.3A', maxCurrent: '5.3A',
      safeRpm: '1.5rpm', maxRpm: '1.4rpm', safeTorque: '18Kg·m', maxTorque: '24Kg·m',
      limit: '66회전', weight: '6.1kg'
    }
  };

  var key = new URLSearchParams(location.search).get('model') || '9055';
  var model = models[key] || models['9055'];
  var $ = function (selector) { return document.querySelector(selector); };

  /* 인증서에 모델명이 명시된 경우에만 인증 표기를 노출합니다. */
  var certification = {
    '9055': 'CE · IP54',
    '18033': 'CE'
  };
  var certificationBadge = $('.product-hero .ce');
  if (certificationBadge && certification[key]) {
    certificationBadge.textContent = certification[key];
    certificationBadge.hidden = false;
    certificationBadge.title = key === '9055'
      ? 'CE 적합성 인증 및 IP54 시험 적합'
      : 'CE 적합성 인증';
  }

  document.title = model.name + ' | 보온재 개폐 시스템';
  var description = $('meta[name="description"]');
  if (description) description.content = model.name + ' DC24V 보온재용 전동개폐기 제품 안내';

  var crumb = $('.detail-crumb');
  if (crumb) crumb.innerHTML = '보온재 개폐 시스템　›　롤업스타　›　<strong>' + model.name + '</strong>';
  var back = $('.detail-actions a');
  if (back) back.href = 'warm-opener.html#models';
  var globalBack = $('.global-navigation .global-back');
  if (globalBack) globalBack.href = 'warm-opener.html#models';

  var sideTitle = $('.detail-side > h2');
  if (sideTitle) sideTitle.textContent = '보온재용 롤업스타 모델';
  var switchCurrent = $('.model-switcher button strong');
  if (switchCurrent) switchCurrent.textContent = model.name;
  var switchList = $('.model-switch-list');
  if (switchList) {
    switchList.innerHTML = Object.keys(models).map(function (id) {
      return '<a class="' + (id === key ? 'active' : '') + '" href="warm-model.html?model=' + id + '">' + models[id].name + '</a>';
    }).join('');
  }
  var allModels = $('.all-models');
  if (allModels) { allModels.href = 'warm-opener.html#models'; allModels.innerHTML = '전체 모델 보기 <b>›</b>'; }

  var sideLinks = document.querySelectorAll('.detail-side > a');
  if (sideLinks[1]) sideLinks[1].href = 'rollupstar-parts.html?usage=warm';
  if (sideLinks[2]) sideLinks[2].href = 'rollupstar-options.html?usage=warm';
  if (sideLinks[3]) sideLinks[3].href = 'rollupstar-installations.html?usage=warm';

  var aboutImage = $('.detail-about img');
  if (aboutImage) { aboutImage.src = model.image; aboutImage.alt = model.name; }
  var aboutTitle = $('.detail-about h3');
  if (aboutTitle) aboutTitle.textContent = '보온재용 롤업스타란?';
  var aboutCopy = document.querySelectorAll('.detail-about p');
  if (aboutCopy[0]) aboutCopy[0].textContent = 'DC24V 전동개폐기로 축사용 가빠·방수포와 시설원예용 다겹 보온피복재를 말아 올리고 내리는 구동장치입니다.';
  if (aboutCopy[1]) aboutCopy[1].textContent = '100W 이상 출력의 롤업마스터와 조합하며, 피복재 무게와 현장 부하에 맞춰 모델을 선택합니다.';

  var heading = $('.product-title h1');
  if (heading) heading.textContent = model.name;
  var copy = $('.product-copy');
  if (copy) copy.textContent = 'DC24V 모터로 구동되는 보온재 개폐 시스템용 고토크 전동개폐기입니다.';
  var summary = $('.model-summary');
  if (summary) summary.innerHTML = '<span class="usage">' + model.usage + '</span>' +
    '<span><b>안전 사용 토크</b> ' + model.safeTorque + '</span>' +
    '<span><b>리미트</b> ' + model.limit + '</span>' +
    '<span><b>회전 속도</b> ' + model.safeRpm + '</span>' +
    '<small>표시된 용도는 일반적인 권장 기준입니다. 피복재의 재질·두께·면적과 시설 구조 및 현장 부하를 검토한 뒤 선정하십시오.</small>';

  var hero = $('.product-hero > img');
  if (hero) { hero.src = model.image; hero.alt = '보온재용 롤업스타 ' + model.name; }
  if (model.replacement && $('.product-hero')) {
    var badge = document.createElement('small');
    badge.className = 'warm-image-note';
    badge.textContent = '모델별 고화질 사진 교체 예정';
    $('.product-hero').appendChild(badge);
  }

  var quick = $('.quick-specs');
  if (quick) quick.innerHTML = '<div><b>▣</b><span>구동전원<strong>DC24V</strong></span></div>' +
    '<div><b>⚙</b><span>안전 사용 토크<strong>' + model.safeTorque + '</strong></span></div>' +
    '<div><b>◴</b><span>리미트 범위<strong>' + model.limit + '</strong></span></div>' +
    '<div><b>↻</b><span>감속 방식<strong>헬리컬·유성기어</strong></span></div>' +
    '<div><b>◉</b><span>2Color LED<strong>적색·녹색</strong></span></div>';

  var tbody = $('.spec-table tbody');
  if (tbody) tbody.innerHTML =
    '<tr><td rowspan="2">전원</td><td>정격 전압</td><td>DC24V</td><td>DC24V</td></tr>' +
    '<tr><td>전류</td><td>' + model.safeCurrent + '</td><td>' + model.maxCurrent + '</td></tr>' +
    '<tr><td rowspan="2">구동 성능</td><td>회전수</td><td>' + model.safeRpm + '</td><td>' + model.maxRpm + '</td></tr>' +
    '<tr><td>토크</td><td>' + model.safeTorque + '</td><td>' + model.maxTorque + '</td></tr>' +
    '<tr><td>감속기</td><td>감속 방식</td><td>헬리컬·유성기어</td><td>-</td></tr>' +
    '<tr><td rowspan="3">제품 사양</td><td>리미트 설정 범위</td><td>' + model.limit + '</td><td>-</td></tr>' +
    '<tr><td>본체 무게</td><td>' + model.weight + '</td><td>-</td></tr>' +
    '<tr><td>작동 표시</td><td>2컬러 LED(적색·녹색)</td><td>-</td></tr>';

  var note = $('.safety-note');
  if (note) note.textContent = '※ 보온피복재의 중량과 마찰, 설치 각도 및 구동축 길이를 포함한 실제 부하가 안전 사용 범위를 넘지 않도록 모델을 선정하십시오.';

  /* 비닐용 롤업스타와 같은 한 화면 카드 구성으로 통일합니다. */
  var specSection = $('.spec-table');
  var guideGrid = $('.lower-grid .guide-grid');
  if (specSection && guideGrid) {
    var specTable = specSection.querySelector('table');
    var specCard = document.createElement('a');
    specCard.href = '#';
    specCard.className = 'spec-guide-card';
    specCard.setAttribute('data-open-warm-spec', '');
    specCard.innerHTML = '<b>▤</b><span><strong>제품 사양</strong><small>전류·토크·회전수·리미트 확인</small></span><em>›</em>';
    guideGrid.insertBefore(specCard, guideGrid.firstChild);

    var specModal = document.createElement('div');
    specModal.className = 'parts-modal spec-modal warm-spec-modal';
    specModal.id = 'warmSpecModal';
    specModal.setAttribute('aria-hidden', 'true');
    specModal.innerHTML = '<div class="parts-dialog spec-dialog" role="dialog" aria-modal="true" aria-labelledby="warmSpecTitle"><header><div><h2 id="warmSpecTitle">' + model.name + ' 제품 사양</h2><p>보온재의 실제 부하와 연결할 컨트롤러의 출력 용량을 함께 확인하십시오.</p></div><button type="button" class="parts-close warm-spec-close" aria-label="닫기">×</button></header><section class="spec-popup-body"><p><b>' + model.usage + '</b> · 아래 값은 제품 선정 시 확인해야 할 안전 사용 기준과 최대 한계입니다.</p>' + specTable.outerHTML + '<aside>※ 보온피복재의 무게·마찰·설치 각도·구동축 길이에 따라 실제 부하가 달라집니다. 100W 이상 출력의 롤업마스터와 조합하고 안전 사용 범위 안에서 선정하십시오.</aside></section><button type="button" class="mobile-close warm-spec-mobile-close">닫기</button></div>';
    document.body.appendChild(specModal);
    specSection.remove();

    var lastFocus;
    function openWarmSpec(event) {
      event.preventDefault();
      lastFocus = document.activeElement;
      specModal.classList.add('show');
      specModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      specModal.querySelector('.warm-spec-close').focus();
    }
    function closeWarmSpec() {
      specModal.classList.remove('show');
      specModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (lastFocus) lastFocus.focus();
    }
    specCard.addEventListener('click', openWarmSpec);
    specModal.querySelectorAll('.warm-spec-close,.warm-spec-mobile-close').forEach(function (button) { button.addEventListener('click', closeWarmSpec); });
    specModal.addEventListener('click', function (event) { if (event.target === specModal) closeWarmSpec(); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape' && specModal.classList.contains('show')) closeWarmSpec(); });
  }

  var style = document.createElement('style');
  style.textContent = '.warm-image-note{position:absolute;right:14px;top:42px;padding:5px 9px;border-radius:999px;background:#fff3cd;color:#8a5a00;font-weight:700;font-size:12px;border:1px solid #f2cf75}.product-hero{position:relative}.warm-spec-modal .spec-dialog{width:min(920px,calc(100% - 32px))}.warm-spec-modal .spec-dialog>header p{margin:4px 0 0;color:#64788b;font-size:13px}.warm-spec-modal .spec-popup-body b{color:#8a5a00}@media(min-width:1181px){.lower-grid .guide-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.product-hero>img{object-fit:contain}.features h2{display:flex;align-items:baseline;gap:8px}.catalog-feature-guide{font-size:11px;color:#68798a;font-weight:500}}';
  document.head.appendChild(style);
})();
