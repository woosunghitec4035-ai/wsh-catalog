(function(){
  if(new URLSearchParams(location.search).get('series')!=='l')return;

  var features=[
    ['고효율 전동모터','스크린 개폐에 필요한 구동력을 효율적으로 전달하는 삼상 전동모터를 적용했습니다.','sdu-l-feature-product.png',['삼상 AC380V·0.4kW 전용 모델','스크린 개폐용 감속기와 일체형 구성','명판의 정격전원과 출력을 설치 전에 확인']],
    ['구동축 동심 맞춤 브라켓','출력축과 현장 구동축의 중심을 맞추기 쉽도록 조절 가능한 브라켓 구조를 적용했습니다.','sdu-l-install-overview.png',['축 중심 불일치로 생기는 편심을 줄이는 설치 구조','기둥 규격에 맞는 브라켓·U볼트 선택','최종 체결 전에 축을 손으로 돌려 간섭 여부 확인']],
    ['안전 전원단자대 박스','전원과 제어 배선을 단자대 박스 안에 정리해 접속부를 보호하고 점검이 쉽도록 구성했습니다.','sdu-l-structure.png',['외부에 노출되는 배선 접속부를 박스 내부에 배치','단자대 커버로 우발적인 접촉 방지','전기 결선은 전원을 차단한 뒤 전문가가 작업']],
    ['분체도장 표면처리','본체 외부 표면을 분체도장으로 마감해 제품 외관과 표면 보호성을 높였습니다.','sdu-l-feature-product.png',['금속 본체 표면에 균일한 도장층 형성','현장 오염과 일상적인 접촉으로부터 표면 보호','도장 손상 부위는 부식 여부를 정기적으로 점검']],
    ['13mm 복스 비상작동','정전이나 점검 시 전원을 차단한 상태에서 13mm 육각 복스로 수동 비상작동할 수 있습니다.','sdu-l-structure.png',['13mm 육각 소켓과 충전드릴 사용','반드시 주전원을 차단하고 무전압 확인','저속으로 짧게 작동하며 이동 방향과 간섭 확인']],
    ['클러치 브레이크 옵션','정지 위치 유지 성능을 보강해야 하는 현장에서는 클러치 브레이크를 옵션으로 선택할 수 있습니다.','sdu-l-feature-product.png',['현장 부하와 스크린 조건에 따라 선택','정지 후 역회전 억제와 위치 유지 보조','옵션 적용 여부는 주문 및 설치 전에 확인']],
    ['다이캐스트 밀폐형 기어박스','감속 기어를 다이캐스트 밀폐형 케이스 안에 배치해 주요 구동부를 보호합니다.','sdu-l-feature-gears.png',['기어와 윤활부를 하나의 밀폐형 케이스에 수용','외부 이물질의 직접 접촉을 줄이는 구조','케이스 균열·볼트 풀림·누유 여부를 정기 점검']],
    ['침탄 열처리 기어·ALBC 웜휠','침탄 열처리 기어와 ALBC 재질 웜휠을 조합한 감속 구조를 적용했습니다.','sdu-l-feature-gears.png',['기어 접촉면의 내구성을 고려한 침탄 열처리','ALBC 웜휠과 웜축의 감속 구동','이상 소음이나 진동 발생 시 즉시 운전 중지 후 점검']],
    ['셀프록킹 웜휠각 3°57′','웜휠각 3°57′의 셀프록킹 구조로 정지 시 역회전을 억제하고 위치 유지에 도움을 줍니다.','sdu-l-feature-gears.png',['웜기어 구조를 이용한 자체 제동 특성','스크린 정지 위치 유지 보조','실제 유지 성능은 설치 부하와 옵션 구성에 따라 확인']],
    ['롱라이프 윤활유 충진','기어박스 내부에 윤활유를 충진해 기어 접촉부의 마찰과 마모를 줄이도록 구성했습니다.','sdu-l-feature-gears.png',['기어와 베어링 접촉부 윤활','출고 상태의 지정 윤활 조건 유지','누유가 보이면 운전을 멈추고 원인을 확인']],
    ['균압 유지 벤트 플러그','기어박스 내부의 뜨거워진 공기를 배출해 압력이 쌓이지 않도록 돕는 통기용 마개입니다.','sdu-l-structure.png',['설치 방향을 정한 뒤 가장 높은 위치에 설치','낮은 위치의 일반 플러그는 그대로 유지','오일 배출구가 아니며 낮게 설치하면 윤활유가 샐 수 있음']],
    ['방수 리미트 박스','열림·닫힘 정지 위치를 설정하는 리미트 장치를 별도 박스 안에 배치해 보호합니다.','sdu-l-feature-limit.png',['리미트 설정기와 스위치를 박스 내부에 수용','외부 접촉과 물방울 유입을 줄이는 보호 구조','침수되거나 물이 직접 분사되는 장소는 피해서 설치']],
    ['슬라이딩 스크류 방식','출력축 회전에 따라 설정기가 스크류를 따라 이동하는 방식으로 리미트 위치를 제어합니다.','sdu-l-feature-limit.png',['스크류 이동량으로 열림·닫힘 위치 설정','좌우 설정기가 각 방향의 정지점을 담당','설정 전 이동 방향과 스위치 위치를 먼저 확인']],
    ['리미트 거리 정밀 설정','현장의 스크린 이동거리에 맞춰 열림과 닫힘 정지 위치를 세밀하게 조절할 수 있습니다.','sdu-l-feature-limit.png',['열림·닫힘 위치를 각각 설정','설정 후 저속 수동운전으로 정지점 반복 확인','구조물에 닿기 전에 충분한 안전 여유 확보']],
    ['2중 안전 리미트 스위치','주 리미트 이상 시 추가 안전 스위치가 동작하도록 이중 정지 구조를 적용했습니다.','sdu-l-feature-limit.png',['정상 정지용 스위치와 안전 스위치 구성','비정상 과주행 시 추가 보호 기능','안전 스위치가 작동하면 원인을 점검한 뒤 재사용']],
    ['타이밍벨트·푸시앤턴 세터','출력축과 리미트 장치를 타이밍벨트로 연동하고, 푸시앤턴 세터로 정지 위치를 설정합니다.','sdu-l-feature-limit.png',['타이밍벨트로 출력축 회전을 리미트 장치에 전달','세터를 누르고 돌려 원하는 위치 설정','설정 후 세터가 확실히 잠겼는지 확인']]
  ];

  var guideItems=[
    ['외형 치수','전체 크기와 출력축 타입','l-dimensions'],
    ['각부 명칭','L 시리즈 주요 장치 구성','l-structure'],
    ['브라켓','브라켓·U볼트·고정볼트','l-bracket'],
    ['체인 커플링 부품','4016 체인기어·체인 구성','l-chain'],
    ['리지드 커플링 부품','25A·40A 커플링과 체결볼트','l-rigid'],
    ['커플링 설치','체인형·리지드형 연결 비교','l-coupling'],
    ['설치 전 확인','기둥·축·공간·방향 점검','l-before'],
    ['설치 구성','브라켓과 커플링 조립 순서','l-install'],
    ['적용 예시','랙기어·스트링터그 적용','l-application'],
    ['리미트 확인','정지 위치와 안전점검','l-limit']
  ];

  function setDialog(eye,title,lead,body){
    document.getElementById('dialogEye').textContent=eye;
    document.getElementById('dialogTitle').textContent=title;
    document.getElementById('dialogLead').textContent=lead||'';
    document.getElementById('dialogBody').innerHTML=body;
    document.getElementById('sduDialog').showModal();
  }
  function gallery(items){return '<div class="sdu-dialog-gallery">'+items.map(function(x){return '<figure><img src="assets/img/'+x[1]+'" alt="'+x[0]+'"><figcaption>'+x[0]+'</figcaption></figure>';}).join('')+'</div>';}
  function partCards(items){return '<div class="sdu-l-parts-grid count-'+items.length+'">'+items.map(function(x){return '<article>'+(x[2]?'<img src="assets/img/'+x[2]+'" alt="'+x[0]+'">':'<div class="sdu-image-pending"><b>IMAGE</b><span>정확한 부품 이미지<br>교체 예정</span></div>')+'<strong>'+x[0]+'</strong><small>'+x[1]+'</small></article>';}).join('')+'</div>';}
  function info(items,note){return '<div class="sdu-check-grid">'+items.map(function(x,i){return '<article class="sdu-check-item"><b>'+String(i+1).padStart(2,'0')+'</b><div><strong>'+x[0]+'</strong><p>'+x[1]+'</p></div></article>';}).join('')+'</div>'+(note?'<p class="sdu-guide-alert">'+note+'</p>':'');}

  var featureBox=document.getElementById('featureCards');
  featureBox.innerHTML=features.map(function(x,i){return '<button type="button" data-l-feature="'+i+'"><b>'+String(i+1).padStart(2,'0')+'</b><span>'+x[0]+'</span></button>';}).join('');
  document.getElementById('featureSummaryTitle').textContent=features[0][0];
  document.getElementById('featureSummaryText').textContent=features[0][1];

  var guideBox=document.getElementById('guideCards');
  guideBox.innerHTML=guideItems.map(function(x,i){return '<button type="button" data-l-guide="'+x[2]+'"><b>'+String(i+1).padStart(2,'0')+'</b><span><strong>'+x[0]+'</strong><small>'+x[1]+'</small></span><em>›</em></button>';}).join('');

  document.addEventListener('click',function(event){
    var featureButton=event.target.closest('[data-l-feature]');
    if(featureButton){
      event.preventDefault();event.stopImmediatePropagation();
      var feature=features[Number(featureButton.dataset.lFeature)];
      document.getElementById('featureSummaryTitle').textContent=feature[0];
      document.getElementById('featureSummaryText').textContent=feature[1];
      setDialog('L SERIES FEATURE',feature[0],feature[1],'<div class="sdu-dialog-feature"><img src="assets/img/'+feature[2]+'" alt="'+feature[0]+'"><article><strong>기능 설명 <span class="sdu-review-badge">검토 요청</span></strong><p>'+feature[1]+'</p><strong>현장 확인 사항</strong><ul class="sdu-l-feature-points">'+feature[3].map(function(point){return '<li>'+point+'</li>';}).join('')+'</ul><p class="sdu-l-source-note"><b>검토 요청:</b> L 시리즈 제품특징 자료를 기준으로 정리한 내용이며, 담당자 확인이 필요합니다.</p></article></div>');
      return;
    }
    var button=event.target.closest('[data-l-guide]');
    if(!button)return;
    event.preventDefault();event.stopImmediatePropagation();
    var type=button.dataset.lGuide,title=button.querySelector('strong').textContent,lead=button.querySelector('small').textContent,body='';
    if(type==='l-dimensions') body=gallery([['삼상 1/2마력 외형 치수','sdu-l-drawing-3p-halfhp.png']]);
    else if(type==='l-structure') body=gallery([['L 시리즈 제품 구조','sdu-l-structure.png']]);
    else if(type==='l-bracket') body=partCards([['브라켓','기둥 고정용','sdu-l-bracket.png'],['U볼트 세트','현재 이미지 확인 중 · 교체 예정',null],['기기 고정볼트','브라켓과 기기 체결','sdu-l-bracket-bolts.png']]);
    else if(type==='l-chain') body=partCards([['4016 체인기어','25A 구동축용','sdu-l-chain-gear.png'],['4016 체인','체인기어 연결용','sdu-l-chain.png'],['체인 안전 커버','회전하는 체인 커플링 보호용','sdu-l-chain-safety-cover.png'],['체인 커플링형 제품','삼상 1/2마력','sdu-l-3p-halfhp-chain.png']]);
    else if(type==='l-rigid') body=partCards([['25A 리지드 커플링','Ø35 · 120mm','sdu-l-rigid-25a.png'],['40A 리지드 커플링','Ø50 · 120mm','sdu-l-rigid-40a.png'],['리지드 체결볼트','커플링 체결용 1팩','sdu-l-rigid-bolts.png']]);
    else if(type==='l-coupling') body=gallery([['리지드 커플링 연결','sdu-l-install-rigid.png'],['체인 커플링 연결','sdu-l-install-chain.png']]);
    else if(type==='l-before') body=info([['모델·전원 확인','삼상 AC380V·0.4kW·1/2마력 모델인지 명판을 확인합니다.'],['기둥 규격 확인','40A 또는 50A 기둥과 브라켓·U볼트 구성이 맞는지 확인합니다.'],['구동축 규격 확인','리지드형은 25A 또는 40A, 체인형은 25A 구동축 구성을 확인합니다.'],['설치 방향 확인','출력축과 구동축 중심, 모터·리미트 장치 방향과 작업 공간을 확인합니다.']],'자동운전 전에 짧게 시운전하며 회전 방향·이상음·진동·정지 위치를 점검하십시오.');
    else if(type==='l-install') body=gallery([['L 시리즈 설치 구성','sdu-l-install-overview.png'],['리지드 연결','sdu-l-install-rigid.png'],['체인 연결','sdu-l-install-chain.png']]);
    else if(type==='l-application') body=gallery([['랙·피니언 적용','sdu-l-cad-rack.png'],['스트링터그 적용','sdu-l-cad-string.png']]);
    else body=gallery([['정밀 리미트 장치','sdu-l-feature-limit.png']])+info([['열림 위치','원하는 최대 열림 위치에서 리미트 정지점을 설정합니다.'],['닫힘 위치','스크린 장력과 구조물을 확인하며 닫힘 정지점을 설정합니다.'],['시험 운전','자동운전 전에 수동으로 열림·닫힘 정지 위치를 반복 확인합니다.'],['안전 점검','리미트가 정상 정지하지 않으면 즉시 운전을 중지하고 점검합니다.']]);
    setDialog('L SERIES GUIDE',title,lead,body);
  },true);
})();
