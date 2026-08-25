(function(){
 var dialog=document.getElementById('measureDialog'),title=document.getElementById('measureTitle'),intro=document.getElementById('measureIntro'),eyebrow=document.getElementById('measureEyebrow'),body=document.getElementById('measureBody');
 function details(items){return '<div class="measure-detail-grid">'+items.map(function(x){return '<article><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>';}).join('')+'</div>';}
 function specs(items){return '<div class="measure-spec-list">'+items.map(function(x){return '<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>';}).join('')+'</div>';}
 var systems={
  drainage:{eyebrow:'DRAINAGE · EPSR-600',title:'수경재배 배액 측정시스템',intro:'배액의 EC·pH·배액량을 실시간으로 측정하고 데이터를 무선 전송합니다.',benefit:'공급한 배양액이 작물에 적절했는지 배액 데이터로 확인하여 다음 양액의 농도와 공급량을 조절하는 근거로 활용할 수 있습니다.',html:details([
   ['배액이란?','배지에 공급된 배양액 중 작물의 뿌리에 흡수되거나 자연 증발되지 않고 밖으로 흘러나온 용액입니다. 일반적으로 공급량의 약 20~30%가 배액으로 발생합니다.'],
   ['측정 목적','배액의 농도와 수량을 측정하여 현재 공급되는 배양액의 농도·공급량이 작물 생육에 적절한지와 배지 내 EC 축적 상태를 확인합니다.'],
   ['데이터 활용','측정 결과를 다음 공급의 농도와 수량 결정, 배액 재활용 검토 및 작물 생육 추이 관찰에 참고할 수 있습니다.'],
   ['설치 기준','지속적으로 배액이 발생하는 표본 베드를 선정하며 표본 베드 길이는 10~50m가 적절합니다.']
  ])+'<div class="measure-media-grid"><img src="assets/img/drainage-epsr600.png" alt="EPSR-600 측정부"><img src="assets/img/drainage-monitoring.png" alt="배액 데이터 모니터링"></div><h3>측정부 주요 사양</h3>'+specs([['모델','EPSR-600'],['전원','AC220V 60Hz'],['소비전력','100W 이하'],['배수방식','모터펌프 자동배수'],['배수량','2~4ℓ/분'],['통신','IEEE 802.15.4 · 거리 100m'],['EC 측정','0~10mS · 정확도 ±0.3'],['pH 측정','0~14pH · 정확도 ±0.3'],['배액량 측정','0~200ℓ · 정확도 ±0.6%'],['크기','D300 × W300 × H700mm']])+'<p class="measure-note">인젝션마스터·웰시스·데이터마스터가 설치된 현장에서는 해당 시스템 구성에 따라 별도 소프트웨어 없이 측정부를 연계하여 사용할 수 있습니다.</p>'},
  substrate:{eyebrow:'SUBSTRATE WATER · SWSR-400',title:'배지 수분·온도 측정시스템',intro:'작물이 심긴 2m 표본 베드의 무게와 온도를 측정해 배지 상태를 데이터로 확인합니다.',benefit:'손으로 만지거나 눈으로 판단하던 배지 수분상태를 측정값으로 확인하여 양액 공급시기와 공급량을 결정하는 데 도움을 줍니다.',html:details([
   ['측정 방식','작물이 심겨 있는 배지를 2m 표본 베드 위에 올려 무게를 측정하고 컴퓨터 소프트웨어로 분석하여 수분함량을 파악합니다.'],
   ['공급 설정에 활용','배지 수분량의 변화를 확인하여 양액을 언제, 얼마나 공급할지 결정하는 참고자료로 활용합니다.'],
   ['생육 관리','생장기와 생식기에 맞춰 수분 공급량을 조절하고 수확시기·수확량 및 작물 생육 추이를 관찰하는 데 활용할 수 있습니다.'],
   ['시스템 구성','2m 표본 베드, 측정 데이터를 무선 송·수신하는 노드 및 컴퓨터 소프트웨어로 구성됩니다.']
  ])+'<div class="measure-media-grid"><img src="assets/img/substrate-field.png" alt="SWSR-400 현장 설치"><img src="assets/img/substrate-spec.png" alt="SWSR-400 사양표"></div><h3>측정부 주요 사양</h3>'+specs([['모델','SWSR-400'],['전원','AC220V 60Hz'],['소비전력','13W'],['표본 배지','1m × 2장'],['로드셀','2개 · 최대 50kg'],['온도측정','서미스터 온도센서'],['통신','IEEE 802.15.4'],['통신거리','100m'],['프레임','알루미늄 프로파일 40×40'],['크기','D320 × W2080 × H800mm']])+'<p class="measure-note">이 시스템은 표본 베드의 중량 변화로 배지 수분상태를 분석하는 장치입니다. 토양 수분센서처럼 재배지 전체를 직접 측정하는 방식은 아닙니다.</p>'},
  why:{eyebrow:'WHY MEASURE?',title:'왜 배액과 배지 상태를 측정해야 할까요?',intro:'공급한 양이 아니라 작물이 사용하고 배지에 남은 결과를 확인하기 위해서입니다.',benefit:'관수·양액 공급을 경험이나 고정된 시간표에만 의존하지 않고, 작물과 근권에서 실제로 나타난 변화에 맞춰 조정할 수 있는 객관적인 근거를 제공합니다.',html:'<section class="measure-logic"><h3>공급량만 확인해서는 알 수 없는 것</h3><p>같은 양을 공급해도 일사·온도·습도·작물의 생육단계에 따라 흡수량과 증발량이 달라집니다. 공급기 운전기록만으로는 배지가 충분히 젖었는지, 과습한지, 비료염이 축적되는지 정확히 확인하기 어렵습니다.</p></section><div class="measure-logic-flow"><span><b>배지 중량 변화</b>급액 후 포화상태와 시간에 따른 수분 감소 확인</span><i>›</i><span><b>배액량·EC·pH</b>흡수되지 않은 물의 양과 농도·산도 확인</span><i>›</i><span><b>다음 공급 설정</b>관수 시작시기·횟수·공급량·농도 조절에 참고</span></div>'+details([
   ['과습과 건조 위험 확인','배지 중량의 변화와 배액 발생을 함께 보면 물이 지나치게 남는지 또는 다음 관수 전에 과도하게 건조되는지 파악하는 데 도움이 됩니다.'],
   ['근권 EC 축적 추이 확인','배액 EC가 높아지는 흐름은 배지 내 비료염 축적 가능성을 검토해야 한다는 신호가 될 수 있어 공급농도와 배액률 점검에 활용됩니다.'],
   ['날씨 변화에 맞는 관수','일사량이 비슷해도 고온·저습·바람에 따라 작물의 물 사용량은 달라질 수 있습니다. 배지 중량은 실제 수분 감소를 확인하는 보조지표가 됩니다.'],
   ['물과 비료의 낭비 점검','필요 이상의 공급과 과도한 배액을 확인하고 공급전략을 조정하면 물·비료 사용과 배액 처리 부담을 줄이는 데 도움이 됩니다.'],
   ['생육단계별 관리','생장기·생식기와 작물 상태에 따라 목표 수분범위를 다르게 관리할 때 장기 데이터가 공급전략을 비교하는 자료가 됩니다.'],
   ['감각을 보완하는 데이터','센서 데이터만으로 재배를 결정하는 것이 아니라 작물 관찰과 함께 사용하여 경험을 수치로 확인하고 이상을 더 일찍 발견하도록 돕습니다.']
  ])+'<p class="measure-boundary"><b>우리 시스템의 적용 범위</b><br>EPSR-600과 SWSR-400은 측정값을 제공하여 관리자의 공급 설정 결정을 돕는 시스템입니다. 외부 환경제어 시스템과 연계 여부에 따라 활용 범위가 달라지며, 측정값만으로 양액공급기를 자동 조절한다고 표현하지 않습니다.</p>'}
 };
 function open(key){var x=systems[key];eyebrow.textContent=x.eyebrow;title.textContent=x.title;intro.textContent=x.intro;body.innerHTML='<div class="measure-benefit"><b>운용 장점</b><p>'+x.benefit+'</p></div>'+x.html;dialog.showModal();}
 document.querySelectorAll('[data-system]').forEach(function(card){card.addEventListener('click',function(){open(card.dataset.system)});card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(card.dataset.system);}});});
 dialog.querySelector('header button').addEventListener('click',function(){dialog.close();});dialog.addEventListener('click',function(e){if(e.target===dialog)dialog.close();});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&dialog.open)dialog.close();});
})();
