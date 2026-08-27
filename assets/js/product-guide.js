(function () {
 var start = document.getElementById('productGuideStart');
 if (!start) return;

 var dialog = document.createElement('dialog');
 dialog.className = 'product-guide-dialog';
 dialog.innerHTML = '<header class="product-guide-head"><div><small>PRODUCT GUIDE</small><h2>제품 선택 도우미</h2></div><button type="button" class="product-guide-close" aria-label="닫기">×</button></header><div class="product-guide-progress"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="product-guide-body"></div>';
 document.body.appendChild(dialog);

 var area = dialog.querySelector('.product-guide-body');
 var progress = dialog.querySelectorAll('.product-guide-progress span');
 var answers = {};
 var history = [];

 var questions = {
  purpose: {
   title: '무엇을 관리하려고 하나요?',
   copy: '제품 이름보다 실제 사용 목적을 먼저 선택하세요.',
   options: [
    ['vent', '자연환기창', '측창·천창의 비닐을 열고 닫기'],
    ['warm', '보온재', '다겹 보온피복재를 열고 닫기'],
    ['water', '물·양액', '관수·액비·양액 공급을 관리'],
    ['environment', '온실 통합관리', '환기·관수·기상환경을 함께 관리'],
    ['unsure', '아직 모르겠어요', '주요 제품군을 먼저 비교']
   ]
  },
  equipment: {
   title: '어느 부분이 필요한가요?',
   copy: '구동장치와 컨트롤러의 역할이 다릅니다.',
   options: [
    ['drive', '전동개폐기', '환기창이나 보온재를 실제로 움직이는 장치'],
    ['controller', '컨트롤러', '전동개폐기를 수동·자동으로 운전하는 장치'],
    ['system', '두 장치 모두', '전동개폐기와 컨트롤러를 함께 구성'],
    ['unsure', '잘 모르겠어요', '전체 시스템 구성부터 확인']
   ]
  },
  operation: {
   title: '어떻게 운전하고 싶나요?',
   copy: '현재 운전 방식과 향후 중앙제어 확장 계획을 함께 고려하세요.',
   options: [
    ['manual', '현장에서 직접 조작', '각 스위치로 열림·정지·닫힘을 수동 운전'],
    ['semi', '수동 + 외부신호 연동', '현장 조작과 센트럴 릴레이 신호 연동'],
    ['auto', '조건에 따라 자동운전', '시간 또는 온도 조건으로 자동 운전'],
    ['integrated', '원격·통합제어', '중앙 시스템에서 여러 설비를 함께 관리'],
    ['unsure', '아직 모르겠어요', '운전 방식별 제품군을 비교']
   ]
  },
  autoBasis: {
   title: '자동운전의 기준은 무엇인가요?',
   copy: '자동 모델을 구분하는 가장 중요한 기준입니다.',
   options: [
    ['time', '매일 정해진 시각', '온도와 관계없이 열림·닫힘 시각으로 운전'],
    ['temperature', '한 가지 목표온도', '설정온도를 기준으로 환기창 운전'],
    ['variable', '시간대별 목표온도', '낮과 밤 등 시간대별로 목표온도를 변경'],
    ['fixedMixed', '온도 1구역 + 시간 1구역', '두 구역의 제어 기준이 온도와 시간으로 고정'],
    ['flexible', '구역별 조건 선택·기상대응', '각 구역의 온도·시간 선택과 강우·풍속 관리'],
    ['unsure', '아직 모르겠어요', '자동 시리즈의 기능 차이를 비교']
   ]
  },
  channels: {
   title: '서로 다른 조건으로 운전할 구역은 몇 개인가요?',
   copy: '채널은 개폐기 대수가 아니라 서로 다른 설정으로 움직이는 독립 제어구역입니다.',
   options: [
    ['one', '1채널', '모든 환기창이 같은 시간·온도 조건으로 작동'],
    ['two', '2채널', '두 구역을 서로 다른 조건으로 독립 운전'],
    ['unsure', '잘 모르겠어요', '1채널과 2채널 모델을 함께 비교']
   ]
  },
  cultivation: {
   title: '어떤 재배 방식인가요?',
   copy: '토양 관수와 배지·수경재배의 정밀 양액 공급은 필요한 장비가 다릅니다.',
   options: [
    ['soil', '토양 재배', '토양에 물 또는 액비를 구역별 공급'],
    ['substrate', '배지·수경재배', 'EC·pH를 관리하며 배양액을 정밀 공급'],
    ['both', '두 방식 모두', '토양 관수와 정밀 양액 공급을 함께 비교'],
    ['unsure', '아직 모르겠어요', '두 제품군의 차이부터 확인']
   ]
  },
  waterNeed: {
   title: '가장 필요한 관리 기능은 무엇인가요?',
   copy: '선택한 재배 방식 안에서 실제 운전 목적을 확인합니다.',
   options: [
    ['zones', '구역별 관수·액비', '여러 구역을 나누어 유량 또는 시간 기준으로 공급'],
    ['precision', 'EC·pH 정밀 양액', '설정 농도와 산도를 기준으로 배양액 공급'],
    ['records', '운전 확인·기록', '공급 상태와 최근 운전 내용을 확인'],
    ['connection', '팜시스 연계', '외부 시스템 연결을 고려한 구성'],
    ['unsure', '아직 모르겠어요', '재배 방식에 맞춰 먼저 추천']
   ]
  },
  supplyDemand: {
   title: '필요한 순간 공급량을 계산해 주세요',
   copy: '전체 재배면적보다 동시에 물을 공급하는 점적기 수가 중요합니다.',
   options: []
  },
  pipeCondition: {
   title: '공급 배관의 거리와 높이 조건은 어떤가요?',
   copy: '거리가 길거나 높이 차이가 크면 같은 공급량이라도 더 큰 여유가 필요합니다.',
   options: [
    ['easy', '짧고 높이 차이가 작음', '공급기와 재배구역이 가깝고 평탄한 편'],
    ['normal', '보통', '일반적인 시설 내 배관 조건'],
    ['hard', '길거나 높이 차이가 큼', '장거리 배관 또는 고저차가 있는 현장'],
    ['unknown', '확인이 필요함', '현장 배관도와 압력 검토 필요']
   ]
  },
  zoneLoad: {
   title: '동시에 관수할 구역은 몇 개인가요?',
   copy: '전체 구역 수가 아니라 같은 시간에 함께 공급하는 구역 수를 선택하세요.',
   options: [
    ['one', '1개 구역', '구역을 순차적으로 하나씩 공급'],
    ['two', '2개 구역', '두 구역을 동시에 공급'],
    ['many', '3개 구역 이상', '동시 공급 유량과 배관 압력 검토가 중요'],
    ['unknown', '운전계획 미정', '구역 구성과 공급 순서를 함께 설계']
   ]
  },
  supplyPower: {
   title: '설치 장소에서 사용할 수 있는 전원은 무엇인가요?',
   copy: '단상 220V만 가능한 현장과 삼상 380V 사용 가능 현장의 선택 모델이 다릅니다.',
   options: [
    ['single', '단상 220V만 가능', 'WIN-7000S 또는 WIN-5000S 중심 검토'],
    ['three', '삼상 380V 사용 가능', '중·고용량 모델까지 검토 가능'],
    ['unknown', '아직 모름', '분전반과 인입전원 확인 필요']
   ]
  },
  mixingType: {
   title: '원수와 양액을 어떤 방식으로 혼합할까요?',
   copy: '혼합탱크형과 직접주입형은 설치 구조와 운전 방식이 다릅니다.',
   options: [
    ['tank', '혼합탱크형', '탱크에서 혼합한 뒤 재배구역으로 공급'],
    ['direct', '직접주입형', '혼합탱크 없이 배관에서 연속 혼합'],
    ['unknown', '현장에 맞춰 추천', '설치공간과 운전조건을 함께 비교']
   ]
  },
  remoteNeed: {
   title: '농장 밖에서도 상태를 확인해야 하나요?',
   copy: '인젝션 매니저는 별도 구매 제품이며 적용 모델과 프로그램 버전을 확인해야 합니다.',
   options: [
    ['yes', '원격 확인·제어 필요', 'PC·태블릿·휴대폰에서 상태 확인'],
    ['later', '향후 도입 검토', '현재는 기본 운전, 추후 원격관리 확장'],
    ['no', '현장 운전만 필요', '농장 PC와 제어기 중심으로 사용']
   ]
  },
  environmentScope: {
   title: '통합 관리 범위는 어디까지인가요?',
   copy: '관리하려는 설비 범위에 따라 개별 컨트롤러와 통합 시스템을 구분합니다.',
   options: [
    ['vent', '환기창 중심', '온도·강우·풍속 조건으로 환기창 관리'],
    ['water', '관수·양액 중심', '관수 상태와 양액 공급 관리'],
    ['all', '온실 전체', '환기·관수·기상환경을 한 시스템에서 관리'],
    ['unsure', '아직 모르겠어요', '전체 제품군에서 관리 범위를 비교']
   ]
  }
 };

 function nextQuestion(key, value) {
  answers[key] = value;
  if (key === 'purpose') {
   if (value === 'water') return 'cultivation';
   if (value === 'environment') return 'environmentScope';
   if (value === 'unsure') return null;
   return 'equipment';
  }
  if (key === 'equipment') {
   if (value === 'drive' || value === 'unsure') return null;
   return 'operation';
  }
  if (key === 'operation') return value === 'auto' ? 'autoBasis' : null;
  if (key === 'autoBasis') return value === 'fixedMixed' ? null : 'channels';
  if (key === 'cultivation') return 'waterNeed';
  if (key === 'waterNeed') return answers.cultivation === 'substrate' ? 'supplyDemand' : null;
  if (key === 'supplyDemand') return 'pipeCondition';
  if (key === 'pipeCondition') return 'zoneLoad';
  if (key === 'zoneLoad') return 'supplyPower';
  if (key === 'supplyPower') return 'mixingType';
  if (key === 'mixingType') return 'remoteNeed';
  return null;
 }

 function renderProgress() {
  progress.forEach(function (item, index) {
   item.classList.toggle('on', index < Math.min(history.length + 1, progress.length));
  });
 }

 function showQuestion(key, addHistory) {
  if (addHistory !== false) history.push(key);
  renderProgress();
  var question = questions[key];
  if (key === 'supplyDemand') {
   area.innerHTML = '<section class="product-guide-question supply-calculator"><h3>' + question.title + '</h3><p>' + question.copy + '</p><div class="supply-input-panels"><section><b>필요 유량을 알고 있어요</b><label><span>필요 공급량</span><input type="number" min="1" step="0.1" id="knownFlow" placeholder="예: 145"><em>L/분</em></label><button type="button" class="supply-calc-next" data-flow-source="known">이 유량으로 계속</button></section><section><b>점적기 기준으로 계산할게요</b><label><span>동시에 작동하는 점적기 수</span><input type="number" min="1" step="1" id="dripperCount" placeholder="예: 2000"><em>개</em></label><label><span>점적기 1개당 토출량</span><input type="number" min="0.1" step="0.1" id="dripperFlow" placeholder="예: 2"><em>L/시간</em></label><button type="button" class="supply-calc-next" data-flow-source="calculate">자동 계산하고 계속</button></section></div><div class="supply-formula"><b>계산식</b><span>동시 작동 점적기 수 × 점적기당 시간당 토출량 ÷ 60</span><strong id="supplyCalcResult">입력값을 기준으로 필요한 L/분을 계산합니다.</strong></div><button type="button" class="supply-unknown">아직 계산할 수 없어요</button>' + (history.length > 1 ? '<button type="button" class="guide-back">‹ 이전 질문</button>' : '') + '</section>';
   area.querySelectorAll('.supply-calc-next').forEach(function(button){ button.addEventListener('click', function(){ var flow; if(button.dataset.flowSource==='known') flow=parseFloat(area.querySelector('#knownFlow').value); else { var count=parseFloat(area.querySelector('#dripperCount').value); var each=parseFloat(area.querySelector('#dripperFlow').value); if(count>0&&each>0) flow=count*each/60; } if(!(flow>0)){ area.querySelector('#supplyCalcResult').textContent='올바른 숫자를 입력해 주세요.'; area.querySelector('#supplyCalcResult').classList.add('error'); return; } answers.supplyDemand=Math.round(flow*10)/10; showQuestion('pipeCondition'); }); });
   area.querySelector('.supply-unknown').addEventListener('click',function(){ answers.supplyDemand='unknown'; showQuestion('pipeCondition'); });
   var backCalc=area.querySelector('.guide-back'); if(backCalc) backCalc.addEventListener('click',goBack); return;
  }
  area.innerHTML = '<section class="product-guide-question"><h3>' + question.title + '</h3><p>' + question.copy + '</p><div class="product-guide-options">' + question.options.map(function (option) {
   return '<button type="button" class="product-guide-option" data-value="' + option[0] + '"><b>' + option[1] + '</b><span>' + option[2] + '</span></button>';
  }).join('') + '</div>' + (history.length > 1 ? '<button type="button" class="guide-back">‹ 이전 질문</button>' : '') + '</section>';
  area.querySelectorAll('[data-value]').forEach(function (button) {
   button.addEventListener('click', function () {
    var next = nextQuestion(key, button.dataset.value);
    if (next) showQuestion(next);
    else showResult();
   });
  });
  var back = area.querySelector('.guide-back');
  if (back) back.addEventListener('click', goBack);
 }

 function goBack() {
  var current = history.pop();
  delete answers[current];
  var previous = history[history.length - 1];
  delete answers[previous];
  showQuestion(previous, false);
 }

 function result(title, copy, links, note) {
  return {title: title, copy: copy, links: links, note: note || ''};
 }

 function nutrientResult() {
  var demand = answers.supplyDemand;
  var pipe = answers.pipeCondition;
  var zones = answers.zoneLoad;
  var power = answers.supplyPower;
  var mixing = answers.mixingType;
  var remote = answers.remoteNeed;
  var primary = 'WIN-7000S';
  var alternative = 'WIN-8000S';
  var capacity = '최대 130L/분';
  var reason = '단상 220V에서 사용할 수 있는 탱크혼합형 모델로, 비교적 낮은 공급량의 시설에 적합합니다.';
  var warning = '';

  var numericDemand = typeof demand === 'number' ? demand : null;
  if (mixing === 'direct') {
   primary = 'WIN-5000S'; alternative = 'WIN-7000S'; capacity = '직접주입형 · 최대 130L/분';
   reason = '혼합탱크 없이 스마트 믹싱챔버와 배관에서 원수와 양액을 연속 혼합하는 조건에 맞습니다.';
  } else if (power === 'single') {
   primary = 'WIN-7000S'; alternative = mixing === 'unknown' ? 'WIN-5000S' : 'WIN-8000S';
   if (numericDemand && numericDemand > 130) warning = '계산된 공급량은 단상 220V 일반 모델의 최대 공급량을 넘습니다. 삼상 전원 확보 또는 관수구역 순차 운전을 검토해야 합니다.';
  } else if (numericDemand && numericDemand <= 130) {
   primary = 'WIN-7000S'; alternative = numericDemand > 115 ? 'WIN-8000S' : 'WIN-5000S'; capacity = '최대 130L/분';
  } else if (numericDemand && numericDemand <= 160) {
   primary = 'WIN-8000S'; alternative = 'WIN-9000S'; capacity = '최대 160L/분'; reason = '요구 공급량에 맞는 중형 탱크혼합 모델이며, 대안 모델은 공급 여유를 더 확보할 수 있습니다.';
  } else if (numericDemand && numericDemand <= 200) {
   primary = 'WIN-9000S'; alternative = 'WIN-9300S'; capacity = '최대 200L/분'; reason = '중·대형 시설의 공급량에 대응하는 표준 탱크혼합 모델입니다.';
  } else if (numericDemand && numericDemand <= 300) {
   primary = 'WIN-9300S'; alternative = 'WIN-9000S'; capacity = '최대 300L/분'; reason = '대규모 시설과 높은 공급량을 고려한 고용량 탱크혼합 모델입니다.';
  } else if (numericDemand && numericDemand > 300) {
   primary = '대형 주문제작 모델'; alternative = 'WIN-9300S'; capacity = '300L/분 초과 · 현장 설계 필요'; reason = '일반 WIN 모델의 최대 공급 범위를 넘어 공급압력·배관·전원·동시 관수량을 기준으로 주문제작 검토가 필요합니다.'; warning = 'S10·S15 등 주문제작 모델의 최종 제원은 현장 조건 검토 후 결정해야 합니다.';
  } else if (demand === 'unknown') {
   primary = power === 'single' ? 'WIN-7000S' : 'WIN-9000S'; alternative = power === 'single' ? 'WIN-5000S' : 'WIN-9300S'; capacity = '현장 계산 후 최종 결정'; reason = '필요 공급량이 정해지지 않아 전원과 혼합 방식을 기준으로 1차 후보를 제시했습니다.';
  }

  var rated = {'WIN-5000S':130,'WIN-7000S':130,'WIN-8000S':160,'WIN-9000S':200,'WIN-9300S':300}[primary];
  if (numericDemand && rated && numericDemand >= rated * .9) warning += (warning ? ' ' : '') + '계산 유량이 추천 모델 최대용량의 90% 이상입니다. 배관 손실을 반영해 상위 모델도 함께 검토하세요.';
  if ((pipe === 'hard' || zones === 'many') && primary !== 'WIN-9300S' && primary !== '대형 주문제작 모델') warning += (warning ? ' ' : '') + '장거리·고저차 배관 또는 3개 이상 동시 관수는 한 단계 큰 모델과 배관 압력 계산을 함께 검토하세요.';
  var remoteText = remote === 'yes' ? '인젝션 매니저 원격관리를 함께 검토하세요. 별도 구매 제품이며 인터넷·현장 서버 PC·프로그램 버전 확인이 필요합니다.' : remote === 'later' ? '추후 인젝션 매니저 연결을 고려해 프로그램 버전과 현장 인터넷 구성을 미리 확인하는 것이 좋습니다.' : '현장 운전 중심 구성으로 검토했습니다.';
  return {
   title: primary,
   copy: reason,
   links: primary === '대형 주문제작 모델' ? [['주문제작 모델 비교 보기 ›', 'nutrient-system-layout6.html'], ['양액공급기 전체 비교 ›', 'nutrient-system-layout6.html']] : [['1순위 모델 상세 보기 ›', 'win-9300s.html' + (primary === 'WIN-9300S' ? '' : '?model=' + primary)], ['양액공급기 전체 비교 ›', 'nutrient-system-layout6.html']],
   note: warning,
   alternative: alternative,
   capacity: capacity,
   reasons: ['계산 공급량: ' + (numericDemand ? numericDemand.toLocaleString() + 'L/분' : '계산 필요'), '배관 조건: ' + ({easy:'짧고 평탄',normal:'보통',hard:'장거리·고저차',unknown:'현장 확인 필요'}[pipe] || '확인 필요'), '동시 관수: ' + ({one:'1개 구역',two:'2개 구역',many:'3개 구역 이상',unknown:'운전계획 확인 필요'}[zones] || '확인 필요')],
   remote: remoteText
  };
 }

 function automaticResult(warm) {
  var basis = answers.autoBasis;
  var channel = answers.channels;
  var suffix = warm ? ' 보온재용 구성에서는 100W 이상 출력 모델과 호환 개폐기를 반드시 확인하세요.' : '';
  if (basis === 'fixedMixed') return result('WFTC 시리즈', '1채널은 온도, 2채널은 시간 조건으로 고정하여 두 구역을 분리 운전합니다.' + suffix, [['WFTC 상세 보기 ›', 'wftc-series.html']]);
  if (channel === 'two') return result('RVC 시리즈', '두 채널에서 각각 온도 또는 시간제어를 선택하고 서로 다른 설정으로 독립 운전합니다.' + suffix, [['RVC 상세 보기 ›', 'rvc-series.html']]);
  if (basis === 'time' && channel === 'one') return result('WSDT 시리즈', '한 채널의 환기창을 매일 정해진 열림·닫힘 시각에 맞춰 자동 운전합니다.' + suffix, [['WSDT 상세 보기 ›', 'wsdt-series.html']]);
  if (basis === 'temperature' && channel === 'one') return result('TTC 시리즈', '한 채널에서 온도제어를 선택하여 목표온도 기준으로 자동 운전하는 데 적합합니다.' + suffix, [['TTC 상세 보기 ›', 'ttc-series.html']]);
  if (basis === 'variable' && channel === 'one') return result('WFVC 시리즈', '한 채널에서 하루를 최대 네 시간대로 나누어 목표온도를 다르게 관리합니다.' + suffix, [['WFVC 상세 보기 ›', 'wfvc-series.html']]);
  if (basis === 'flexible' && channel === 'one') return result('SVC 시리즈', '5인치 화면에서 한 채널의 5단 변온 또는 시간제어를 선택하고 기상조건까지 관리합니다.' + suffix, [['SVC 상세 보기 ›', 'svc-series.html']]);
  return result('자동 롤업마스터 비교', '시간·온도 기준과 독립 제어구역 수를 확인하면 적합한 시리즈를 정확하게 좁힐 수 있습니다.' + suffix, [['자동 시리즈 비교하기 ›', 'rollupmaster-select.html?view=auto']]);
 }

 function recommendation() {
  var purpose = answers.purpose;
  var equipment = answers.equipment;
  var operation = answers.operation;
  if (purpose === 'vent' || purpose === 'warm') {
   var warm = purpose === 'warm';
   if (equipment === 'drive') return result(warm ? '보온재용 롤업스타' : '비닐용 롤업스타', warm ? '다겹 보온피복재의 무게와 현장 부하에 맞춰 고토크 전동개폐기를 선택합니다.' : '자연환기창의 비닐을 직접 감아 올리고 내리는 DC24V 전동개폐기입니다.', [[warm ? '보온재용 모델 보기 ›' : '비닐용 모델 보기 ›', warm ? 'warm-opener.html' : 'rollupstar-select.html']]);
   if (equipment === 'unsure') return result(warm ? '보온재 개폐 시스템' : '자연환기창 제어시스템', '전동개폐기가 실제로 움직이고 롤업마스터가 운전 신호를 보내므로 두 장치의 역할을 함께 확인하는 것이 좋습니다.', [['전체 시스템 보기 ›', warm ? 'warm-system.html' : 'vent-system.html']]);
   if (operation === 'manual') return result('RMP·WRM 수동 시리즈', '현장에서 각 스위치를 직접 조작하는 경제적인 수동 컨트롤러입니다.' + (warm ? ' 보온재용은 100W 이상 출력을 확인하세요.' : ''), [['수동 시리즈 보기 ›', 'rmp-series.html']]);
   if (operation === 'semi') return result('D 반자동 시리즈', '자체 수동운전과 센트럴 컨트롤러의 릴레이 신호 연동을 함께 사용할 수 있어 향후 중앙제어 확장에 유리합니다.' + (warm ? ' 보온재용은 100W 이상 출력을 확인하세요.' : ''), [['D 시리즈 보기 ›', 'd-series.html']]);
   if (operation === 'auto') return automaticResult(warm);
   if (operation === 'integrated') return result('통합 환경제어 구성 상담', '환기창뿐 아니라 관수·기상센서 등 여러 설비의 통합 범위와 신호 방식을 현장별로 확인해야 합니다.', [['관련 제품 전체 보기 ›', 'index.html']], '통합제어는 연결 대상과 주문 사양에 따라 구성이 달라질 수 있습니다.');
   return result('롤업마스터 운전 방식 비교', '직접 수동운전, 외부신호 연동, 시간·온도 자동운전의 차이를 먼저 비교하세요.', [['롤업마스터 선택하기 ›', 'rollupmaster-select.html' + (warm ? '?usage=warm' : '')]]);
  }
  if (purpose === 'water') {
   var cultivation = answers.cultivation;
   var need = answers.waterNeed;
   if (cultivation === 'soil') return result('이리시스', '토양 재배지를 여러 구역으로 나누어 물 또는 액비를 유량·시간 기준으로 공급하는 데 적합합니다.', [['이리시스 I·II 비교하기 ›', 'irrisys-system.html']], need === 'connection' ? '이리시스 I과 II 모두 팜시스 연결을 지원하며 실제 연동 범위는 주문 구성에 따라 확인해야 합니다.' : '');
   if (cultivation === 'substrate') return nutrientResult();
   return result('재배 방식별 물·양액 제품 비교', '토양의 구역별 관수·액비 공급은 이리시스, 배지·수경재배의 정밀 양액 관리는 배양액 자동공급기를 중심으로 비교하세요.', [['토양용 이리시스 보기 ›', 'irrisys-system.html'], ['배지·수경용 양액공급기 보기 ›', 'nutrient-system.html']]);
  }
  if (purpose === 'environment') {
   if (answers.environmentScope === 'vent') return result('SVC·RVC 자동제어', '환기창을 온도·시간·강우·풍속 조건으로 관리하며, 독립 제어구역 수에 따라 SVC 또는 RVC를 선택합니다.', [['자동 롤업마스터 비교 ›', 'rollupmaster-select.html?view=auto']]);
   if (answers.environmentScope === 'water') return result('관수·양액 제품군', '토양 재배는 이리시스, 배지·수경재배는 배양액 자동공급기를 기준으로 선택합니다.', [['물·양액 제품 비교 ›', 'nutrient-system.html']]);
   return result('팜시스 통합 환경제어', '환기·냉난방·관수·기상환경을 함께 관리하려면 연결 설비, 센서, 제어구역과 통신 범위를 현장별로 설계해야 합니다.', [['팜시스 시스템 보기 ›', 'farmsys-system.html']], '팜시스 FSC-1520은 정·역 10채널, ON·OFF 10채널, 관수 1채널의 고정 구성입니다. 최종 시스템은 현장 설비를 확인하여 구성합니다.');
  }
  return result('용도별 전체 제품 안내', '움직일 대상이 비닐인지 보온재인지, 물 공급 대상이 토양인지 배지인지부터 확인하면 제품군을 빠르게 좁힐 수 있습니다.', [['전체 제품 보기 ›', 'index.html']]);
 }

 function showResult() {
  progress.forEach(function (item) { item.classList.add('on'); });
  var selected = recommendation();
  var links = selected.links.map(function (link) { return '<a href="' + link[1] + '">' + link[0] + '</a>'; }).join('');
  var detail = selected.alternative ? '<div class="guide-model-summary"><span><small>1순위 추천</small><b>' + selected.title + '</b><em>' + selected.capacity + '</em></span><span><small>대안 모델</small><b>' + selected.alternative + '</b><em>용량·전원·설치조건 비교</em></span></div><ul class="guide-condition-list">' + selected.reasons.map(function(item){ return '<li>' + item + '</li>'; }).join('') + '</ul><p class="guide-remote-note">' + selected.remote + '</p>' : '';
  area.innerHTML = '<section class="product-guide-result"><div class="guide-result-copy"><small>선택 조건에 따른 1차 추천</small><h3>' + selected.title + '</h3><p>' + selected.copy + '</p>' + detail + (selected.note ? '<em class="guide-result-note">' + selected.note + '</em>' : '') + '</div><div class="guide-result-links">' + links + '<button type="button" class="guide-back">‹ 이전 질문</button><button type="button" class="guide-restart">처음부터 다시 선택</button></div></section>';
  area.querySelector('.guide-restart').addEventListener('click', restart);
  area.querySelector('.guide-back').addEventListener('click', goBack);
 }

 function restart() {
  answers = {};
  history = [];
  showQuestion('purpose');
 }

 start.addEventListener('click', function () {
  restart();
  document.body.classList.add('product-guide-open');
  dialog.showModal();
 });
 dialog.querySelector('.product-guide-close').addEventListener('click', function () { dialog.close(); });
 dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
 dialog.addEventListener('close', function () { document.body.classList.remove('product-guide-open'); });
})();
