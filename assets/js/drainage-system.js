(function(){
 var dialog=document.getElementById('measureDialog'),title=document.getElementById('measureTitle'),intro=document.getElementById('measureIntro'),eyebrow=document.getElementById('measureEyebrow'),body=document.getElementById('measureBody');
 function details(items){return '<div class="measure-detail-grid">'+items.map(function(x){return '<article><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>';}).join('')+'</div>';}
 function specs(items){return '<div class="measure-spec-list">'+items.map(function(x){return '<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>';}).join('')+'</div>';}
 var systems={
  drainage:{eyebrow:'DRAINAGE · EPSR-613',title:'수경재배 배액 측정시스템',intro:'배액의 EC·pH·배액량을 실시간으로 측정합니다.',benefit:'공급한 양액이 작물에 적절했는지 배액 데이터로 확인하여 다음 양액의 농도와 공급량을 조절하는 근거로 활용할 수 있습니다.',html:details([
   ['측정 목적','배출되는 배액의 EC·pH·배액량을 측정하여 현재 공급 농도와 공급량의 적정성을 확인합니다.'],
   ['활용 방법','측정 결과를 다음 관수 시점과 양액 농도·공급량 설정에 참고할 수 있습니다.'],
   ['주요 측정 항목','배액 EC, 배액 pH, 배액량을 하나의 시스템에서 확인합니다.'],
   ['시스템 구성','센서노드와 배액 수집·측정부를 일체형 프레임에 구성했습니다.']
  ])+'<div class="measure-media-grid"><img src="assets/img/drainage-node-new.png" alt="배액 센서노드 정면"><img src="assets/img/drainage-node-side-display.png" alt="배액 센서노드 측면"></div><h3>주요 측정 범위</h3>'+specs([['모델','EPSR-613'],['EC','0~14 dS/m'],['pH','0~14 pH'],['배액량','0~2 L/min']])},
  substrate:{eyebrow:'INTEGRATED SUBSTRATE · GAS-515',title:'배지 통합 측정시스템',intro:'배액 정보와 배지의 함수율·온도를 통합 측정합니다.',benefit:'배액과 배지 상태를 함께 확인하여 근권부의 수분 변화를 파악하고 관수 시점과 양액 공급량을 정밀하게 결정할 수 있습니다.',html:details([
   ['통합 측정','배액 EC·pH·배액량과 배지 함수율·온도를 한 시스템에서 종합적으로 확인합니다.'],
   ['함수율 측정','표본 배지의 무게 변화를 이용하여 배지의 수분 상태를 측정합니다.'],
   ['정밀 양액 관리','배액과 배지 데이터를 함께 분석하여 과습·건조 위험을 줄이고 공급 설정을 조절합니다.'],
   ['시스템 구성','배지 베드, 통합 센서노드, 배액 수집·측정부를 하나의 프레임에 구성했습니다.']
  ])+'<div class="measure-monitor-gallery"><figure><img src="assets/img/모니터_0메인화면.png" alt="배지환경 통합모니터 메인화면"><figcaption>메인화면 · 온도·함수율·무게·배액 EC·pH·배액량</figcaption></figure><figure><img src="assets/img/모니터_1기초설정.png" alt="배지환경 통합모니터 기초 설정"><figcaption>기초 설정</figcaption></figure><figure><img src="assets/img/모니터_2센서값보정.png" alt="배지환경 통합모니터 센서값 보정"><figcaption>센서값 보정</figcaption></figure><figure><img src="assets/img/모니터_3배지함수율설정.png" alt="배지환경 통합모니터 배지 함수율 설정"><figcaption>배지 함수율 설정</figcaption></figure><figure><img src="assets/img/모니터_4데이터기록.png" alt="배지환경 통합모니터 데이터 기록"><figcaption>데이터 기록</figcaption></figure></div><h3>주요 측정 범위</h3>'+specs([['모델','GAS-515'],['EC','0~14 dS/m'],['pH','0~14 pH'],['배액량','0~2 L/min'],['함수율','0~50 kg 무게 측정'],['배지온도','0~60℃']])},
  why:{eyebrow:'WHY MEASURE?',title:'왜 배액과 배지 상태를 함께 측정해야 할까요?',intro:'공급 기록만으로는 작물이 실제로 흡수한 양과 배지에 남은 상태를 정확히 알기 어렵기 때문입니다.',benefit:'배액과 배지 데이터를 함께 보면 공급 결과를 객관적으로 확인하고 다음 관수 설정을 더 정확하게 결정할 수 있습니다.',html:details([
   ['배액 데이터','흡수되지 않고 배출된 양액의 농도와 양을 확인합니다.'],
   ['배지 데이터','근권부에 남은 수분과 온도 변화를 확인합니다.'],
   ['공급 설정','두 데이터를 함께 참고하여 양액 농도·공급량·관수 시점을 조절합니다.'],
   ['생육 관리','작물 관찰과 측정 데이터를 함께 사용하여 이상 상태를 빠르게 발견합니다.']
  ])}
 };
 function open(key){var x=systems[key];eyebrow.textContent=x.eyebrow;title.textContent=x.title;intro.textContent=x.intro;body.innerHTML='<div class="measure-benefit"><b>운용 장점</b><p>'+x.benefit+'</p></div>'+x.html;dialog.showModal();}
 document.querySelectorAll('[data-system]').forEach(function(card){card.addEventListener('click',function(){open(card.dataset.system);});card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(card.dataset.system);}});});
 dialog.querySelector('header button').addEventListener('click',function(){dialog.close();});dialog.addEventListener('click',function(e){if(e.target===dialog)dialog.close();});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&dialog.open)dialog.close();});
})();
