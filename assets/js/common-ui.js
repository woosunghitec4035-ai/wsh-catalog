(function(){

 /* 제품군이 달라도 클릭형 기능 카드는 같은 사용법으로 안내합니다. */
 var winFeatureHeading=document.querySelector('.win-hero .summary h3');
 if(winFeatureHeading){
  winFeatureHeading.innerHTML='핵심 기능 <small class="catalog-feature-guide">카드를 눌러 장점과 확장 방법을 확인하세요.</small>';
 }

 /* 언어 전환 + 제품 문의 버튼 — 모든 페이지 우상단에 고정으로 붙입니다.
  * 실제 번역은 site-i18n.js 가 담당하고, 여기서는 버튼만 만들어 둡니다.
  * 버튼의 data-lang-btn 값을 site-i18n.js 가 읽어 언어를 바꿉니다. */
 var tools = document.createElement('div');
 tools.className = 'global-tools';
 tools.innerHTML =
  '<div class="language-set" aria-label="Language">' +
   '<button type="button" data-lang-btn="ko">한국어</button>' +
   '<button type="button" data-lang-btn="en">English</button>' +
   '<button type="button" data-lang-btn="ja">日本語</button>' +
  '</div>' +
  '<button type="button" class="inquiry-button">제품 문의</button>';
 document.body.appendChild(tools);
 document.body.classList.add('has-global-tools');
 var isCatalogHome = /(?:^|\/)index\.html$/i.test(location.pathname) || /(?:^|\/)$/i.test(location.pathname);
 var exhibitionHome=document.createElement(isCatalogHome?'button':'a');
 exhibitionHome.className='exhibition-home-button';
 exhibitionHome.innerHTML='<span>⌂</span> 처음 화면';
 if(isCatalogHome){
  exhibitionHome.type='button';
  exhibitionHome.addEventListener('click',function(){if(window.openExhibitionWelcome)window.openExhibitionWelcome();});
 }else{
  exhibitionHome.href='index.html';
 }
 tools.appendChild(exhibitionHome);
 var exhibitionHomeStyle=document.createElement('style');
 exhibitionHomeStyle.textContent='.exhibition-home-button{display:inline-flex;align-items:center;gap:5px;height:31px;padding:0 12px;border:1px solid #2f734f;border-radius:16px;background:#2f734f;color:#fff!important;font:inherit;font-size:11px;font-weight:800;text-decoration:none;cursor:pointer;white-space:nowrap}.exhibition-home-button span{font-size:14px}@media(max-width:700px){.exhibition-home-button{height:29px;padding:0 9px;font-size:10px}}';
 document.head.appendChild(exhibitionHomeStyle);

 /* 화면마다 달랐던 이전/전체 제품 링크를 공통 도구막대로 모읍니다.
  * 링크 주소는 기존 값을 그대로 사용하므로 제품 탐색 흐름은 바뀌지 않습니다. */
 var actionSource = document.querySelector('.detail-actions,.top-actions,.select-actions,.vent-actions,.win-actions,.fs-actions,.screen-actions,.measure-top>div,.fan-top>div,body>header .actions,.top-controls .actions');
 if (isCatalogHome) actionSource = null;
 if (!actionSource) {
  actionSource = Array.prototype.find.call(document.querySelectorAll('header div,header nav,.actions'), function (container) {
   var copy = container.textContent || '';
   return container.querySelectorAll('a').length > 1 && copy.indexOf('이전') > -1 && copy.indexOf('전체 제품') > -1;
  });
 }
 if (actionSource) {
  var actionLinks = Array.prototype.slice.call(actionSource.querySelectorAll('a'));
  var backLink = actionLinks.find(function (a) { return a.textContent.indexOf('이전') > -1; });
  var homeLink = actionLinks.find(function (a) { return a.textContent.indexOf('전체 제품') > -1; });
  if (backLink && homeLink) {
   var nav = document.createElement('nav');
   nav.className = 'global-navigation';
   nav.setAttribute('aria-label', '제품 화면 이동');
   nav.innerHTML = '<a class="global-back" href="' + backLink.getAttribute('href') + '"><span>‹</span> 이전으로</a>' +
    '<a class="global-home" href="index.html?view=products"><span>▦</span> 전체 제품</a>';
   tools.appendChild(nav);
   actionSource.classList.add('actions-unified-source');
   document.body.classList.add('has-unified-navigation');
  }
 }
 if (!tools.querySelector('.global-navigation') && !document.body.classList.contains('landing') && !isCatalogHome) {
  var fallbackBack = Array.prototype.find.call(document.querySelectorAll('a'), function (a) {
   return a.textContent.indexOf('이전') > -1 || a.textContent.indexOf('전체 제품보기') > -1;
  });
  if (fallbackBack) {
   var fallbackNav = document.createElement('nav');
   fallbackNav.className = 'global-navigation';
   fallbackNav.setAttribute('aria-label', '제품 화면 이동');
   fallbackNav.innerHTML = '<a class="global-back" href="' + (fallbackBack.getAttribute('href') || 'index.html') + '"><span>‹</span> 이전으로</a>' +
    '<a class="global-home" href="index.html?view=products"><span>▦</span> 전체 제품</a>';
   tools.appendChild(fallbackNav);
   document.body.classList.add('has-unified-navigation');
  }
 }

 /* 제품 경로는 각 페이지 헤더에서 분리해 공통 도구막대 아래에 고정합니다. */
 var breadcrumbStyle = document.createElement('style');
 breadcrumbStyle.textContent = 'body.has-global-breadcrumb .global-breadcrumb{position:fixed!important;top:57px!important;right:20px!important;left:auto!important;bottom:auto!important;z-index:8990!important;margin:0!important;padding:6px 11px!important;border:1px solid #d9e3ec!important;border-radius:16px!important;background:rgba(255,255,255,.94)!important;box-shadow:0 2px 8px rgba(22,49,79,.06)!important;color:#617286!important;font-family:"Pretendard Variable",Pretendard,"Noto Sans KR","Malgun Gothic",sans-serif!important;font-size:12px!important;line-height:18px!important;text-align:right!important;white-space:nowrap!important;transform:none!important}body.has-global-breadcrumb .global-breadcrumb b{margin:0 8px!important}body.has-global-breadcrumb .global-breadcrumb strong{color:#145b96!important}@media(max-width:800px){body.has-global-breadcrumb .global-breadcrumb{display:none!important}}';
 document.head.appendChild(breadcrumbStyle);
 var breadcrumbCandidates = isCatalogHome ? [] : document.querySelectorAll('.detail-crumb,.parts-crumb,.rm-crumb,.crumb,.bcin,.fan-top nav,.screen-top nav,.measure-top nav,.win-top nav,.warm-detail-top nav,.fs-topbar nav');
 var breadcrumb = Array.prototype.find.call(breadcrumbCandidates, function (element) {
  return element && !element.closest('.global-tools') && element.textContent.indexOf('›') > -1;
 });
 if (!breadcrumb && !isCatalogHome && !document.body.classList.contains('landing') && !document.body.classList.contains('proposal-page')) {
  var pageHeading = document.querySelector('main h1,.product-page h1,.detail-main h1');
  if (pageHeading) {
   breadcrumb = document.createElement('nav');
   breadcrumb.innerHTML = '전체 제품 <b>›</b> <strong>' + pageHeading.textContent.trim() + '</strong>';
   breadcrumb.setAttribute('aria-label', '현재 제품 경로');
  }
 }
 if (breadcrumb) {
  breadcrumb.classList.add('global-breadcrumb');
  document.body.appendChild(breadcrumb);
  document.body.classList.add('has-global-breadcrumb');
 }

 /* 롤업스타 공통 특징은 짧은 명칭을 유지하되, 선택 시 기술적 사실과
  * 사용자가 현장에서 얻는 이점이 함께 보이도록 설명을 통일합니다. */
 var rollupStarBenefits = {
  '안전전압': 'DC24V 저전압을 사용하여 감전 위험으로부터 안전합니다. 작업자가 자주 접근하는 시설에서도 전기 안전 부담을 줄일 수 있습니다. 당사 세계 최초 적용(1991년).',
  '프레임(몸체)': '알루미늄 합금 몸체로 정밀도와 강성을 높였습니다. 장기간 사용해도 변형이 적어 개폐축의 안정적인 작동을 유지하는 데 유리합니다.',
  'DC모터': '우성하이텍은 전동개폐기용 DC모터 생산설비를 직접 운영하고, 제품의 운전 특성에 맞춰 모터를 자체 설계·생산합니다. 생산 공정을 직접 관리하여 품질을 일정하게 유지하고 안정적인 부품 공급이 가능하며, 생산과 기술지원이 한 회사 안에서 이어져 점검과 사후 대응에도 유리합니다. 반복 개폐가 많은 시설에서 안정적인 운전을 지원합니다.',
  '감속기어': '특수강을 냉간단조한 뒤 침탄 열처리하여 마모와 파손에 강합니다. 장기간 반복 운전에서도 내구성을 확보하며, 정상적으로 사용한 제품의 감속기어 고장은 10년간 무상수리를 보증합니다.',
  '감속방식': '유성기어 감속방식으로 동력전달 효율이 높고 구조가 튼튼합니다. 모터의 힘을 개폐축에 효율적으로 전달하여 안정적인 개폐에 유리합니다.',
  '무게/크기': '소형·경량 설계로 운반과 취급이 쉽고, 설치 공간이 제한된 시설에서도 작업 부담을 줄일 수 있습니다.',
  '제동 기능': '강력한 셀프 브레이크(Self brake) 기능으로 정지 후 역진이 잘 되지 않습니다. 환기창이 설정 위치에서 밀리는 현상을 줄여 안정적으로 유지합니다.',
  '리미트 스위치': '대용량 마이크로 스위치를 사용하여 설정 위치에서 정확하게 정지합니다. 반복 운전 시 과도한 열림·닫힘을 방지하여 시설과 피복재를 보호하는 데 도움이 됩니다.',
  '리미트 조정': '다이얼 방식으로 개폐 폭을 쉽게 설정할 수 있어 현장 조건에 맞춘 열림·닫힘 위치 조정이 빠르고 편리합니다.',
  '안내 표시': '2컬러 LED로 전원 상태와 작동 위치를 확인할 수 있어 운전 상태 확인과 이상 유무 점검이 편리합니다.',
  '방우 기능': '정밀한 패킹 처리로 실외 사용 시 빗물의 내부 유입을 억제합니다. 전기·기계 부품을 보호하고 안정적으로 운전하는 데 도움이 됩니다.',
  '공기 통로': '내부 공기의 수축·팽창에 대응하는 공기 통로를 마련했습니다. 내부 압력 변화를 완화하여 패킹과 내부 부품에 가해지는 부담을 줄이는 데 도움이 됩니다.',
  '외관 처리': '녹 방지를 위해 모터 외부를 아연 도금한 뒤 분체 도장했습니다. 실외 환경에서 부식을 줄여 외관과 본체의 내구성을 오래 유지하는 데 유리합니다. 국내 유일.',
  '가이드 각도': '가이드 암이 설치 각도에 맞춰 적정 범위로 움직여 개폐축에 불필요한 부하가 가중되는 것을 줄입니다. 구동부의 안정성과 수명 유지에 도움이 됩니다.',
  '가이드 롤러': '가이드 암을 적용하기 어려운 측면이나 좁은 장소에는 가이드 롤러를 사용할 수 있어 다양한 시설 구조에 맞춰 설치 방식을 선택할 수 있습니다.',
 '간편 설치': '드릴 작업 없이 설치할 수 있어 현장 가공을 줄이고 설치 노동력과 작업시간을 단축할 수 있습니다.'
 };
 var rollupStarHighlights = {
  '안전전압': ['전기 안전 부담을 줄일 수 있습니다.', '당사 세계 최초 적용(1991년).'],
  '프레임(몸체)': ['개폐축의 안정적인 작동을 유지하는 데 유리합니다.'],
  'DC모터': ['반복 개폐가 많은 시설에 안정적으로 대응합니다.'],
  '감속기어': ['장기간 반복 운전에서도 내구성을 확보', '10년간 무상수리를 보증합니다.'],
  '감속방식': ['안정적인 개폐에 유리합니다.'],
  '무게/크기': ['작업 부담을 줄일 수 있습니다.'],
  '제동 기능': ['설정 위치에서 밀리는 현상을 줄여 안정적으로 유지합니다.'],
  '리미트 스위치': ['시설과 피복재를 보호하는 데 도움이 됩니다.'],
  '리미트 조정': ['위치 조정이 빠르고 편리합니다.'],
  '안내 표시': ['운전 상태 확인과 이상 유무 점검이 편리합니다.'],
  '방우 기능': ['전기·기계 부품을 보호하고 안정적으로 운전하는 데 도움이 됩니다.'],
  '공기 통로': ['패킹과 내부 부품에 가해지는 부담을 줄이는 데 도움이 됩니다.'],
  '외관 처리': ['외관과 본체의 내구성을 오래 유지하는 데 유리합니다.', '국내 유일.'],
  '가이드 각도': ['구동부의 안정성과 수명 유지에 도움이 됩니다.'],
  '가이드 롤러': ['다양한 시설 구조에 맞춰 설치 방식을 선택할 수 있습니다.'],
  '간편 설치': ['설치 노동력과 작업시간을 단축할 수 있습니다.']
 };
 function rollupBenefitMarkup(title) {
  var copy = rollupStarBenefits[title] || '';
  (rollupStarHighlights[title] || []).forEach(function (phrase) {
   copy = copy.replace(phrase, '<b class="benefit-emphasis">' + phrase + '</b>');
  });
  return copy;
 }
 var rollupFeatureCards = document.querySelectorAll('.feature-cards .feature-card[data-title]');
 if (rollupFeatureCards.length && rollupStarBenefits['안전전압']) {
  rollupFeatureCards.forEach(function (card) {
   if (rollupStarBenefits[card.dataset.title]) {
    card.dataset.full = rollupStarBenefits[card.dataset.title];
    card.dataset.benefitHtml = rollupBenefitMarkup(card.dataset.title);
   }
  });
  var activeRollupFeature = document.querySelector('.feature-cards .feature-card.active[data-title]');
  var rollupFeatureDetail = document.querySelector('.feature-detail');
  if (activeRollupFeature && rollupFeatureDetail && rollupStarBenefits[activeRollupFeature.dataset.title]) {
   var detailTitle = rollupFeatureDetail.querySelector('strong');
   var detailCopy = rollupFeatureDetail.querySelector('p');
   if (detailTitle) detailTitle.textContent = activeRollupFeature.dataset.title;
   if (detailCopy) detailCopy.innerHTML = activeRollupFeature.dataset.benefitHtml || rollupStarBenefits[activeRollupFeature.dataset.title];
  }
 }

 tools.querySelector('.inquiry-button').addEventListener('click', function () {
  this.title = '문의 팝업 준비 중';
 });

 var modelSwitcher=document.querySelector('.model-switcher');
 if(modelSwitcher){var modelButton=modelSwitcher.querySelector('button');modelButton.addEventListener('click',function(){var open=modelSwitcher.classList.toggle('open');modelButton.setAttribute('aria-expanded',open?'true':'false')});document.addEventListener('click',function(e){if(!modelSwitcher.contains(e.target)){modelSwitcher.classList.remove('open');modelButton.setAttribute('aria-expanded','false')}});document.addEventListener('keydown',function(e){if(e.key==='Escape'){modelSwitcher.classList.remove('open');modelButton.setAttribute('aria-expanded','false')}})}
 var installTriggers=document.querySelectorAll('[data-open-install]');
 if(installTriggers.length){
  var installWrap=document.createElement('div');installWrap.className='parts-modal install-modal';installWrap.id='installModal';installWrap.setAttribute('aria-hidden','true');
  installWrap.innerHTML='<div class="parts-dialog install-dialog" role="dialog" aria-modal="true" aria-labelledby="installTitle"><header><div><h2 id="installTitle">설치방법</h2><p>시설 구조와 설치 공간에 맞는 대표적인 개폐 방식을 확인하십시오.</p></div><button type="button" class="parts-close install-close" aria-label="닫기">×</button></header><div class="install-overview"><img src="assets/img/install-guide/inst-overview.png" alt="가이드암과 가이드롤러 설치 개요"><div><strong>대표 설치 방식</strong><p>롤·업·다운 방식은 가이드암 또는 가이드롤러로 제품을 안내하고, 로프 예인 방식은 구동축에 감긴 로프로 피복재를 여닫습니다.</p></div></div><div class="parts-tabs install-tabs" role="tablist"><button type="button" class="active" data-install-tab="arm">가이드암 방식</button><button type="button" data-install-tab="roller">가이드롤러 방식</button><button type="button" data-install-tab="rope">로프 예인 방식</button></div><div class="install-content"><section class="install-panel active" data-install-panel="arm"><div class="install-method"><div class="install-image"><img src="assets/img/install-guide/inst-arm.png" alt="가이드암 조립 및 설치도"></div><div class="install-copy"><b>ROLL-UP-DOWN · GUIDE ARM</b><h3>가이드암을 사용하여 설치</h3><p>천장 곡부처럼 가이드암이 늘어나고 줄어들 공간이 충분한 곳에 사용합니다.</p><ol><li>규격이 다른 곧은 두 파이프를 겉대와 속대로 조립합니다.</li><li>최대 열림 상태에서도 속대가 겉대에서 빠지지 않게 길이를 확보합니다.</li><li>가이드암이 움직여도 전선이 당겨지지 않도록 충분한 여유를 둡니다.</li><li>볼트·너트를 단단히 조이고 완전 열림·닫힘 시험운전을 합니다.</li></ol></div></div><p class="install-danger">⚠ 개폐축이 피복재를 감고 떠 있을 때 가이드암이나 전동개폐기를 분리하지 마십시오.</p></section><section class="install-panel" data-install-panel="roller"><div class="install-method"><div class="install-image"><img src="assets/img/install-guide/inst-roller.png" alt="가이드롤러 결합 및 설치도"></div><div class="install-copy"><b>ROLL-UP-DOWN · GUIDE ROLLER</b><h3>가이드롤러를 사용하여 설치</h3><p>가이드암 설치 공간이 부족한 측면에서 궤도를 따라 제품이 이동하도록 설치합니다.</p><ol><li>가이드롤러를 제품에 결합하고 체결부를 단단히 조입니다.</li><li>휘지 않은 곧은 파이프로 수직 궤도를 설치합니다.</li><li>가이드롤러 궤도와 개폐축이 직각을 유지하게 합니다.</li><li>궤도를 견고하게 고정하고 피복재 처짐 방지용 보조밴드를 설치합니다.</li></ol></div></div><p class="install-info">ⓘ 궤도가 휘거나 개폐축과 직각이 아니면 가이드롤러가 원활하게 이동하지 않습니다.</p></section><section class="install-panel" data-install-panel="rope"><div class="install-method"><div class="install-image"><img src="assets/img/install-guide/inst-rope.png" alt="로프 예인 개폐방식 설치도"></div><div class="install-copy"><b>ROPE TRACTION</b><h3>로프 예인 방식으로 설치</h3><p>구동축에 로프를 감거나 풀어 주로 측면 피복재를 위아래로 이동시키는 방식입니다.</p><ol><li>골조 파이프에 베어링을 사용하여 구동축을 설치합니다.</li><li>피복재에 연결된 로프를 롤러(도르래)에 통과시킵니다.</li><li>로프를 구동축에 고정하고 전동개폐기로 축을 회전시킵니다.</li><li>감김·풀림 방향과 피복재 열림·닫힘을 시험운전으로 확인합니다.</li></ol></div></div><p class="install-info">ⓘ 무겁거나 두꺼운 피복재에는 용량이 큰 보온재용 전동개폐기를 사용하고 시공 전문가와 상담하십시오.</p></section></div><button type="button" class="mobile-close install-mobile-close">닫기</button></div>';
  installWrap.querySelector('.install-overview p').innerHTML='원예시설 형태는 매우 다양하며 설치방법도 다양합니다. 아래는 대표적인 방법의 <b>[예]</b>이며, 자세한 것은 원예시설 자동화 전문업체와 상담하여 현장에 알맞게 설치하십시오.';
  document.body.appendChild(installWrap);
  var installLastFocus;
  function openInstall(){installLastFocus=document.activeElement;installWrap.classList.add('show');installWrap.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');installWrap.querySelector('.install-close').focus()}
  function closeInstall(){installWrap.classList.remove('show');installWrap.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(installLastFocus)installLastFocus.focus()}
  installTriggers.forEach(function(trigger){trigger.addEventListener('click',function(e){e.preventDefault();openInstall()})});
  installWrap.querySelectorAll('.install-close,.install-mobile-close').forEach(function(b){b.addEventListener('click',closeInstall)});
  installWrap.addEventListener('click',function(e){if(e.target===installWrap)closeInstall()});
  installWrap.querySelectorAll('[data-install-tab]').forEach(function(btn){btn.addEventListener('click',function(){installWrap.querySelectorAll('[data-install-tab]').forEach(function(x){x.classList.toggle('active',x===btn);x.setAttribute('aria-selected',x===btn?'true':'false')});installWrap.querySelectorAll('[data-install-panel]').forEach(function(panel){panel.classList.toggle('active',panel.dataset.installPanel===btn.dataset.installTab)})})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&installWrap.classList.contains('show'))closeInstall()});
 }
 if(document.querySelector('.warm-model-grid')){
  var warmCardsScript=document.createElement('script');
  warmCardsScript.src='assets/js/warm-opener-cards.js';
  document.body.appendChild(warmCardsScript);
 }
 var controllerBenefits={
  timer:'매일 같은 시각에 자동으로 열고 닫아 반복적인 수동 조작을 줄이고, 일정한 환기 일정을 유지하기 좋습니다.',
  step:'환기창을 단계적으로 움직여 한 번에 크게 열고 닫을 때 생길 수 있는 급격한 온도·습도 변화를 완화하는 데 도움이 됩니다.',
  individual:'필요한 라인만 따로 운전·정지할 수 있고, 이상이 생긴 라인을 개별적으로 보호하여 점검 대상을 찾기 쉽습니다.',
  limit:'비정상적으로 긴 열림 출력을 제한하여 컨트롤러와 구동 부품을 보호하는 데 도움이 됩니다.',
  runtime:'필요한 작동시간까지만 운전하게 하여 불필요한 연속출력을 줄이고 부품을 보호할 수 있습니다.',
  sleep:'보호시간이 지나면 자동으로 출력을 멈춰 장시간 연속운전에 따른 부품 부담을 줄입니다.',
  rewind:'닫힘 과정의 비닐 되말림과 쏠림을 완화하여 보다 안정적인 닫힘 운전에 도움이 됩니다.',
  surge:'개폐기 작동 중 발생할 수 있는 이상전압으로부터 출력 회로와 컨트롤러를 보호하는 데 도움이 됩니다.',
  thermostat:'기본 운전조건과 별도로 고온에 대응하므로 시설온도가 비정상적으로 상승할 때 작물 피해를 줄이는 데 도움이 됩니다.',
  temperature:'설정 온도에 따라 자동으로 환기하므로 사람이 계속 온도를 확인하고 조작해야 하는 부담을 줄일 수 있습니다.',
  variable:'시간대별 생육환경에 맞춰 목표온도를 바꿀 수 있어 낮과 밤의 서로 다른 온도관리에 유리합니다.',
  opening:'필요한 범위까지만 열도록 제한하여 과도한 환기와 급격한 환경 변화를 줄이는 데 도움이 됩니다.',
  screen:'현재 상태와 설정값을 한 화면에서 확인할 수 있어 운전상태 파악과 설정 확인이 빠릅니다.',
  fnd:'현재시각·온도·설정값을 바로 확인할 수 있어 현장 점검과 설정 확인이 편리합니다.',
  outside:'외부온도 변화까지 반영하여 환기창을 보다 세밀하게 움직이고 급격한 환기를 완화할 수 있습니다.',
  weather:'비와 강풍이 감지되면 일반 자동운전보다 우선 대응하여 작물과 시설을 보호하는 데 도움이 됩니다.',
  rain:'비가 올 때 자동으로 닫힘 대응을 할 수 있어 갑작스러운 강우에 신속히 대처할 수 있습니다.',
  sun:'계절에 따라 달라지는 일출·일몰 시각을 자동운전에 반영하여 시기별 설정 변경 부담을 줄입니다.',
  alarm:'이상온도를 빠르게 알리고 설정된 보호작동을 수행하여 고온·저온 피해에 조기에 대응할 수 있습니다.',
  safety:'서로 다른 고온 대응수단을 함께 사용하여 한 가지 방식에만 의존하지 않는 보호 구성이 가능합니다.',
  crop:'고온 시 기본 운전조건과 별도로 열림작동을 수행하여 작물의 고온 피해에 대응할 수 있습니다.',
  communication:'PC 연동 구성을 통해 여러 컨트롤러의 정보를 함께 확인하고 관리하는 확장 구성이 가능합니다.',
  central:'현재의 자체 운전을 사용하면서 향후 센트럴 컨트롤러 연동으로 제어 범위를 확장할 수 있습니다.'
 };
 document.addEventListener('click',function(event){
  var trigger=event.target.closest&&event.target.closest('[data-feature]');
  if(!trigger||!controllerBenefits[trigger.dataset.feature])return;
  var benefit=controllerBenefits[trigger.dataset.feature];
  if(document.body.classList.contains('svc-detail')||document.body.classList.contains('rvc-detail')){
   if(trigger.dataset.feature==='outside')benefit='현재 실내온도와 열림·닫힘 작동 개시온도의 차이가 클수록 대기시간을 줄여 빠르게 대응하고, 차이가 작을수록 대기시간을 늘려 세밀하게 조절합니다.';
   if(trigger.dataset.feature==='sleep')benefit='환기가 되지 않는 처마·비닐 겹침 구간을 설정시간 동안 연속으로 열어 실제 환기가 시작되는 위치까지 빠르게 이동할 수 있습니다.';
   if(trigger.dataset.feature==='sun')benefit='경기도 기준 일출·일몰 시각을 시간대 시작 기준으로 사용할 수 있어 날짜별 운전시각 설정에 활용할 수 있습니다.';
   if(trigger.dataset.feature==='opening')benefit='농가가 필요한 개방 정도를 열림률(%)로 설정하여 환기창의 목표 개방 범위를 조절할 수 있습니다.';
  }
  setTimeout(function(){
   var dialog=document.querySelector('dialog[open]');
   if(!dialog)return;
   var body=dialog.querySelector('.feature-dialog-body');
   if(!body)return;
   var old=body.querySelector('.feature-benefit-note');
   if(old)old.remove();
   var note=document.createElement('div');
   note.className='feature-benefit-note';
   note.innerHTML='<strong>운용 장점</strong>'+benefit;
   body.appendChild(note);
  },0);
 });
 /* 제품 안내 공통 이미지 확대 보기 */
 var imageViewer=document.createElement('dialog');
 imageViewer.className='catalog-image-viewer';imageViewer.setAttribute('aria-hidden','true');
 imageViewer.innerHTML='<div class="catalog-image-stage"><img alt="확대 이미지"></div><div class="catalog-image-tools"><button type="button" data-zoom="out" aria-label="축소">−</button><output>100%</output><button type="button" data-zoom="in" aria-label="확대">＋</button><button type="button" data-zoom="reset">원본 맞춤</button><button type="button" data-zoom="close" aria-label="닫기">×</button></div><p>휠로 확대·축소 · 확대 후 드래그 이동</p>';
 document.body.appendChild(imageViewer);
 var viewerImage=imageViewer.querySelector('img'),viewerOutput=imageViewer.querySelector('output'),viewerScale=1,viewerX=0,viewerY=0,viewerDragging=false,viewerStartX=0,viewerStartY=0;
 function viewerRender(){viewerImage.style.transform='translate('+viewerX+'px,'+viewerY+'px) scale('+viewerScale+')';viewerOutput.value=Math.round(viewerScale*100)+'%';viewerOutput.textContent=viewerOutput.value;}
 function viewerReset(){viewerScale=1;viewerX=0;viewerY=0;viewerRender();}
 function viewerOpen(img){var rect=img.getBoundingClientRect();var isMonitor=!!img.closest('.measure-monitor-gallery');var isMonitorMain=isMonitor&&/(모니터_0메인화면|통합모니터 메인화면)/.test((img.currentSrc||img.src)+' '+(img.alt||''));var boxWidth=isMonitorMain?Math.min(620,window.innerWidth-60):isMonitor?Math.min(760,window.innerWidth-60):Math.min(Math.max(rect.width*2.5,420),window.innerWidth-60,1050);var boxHeight=isMonitorMain?Math.min(410,window.innerHeight-150):isMonitor?Math.min(500,window.innerHeight-150):Math.min(Math.max(rect.height*2.5,300),window.innerHeight-150,720);imageViewer.style.setProperty('--viewer-box-width',boxWidth+'px');imageViewer.style.setProperty('--viewer-box-height',boxHeight+'px');viewerImage.src=img.currentSrc||img.src;viewerImage.alt=img.alt||'제품 안내 이미지';viewerReset();if(!imageViewer.open)imageViewer.showModal();imageViewer.classList.add('open');imageViewer.setAttribute('aria-hidden','false');document.body.classList.add('catalog-image-viewer-open');}
 function viewerClose(){imageViewer.classList.remove('open');imageViewer.setAttribute('aria-hidden','true');if(imageViewer.open)imageViewer.close();document.body.classList.remove('catalog-image-viewer-open');viewerImage.removeAttribute('src');}
 function isZoomableImage(img){if(!img||!img.src)return false;if(img.closest('.global-tools,.nav,.measure-top,.detail-top,.select-top,.vent-top,.win-top,.screen-top,.fan-top,a,button,.ctile,.pcard,[data-system]'))return false;if(img.classList.contains('catalog-no-zoom')||/logo/i.test(img.src))return false;return (img.naturalWidth||img.width)>=240&&(img.naturalHeight||img.height)>=160;}
 document.addEventListener('click',function(event){var img=event.target.closest&&event.target.closest('img');if(!isZoomableImage(img))return;event.preventDefault();event.stopPropagation();viewerOpen(img);},true);
 imageViewer.addEventListener('click',function(event){var action=event.target.closest('button');if(action){var key=action.dataset.zoom;if(key==='close')viewerClose();else if(key==='reset')viewerReset();else{viewerScale=Math.max(.5,Math.min(3,viewerScale+(key==='in'?.25:-.25)));viewerRender();}return;}if(event.target===imageViewer) viewerClose();});
 imageViewer.addEventListener('wheel',function(event){event.preventDefault();viewerScale=Math.max(.5,Math.min(3,viewerScale+(event.deltaY<0?.15:-.15)));viewerRender();},{passive:false});
 viewerImage.addEventListener('pointerdown',function(event){if(viewerScale<=1)return;viewerDragging=true;viewerStartX=event.clientX-viewerX;viewerStartY=event.clientY-viewerY;viewerImage.setPointerCapture(event.pointerId);});
 viewerImage.addEventListener('pointermove',function(event){if(!viewerDragging)return;viewerX=event.clientX-viewerStartX;viewerY=event.clientY-viewerStartY;viewerRender();});
 viewerImage.addEventListener('pointerup',function(){viewerDragging=false;});viewerImage.addEventListener('pointercancel',function(){viewerDragging=false;});
 document.addEventListener('keydown',function(event){if(!imageViewer.classList.contains('open'))return;if(event.key==='Escape')viewerClose();if(event.key==='+'||event.key==='='){viewerScale=Math.min(3,viewerScale+.25);viewerRender();}if(event.key==='-'){viewerScale=Math.max(.5,viewerScale-.25);viewerRender();}});
})();
