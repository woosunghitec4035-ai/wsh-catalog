(function(){
 var series={
  h:{
   eye:'SDU · H SERIES',title:'SDU H 시리즈',lead:'전원과 마력에 따라 3개 모델로 구분하며, 각 모델은 체인 또는 리지드 커플링 방식으로 구성할 수 있습니다.',
   models:[
    {name:'H 삼상 2마력',power:'삼상 AC380V',coupling:'체인 · 리지드 커플링 선택',rigid:'sdu-h-3p-2hp-rigid.png',chain:'sdu-h-3p-2hp-chain.png',drawing:'sdu-h-drawing-3p-2hp.png?v=2'},
    {name:'H 삼상 1마력',power:'삼상 AC380V',coupling:'체인 · 리지드 커플링 선택',rigid:'sdu-h-3p-1hp-rigid.png',chain:'sdu-h-3p-1hp-chain.png',drawing:'sdu-h-drawing-3p-1hp.png?v=2'},
    {name:'H 단상 1마력',power:'단상 AC220V',coupling:'체인 · 리지드 커플링 선택',rigid:'sdu-h-1p-1hp-rigid.png',chain:'sdu-h-1p-1hp-chain.png',drawing:'sdu-h-drawing-1p-1hp.png'}
   ],
   references:[
    ['제품 구조 · 정면','sdu-h-structure-a.png'],['제품 구조 · 후면','sdu-h-structure-b.png'],
    ['리지드 커플링 설치 · 200mm','sdu-h-install-rigid-200.png'],['리지드 커플링 설치 · 433mm','sdu-h-install-rigid-433.png'],
    ['체인 커플링 설치','sdu-h-install-chain.png']
   ]
  },
  l:{
   eye:'SDU · L SERIES',title:'SDU L 시리즈',lead:'삼상 1/2마력 단일 모델이며, 체인 또는 리지드 커플링 방식으로 구성할 수 있습니다.',
   models:[
    {name:'L 삼상 1/2마력',power:'삼상 AC380V · 0.4kW',coupling:'체인 · 리지드 커플링 선택',rigid:'sdu-l-3p-halfhp-rigid.png',chain:'sdu-l-3p-halfhp-chain.png',drawing:'sdu-l-drawing-3p-halfhp.png'}
   ],
   references:[['제품 구조','sdu-l-structure.png'],['리지드 커플링 설치','sdu-l-install-rigid.png'],['체인 커플링 설치','sdu-l-install-chain.png']]
  }
 };
 var commonFeatures=[['셀프 록킹 세터','sdu-feature-self-lock.png'],['이동거리 정밀 조절','sdu-feature-limit-adjust.png'],['2중 안전 리미트 스위치','sdu-feature-double-limit.png']];
 var controllers=[['CAC-3P01','삼상 380V','자동/수동 · 모터 1대','cac-3p01.png'],['CAC-3P02','삼상 380V','자동/수동 · 모터 2대','cac-3p02.png'],['CMC-3P01','삼상 380V','수동 · 모터 1대','cmc-3p01.png'],['CMC-3P02','삼상 380V','수동 · 모터 2대','cmc-3p02.png'],['CAC-1P01','단상 220V','자동/수동 · 모터 1대','cac-1p01.png'],['CAC-1P02','단상 220V','자동/수동 · 모터 2대','cac-1p02.png'],['CMC-1P01','단상 220V','수동 · 모터 1대','cmc-1p01.png'],['CMC-1P02','단상 220V','수동 · 모터 2대','cmc-1p02.png']];
 var dialog=document.getElementById('screenDialog'),eye=document.getElementById('screenEye'),title=document.getElementById('screenTitle'),lead=document.getElementById('screenLead'),body=document.getElementById('screenRef');

 function modelCard(model,index){
  return '<button type="button" class="sdu-model-card'+(index===0?' active':'')+'" data-model-index="'+index+'"><img src="assets/img/'+model.rigid+'" alt="'+model.name+'"><span><b>'+model.name+'</b><small>'+model.power+'</small><strong>'+model.coupling+'</strong></span></button>';
 }
 function detailPanel(model){
  return '<section class="sdu-model-detail"><header><small>선택 모델</small><h3>'+model.name+'</h3><b>'+model.power+'</b><p>'+model.coupling+'</p></header><div class="sdu-coupling-compare"><figure><img src="assets/img/'+model.rigid+'" alt="'+model.name+' 리지드 커플링형"><figcaption>리지드 커플링형</figcaption></figure><figure><img src="assets/img/'+model.chain+'" alt="'+model.name+' 체인 커플링형"><figcaption>체인 커플링형</figcaption></figure></div><figure class="sdu-drawing"><img src="assets/img/'+model.drawing+'" alt="'+model.name+' 외형도"><figcaption>외형 치수와 출력축 타입</figcaption></figure></section>';
 }
 function referenceCard(item){return '<figure class="sdu-reference"><img src="assets/img/'+item[1]+'" alt="'+item[0]+'"><figcaption>'+item[0]+'</figcaption></figure>';}
 function openSeries(key){
  var data=series[key];eye.textContent=data.eye;title.textContent=data.title;lead.textContent=data.lead;
  body.innerHTML='<div class="sdu-model-layout"><nav class="sdu-model-list">'+data.models.map(modelCard).join('')+'</nav><div class="sdu-model-stage">'+detailPanel(data.models[0])+'</div></div><h3 class="sdu-section-title">구조 및 설치 자료</h3><div class="sdu-reference-grid">'+data.references.map(referenceCard).join('')+'</div><h3 class="sdu-section-title">공통 정밀 리미트 기능</h3><div class="sdu-reference-grid sdu-feature-grid">'+commonFeatures.map(referenceCard).join('')+'</div>';
  body.querySelectorAll('[data-model-index]').forEach(function(button){button.addEventListener('click',function(){var index=Number(button.dataset.modelIndex);body.querySelectorAll('.sdu-model-card').forEach(function(card){card.classList.toggle('active',card===button)});body.querySelector('.sdu-model-stage').innerHTML=detailPanel(data.models[index]);});});
 }
 function openControllers(){
  eye.textContent='CURTAIN MASTER · CONTROLLER';title.textContent='커튼마스터 8개 모델';lead.textContent='전원 종류, 자동운전 필요 여부와 연결할 커튼스타 모터 대수에 맞춰 선택합니다.';
  body.innerHTML='<div class="controller-benefits"><article><b>CAC 자동형</b><span>24시간 타이머에 열림·닫힘 시각을 설정해 자동 개폐하며 현장 수동운전도 가능합니다.</span></article><article><b>삼상 전원 확인</b><span>삼상 자동모델은 선로 체크 스위치로 삼상전원의 이상 유무를 설치·점검 시 확인할 수 있습니다.</span></article></div><div class="curtain-model-grid">'+controllers.map(function(m){return '<article class="curtain-model"><img src="assets/img/'+m[3]+'" alt="'+m[0]+'"><b>'+m[0]+'</b><span>'+m[1]+'</span><small>'+m[2]+'</small></article>'}).join('')+'</div><img src="assets/img/curtain-master-spec-3phase.png" alt="삼상 커튼마스터 사양표"><img src="assets/img/curtain-master-spec-1phase.png" alt="단상 커튼마스터 사양표">';
 }
 document.querySelectorAll('[data-series]').forEach(function(button){button.addEventListener('click',function(){button.dataset.series==='controller'?openControllers():openSeries(button.dataset.series);dialog.showModal();});});
 dialog.querySelector('.screen-close').addEventListener('click',function(){dialog.close()});dialog.addEventListener('click',function(event){if(event.target===dialog)dialog.close();});
})();
