(function(){

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

 tools.querySelector('.inquiry-button').addEventListener('click', function () {
  this.title = '문의 팝업 준비 중';
 });

 var modelSwitcher=document.querySelector('.model-switcher');
 if(modelSwitcher){var modelButton=modelSwitcher.querySelector('button');modelButton.addEventListener('click',function(){var open=modelSwitcher.classList.toggle('open');modelButton.setAttribute('aria-expanded',open?'true':'false')});document.addEventListener('click',function(e){if(!modelSwitcher.contains(e.target)){modelSwitcher.classList.remove('open');modelButton.setAttribute('aria-expanded','false')}});document.addEventListener('keydown',function(e){if(e.key==='Escape'){modelSwitcher.classList.remove('open');modelButton.setAttribute('aria-expanded','false')}})}
 var installTrigger=document.querySelector('[data-open-install]');
 if(installTrigger){
  var installWrap=document.createElement('div');installWrap.className='parts-modal install-modal';installWrap.id='installModal';installWrap.setAttribute('aria-hidden','true');
  installWrap.innerHTML='<div class="parts-dialog install-dialog" role="dialog" aria-modal="true" aria-labelledby="installTitle"><header><div><h2 id="installTitle">설치방법</h2><p>시설 구조와 설치 공간에 맞는 대표적인 개폐 방식을 확인하십시오.</p></div><button type="button" class="parts-close install-close" aria-label="닫기">×</button></header><div class="install-overview"><img src="assets/img/install-guide/inst-overview.png" alt="가이드암과 가이드롤러 설치 개요"><div><strong>대표 설치 방식</strong><p>롤·업·다운 방식은 가이드암 또는 가이드롤러로 제품을 안내하고, 로프 예인 방식은 구동축에 감긴 로프로 피복재를 여닫습니다.</p></div></div><div class="parts-tabs install-tabs" role="tablist"><button type="button" class="active" data-install-tab="arm">가이드암 방식</button><button type="button" data-install-tab="roller">가이드롤러 방식</button><button type="button" data-install-tab="rope">로프 예인 방식</button></div><div class="install-content"><section class="install-panel active" data-install-panel="arm"><div class="install-method"><div class="install-image"><img src="assets/img/install-guide/inst-arm.png" alt="가이드암 조립 및 설치도"></div><div class="install-copy"><b>ROLL-UP-DOWN · GUIDE ARM</b><h3>가이드암을 사용하여 설치</h3><p>천장 곡부처럼 가이드암이 늘어나고 줄어들 공간이 충분한 곳에 사용합니다.</p><ol><li>규격이 다른 곧은 두 파이프를 겉대와 속대로 조립합니다.</li><li>최대 열림 상태에서도 속대가 겉대에서 빠지지 않게 길이를 확보합니다.</li><li>가이드암이 움직여도 전선이 당겨지지 않도록 충분한 여유를 둡니다.</li><li>볼트·너트를 단단히 조이고 완전 열림·닫힘 시험운전을 합니다.</li></ol></div></div><p class="install-danger">⚠ 개폐축이 피복재를 감고 떠 있을 때 가이드암이나 전동개폐기를 분리하지 마십시오.</p></section><section class="install-panel" data-install-panel="roller"><div class="install-method"><div class="install-image"><img src="assets/img/install-guide/inst-roller.png" alt="가이드롤러 결합 및 설치도"></div><div class="install-copy"><b>ROLL-UP-DOWN · GUIDE ROLLER</b><h3>가이드롤러를 사용하여 설치</h3><p>가이드암 설치 공간이 부족한 측면에서 궤도를 따라 제품이 이동하도록 설치합니다.</p><ol><li>가이드롤러를 제품에 결합하고 체결부를 단단히 조입니다.</li><li>휘지 않은 곧은 파이프로 수직 궤도를 설치합니다.</li><li>가이드롤러 궤도와 개폐축이 직각을 유지하게 합니다.</li><li>궤도를 견고하게 고정하고 피복재 처짐 방지용 보조밴드를 설치합니다.</li></ol></div></div><p class="install-info">ⓘ 궤도가 휘거나 개폐축과 직각이 아니면 가이드롤러가 원활하게 이동하지 않습니다.</p></section><section class="install-panel" data-install-panel="rope"><div class="install-method"><div class="install-image"><img src="assets/img/install-guide/inst-rope.png" alt="로프 예인 개폐방식 설치도"></div><div class="install-copy"><b>ROPE TRACTION</b><h3>로프 예인 방식으로 설치</h3><p>구동축에 로프를 감거나 풀어 주로 측면 피복재를 위아래로 이동시키는 방식입니다.</p><ol><li>골조 파이프에 베어링을 사용하여 구동축을 설치합니다.</li><li>피복재에 연결된 로프를 롤러(도르래)에 통과시킵니다.</li><li>로프를 구동축에 고정하고 전동개폐기로 축을 회전시킵니다.</li><li>감김·풀림 방향과 피복재 열림·닫힘을 시험운전으로 확인합니다.</li></ol></div></div><p class="install-info">ⓘ 무겁거나 두꺼운 피복재에는 용량이 큰 보온재용 전동개폐기를 사용하고 시공 전문가와 상담하십시오.</p></section></div><button type="button" class="mobile-close install-mobile-close">닫기</button></div>';
  installWrap.querySelector('.install-overview p').innerHTML='원예시설 형태는 매우 다양하며 설치방법도 다양합니다. 아래는 대표적인 방법의 <b>[예]</b>이며, 자세한 것은 원예시설 자동화 전문업체와 상담하여 현장에 알맞게 설치하십시오.';
  document.body.appendChild(installWrap);
  var installLastFocus;
  function openInstall(){installLastFocus=document.activeElement;installWrap.classList.add('show');installWrap.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');installWrap.querySelector('.install-close').focus()}
  function closeInstall(){installWrap.classList.remove('show');installWrap.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(installLastFocus)installLastFocus.focus()}
  installTrigger.addEventListener('click',function(e){e.preventDefault();openInstall()});
  installWrap.querySelectorAll('.install-close,.install-mobile-close').forEach(function(b){b.addEventListener('click',closeInstall)});
  installWrap.addEventListener('click',function(e){if(e.target===installWrap)closeInstall()});
  installWrap.querySelectorAll('[data-install-tab]').forEach(function(btn){btn.addEventListener('click',function(){installWrap.querySelectorAll('[data-install-tab]').forEach(function(x){x.classList.toggle('active',x===btn);x.setAttribute('aria-selected',x===btn?'true':'false')});installWrap.querySelectorAll('[data-install-panel]').forEach(function(panel){panel.classList.toggle('active',panel.dataset.installPanel===btn.dataset.installTab)})})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&installWrap.classList.contains('show'))closeInstall()});
 }
})();
