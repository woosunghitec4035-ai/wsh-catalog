(function(){
 var data={
  manual:{title:'현장 수동운전',lead:'설정 메뉴 없이 각 개폐라인의 스위치를 현장에서 바로 조작합니다.',visual:['작동할 라인 선택','3단 스위치 조작','전동개폐기 직접 운전'],body:'<b>각 라인의 스위치와 출력단자가 일대일로 연결되는 직접 수동운전 방식입니다.</b> RMP-508은 8개, RMP-5012는 12개의 개별라인 스위치를 사용하며 각 출력라인에는 전동개폐기 1대를 연결합니다.<div class="feature-benefit-note"><strong>운용 장점</strong>자동 설정이나 센서 없이 필요한 개폐기만 즉시 운전할 수 있어 구성이 단순하고 초기 도입 부담이 적습니다.</div><p class="feature-option-note">※ 설명서 기준 각 라인 출력은 50W입니다. 연결 제품의 용량과 컨트롤러 모델을 반드시 확인하십시오.</p>'},
  individual:{title:'개별작동·개별퓨즈',lead:'스위치·작동 LED·퓨즈가 출력라인별로 나뉘어 있습니다.',visual:['개별 스위치','라인별 LED','250V 4A 개별퓨즈'],body:'원하는 환기창만 골라 열거나 닫을 수 있으며 각 라인의 출력부는 개별퓨즈로 보호됩니다. 과부하나 합선으로 퓨즈가 끊어지면 원인을 먼저 제거한 뒤 같은 규격의 30mm 유리관 퓨즈로 교체해야 합니다.<div class="feature-benefit-note"><strong>운용 장점</strong>특정 라인의 이상을 다른 라인과 구분해 점검하기 쉽고, 정상 라인은 계속 개별 운전할 수 있습니다.</div><p class="feature-option-note">※ 철사·구리선으로 퓨즈를 대신하거나 정격보다 큰 퓨즈를 사용하지 마십시오.</p>'},
  weatherproof:{title:'온실용 방우 타입',lead:'습기와 물방울이 발생하기 쉬운 온실 환경을 고려한 케이스입니다.',visual:['온실 환경','케이스 보호','안정적인 현장 사용'],body:'시설 내부의 습기와 물방울을 고려한 케이스 구조를 적용했습니다. 다만 완전 방수 제품은 아니므로 빗물이나 관수수가 직접 닿지 않는 위치에 설치하고 배선 인입부를 올바르게 마감해야 합니다.<div class="feature-benefit-note"><strong>운용 장점</strong>온실 현장에 맞는 설치성과 내구성을 확보하는 데 도움이 됩니다.</div>'},
  threeway:{title:'열림·정지·닫힘 3단 운전',lead:'스위치의 위·가운데·아래 위치가 각각 열림·정지·닫힘에 대응합니다.',visualMode:'threeway',visualHtml:'<div class="rmp-threeway-guide"><figure><img src="assets/img/rmp-threeway-switch-guide.png" alt="RMP 개별라인 3단 스위치 운전 예시"></figure><div class="rmp-threeway-positions"><section class="open"><span><i></i></span><b>위 · 상단</b><strong>열림 작동</strong><small>적색 LED 점등</small></section><section class="stop"><span><i></i></span><b>가운데 · 중립</b><strong>정지</strong><small>LED 꺼짐</small></section><section class="close"><span><i></i></span><b>아래 · 하단</b><strong>닫힘 작동</strong><small>녹색 LED 점등</small></section></div></div>',body:'<div class="rmp-threeway-body-grid"><section><b>스위치 위치를 그대로 읽습니다</b><p>상단은 열림, 가운데 중립은 정지, 하단은 닫힘입니다. 상단과 하단에서는 출력 극성이 반대로 바뀌어 회전방향을 전환합니다.</p></section><section><b>실제 방향이 반대라면</b><p>전원을 차단한 뒤 해당 출력단자에 연결된 전동개폐기 전선 두 가닥을 서로 바꾸어 연결합니다.</p></section></div><div class="rmp-switch-safety"><b>안전한 방향 전환</b><span>열림</span><i>›</i><strong>중립 정지</strong><i>›</i><span>닫힘</span><p>운전 중 곧바로 역방향으로 급전환하면 과부하로 퓨즈가 끊어지거나 모터가 손상될 수 있습니다.</p></div><div class="feature-benefit-note"><strong>운용 장점</strong>복잡한 메뉴 없이 현장에서 개폐 상태를 보면서 필요한 위치까지 직접 조절할 수 있습니다.</div>'},
  led:{title:'운전상태 LED 표시',lead:'상단 열림은 적색, 하단 닫힘은 녹색으로 현재 출력 방향을 표시합니다.',visual:['적색 LED · 열림','중립 · LED 꺼짐','녹색 LED · 닫힘'],body:'개별라인 스위치를 상단에 두면 적색 LED, 하단에 두면 녹색 LED가 점등됩니다. 중립 정지에서는 출력이 멈추고 LED도 꺼집니다. 여러 라인을 점검할 때 스위치 위치와 실제 출력상태를 함께 확인할 수 있습니다.<div class="feature-benefit-note"><strong>운용 장점</strong>현재 작동 방향과 정지 상태를 색상으로 빠르게 구분해 오조작과 점검 시간을 줄이는 데 도움이 됩니다.</div>'},
  dc24:{title:'전동개폐기용 DC24V 출력',lead:'AC220V 전원을 전동개폐기에 필요한 DC24V 출력으로 공급합니다.',visual:['AC220V 입력','컨트롤러 변환·제어','DC24V 개폐기 출력'],body:'롤업스타 전동개폐기 운전에 맞는 직류 출력을 각 라인으로 공급합니다. 사용할 개폐기의 소비전력과 수량에 따라 50W 또는 100W 모델과 연결 라인 수를 선택해야 합니다.<div class="feature-benefit-note"><strong>선택 장점</strong>개폐기 용량과 시설 규모에 맞춰 필요한 출력과 라인 수를 경제적으로 구성할 수 있습니다.</div>'},
  'central-link':{title:'센트럴 컨트롤러 접속작동',lead:'외부의 열림·닫힘 릴레이 신호를 받아 여러 환기창을 중앙에서 운전합니다.',visual:['센트럴 컨트롤러','D시리즈','전동개폐기'],visualHtml:'<div class="feature-product-node"><div class="feature-product-image"><img src="assets/img/ctrl-svc.jpg" alt="센트럴 컨트롤러 예시"></div><b>센트럴 컨트롤러</b><small>열림·닫힘 릴레이 신호 출력</small></div><i><small>신호 출력</small>›</i><div class="feature-product-node"><div class="feature-product-image"><img src="assets/img/ctrl-d-plastic-hq.png" alt="D시리즈 컨트롤러"></div><b>D시리즈</b><small>신호 수신 및 개폐 회로 제어</small></div><i><small>전원 제어</small>›</i><div class="feature-product-node"><div class="feature-product-image"><img src="assets/img/wsm-4035-hq.png" alt="롤업스타 전동개폐기"></div><b>롤업스타 전동개폐기</b><small>환기창을 실제로 열고 닫음</small></div>',body:'<b>센트럴 컨트롤러가 전동개폐기를 직접 구동하는 방식이 아닙니다.</b> 센트럴 컨트롤러가 열림·닫힘 릴레이 신호를 D시리즈에 전달하면, D시리즈의 마그네틱 스위치가 실제 DC24V 개폐기 출력 회로를 제어합니다.<div class="feature-central-detail"><span><strong>1. 신호 출력</strong>센트럴 컨트롤러가 열림·닫힘 릴레이 신호를 보냅니다.</span><span><strong>2. 신호 수신</strong>D시리즈가 신호를 받아 마그네틱 스위치를 작동합니다.</span><span><strong>3. 개폐기 운전</strong>D시리즈가 연결된 환기창을 열거나 닫습니다.</span></div><div class="feature-benefit-note"><strong>확장 장점</strong>처음에는 자체 스위치로 개별·전체 수동운전을 사용하고, 필요할 때 센트럴 또는 원격제어 장치의 릴레이 신호를 연결하여 단계적으로 확장할 수 있습니다.</div><p class="feature-option-note">※ 연결 가능 모델: SVC·RVC·WFVC·WFTC·TTC / 센트럴 포트 연결 코드는 별매입니다.</p>'},
  'manual-difference':{title:'수동 컨트롤러와의 차이',lead:'현재 필요한 현장 운전뿐 아니라 향후 중앙제어 확장 계획까지 고려해 선택합니다.',visual:['수동 컨트롤러','D시리즈'],visualHtml:'<span>수동 컨트롤러<small>직접 운전 중심</small></span><em>VS</em><span>D시리즈<small>수동운전 + 중앙 신호 연동</small></span>',visualMode:'comparison',body:'<div class="feature-controller-compare"><section><b>수동 컨트롤러</b><strong>현장 직접 운전</strong><p>각 개폐기의 스위치를 사람이 직접 조작합니다. 구성이 단순하고 초기 구입 비용을 우선하는 현장에 적합합니다.</p><small>외부 릴레이 신호 연동 기능 없음</small></section><section class="recommended"><b>D시리즈</b><strong>현장 수동운전 + 중앙 신호 연동</strong><p>자체 스위치로 개별·전체 운전이 가능하며, 외부 열림·닫힘 릴레이 신호를 받아 동일한 제어조건으로 여러 전동개폐기를 증설·운전할 수 있습니다.</p><small>센트럴·원격제어 장치 연동 및 단계적 증설 가능</small></section></div><div class="feature-benefit-note"><strong>선택 기준</strong>단순 직접 운전만 필요하면 수동형, 현재 수동운전과 향후 중앙제어·개폐기 증설까지 고려하면 D시리즈가 적합합니다.</div>'},
  'd-individual':{title:'개별작동·개별퓨즈',lead:'자동 연동과 별개로 각 라인을 직접 운전하고 독립적으로 보호합니다.',visual:['개별 스위치','개별 퓨즈','라인별 독립 운전'],body:'센트럴 연동을 사용하더라도 현장에서 각 개폐기를 따로 열고 닫을 수 있습니다. 특정 라인의 퓨즈가 차단되어도 다른 정상 라인의 운전을 유지하고 문제 위치를 쉽게 찾을 수 있습니다.<div class="feature-benefit-note"><strong>운용 장점</strong>중앙운전과 현장 개별조작을 함께 사용할 수 있으며, 이상 발생 시 해당 라인의 퓨즈가 회로를 차단해 다른 정상 라인의 운전을 유지하고 점검 범위를 빠르게 확인하는 데 도움이 됩니다.</div>'},
  'd-weatherproof':{title:'온실용 방우 타입',lead:'습기와 물방울이 발생하기 쉬운 온실 환경을 고려한 케이스입니다.',visual:['온실 환경','케이스 보호','제어부 운용'],body:'습기와 물방울이 발생하기 쉬운 온실 환경을 고려해 내부 제어부로 물이 유입되는 위험을 줄이는 케이스 구조를 적용했습니다. 완전 방수 제품은 아니므로 직접적인 빗물·관수수를 피하고 배선 인입부를 올바르게 시공해야 합니다.<div class="feature-benefit-note"><strong>운용 장점</strong>습기와 물방울로부터 내부 전기·제어 부품을 보호하여 온실에서 보다 안정적으로 운전하고 고장 위험을 줄이는 데 도움이 됩니다.</div>'},
  'all-control':{title:'전체 일괄운전',lead:'여러 개폐기를 한 번의 조작으로 함께 열거나 닫습니다.',visual:['전체 열림','여러 라인 동시 운전','전체 닫힘'],body:'개별 스위치를 하나씩 조작하지 않고 연결된 여러 환기창을 한 번에 움직일 수 있습니다. 시설 규모가 커질수록 반복 조작을 줄이는 효과가 커지며, 필요하면 개별운전으로 특정 구역만 따로 조정할 수도 있습니다.<div class="feature-benefit-note"><strong>증설 장점</strong>개폐기 수가 늘어나도 전체운전으로 작업시간을 줄이고 관리 편의성을 유지할 수 있습니다.</div>'},
  'd-dc24':{title:'전동개폐기용 DC24V 출력',lead:'AC220V 입력을 받아 각 전동개폐기에 DC24V 구동 출력을 공급합니다.',visual:['AC220V 입력','D시리즈 제어','DC24V 다중 출력'],body:'개폐기 소비전력과 전체 수량에 따라 50W·100W 출력 및 2대부터 24대까지의 모델을 선택할 수 있습니다. 증설 계획이 있다면 현재 수량뿐 아니라 앞으로 필요한 출력 라인도 함께 고려하는 것이 좋습니다.<div class="feature-benefit-note"><strong>선택 장점</strong>소규모 시설부터 다수 개폐기 시설까지 용량과 연결 대수에 맞춰 단계적으로 구성할 수 있습니다.</div>'}
  ,'motor-expansion':{title:'전동개폐기 수량 증설',lead:'센트럴의 제어조건은 그대로 유지하면서 함께 움직이는 전동개폐기 수량을 확장합니다.',visual:['센트럴 제어 신호','D시리즈 출력 확장','여러 전동개폐기 운전'],body:'열림·닫힘 릴레이 신호를 출력하는 센트럴 컨트롤러의 제어 신호를 D시리즈가 받아, D시리즈에 연결된 여러 전동개폐기를 함께 운전합니다. 시설 확대나 환기창 추가 시 필요한 연결 대수와 출력용량에 맞는 D시리즈를 구성하여 개폐기 수량을 늘릴 수 있습니다.<div class="feature-expansion-clarity"><span><strong>늘어나는 것</strong>동일한 신호로 함께 운전하는 전동개폐기 수량</span><span><strong>늘어나지 않는 것</strong>서로 다른 조건으로 움직이는 독립 제어채널</span></div><div class="feature-benefit-note"><strong>증설 장점</strong>자동제어 조건을 새로 구성하지 않고 필요한 환기창 수량에 맞춰 구동 출력을 확장하며, 현장에서는 개별·전체 수동운전도 사용할 수 있습니다.</div><p class="feature-option-note">※ 연결 가능 모델: SVC·RVC·WFVC·WFTC·TTC / 센트럴 포트 연결 코드는 별매입니다.</p>'}
 };
 var relayCompatibilityNote='※ 자사 연동 예: SVC·RVC·WFVC·WFTC·TTC. 다른 제어장치도 열림·닫힘 릴레이 접점 신호와 배선 조건이 맞으면 연동할 수 있습니다. 외부 장치 연결 전 신호·배선 조건을 확인해야 하며, 센트럴 포트 연결 코드는 별매입니다.';
 ['central-link','motor-expansion'].forEach(function(key){
  data[key].body=data[key].body.replace('※ 연결 가능 모델: SVC·RVC·WFVC·WFTC·TTC / 센트럴 포트 연결 코드는 별매입니다.',relayCompatibilityNote);
 });
 var dialog=document.querySelector('.basic-feature-dialog');
 if(!dialog)return;
 document.querySelectorAll('[data-basic-feature]').forEach(function(button){
  button.addEventListener('click',function(){
   var item=data[button.dataset.basicFeature];if(!item)return;
   dialog.querySelector('.feature-dialog-head h2').textContent=item.title;
   dialog.querySelector('.feature-dialog-head p').textContent=item.lead;
   var visual=dialog.querySelector('.feature-dialog-visual');
   visual.classList.toggle('is-product-flow',!!item.visualHtml&&item.visualMode!=='comparison'&&item.visualMode!=='threeway');
   visual.classList.toggle('is-threeway',item.visualMode==='threeway');
   visual.classList.toggle('is-comparison',item.visualMode==='comparison');
   visual.innerHTML=item.visualHtml||item.visual.map(function(value,index){return(index?'<i>›</i>':'')+'<span>'+value+'</span>';}).join('');
   if(item.visualMode==='threeway'){
    var switchGuideImage=visual.querySelector('img');
    if(switchGuideImage) switchGuideImage.src='assets/img/rmp-threeway-switch-panel.png';
   }
   dialog.querySelector('.feature-dialog-body').innerHTML=item.body;
   if(item.visualMode==='threeway'){
    var directionLabels=dialog.querySelectorAll('.rmp-switch-safety>span');
    if(directionLabels[0]) directionLabels[0].textContent='열림 작동';
    if(directionLabels[1]) directionLabels[1].textContent='닫힘 작동';
   }
   dialog.showModal();
  });
 });
 dialog.addEventListener('click',function(event){if(event.target===dialog)dialog.close();});
})();
