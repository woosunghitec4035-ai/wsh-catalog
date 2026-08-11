(function(){
  var params=new URLSearchParams(location.search);
  var series=params.get('series')==='l'?'l':'h';
  var sideImage=document.getElementById('sideProductImage');
  if(sideImage){
    sideImage.src=series==='l'?'assets/img/sdu-l-3p-halfhp-rigid.png':'assets/img/sdu-h-3p-2hp-rigid.png';
    sideImage.alt=series==='l'?'SDU L 시리즈 대표 제품':'SDU H 시리즈 대표 제품';
  }
  if(series!=='h')return;

  var ventFeature=document.querySelector('#featureCards [data-index="9"]');
  if(ventFeature){
    ventFeature.querySelector('span').textContent='기어박스 압력 배출 플러그';
  }

  var guideCopy={
    installation:['설치 전 확인','전원·공간·방향·벤트 플러그 점검'],
    alignment:['축 중심·체결','24mm 조절과 40·45Nm 체결'],
    wiring:['전원·리미트 결선','단상·삼상 구분과 S1·S2·COM']
  };
  Object.keys(guideCopy).forEach(function(key){
    var button=document.querySelector('[data-guide="'+key+'"]');
    if(!button)return;
    button.querySelector('strong').textContent=guideCopy[key][0];
    button.querySelector('small').textContent=guideCopy[key][1];
  });

  function checkItem(number,title,text,tone){
    return '<article class="sdu-check-item '+(tone||'')+'"><b>'+number+'</b><div><strong>'+title+'</strong><p>'+text+'</p></div></article>';
  }
  function metric(value,label,note){
    return '<div class="sdu-install-metric"><strong>'+value+'</strong><span>'+label+'</span><small>'+note+'</small></div>';
  }
  function setDialog(eye,title,lead,body){
    document.getElementById('dialogEye').textContent=eye;
    document.getElementById('dialogTitle').textContent=title;
    document.getElementById('dialogLead').textContent=lead;
    document.getElementById('dialogBody').innerHTML=body;
    document.getElementById('sduDialog').showModal();
  }
  function installation(){
    var body='<div class="sdu-install-layout"><section><h3>작업 시작 전 6가지 확인</h3><div class="sdu-check-grid">'
      +checkItem('01','모델·전원 일치','명판에서 단상 AC220V 또는 삼상 AC380V와 정격 출력을 먼저 확인합니다.','is-blue')
      +checkItem('02','인양·작업 인원','본체는 약 25~28kg입니다. 2인 1조 또는 적정 인양장비를 사용합니다.')
      +checkItem('03','설치 공간 확보','기둥 중심 기준 기기 쪽 400mm, 반대쪽 100mm 이상의 작업 공간을 확보합니다.','is-blue')
      +checkItem('04','설치 방향 결정','모터 또는 리미트 장치의 상·하 방향을 정한 뒤 브라켓 위치를 결정합니다.')
      +checkItem('05','압력 배출용 벤트 플러그','벤트 플러그는 운전 중 뜨거워진 기어박스 내부 공기를 밖으로 빼주는 통기용 마개입니다. 설치 후 가장 높은 위치의 일반 플러그만 교체합니다.','is-warn')
      +checkItem('06','수동 시운전','자동운전 전에 짧게 나누어 구동하며 축 중심, 체결, 누유, 이상음, 정지 위치를 확인합니다.')
      +'</div></section><aside class="sdu-install-side"><img src="assets/img/sdu-h-install-rigid-200.png" alt="SDU 설치 예시"><div class="sdu-install-metrics">'
      +metric('400mm','기기 쪽','기둥 중심 기준')+metric('100mm','반대쪽','최소 작업 공간')+metric('25~28kg','제품 중량','2인 또는 인양장비')
      +'</div><p><b>쉽게 말하면</b> 밀폐된 기어박스가 숨을 쉴 수 있게 하는 작은 공기 배출 마개입니다. 오일을 빼는 배출구가 아닙니다. 낮은 위치에 설치하면 윤활유가 새어 나올 수 있습니다.</p></aside></div>';
    setDialog('BEFORE INSTALLATION','설치 전 확인','설명서의 안전·설치 조건을 작업 순서대로 정리했습니다.',body);
  }
  function alignment(){
    var body='<div class="sdu-torque-layout"><img src="assets/img/sdu-h-install-rigid-200.png" alt="리지드 커플링 축 중심 정렬"><section><div class="sdu-torque-steps">'
      +checkItem('1','세로축 정렬','브라켓 높낮이로 출력축과 구동축의 높이를 맞춘 뒤 브라켓을 고정합니다.')
      +checkItem('2','가로축 정렬','기기를 전후로 이동해 중심을 맞춥니다. 조절 가능 범위는 최대 24mm입니다.','is-blue')
      +checkItem('3','기기 고정','M10×25 고정볼트 4개를 균등하게 체결합니다.')
      +checkItem('4','리지드 체결','슬리브를 먼저 넣고 Ø10 구동축 구멍과 커플링 체결볼트를 맞춥니다.','is-blue')
      +'</div><div class="sdu-torque-values">'+metric('45Nm','브라켓','높이 조절 후')+metric('40Nm','기기 고정','M10×25 · 4개')+metric('45Nm','커플링','리지드 체결볼트')+'</div><p class="sdu-guide-alert"><b>축 중심이 맞지 않으면</b> 진동·소음·베어링 손상과 커플링 이탈의 원인이 됩니다. 체인형은 체인기어 정렬, 체인 체결, 커버 설치 순서를 별도로 확인하십시오.</p></section></div>';
    setDialog('SHAFT ALIGNMENT','축 중심·체결','축 중심 정렬 순서와 설명서의 체결 토크를 한눈에 확인하세요.',body);
  }
  function wiring(){
    var body='<div class="sdu-wiring-layout"><section class="sdu-power-check"><h3>1. 정격전원부터 구분</h3><div><article><b>단상 모델</b><strong>AC220V</strong><p>단상 전용 결선도와 모델 명판을 기준으로 연결합니다.</p></article><article><b>삼상 모델</b><strong>AC380V</strong><p>R·S·T 전원과 U·V·W 모터 단자를 설명서 회로도에 맞춰 연결합니다.</p></article></div><p class="sdu-guide-alert"><b>혼용 금지</b> 단상과 삼상의 회로 및 전원을 서로 혼용하지 마십시오.</p></section><section><h3>2. 리미트 결선 확인</h3><div class="sdu-terminal-flow"><span>컨트롤러</span><i>→</i><b>S1</b><b>COM</b><b>S2</b><i>→</i><span>리미트 장치</span></div><div class="sdu-check-grid compact">'
      +checkItem('A','회전 방향 확인','시계방향은 S1, 반시계방향은 S2 동작을 기준으로 확인합니다.','is-blue')
      +checkItem('B','공통선 연결','컨트롤러 COM과 리미트 장치 COM을 정확히 연결합니다.')
      +checkItem('C','케이블 규격','전원 케이블은 2.5㎟ 이상을 사용하고 단자를 확실히 조입니다.','is-blue')
      +checkItem('D','무부하 시험','결선 후 짧게 구동해 열림·닫힘 방향과 리미트 정지를 확인합니다.')
      +'</div></section></div><p class="sdu-danger"><b>감전·오동작 위험</b> 주전원을 완전히 차단하고 무전압을 확인한 뒤, 자격을 갖춘 전기 작업자가 결선해야 합니다. 회전 방향 변경은 반드시 해당 모델의 설명서 회로도를 기준으로 하십시오.</p>';
    setDialog('POWER & LIMIT WIRING','전원·리미트 결선','단상·삼상 전원을 먼저 구분한 뒤 리미트 단자를 확인합니다.',body);
  }
  document.addEventListener('click',function(event){
    var featureButton=event.target.closest('#featureCards [data-index="9"]');
    if(featureButton){
      event.preventDefault();event.stopImmediatePropagation();
      document.getElementById('featureSummaryTitle').textContent='기어박스 압력 배출 플러그';
      document.getElementById('featureSummaryText').textContent='기어박스 내부의 뜨거워진 공기를 밖으로 빼주는 통기용 마개입니다.';
      setDialog('PRODUCT FEATURE','기어박스 압력 배출용 벤트 플러그','전문 용어보다 역할과 설치 위치를 먼저 확인하세요.','<div class="sdu-dialog-feature"><img src="assets/img/sdu-feature-10-ventplug.png" alt="벤트 플러그 설치 위치"><article><strong>벤트 플러그란?</strong><p>운전 중 기어박스 내부의 공기와 윤활유가 따뜻해지면 내부 압력이 올라갑니다. 벤트 플러그는 이 공기를 밖으로 배출해 압력이 쌓이지 않도록 돕는 통기용 마개입니다.</p><strong>어디에 설치하나요?</strong><p>제품의 설치 방향을 먼저 정한 뒤, 가장 높은 위치의 일반 플러그 하나만 벤트 플러그로 교체합니다. 낮은 위치의 플러그는 그대로 둡니다.</p><strong>주의</strong><p>낮은 위치에 설치하면 윤활유가 벤트 구멍으로 새어 나올 수 있습니다. 오일 배출용 플러그가 아닙니다.</p></article></div>');
      return;
    }
    var button=event.target.closest('[data-guide="installation"],[data-guide="alignment"],[data-guide="wiring"]');
    if(!button)return;
    event.preventDefault();event.stopImmediatePropagation();
    if(button.dataset.guide==='installation')installation();
    else if(button.dataset.guide==='alignment')alignment();
    else wiring();
  },true);
})();
