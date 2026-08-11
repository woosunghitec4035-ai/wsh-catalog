(function () {
  'use strict';

  var title = document.querySelector('.product-title h1');
  if (!title) return;

  var model = title.textContent.trim();
  var notes = {
    'WSM-4035': { limit: '35회전', limitType: '조정 노브 + 안전커버', arm: '외관 Ø25.4 / 내관 Ø19', pin: 'Ø19' },
    'WSM-6035': { limit: '35회전', limitType: '조정 노브 + 안전커버', arm: '외관 Ø32 / 내관 Ø25.4', pin: '기본 Ø32 · 주문 시 Ø19 변경 가능' },
    'WSM-2475': { limit: '75회전', limitType: '드라이버 조정 다이얼 + 실리콘 마개', arm: '외관 Ø25.4 / 내관 Ø19', pin: 'Ø19' },
    'WSM-2475H': { limit: '75회전', limitType: '드라이버 조정 다이얼 + 실리콘 마개', arm: '외관 Ø32 / 내관 Ø25.4', pin: '기본 Ø32 · 주문 시 Ø19 변경 가능' }
  };
  var info = notes[model];
  if (!info) return;

  var spec = document.querySelector('.spec-table');
  if (spec && !spec.querySelector('.manual-use-note')) {
    var useNote = document.createElement('div');
    useNote.className = 'manual-use-note';
    useNote.innerHTML = '<strong>안전 사용시간</strong><span>표준 부하 연속 30분 이내</span><span>최대 허용 부하 연속 5분 이내</span><small>최대 성능은 연속 운전 기준이 아닌 일시적인 허용 한계입니다.</small>';
    spec.appendChild(useNote);
  }

  var limitRange = document.querySelector('#limitModal .limit-range');
  if (limitRange && !document.querySelector('#limitModal .manual-limit-note')) {
    var limitNote = document.createElement('div');
    limitNote.className = 'manual-limit-note';
    limitNote.innerHTML = '<div><strong>' + model + ' 설정 범위</strong><b>최대 ' + info.limit + '</b><span>' + info.limitType + '</span></div>' +
      '<p><b>' + info.limit + '</b>은 설정 가능한 개폐 범위를 뜻하며, 모터의 힘(토크)을 뜻하지 않습니다.</p>' +
      '<p><strong>예상 개폐 길이 참고</strong> 개폐축 1회전당 처음 감기는 폭은 대략 <b>개폐축 지름 × 3.14</b>입니다. 피복재가 감기면서 축 지름이 커지므로 실제 길이는 현장 조건에 따라 달라집니다.</p>';
    limitRange.insertAdjacentElement('afterend', limitNote);
  }

  var includedPanel = document.getElementById('includedPanel');
  if (includedPanel) {
    Array.prototype.forEach.call(includedPanel.querySelectorAll('li'), function (item) {
      if (item.textContent.indexOf('가이드 암 핀') === -1 || item.querySelector('.pin-size-badge')) return;
      var badge = document.createElement('span');
      badge.className = 'pin-size-badge';
      badge.textContent = info.pin;
      item.appendChild(badge);
    });
  }
  if (includedPanel && !includedPanel.querySelector('.manual-parts-note')) {
    var partsNote = document.createElement('div');
    partsNote.className = 'manual-parts-note';
    partsNote.innerHTML = '<strong>' + model + ' 가이드 암 규격</strong><span>' + info.arm + '</span><small>출력축 커플링과 가이드 암 부품은 같은 모양이어도 모델별 규격이 다를 수 있으므로 주문 시 모델명을 함께 확인하십시오.</small>';
    includedPanel.appendChild(partsNote);
  }
})();
