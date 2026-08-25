(function(){
 var dialog=document.getElementById('fsDialog'),title=document.getElementById('fsDialogTitle'),intro=document.getElementById('fsDialogIntro'),body=document.getElementById('fsDialogBody'),eyebrow=document.getElementById('fsDialogEyebrow');
 function cards(items){return '<div class="fs-copy-grid">'+items.map(function(x){return '<article class="fs-copy-card"><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>';}).join('')+'</div>';}
 var features={
  channels:['21개 독립 제어채널','설비의 작동 방식에 맞춰 독립된 제어계통을 배정합니다.',cards([
   ['정·역 제어 10채널','환기창 개폐기와 커튼모터처럼 정방향·역방향으로 움직이는 장치를 제어합니다. 각 채널은 독립적으로 목표값을 설정합니다.'],
   ['ON·OFF 제어 10채널','FAN·난방기·펌프·보광램프처럼 켬과 끔으로 작동하는 장치를 제어합니다.'],
   ['관수 제어 1채널','재배지를 최대 10구역으로 나누어 지정한 시간 동안 순차적으로 관수할 수 있습니다.'],
   ['현재 모델의 구성','FSC-1520은 <strong>정·역 10 + ON·OFF 10 + 관수 1</strong>로 구성된 고정형 21채널 모델입니다.']
  ])],
  vent:['환기창 정밀제어','온도와 시간에 따라 환기창을 단계적이고 안정적으로 운전합니다.',cards([
   ['최대 5단계 온도 설정','시간대별 목표온도와 최대 개방률을 다르게 설정하여 하루의 환경 변화에 대응합니다.'],
   ['비례 대기 운전','현재온도와 목표온도의 차이에 따라 다음 동작까지의 대기시간을 조절해 급격한 개폐를 줄입니다.'],
   ['단계 운전','환기창을 한 번에 크게 움직이지 않고 설정 조건에 따라 단계적으로 개폐합니다.'],
   ['채널별 독립 설정','각 환기창이나 커튼 계통마다 적용센서·목표값·작동범위를 개별 설정할 수 있습니다.']
  ])],
  climate:['복합 환경조건 제어','설비 특성에 맞춰 온도·습도·CO₂·일사와 시간을 제어조건으로 사용합니다.',cards([
   ['온도·시간 제어','냉방·난방 모드와 시간대를 설정하고, 선택한 센서 또는 센서 평균값을 기준으로 운전합니다.'],
   ['습도 조건 적용','설비 운전에 습도 조건을 함께 적용하여 단일 온도 기준보다 현장 조건을 세밀하게 반영합니다.'],
   ['CO₂·일사 조건','CO₂ 제어 시 일사 조건을 함께 적용하여 작물 환경과 시간대에 맞는 운전 기준을 구성합니다.'],
   ['채널 연동','선택한 ON·OFF 채널을 다른 채널의 운전상태와 연동해 관련 설비를 함께 운전할 수 있습니다.']
  ])],
  sensorAverage:['센서 선택과 평균값 적용','넓은 온실의 한 지점만 보는 대신 채널별로 사용할 센서 또는 평균값을 지정합니다.',cards([
   ['구역별 센서 지정','각 제어채널이 어느 위치의 센서값을 기준으로 운전할지 개별적으로 지정할 수 있습니다.'],
   ['센서 평균값 적용','짝으로 구성된 센서의 평균값을 제어 기준으로 사용해 한 지점의 일시적인 편차를 줄입니다.'],
   ['현장별 기준 구성','좌·우측 또는 서로 다른 재배구역의 환경 차이를 설비 운전 기준에 반영할 수 있습니다.'],
   ['정밀제어의 기초','설비와 재배구역에 맞게 기준센서를 지정해야 각 채널의 제어 정확도를 높일 수 있습니다.']
  ])],
  safety:['기상·온도 비상제어','고온·저온·강우·풍속 조건을 이용해 기상 변화에 대응합니다.',cards([
   ['고온 대응','설정한 고온 조건에 따라 환기설비를 작동시켜 급격한 실내온도 상승에 대응합니다.'],
   ['저온 대응','저온 조건에서는 환기설비를 닫거나 난방 관련 채널을 운전하도록 설정할 수 있습니다.'],
   ['강우·풍속 대응','강우센서와 기상센서 정보를 이용해 비와 강풍 조건에서 환기창 운전을 제한하거나 닫습니다.'],
   ['설비별 설정 필요','비상제어는 연결된 센서와 채널 설정을 기준으로 작동하므로 현장 설비에 맞는 초기 설정이 중요합니다.']
  ])],
  irrigation:['최대 10구역 순차관수','한정된 물의 양과 펌프용량을 여러 재배구역에 순서대로 배분합니다.',cards([
   ['최대 10구역','한 개의 관수 채널에서 최대 10개 구역을 구분하여 순차적으로 공급할 수 있습니다.'],
   ['관수 시간 설정','구역별 1~180분의 관수시간과 하루 최대 10회의 운전시각을 설정할 수 있습니다.'],
   ['관수 주기 설정','매일 또는 2~7일 간격으로 반복 주기를 설정하여 재배계획에 맞게 운용합니다.'],
   ['적합한 현장','원수량이나 펌프용량 부족으로 전 구역을 동시에 관수하기 어려운 현장에서 유용합니다.']
  ])],
  linkage:['채널 연동제어','관련된 ON·OFF 설비를 다른 채널의 운전조건과 연결하여 함께 관리합니다.',cards([
   ['관련 설비 동시 운용','주 제어설비가 작동할 때 필요한 보조설비를 함께 운전하도록 채널을 연동할 수 있습니다.'],
   ['운전 순서 단순화','서로 관련된 설비를 작업자가 각각 조작해야 하는 번거로움을 줄입니다.'],
   ['조건 해제 시 정지','설정한 연동조건이 해제되면 관련 출력도 정지하도록 구성해 불필요한 운전을 줄입니다.'],
   ['현장 설계 필요','연동 대상과 작동논리는 실제 전기회로와 설비 목적을 확인하여 설정해야 합니다.']
  ])],
  backup:['유선 예비온도센서','실내 통합센서의 통신 이상 상황에서도 온도정보를 확인할 수 있도록 보완합니다.',cards([
   ['통신 이상 감시','실내 통합센서의 통신이 일정 시간 확인되지 않으면 유선 예비온도값을 활용합니다.'],
   ['유선 직접 연결','무선센서와 별도로 컨트롤러에 연결되어 실내온도 확인을 보조합니다.'],
   ['제어 공백 보완','주 센서 통신 이상이 제어 공백으로 이어질 가능성을 줄이는 안전 보완장치입니다.'],
   ['정기 점검 필요','예비센서도 설치 위치와 배선상태를 확인해야 실제 이상 상황에서 사용할 수 있습니다.']
  ])],
  data:['데이터 저장과 경보 이력','재배환경의 흐름과 이상 발생 기록을 확인하여 운전 판단을 돕습니다.',cards([
   ['센서 데이터','환경센서 측정값을 일정 간격으로 저장하고 시간에 따른 변화를 조회할 수 있습니다.'],
   ['그래프 조회','온도·습도·CO₂ 등 주요 환경정보를 그래프로 확인하여 변화 추이를 비교합니다.'],
   ['경보 데이터','경보 발생 시각과 상태를 기록하여 이상 발생 원인과 운전상황을 되짚어 볼 수 있습니다.'],
   ['운영자료 활용','누적된 환경정보는 설정값을 점검하고 재배관리 방식을 개선하는 기초자료가 됩니다.']
  ])],
  remote:['스마트폰·PC 원격관리','팜시스 웹을 통해 농장 상태와 데이터를 확인하고 필요한 경우 응급 운전을 지원합니다.',cards([
   ['현재 상태 확인','스마트폰이나 컴퓨터에서 센서값과 채널 작동상태를 확인할 수 있습니다.'],
   ['원격 수동운전','이상 상황을 확인한 뒤 필요한 설비를 응급으로 수동 조작하는 보조 기능으로 활용합니다.'],
   ['데이터·CCTV','저장된 환경자료와 CCTV 영상을 원격에서 확인하여 현장 상황 판단을 돕습니다.'],
   ['인터넷 연결 필요','원격관리 기능은 팜시스 컨트롤러와 서버의 안정적인 인터넷 연결이 필요합니다.']
  ])],
  local:['현장 자동제어가 중심','스마트팜의 목적은 스마트폰 조작 자체가 아니라 재배환경을 현장에서 안정적으로 자동조절하는 것입니다.',cards([
   ['자동제어 우선','목표값과 센서 조건을 기준으로 컨트롤러가 현장에서 설비를 자동으로 제어합니다.'],
   ['원격은 보조 기능','농장이 정상적으로 자동제어되고 있다면 반복적인 원격조작은 필요하지 않습니다.'],
   ['생산성 향상','정밀제어와 환경 데이터 활용을 통해 안정적인 재배환경과 효율적인 영농활동을 지원합니다.'],
   ['현장 안전성','원격화면만 의존하지 않고 현장 설비·센서·로컬 컨트롤러가 올바르게 구성되어야 합니다.']
  ])],
  production:['우성하이텍 자체 설계·생산','센서·환경제어 소프트웨어와 주요 구성품을 직접 연구·설계·생산하여 하나의 시스템으로 연결합니다.',cards([
   ['31년 시설원예 기술','시설원예 자동화장치를 개발해 온 현장경험을 제어기능과 시스템 구성에 반영합니다.'],
   ['소프트웨어 자체 개발','팜시스 환경제어 소프트웨어를 직접 개발하여 하드웨어와 제어논리를 일관되게 구성합니다.'],
   ['주요 구성품 직접 생산','컨트롤러뿐 아니라 환경센서와 통신노드 등 핵심 구성품을 직접 설계·생산합니다.'],
   ['신속한 기술지원','시스템의 주요 부분을 자체 기술로 구성하여 고장 원인 확인과 애프터서비스에 유리합니다.']
  ])]
 };
 var benefits={
  channels:'환기창·커튼·FAN·난방기·펌프·관수처럼 작동 방식이 다른 설비를 하나의 시스템에서 채널별로 독립 관리할 수 있습니다.',
  vent:'시간대와 온도 차이에 맞춰 환기창을 단계적으로 움직여 급격한 개폐를 줄이고 안정적인 환기환경을 유지하는 데 도움이 됩니다.',
  climate:'온도 하나만을 기준으로 삼지 않고 습도·CO₂·일사·시간 조건을 함께 적용하여 작물과 설비 목적에 맞는 세밀한 운전이 가능합니다.',
  sensorAverage:'구역별 센서를 지정하거나 평균값을 적용하여 특정 한 지점의 일시적인 온도 편차가 전체 설비 운전을 좌우하는 문제를 줄입니다.',
  safety:'고·저온과 비·강풍에 자동으로 대응하여 관리자가 즉시 현장에 도착하기 어려운 상황에서도 작물과 시설의 위험을 완화합니다.',
  irrigation:'원수량이나 펌프용량이 부족해 전 구역을 동시에 관수하기 어려운 현장에서도 물을 최대 10구역에 순서대로 효율적으로 배분합니다.',
  linkage:'관련 설비를 조건에 따라 함께 운전해 작업자가 여러 채널을 매번 따로 조작하는 번거로움과 조작 누락 가능성을 줄입니다.',
  backup:'주 통합센서의 통신 이상 시 유선 예비온도 정보를 활용하여 온도 확인과 자동제어의 공백 가능성을 보완합니다.',
  data:'환경변화와 경보 발생 이력을 확인해 단순히 이상 여부만 보는 것이 아니라 언제 어떤 조건에서 문제가 생겼는지 추적할 수 있습니다.',
  remote:'현장에 가기 전에 현재 상태·데이터·CCTV를 확인하고 이상 상황에서는 응급 수동운전을 수행하여 초기 대응 시간을 줄이는 데 도움이 됩니다.',
  local:'설정값과 센서조건에 따라 컨트롤러가 현장에서 자동 운전하므로 관리자가 스마트폰이나 스위치를 계속 조작해야 하는 부담을 줄입니다.',
  production:'센서·통신노드·컨트롤러·소프트웨어를 자체 기술로 연결해 시스템 이해도가 높고 고장 원인 확인과 애프터서비스에 유리합니다.'
 };
 var specs=[['모델명','FSC-1520'],['제어채널','정·역 10채널 / ON·OFF 10채널 / 관수 1채널'],['관수','최대 10구역 분할 순차관수'],['실내센서','공기환경 통합센서 최대 4대 + 유선온도센서 1개'],['외부센서','풍향·풍속·일사·강우·외부 온·습도 사용 가능'],['배지센서','수경재배용 배지 수분·온도 측정(토양 수분 측정 불가)'],['센서 통신','IEEE 802.15.4 무선통신'],['사용전압','AC220V'],['운영 하드웨어','임베디드 컴퓨터'],['운영체제','MS Windows CE 6.0'],['응용 소프트웨어','Farmsys 소프트웨어(우성하이텍 개발)'],['화면','10.2인치 컬러 LCD · 800×480 · 감압식 터치'],['저장장치','SD 외장 메모리 4GB'],['인터넷','이더넷 통신'],['출력방식(분리형)','릴레이 접점(무전압) · 연결된 로컬 컨트롤러에 운전신호 전달'],['케이스','EGI 스틸 분체도장'],['크기·무게','500×550×165mm · 10.5kg']];
 var panels={
  architecture:['SYSTEM ARCHITECTURE','팜시스 시스템 구성','센서 측정부터 현장 자동제어와 원격관리까지의 연결 구조입니다.','<img class="fs-wide-image" src="assets/img/farmsys-hq-팜시스개요도.png" alt="팜시스 시스템 구성도"><p class="fs-dialog-note"><b>제어 흐름:</b> 환경센서가 측정정보를 전달하면 팜시스 컨트롤러가 설정값에 따라 현장의 로컬 컨트롤러와 설비를 제어합니다. 서버와 인터넷 연결은 원격조회·데이터 저장·CCTV 확인을 지원합니다.</p>'],
  controller:['FSC-1520 SPECIFICATION','제품 사양','현재 판매되는 FSC-1520의 고정 채널 구성과 주요 제원입니다.','<div class="fs-spec-view"><div class="fs-spec-highlight"><span><b>21채널</b>정·역 10 + ON·OFF 10 + 관수 1</span><span><b>10.2인치</b>컬러 터치 디스플레이</span><span><b>자체 개발</b>Farmsys 환경제어 S/W</span></div><section class="fs-output-routes"><header><b>현장 기계장치 연결 방법</b><p>팜시스는 현장 구성에 따라 아래 두 방식 중 하나로 설계합니다.</p></header><div><article><small>표준형 · 센트럴/분리형</small><h3>FSC-1520 + 로컬 컨트롤러</h3><p>FSC-1520은 <strong>무전압 릴레이 운전신호</strong>를 출력하고, D시리즈 등 연결된 로컬 컨트롤러의 마그네틱 콘텍트가 실제 전동개폐기와 설비의 전원회로를 제어합니다.</p><span>팜시스 → 운전신호 → 로컬 컨트롤러 → 기계장치</span></article><article><small>주문형 · 통합형</small><h3>통합 컨트롤러로 제작</h3><p>현장 설비의 수량과 용량에 맞춰 마그네틱 콘텍트·수동운전 스위치·출력단자까지 하나의 제어반에 구성하고 <strong>기계장치를 통합 제어반에 직접 연결</strong>합니다.</p><span>통합 제어반 → 전원·운전 제어 → 기계장치</span></article></div></section><div class="fs-specs"><dl>'+specs.slice(0,9).map(spec).join('')+'</dl><dl>'+specs.slice(9).map(spec).join('')+'</dl></div></div>'],
  types:['CONTROLLER CONFIGURATION','통합형과 분리형','현장 규모와 기존 제어반 구성에 따라 컨트롤러 형식을 선택합니다.','<div class="fs-type-grid"><article><img src="assets/img/farmsys-hq-통합형컨트롤러1.png" alt="팜시스 통합형 컨트롤러"><h3>통합형 · Integrater Type</h3><p>현장 기계장치의 수량과 용량에 맞춰 제작하는 주문형 제어반입니다. 임베디드 컴퓨터·릴레이보드·센서 수신장치·마그네틱 콘텍트·수동 스위치·출력단자가 일체로 구성되어 <strong>환경조절 기계장치를 제어반에 직접 연결</strong>합니다.</p></article><article><img src="assets/img/farmsys-hq-분리형컨트롤시스템.png" alt="팜시스 분리형 컨트롤러"><h3>분리형 · Component Type</h3><p>FSC-1520의 규격화된 중앙 컨트롤러에서 무전압 릴레이 신호를 내보내고, 연결된 로컬 컨트롤러가 실제 구동회로를 제어합니다. <strong>현재 사용 중인 로컬 제어기를 활용하거나 계통별로 구성</strong>할 때 적합합니다.</p></article></div>'],
  sensors:['ENVIRONMENT SENSORS','환경센서 구성','재배환경과 설치 목적에 맞는 센서 및 노드를 구성합니다.','<div class="fs-sensor-grid fs-sensor-hq"><article><img src="assets/img/farmsys-hq-실내환경센서노드.png" alt="실내환경센서 노드"><h3>실내 공기환경 통합센서 노드</h3><p>시설 내부의 온도·습도·CO₂ 정보를 무선으로 전달하여 채널별 자동제어 기준으로 사용합니다.</p></article><article><img src="assets/img/farmsys-hq-기상환경센서노드.png" alt="기상환경센서 노드"><h3>기상환경센서 노드</h3><p>외부 기상센서의 측정정보를 수집해 팜시스 컨트롤러로 무선 전송합니다.</p></article><article><img src="assets/img/farmsys-hq-풍향풍속센서.png" alt="풍향풍속센서"><h3>풍향·풍속센서</h3><p>외부 바람의 방향과 세기를 측정해 강풍 시 환기창 보호 운전의 판단정보로 활용합니다.</p></article><article><img src="assets/img/farmsys-hq-일사량센서.png" alt="일사량센서"><h3>일사량센서</h3><p>작물과 시설에 들어오는 일사량을 측정해 시간·온도 조건과 함께 복합제어 기준으로 활용합니다.</p></article><article><img src="assets/img/farmsys-hq-강우센서.png" alt="강우센서"><h3>강우센서</h3><p>강우 유무를 감지하여 비가 올 때 환기창을 닫는 비상제어 조건으로 활용합니다.</p></article><article><img src="assets/img/farmsys-hq-외부온습도센서2m.png" alt="외부 온습도센서"><h3>외부 온·습도센서</h3><p>외부 공기의 온도와 습도를 측정해 실내외 환경 차이를 반영한 운전 판단을 돕습니다.</p></article></div><p class="fs-dialog-note">※ 배지센서는 수경재배용 인공배지의 수분과 온도를 측정합니다. 일반 토양의 수분을 측정하는 센서가 아닙니다.</p>'],
  operation:['OPERATION & REMOTE MANAGEMENT','사용 화면과 원격관리','현장 터치화면을 중심으로 운전하며 스마트폰과 PC에서 상태와 데이터를 확인합니다.','<div class="fs-operation-gallery"><figure class="wide"><img src="assets/img/farmsys-hq-소프트웨어1.png" alt="팜시스 메인화면"><figcaption>현장 메인화면</figcaption></figure><figure><img src="assets/img/farmsys-hq-소프트웨어2.png" alt="정역 제어 채널설정"><figcaption>정·역 제어 설정</figcaption></figure><figure><img src="assets/img/farmsys-hq-소프트웨어3.png" alt="ON OFF 제어 채널설정"><figcaption>ON·OFF 제어 설정</figcaption></figure><figure><img src="assets/img/farmsys-hq-소프트웨어4.png" alt="정역 제어 채널 운전"><figcaption>채널별 운전상태</figcaption></figure><figure><img src="assets/img/farmsys-hq-소프트웨어5.png" alt="환경 데이터 그래프"><figcaption>환경 데이터 그래프</figcaption></figure><figure><img src="assets/img/farmsys-hq-소프트웨어6.png" alt="팜시스 PRO 화면"><figcaption>팜시스 PRO 통합화면</figcaption></figure><figure><img src="assets/img/farmsys-hq-스마트폰원격관리.png" alt="스마트폰 원격관리"><figcaption>스마트폰 원격관리</figcaption></figure><figure><img src="assets/img/farmsys-hq-pc원격관ㄹ.png" alt="PC 원격관리"><figcaption>PC 원격관리</figcaption></figure></div><p class="fs-dialog-note">원격제어는 농장 환경을 스마트폰으로 계속 조작하는 기능이 아니라, 자동제어 상태를 확인하고 이상 발생 시 조회·응급운전을 돕는 보조 기능입니다.</p>']
 };
 function spec(x){return '<div><dt>'+x[0]+'</dt><dd>'+x[1]+'</dd></div>';}
 function open(data){eyebrow.textContent=data[0];title.textContent=data[1];intro.textContent=data[2];body.innerHTML=data[3];dialog.showModal();}
 document.addEventListener('click',function(e){var f=e.target.closest('[data-feature]');if(f){var key=f.dataset.feature;open(['CORE FUNCTION',features[key][0],features[key][1],'<div class="fs-benefit-lead"><b>운용 장점</b><span>'+benefits[key]+'</span></div>'+features[key][2]]);}var p=e.target.closest('[data-panel]');if(p)open(panels[p.dataset.panel]);});
 dialog.querySelector('.fs-close').addEventListener('click',function(){dialog.close();});dialog.addEventListener('click',function(e){if(e.target===dialog)dialog.close();});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&dialog.open)dialog.close();});
})();

