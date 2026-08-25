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
  document.getElementById('proposalFlow').innerHTML=Object.keys(groupMap).map(function(g,i){return '<div><small>'+String(i+1).padStart(2,'0')+'</small><b>'+g+'</b><span>'+groupMap[g]+'개 모델</span></div>';}).join('');
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
  var farmEffects=[];
  if(hasOpener||hasController||hasEnvironment||hasFanController)farmEffects.push(['반복 작업과 현장 이동 감소','환기창·보온재·순환팬의 반복 운전을 전동화하거나 설정조건에 따라 자동화하여 작업자가 매번 설비를 찾아가 조작하는 시간과 신체 부담을 줄입니다. 여러 동과 구역을 관리하는 농가는 일상적인 개폐·운전 작업을 줄이고 작물 점검과 재배관리에 더 집중할 수 있습니다.']);
  if(hasWater)farmEffects.push(['관수·양액 공급의 일관성 향상',(hasIrrigation?'구역별 관수·액비 공급':'배양액 공급')+'을 설정한 조건에 따라 반복 수행하여 작업자마다 달라질 수 있는 공급 시기와 공급량의 편차를 줄입니다. 재배 일정과 작물 상태에 맞는 공급 기준을 유지하기 쉬워지고, 공급 작업의 누락이나 과다 공급을 예방하는 관리 기반을 마련합니다.']);
  if(hasOpener||hasController||hasEnvironment||hasFan)farmEffects.push(['재배환경 변화에 대한 대응력 향상','환기와 공기순환 설비를 활용해 시설 내부의 열기·습기·정체공기를 관리하고 구역별 환경 편차를 줄이는 데 도움을 줍니다. 자동제어 제품이 포함된 경우 온도·시간·기상조건에 따라 설비가 운전되므로 작업자가 즉시 현장에 가지 못하는 상황에서도 환경 변화에 보다 빠르게 대응할 수 있습니다.']);
  if(hasMeasurement)farmEffects.push(['경험 중심 관리에서 데이터 중심 관리로 전환','배액의 EC·pH·배액량 또는 배지의 수분·온도 정보를 확인하여 육안과 감각에 의존하던 판단을 측정값으로 보완합니다. 측정 결과와 변화 추이는 다음 관수·양액의 농도, 공급량과 공급 시기를 검토하는 근거로 활용할 수 있습니다.']);
  if(hasPlatform)farmEffects.push(['원격 확인과 통합 운영 기반 확보','환경센서와 연결 설비의 상태·운전정보를 스마트폰이나 PC에서 확인하고, 설정조건에 따라 여러 시설장치를 종합적으로 관리할 수 있습니다. 현장 방문 횟수와 확인 시간을 줄이고 이상 상황을 더 빨리 파악하며, 향후 센서와 제어장치를 추가하는 스마트팜 고도화의 기반을 확보합니다.']);
  if(selected.length>=2)farmEffects.push(['유지관리와 기술 대응의 일원화','선택 설비를 우성하이텍 제품군으로 구성하면 제품 적용 검토, 연결 조건 확인, 기술상담, 부품 공급과 유지관리 창구를 일원화할 수 있습니다. 장비별 문의처가 분산되는 불편을 줄이고, 시설 확장이나 부품 교체 시 기존 구성과의 호환 조건을 더 일관되게 검토할 수 있습니다.']);
  farmEffects.push(['농가 운영의 안정성과 생산관리 여건 개선','자동화와 측정·관리 기능은 작업자의 숙련도와 현장 상주 여부에 따른 운영 편차를 줄이고, 정해진 관리 기준을 지속적으로 유지하는 데 도움을 줍니다. 이를 통해 작업 누락과 대응 지연의 위험을 낮추고 작물이 보다 균일한 조건에서 자랄 수 있는 재배관리 여건을 마련합니다.']);
  document.getElementById('proposalFarmEffects').innerHTML=farmEffects.map(function(x,i){return '<article><i>'+String(i+1).padStart(2,'0')+'</i><div><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div></article>';}).join('');
  document.getElementById('proposalMaintenance').textContent='주요 설비를 우성하이텍 제품으로 구성하면 제품 적용 검토, 부품 확인, 기술상담과 유지보수 창구를 일원화할 수 있습니다. 초기에는 사업 목적에 필요한 제품부터 도입하고, 이후 현장 여건과 운영 목적에 따라 관련 제어제품과 센서·측정장치를 추가하여 시설의 관리 범위를 단계적으로 확장할 수 있습니다.';
})();

