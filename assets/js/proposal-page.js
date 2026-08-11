(function () {
  var products=window.PROPOSAL_PRODUCTS||[],context=window.PROPOSAL_CONTEXT||{},effectData=window.PROPOSAL_EFFECTS||{byFamily:{},byId:{}},params=new URLSearchParams(location.search);
  var ids=(params.get('items')||'').split(',').filter(Boolean),selected=ids.map(function(id){return products.find(function(p){return p.id===id;});}).filter(Boolean);
  function findLabel(key,id){var item=(context[key]||[]).find(function(x){return x[0]===id;});return item?item[1]:'';}
  function labels(key,param){return (params.get(param)||'').split(',').filter(function(id){return id&&id!=='none'&&id!=='other';}).map(function(id){return findLabel(key,id);}).filter(Boolean);}
  var targetId=params.get('target')||'';
  var target=targetId==='other'?(params.get('targetCustom')||'기타 대상'):targetId==='none'||!targetId?'사업 대상 미지정':findLabel('targets',targetId);
  var purposes=labels('purposes','purposes'),problems=labels('problems','problems');
  if((params.get('purposes')||'').split(',').indexOf('other')>-1&&params.get('purposesCustom'))purposes.push(params.get('purposesCustom'));
  if((params.get('problems')||'').split(',').indexOf('other')>-1&&params.get('problemsCustom'))problems.push(params.get('problemsCustom'));
  var project=params.get('project')||'시설원예 자동화 및 관리환경 개선사업';
  var organization=params.get('org')||'';
  document.title=project+' | 우성하이텍';document.getElementById('proposalTitle').textContent=project;
  document.getElementById('proposalOrganization').textContent=organization?'제안 대상 · '+organization:'제안 대상 · '+target;
  document.getElementById('proposalDate').textContent=new Date().toLocaleDateString('ko-KR')+' 기준';
  document.getElementById('proposalTotal').textContent='선택 제품 '+selected.length+'개';
  document.getElementById('proposalPrint').addEventListener('click',function(){window.print();});
  document.getElementById('proposalEdit').addEventListener('click',function(){var p=new URLSearchParams(params);p.set('proposal','1');location.href='index.html?'+p.toString();});
  if(!selected.length){document.getElementById('proposalProducts').innerHTML='<div class="proposal-empty"><h3>선택한 제품이 없습니다.</h3><a href="index.html?proposal=1">제품 선택하기 →</a></div>';return;}
  var families={};selected.forEach(function(p){families[p.family]=true;});
  var hasOpener=!!families.opener,hasController=!!families.controller,hasEnvironment=!!families.environment,hasIrrigation=!!families.irrigation,hasNutrient=!!families.nutrient,hasWater=hasIrrigation||hasNutrient,hasMeasurement=!!families.measurement,hasPlatform=!!families.platform,hasFan=!!families.circulation,hasFanController=!!families.fancontroller;
  document.getElementById('proposalSummary').innerHTML='<article><small>사업 대상</small><b>'+target+'</b></article><article><small>사업 목적</small><b>'+(purposes.join(' · ')||'시설 자동화 및 관리 개선')+'</b></article><article><small>개선 과제</small><b>'+(problems.length?problems.length+'개 선택':'현장 검토 후 확정')+'</b></article>';
  var need=(target==='사업 대상 미지정'?'적용 대상 현장에서는 ':target+' 대상 현장에서는 ');
  if(problems.length) need+=problems.join(', ')+(problems.length>1?' 등의 어려움을 겪을 수 있습니다. ':'과 같은 어려움을 겪을 수 있습니다. ');
  else need+='시설환경과 관수·양액 설비를 안정적으로 관리하고 반복적인 현장 작업을 줄일 수 있는 체계가 필요합니다. ';
  need+='이에 필요한 설비를 목적에 맞게 자동화하고, 제품 상태와 운전정보를 체계적으로 관리할 수 있는 기반을 구축할 필요가 있습니다.';
  document.getElementById('proposalNeed').textContent=need;
  document.getElementById('proposalProducts').innerHTML=selected.map(function(p,i){return '<article><span>'+String(i+1).padStart(2,'0')+'</span><small>'+p.group+'</small><h3>'+p.name+'</h3><em>'+p.tag+'</em><p><b>사업 내 역할</b>'+p.role+'</p><p><b>도입 가치</b>'+p.value+'</p><a href="'+p.link+'">제품 상세 보기 →</a></article>';}).join('');
  var groupMap={};selected.forEach(function(p){groupMap[p.group]=(groupMap[p.group]||0)+1;});
  document.getElementById('proposalFlow').innerHTML=Object.keys(groupMap).map(function(g,i,a){return '<div><b>'+g+'</b><span>'+groupMap[g]+'개 모델</span></div>'+(i<a.length-1?'<i>→</i>':'');}).join('');
  var benefits=[];
  if(hasOpener&&hasController)benefits.push(['구동부와 제어부의 완성된 구성','전동개폐기와 전용 컨트롤러를 함께 구성하여 환기창 또는 보온재의 실제 구동부터 현장 조작과 자동운전까지 하나의 체계로 구축할 수 있습니다.']);
  if(hasEnvironment&&hasWater)benefits.push(['지상부 환경과 물·양분의 통합 사업 구성','환기 환경관리와 관수·양액 공급을 함께 개선하여 작물의 지상부 환경과 근권부 공급을 균형 있게 관리하는 기반을 마련합니다.']);
  else if((hasOpener||hasController)&&hasWater)benefits.push(['환기·보온과 관수의 동시 개선','시설의 환기·보온 작업과 관수·액비 또는 양액 공급을 하나의 사업 범위에서 개선하여 반복 작업을 줄일 수 있습니다.']);
  if(hasNutrient&&hasMeasurement)benefits.push(['공급과 측정 데이터의 연계 활용','양액 공급정보와 배액·배지 측정 데이터를 함께 검토하여 다음 공급 농도와 공급량을 판단하는 근거로 활용할 수 있습니다.']);
  if(hasFan&&hasFanController)benefits.push(['순환팬과 전용 제어 구성','시설 규모에 맞는 순환팬과 온도·시간 또는 복합환경 컨트롤러를 함께 구성하여 공기순환의 자동운전과 현장관리를 체계화할 수 있습니다.']);
  if(selected.length>=2)benefits.push(['동일 제조사 통합 구성','구동장치·컨트롤러·관수·양액 및 환경관리 제품의 적용 검토와 기술상담을 일원화하여 문의처 분산을 줄이고 부품 공급과 유지관리의 일관성을 확보합니다.']);
  if(!benefits.length)benefits.push(['현장 목적에 맞는 제품 적용','선택 제품의 역할과 적용 조건을 기준으로 필요한 자동화 범위를 정하고 단계적인 시설 개선을 추진할 수 있습니다.']);
  document.getElementById('proposalBenefits').innerHTML=benefits.map(function(x){return '<article><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>';}).join('');
  var names=selected.map(function(p){return p.name;}).join(', ');
  var desc=(target==='사업 대상 미지정'?'본 사업에는 다음 제품을 적용합니다: ':'본 사업의 제안 대상은 '+target+'입니다. 다음 제품을 적용합니다: ')+names+'. 이를 통해 ';
  var scopes=[];if(hasOpener||hasController||hasEnvironment)scopes.push('환기·보온 설비의 구동과 운전 관리');if(hasFan)scopes.push('시설 내부 공기순환과 온습도 편차 개선');if(hasFanController)scopes.push('순환팬의 온도·시간 및 환경조건 자동운전');if(hasIrrigation)scopes.push('구역별 관수·액비 공급 관리');if(hasNutrient)scopes.push('EC·pH 및 설정조건에 따른 양액 공급 관리');if(hasMeasurement)scopes.push('배액 또는 배지환경 측정');if(hasPlatform)scopes.push('복합 환경제어');
  desc+=(scopes.join(', ')||'현장 설비 자동화')+' 체계를 구축하는 것을 제안합니다. 선택한 제품의 기능과 현장 운전방식을 기준으로 반복 작업을 줄이고, 적용 시설에 맞는 안정적인 관리 기반을 마련합니다.';
  document.getElementById('proposalDescription').textContent=desc;
  document.getElementById('proposalEffects').innerHTML=selected.map(function(product,i){var list=(effectData.byId[product.id]||[]).concat(effectData.byFamily[product.family]||[]);var unique=list.filter(function(x,n){return list.indexOf(x)===n;}).slice(0,8);return '<article><header><b>'+String(i+1).padStart(2,'0')+'</b><div><small>'+product.group+'</small><h3>'+product.name+'</h3></div></header><ul>'+unique.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></article>';}).join('');
  document.getElementById('proposalMaintenance').textContent='주요 설비를 우성하이텍 제품으로 구성하면 제품 적용 검토, 부품 확인, 기술상담과 유지보수 창구를 일원화할 수 있습니다. 초기에는 사업 목적에 필요한 제품부터 도입하고, 이후 현장 여건과 운영 목적에 따라 관련 제어제품과 센서·측정장치를 추가하여 시설의 관리 범위를 단계적으로 확장할 수 있습니다.';
})();
