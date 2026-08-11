const irrisysFeatureDetails={
 '공급 기준 선택':()=>`<h2>공급 기준 선택</h2><p class="modal-lead">관수 목적과 현장 조건에 따라 <strong>유량</strong> 또는 <strong>시간</strong>을 공급 단위로 선택합니다.</p><div class="control-detail-grid"><section><b>유량 단위</b><p>구역마다 목표 공급량을 설정합니다. 필요한 물의 양을 수치로 관리하기 쉬워 재배 기록을 비교할 때 유용합니다.</p></section><section><b>시간 단위</b><p>구역마다 밸브가 열려 있을 시간을 설정합니다. 기존 관수 경험과 운전 시간을 기준으로 간편하게 설정할 수 있습니다.</p></section></div><p class="note">실제 공급량은 수압·배관 거리·관경·동시 사용 조건에 따라 달라질 수 있으므로 시험 관수 후 설정값을 확인하십시오.</p>`,
 '구역별 공급시간':()=>`<h2>구역별 공급시간</h2><p class="modal-lead">관수할 각 구역의 공급시간을 <strong>1~120분</strong> 범위에서 개별 설정합니다.</p><div class="control-detail-grid"><section><b>구역별 개별 설정</b><p>작물과 배관 조건에 맞춰 구역마다 서로 다른 관수시간을 지정할 수 있습니다.</p></section><section><b>순차 공급</b><p>설정된 구역을 순서대로 관수하여 제한된 원수량과 펌프 용량을 안정적으로 활용합니다.</p></section></div><p class="note">설정 후 시험 관수를 통해 구역별 토출량과 실제 관수 상태를 확인하십시오.</p>`,
 '구역별 액비 선택':()=>`<h2>구역별 액비 선택</h2><p class="modal-lead">각 관수 구역마다 사용할 액비 라인을 따로 선택할 수 있습니다.</p><div class="control-detail-grid"><section><b>${id==='1'?'A액·B액':'모델 구성 액비 라인'}</b><p>작물·생육 단계·재배 구역에 따라 필요한 액비만 선택하여 공급합니다.</p></section><section><b>구역별 독립 설정</b><p>같은 관수 장치에서도 구역별 액비 조합을 달리할 수 있어 서로 다른 재배 조건에 대응하기 쉽습니다.</p></section></div><p class="note">액비 조성 및 혼합 방법은 비료 제조사와 재배 전문가의 지침에 따라 결정하십시오.</p>`,
 '액비 주입 주기':()=>`<h2>액비 주입 주기</h2><p class="modal-lead">A액과 B액 전자밸브의 <strong>작동시간</strong>과 <strong>대기시간</strong>을 각각 설정합니다.</p><div class="valve-cycle"><span><b>작동</b><small>밸브 열림·액비 흡입</small></span><i>↔</i><span><b>대기</b><small>밸브 닫힘·다음 흡입 준비</small></span></div><p>정량밸브의 물리적 조절과 반복 시간을 함께 조정하면 액비 유입량을 현장 조건에 맞게 보정할 수 있습니다. 변경 후에는 실제 흡입 상태를 확인하십시오.</p>`,
 'A·B 액비 독립 주입':()=>`<h2>A·B 액비 독립 주입</h2><p class="modal-lead">관수 구역별로 A액과 B액의 사용 여부를 각각 선택합니다.</p><div class="control-detail-grid"><section><b>액비 사용</b><p>선택한 액비 밸브가 설정된 작동·대기시간에 따라 운전됩니다.</p></section><section><b>원수만 공급</b><p>A액과 B액을 모두 해제한 구역에는 원수만 공급할 수 있습니다.</p></section></div><p>작물과 생육 조건이 다른 구역에 필요한 액비만 선택하여 공급할 수 있습니다.</p>`,
 '강우 누적 관수중지':()=>`<h2>강우 누적 관수중지</h2><p class="modal-lead">레인센서가 감지한 <strong>강우 누적시간</strong>이 설정값에 도달하면 관수를 중지합니다.</p><div class="rain-rule"><b>전일 18시부터 누적 측정</b><span>설정 누적시간 도달</span><strong>오늘 관수 중지</strong></div><p>설명서 기준으로 전일 18시부터 강우 감지시간을 누적하며 최대 300분까지 설정할 수 있습니다. 사용하지 않을 때는 <strong>OFF</strong>로 설정합니다.</p><p class="note">센서 설치 위치, 오염 및 배수 상태에 따라 감지 결과가 달라질 수 있으므로 정기적으로 점검하십시오.</p>`,
 '구역 순차 관수':()=>`<h2>구역 순차 관수</h2><p class="modal-lead">재배지를 여러 구역으로 나누어 한 구역씩 순서대로 공급합니다.</p><img src="assets/img/irrisys-piping.png" alt="이리시스 구역 순차 관수 배관 예"><p>동시 관수 시 물량이나 펌프 용량이 부족한 현장에서 각 구역의 관수 시간을 안정적으로 확보할 수 있습니다. 실제 구역 수와 밸브 구성은 모델 사양을 확인하십시오.</p>`,
 '실시간 운전 확인':()=>`<h2>실시간 운전 확인</h2><img src="assets/img/irrisys-monitor-compare.png" alt="이리시스 운전 모니터 화면"><p>현재 공급 구역, 설정시간과 진행시간, 펌프 및 액비밸브 작동 상태를 한 화면에서 확인할 수 있어 운전 상태와 이상 여부를 빠르게 파악할 수 있습니다.</p>`,
 '관수 주기·시각 설정':()=>`<h2>관수 주기와 시작 시각 설정</h2><p class="modal-lead">관수 주기는 최대 15일, 하루 관수는 최대 12회까지 설정할 수 있습니다.</p><img src="assets/img/irrisys-${id}-settings.png" alt="이리시스 관수 설정 화면"><p>각 회차의 시작 시각을 24시간제로 설정합니다. 공급 중 다음 회차의 시작 시각이 되면 해당 회차는 실행되지 않으므로 전체 운전시간을 함께 확인하십시오.</p>`,
 '최근 24회 기록':()=>`<h2>최근 24회 공급 기록</h2><img src="assets/img/irrisys-records.png" alt="최근 24회 관수 기록 화면"><p>최근 관수의 날짜, 종료시간과 급수구역 수를 확인하여 관수 누락, 반복 공급 또는 운전 이상 여부를 점검할 수 있습니다.</p>`
 ,'EC 측정·표시':()=>`<h2>EC 측정·표시</h2><p class="modal-lead">이리시스 II의 EC 센서는 관수 중 EC 값을 <strong>측정하고 화면에 표시하여 상태를 확인</strong>하는 용도입니다.</p><div class="control-detail-grid"><section><b>가능한 기능</b><p>현재 EC 측정값을 확인하고 액비 공급상태와 농도 변화를 판단하는 참고자료로 활용할 수 있습니다.</p></section><section><b>지원하지 않는 기능</b><p>사용자가 목표 EC를 설정하면 장비가 액비 흡입량을 자동으로 늘리거나 줄이는 <strong>EC 피드백 자동제어 기능은 아닙니다.</strong></p></section></div><p class="note"><b>중요:</b> 표시된 EC 값을 확인한 뒤 액비 설정과 정량밸브 조정은 사용자가 현장 조건에 맞게 판단해야 합니다. EC 측정값만으로 자동 보정되거나 정밀 정량제어되는 것으로 이해해서는 안 됩니다.</p>`
 ,'팜시스 연결':()=>`<h2>팜시스 연결</h2><p class="modal-lead">이리시스 I과 이리시스 II는 모두 외부 팜시스 시스템과 연결할 수 있습니다.</p><div class="control-detail-grid"><section><b>공통 적용</b><p>팜시스 연결은 이리시스 II만의 전용 기능이 아니며 두 모델 모두 지원합니다.</p></section><section><b>적용 전 확인</b><p>연결되는 팜시스 모델과 주문 구성에 따라 실제 운전 신호, 접속 방식 및 사용할 수 있는 기능 범위가 달라질 수 있습니다.</p></section></div><p class="note">현재 제공된 사양표에는 구체적인 통신 방식과 원격 기능 범위가 표시되어 있지 않으므로 특정 팜시스 모델명이나 데이터 연동 기능을 확정하여 표기하지 않습니다.</p>`
};
const previousIrrisysContent=content;
content=function(k){
 if(k.startsWith('feature-')){
  const feature=x.features[+k.split('-')[1]];
  const render=feature&&irrisysFeatureDetails[feature[0]];
  if(render)return render();
 }
 return previousIrrisysContent(k);
};
document.addEventListener('click',function(event){
 const trigger=event.target.closest&&event.target.closest('[data-modal^="feature-"]');
 if(!trigger)return;
 const feature=x.features[+trigger.dataset.modal.split('-')[1]];
 if(!feature)return;
 setTimeout(function(){
  const modalBox=document.querySelector('#modal');
  if(!modalBox||modalBox.querySelector('.feature-benefit-summary'))return;
  modalBox.insertAdjacentHTML('beforeend','<div class="feature-benefit-summary"><strong>이 기능의 운용 장점</strong><p>'+(feature[2]||feature[1])+'</p></div>');
 },0);
});
