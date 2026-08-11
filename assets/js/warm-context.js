(function () {
  'use strict';
  if (new URLSearchParams(location.search).get('usage') !== 'warm') return;

  document.body.classList.add('warm-context');

  var modelLink = document.querySelector('.parts-side a[href*="rollupstar-select.html"]');
  if (modelLink) {
    modelLink.href = 'warm-opener.html#models';
    modelLink.innerHTML = '<span>01</span> 모델 선택 <b>›</b>';
  }

  var back = document.querySelector('.parts-actions a');
  if (back) back.href = 'warm-opener.html';

  document.querySelectorAll('.parts-side a[href="rollupstar-parts.html"]').forEach(function (a) {
    a.href = 'rollupstar-parts.html?usage=warm';
  });
  document.querySelectorAll('.parts-side a[href="rollupstar-options.html"]').forEach(function (a) {
    a.href = 'rollupstar-options.html?usage=warm';
  });
  document.querySelectorAll('.parts-side a[href="rollupstar-installations.html"]').forEach(function (a) {
    a.href = 'rollupstar-installations.html?usage=warm';
  });

  var crumb = document.querySelector('.parts-crumb');
  if (crumb) {
    var current = crumb.querySelector('strong');
    crumb.innerHTML = '보온재 개폐 시스템　›　롤업스타　›　' + (current ? current.outerHTML : '');
  }

  var aboutTitle = document.querySelector('.parts-about h3');
  if (aboutTitle) aboutTitle.textContent = '보온재용 롤업스타란?';
  var aboutCopy = document.querySelectorAll('.parts-about p');
  if (aboutCopy[0]) aboutCopy[0].textContent = '축사용 타포린과 시설원예용 보온피복재를 말아 올리고 내리는 DC24V 전동개폐기입니다.';
  if (aboutCopy[1]) aboutCopy[1].textContent = '피복재의 중량과 설치 방식에 맞는 모델과 부품을 선택해야 합니다.';

  var gallery = document.querySelector('.installation-gallery');
  if (gallery) {
    document.title = '보온재용 롤업스타 설치 예시';
    gallery.setAttribute('aria-label', '보온재 개폐 시스템 설치 예시');
    gallery.innerHTML =
      '<figure><img src="assets/img/warm-install-livestock-tarpaulin.png" alt="축사 측면 타포린 개폐 롤업다운 방식 설치 예시"><figcaption><b>01</b><span>축사 측면 타포린 개폐<br><small>롤·업·다운 방식</small></span></figcaption></figure>' +
      '<figure><img src="assets/img/warm-install-horticulture-rollup.png" alt="시설원예 측면 보온재 개폐 롤업다운 방식 설치 예시"><figcaption><b>02</b><span>시설원예 측면 보온재 개폐<br><small>롤·업·다운 방식</small></span></figcaption></figure>' +
      '<figure><img src="assets/img/warm-install-horticulture-rope.png" alt="시설원예 측면 보온재 개폐 로프 수직예인 방식 설치 예시"><figcaption><b>03</b><span>시설원예 측면 보온재 개폐<br><small>로프 수직예인 방식</small></span></figcaption></figure>';
  }

  /* 보온재 설치 사진은 제공된 현장 원본 순서로 구성합니다. */
  var warmInstallationFigures = gallery ? gallery.querySelectorAll('figure') : [];
  var warmInstallationData = [
    {
      image: 'assets/img/thermal-field-rollup.png',
      alt: '시설원예 측면 보온커튼 롤업 방식 설치 예시',
      title: '측면 보온커튼 개폐',
      method: '롤업 방식'
    },
    {
      image: 'assets/img/thermal-field-tarpaulin-rollup.png',
      alt: '축사 측면 방풍 타포린 롤업 방식 설치 예시',
      title: '축사 측면 방풍 타포린 개폐',
      method: '롤업 방식'
    },
    {
      image: 'assets/img/thermal-field-rope-tow.png',
      alt: '시설원예 측면 보온커튼 로프 예인 방식 설치 예시',
      title: '측면 보온커튼 개폐',
      method: '로프 예인 방식'
    }
  ];
  warmInstallationFigures.forEach(function (figure, index) {
    var item = warmInstallationData[index];
    if (!item) return;
    var image = figure.querySelector('img');
    var caption = figure.querySelector('figcaption span');
    if (image) {
      image.src = item.image;
      image.alt = item.alt;
    }
    if (caption) caption.innerHTML = item.title + '<br><small>' + item.method + '</small>';
  });

  var description = document.querySelector('.parts-desc');
  if (description && gallery) description.textContent = '축사와 시설원예 현장에서 적용하는 보온재용 롤업스타의 대표 설치 방식을 확인하십시오.';
  var notice = document.querySelector('.installation-notice');
  if (notice && gallery) notice.textContent = '아래 사진은 대표적인 설치 예시입니다. 피복재의 재질·중량, 시설 구조와 현장 부하에 따라 설치 방식이 달라질 수 있으므로 전문 설치업체의 검토 후 적용하십시오.';

  var includedCards = document.querySelectorAll('#includedPanel .included-card');
  function addWarmSize(card, text) {
    if (!card || card.querySelector('.warm-part-size')) return;
    var heading = card.querySelector('.part-copy h3');
    if (!heading) return;
    var badge = document.createElement('span');
    badge.className = 'warm-part-size';
    badge.textContent = text;
    heading.insertAdjacentElement('afterend', badge);
  }
  addWarmSize(includedCards[0], '개폐축 외경 Ø32용');
  addWarmSize(includedCards[1], '가이드 암 외경 Ø32용');
  addWarmSize(includedCards[3], '가이드 암 핀 · Ø25.4 파이프용');
  addWarmSize(includedCards[4], '선회축 고정구 · Ø32용');

  if (includedCards.length && !document.querySelector('.warm-parts-compatibility')) {
    var compatibility = document.createElement('p');
    compatibility.className = 'warm-parts-compatibility';
    compatibility.innerHTML = '<b>피복재용 부품 규격</b> 비닐용 부품과 외형이 비슷해도 규격이 다르므로 주문 시 피복재용 롤업스타 모델명을 함께 확인하십시오.';
    document.getElementById('includedPanel').appendChild(compatibility);
  }

  var rollerSection = document.querySelector('.roller-section');
  if (rollerSection) {
    rollerSection.classList.add('warm-roller-section');
    rollerSection.innerHTML =
      '<div class="option-section-title"><span>COVERING MATERIAL GUIDE ROLLER</span><h2>피복재용 가이드롤러(48Ø)</h2><p>다겹 보온재처럼 하중이 큰 피복재에는 비닐용 가이드롤러가 아닌 48Ø 피복재 전용 가이드롤러를 사용합니다.</p></div>' +
      '<div class="roller-benefits"><span>다겹 보온재 권장</span><span>48Ø 궤도 규격</span><span>궤도 높이 4m 이내</span></div>' +
      '<div class="warm-roller-grid">' +
       '<article><div class="warm-roller-photo"><img src="assets/img/warm-guide-roller-wgr-4824ffb.png" alt="WGR-4824FFB 피복재용 가이드롤러"><small>고화질 이미지 교체 예정</small></div><div class="warm-roller-copy"><h3>WGR-4824FFB</h3><p>철 볼베어링 적용형</p><dl><div><dt>용도(권장)</dt><dd>다겹 보온재</dd></div><div><dt>궤도 규격</dt><dd>48Ø</dd></div><div><dt>궤도 높이</dt><dd>4m 이내</dd></div><div><dt>프레임 재질</dt><dd>철(아연도금)</dd></div><div><dt>바퀴 형식</dt><dd>철 볼베어링</dd></div><div><dt>제품 높이</dt><dd>240mm</dd></div><div><dt>무게</dt><dd>4.1kg</dd></div></dl></div></article>' +
       '<article><div class="warm-roller-photo"><img src="assets/img/warm-guide-roller-wgr-4824fsb.png" alt="WGR-4824FSB 피복재용 가이드롤러"><small>고화질 이미지 교체 예정</small></div><div class="warm-roller-copy"><h3>WGR-4824FSB</h3><p>스테인리스 볼베어링 적용형</p><dl><div><dt>용도(권장)</dt><dd>다겹 보온재</dd></div><div><dt>궤도 규격</dt><dd>48Ø</dd></div><div><dt>궤도 높이</dt><dd>4m 이내</dd></div><div><dt>프레임 재질</dt><dd>철(아연도금)</dd></div><div><dt>바퀴 형식</dt><dd>스테인리스 볼베어링</dd></div><div><dt>제품 높이</dt><dd>240mm</dd></div><div><dt>무게</dt><dd>4.1kg</dd></div></dl></div></article>' +
      '</div>' +
      '<p class="roller-note"><b>선정 안내</b> 두 모델의 주요 차이는 볼베어링 재질입니다. 설치 환경과 내식성 요구 조건을 확인한 후 선택하십시오.</p>';
  }
})();
