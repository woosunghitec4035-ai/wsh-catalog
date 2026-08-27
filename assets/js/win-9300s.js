(function () {
  const modal = document.getElementById('winModal');
  const body = document.getElementById('winModalBody');
  const panels = {
    efarmer: `<h2>e Farmer Nutri 컴퓨터 정밀제어</h2><div class="efarmer-head"><img src="assets/img/efarmer-nutri-overview.png" alt="e Farmer Nutri 소프트웨어와 인젝션 마스터"><div><span>SOFTWARE No. TCK22</span><b>센서와 설정조건을 종합하는 배양액 관리 소프트웨어</b><p>EC·pH·유량·성장광과 선택 환경센서의 데이터를 사용자가 설정한 조건과 함께 연산하여 펌프·밸브·양액 흡입을 제어합니다.</p><em>정밀하고 반복 가능한 배양액 관리로 고품질 생산과 운영 효율 향상에 도움을 줍니다.</em></div></div><div class="guide-grid benefit-grid"><section><b>한글·아이콘 중심의 쉬운 조작</b><p>10.2인치 터치 화면에 측정값·공급상태·작동기기·경보를 한글과 아이콘으로 표시하여 현재 상황을 한눈에 확인합니다.</p><em>복잡한 기능을 현장에서 쉽게 확인</em></section><section><b>성장광 연계 복합제어</b><p>누적 성장광과 흐린날·맑은날, 배지온도·함수율 조건을 적용하여 공급횟수·간격·EC·pH·공급량을 조절합니다.</p><em>고정 시간표보다 재배환경 변화에 세밀하게 대응</em></section><section><b>약 20년 데이터 분석</b><p>센서 측정값, 공급정보와 경보이력을 장기간 저장하고 그래프로 비교하여 다음 작기의 설정 개선에 활용합니다.</p><em>재배 경험을 축적 가능한 데이터로 전환</em></section><section><b>실시간 감시와 이상 대응</b><p>설정과 다른 공급상태를 실시간으로 표시하고 경보·공급중지 조건을 적용하여 이상상황에 대응합니다.</p><em>상태 확인부터 경보 이력까지 한 시스템에서 관리</em></section></div><details class="software-screens"><summary>실제 TCK22 화면 구성 보기</summary><img src="assets/img/efarmer-nutri-screens.png" alt="e Farmer Nutri TCK22 주요 화면 구성"><p>메인화면·구역설정·A그룹 복합제어·고급설정·시간제어·데이터 저장화면 등 총 24페이지로 구성됩니다.</p></details>`,
    history: `<h2>약 20년 데이터 저장</h2><div class="control-intro blue"><b>매 작기의 경험을 사라지지 않는 농장 데이터로 축적</b><p>센서 측정값·배양액 공급정보·공급량·경보발생 정보를 장기간 저장하여 현재 작기와 이전 작기의 운전 결과를 비교할 수 있습니다.</p></div><div class="guide-grid benefit-grid"><section><b>측정자료</b><p>EC·pH와 환경센서 데이터를 그래프로 확인하여 시간에 따른 변화를 파악합니다.</p><em>환경과 공급 결과의 변화 확인</em></section><section><b>관수·공급자료</b><p>일자별 공급 내용과 구역별 공급기록을 확인해 실제 운전 이력을 관리합니다.</p><em>기억이 아닌 기록에 근거한 관리</em></section><section><b>공급량 분석</b><p>일별 누적 공급량을 막대그래프로 비교하여 작기와 시기별 공급 경향을 확인합니다.</p><em>다음 작기의 목표값 설정에 활용</em></section><section><b>경보 이력</b><p>경보 발생 시각과 항목을 기록하여 반복되는 이상과 점검 대상을 찾는 데 활용합니다.</p><em>예방점검과 원인 분석에 도움</em></section></div>`,
    maintenance: `<h2>자체 개발·신속한 유지보수</h2><div class="control-intro green"><b>제품을 이해하는 개발·제작자가 직접 대응</b><p>TCK22 소프트웨어와 혼합탱크·벤추리·정량조절 스텝밸브·디지털 유량센서 등 핵심 기술과 부품을 (주)우성하이텍이 직접 개발·제작합니다.</p></div><div class="guide-grid benefit-grid"><section><b>원인 파악이 빠른 기술지원</b><p>소프트웨어와 주요 작동부의 구조를 직접 설계·제작하므로 운전기록과 증상을 바탕으로 문제 원인을 종합적으로 확인할 수 있습니다.</p><em>개발과 유지보수가 연결된 대응체계</em></section><section><b>소프트웨어 개선 대응</b><p>자체 개발 소프트웨어를 기반으로 기능 개선과 업그레이드에 대응할 수 있습니다.</p><em>운영 중에도 성능과 활용성 개선 가능</em></section><section><b>핵심 부품 기술 축적</b><p>주요 부품을 직접 제작하여 제품 특성과 현장 운전조건에 맞춘 기술자료와 정비 경험을 축적합니다.</p><em>장기간 사용하는 설비에 중요한 기술 연속성</em></section><section><b>전국 A/S 연계</b><p>전국 애프터서비스망을 통해 점검과 수리를 지원하여 농장의 공급 중단시간을 줄이는 데 대응합니다.</p><em>신속한 현장 지원을 고려한 서비스</em></section></div>`,
    manager: `<h2>인젝션 매니저 원격관리 <span class="paid-option">별도 구매 제품</span></h2><div class="control-intro blue"><b>농장 컴퓨터를 서버로 활용하는 원격관리 시스템</b><p>농장에 설치된 컴퓨터를 서버로 두고 인터넷에 연결하여, 장소에 구애받지 않고 PC와 모바일에서 인젝션 마스터의 상태를 확인하고 제어·설정할 수 있습니다.</p></div><div class="manager-flow"><span>인젝션 마스터</span><i>↔</i><span>농장 서버 컴퓨터</span><i>↔</i><span>인터넷</span><i>↔</i><span>모바일·외부 PC</span></div><div class="guide-grid benefit-grid"><section><b>언제 어디서든 상태 확인</b><p>농장 밖에서도 공급상태와 주요 측정값을 확인하여 현장 방문 전 상황을 파악할 수 있습니다.</p><em>농장과 떨어져 있어도 운전상태 확인</em></section><section><b>원격 제어·설정</b><p>필요할 때 원격으로 운전 제어와 설정 변경을 할 수 있어 대응시간을 줄이는 데 도움이 됩니다.</p><em>반복 방문과 이동시간을 줄이는 편의성</em></section><section><b>농장 컴퓨터를 서버로 운용</b><p>농장 내부 컴퓨터에 관리 데이터를 두고 인젝션 마스터와 원격 단말을 연결하는 방식입니다.</p><em>농장 중심의 원격관리 구성</em></section><section><b>전문가 지원 연계</b><p>사용자 동의와 접속환경이 준비된 경우 운전상태를 함께 확인하며 기술지원을 받을 수 있습니다.</p><em class="review-em">원격 기술지원 적용 범위 확인 필요</em></section></div><p class="popup-note"><b>선택 제품:</b> 농장마다 인터넷 설치 여부와 통신환경이 다르므로 인젝션 매니저는 인젝션 마스터 기본 구성에 포함되지 않습니다. 별도 구매 제품으로, 인터넷·서버 컴퓨터·원격접속 환경과 적용 가능 모델을 주문 전에 확인하십시오.</p>`,
    precision: `<h2>EC·pH 정밀관리</h2>
      <div class="control-intro"><b>측정하고, 조절하고, 이상을 확인하는 정밀관리</b><p>EC·pH 센서값과 사용자가 설정한 목표값을 비교하여 양액의 농도를 조절하고, 공급 과정의 상태를 실시간으로 확인합니다.</p></div>
      <div class="precision-sensor-gallery"><figure><img src="assets/img/related-ec-sensor.png" alt="인젝션 마스터에 적용하는 Sensorex EC 센서 Part No. 6210"><figcaption><b>EC 센서</b><span>Part No. 6210 · 양액의 전기전도도를 측정하여 농도 관리에 사용</span></figcaption></figure><figure><img src="assets/img/related-ph-sensor.png" alt="인젝션 마스터에 적용하는 Sensorex pH 센서 Part No. 6220"><figcaption><b>pH 센서</b><span>Part No. 6220 · 양액의 산도 측정과 pH 조절에 사용</span></figcaption></figure></div>
      <div class="control-flow"><span>센서 실시간 측정</span><i>›</i><span>목표값 비교·연산</span><i>›</i><span>양액 흡입량 조절</span><i>›</i><span>경보·공급중지</span></div>
      <div class="sensor-quality"><span>SENSOR QUALITY</span><div><b>미국 수질센서 전문기업 Sensorex의 EC·pH 센서 적용 <small>미국 브랜드 · 50년 이상 센서 기술</small></b><p>Sensorex는 1972년부터 pH·전도도(EC) 등 수질 측정센서를 전문적으로 개발·제조해 온 기업입니다. 인젝션 마스터에는 Sensorex 브랜드의 EC·pH 센서를 적용하고 성장광 센서를 기본 제공합니다.</p></div></div>
      <p class="sensor-origin-note"><b>제조국 안내</b> Sensorex는 미국과 체코에 생산 역량을 보유하고 있습니다. 당사 적용 센서의 제조국은 공급 시기와 제조사의 생산정책에 따라 미국 또는 체코가 될 수 있으며, 실제 납품 제품의 표시를 기준으로 합니다.</p>
      <div class="guide-grid benefit-grid"><section><b>목표 농도를 일정하게 관리</b><p>측정값과 목표값을 계속 비교하여 양액 흡입량을 조절하므로, 작업자가 매번 수동으로 농도를 맞추는 부담을 줄이고 설정한 EC·pH에 가깝게 공급하도록 관리합니다.</p><em>균일한 배양액 관리에 도움</em></section><section><b>이상 배양액 공급을 사전에 차단</b><p>EC·pH 또는 공급유량이 설정 범위를 벗어나면 경보를 발생시키고 공급중지를 적용할 수 있어, 잘못 조절된 배양액이 계속 공급되는 위험에 대응합니다.</p><em>작물 피해 위험을 줄이는 보호 기능</em></section><section><b>보정 기능으로 측정 신뢰도 유지</b><p>표준액 및 기준 계측값과 차이가 생겼을 때 센서값을 보정할 수 있어 센서의 장기간 사용과 정기점검에 대응합니다.</p><em>센서 오차를 확인하고 관리</em></section><section><b>수치와 이력을 근거로 다음 작기 개선</b><p>센서 측정값과 공급·경보 이력을 비교하여 이전 작기의 결과를 검토하고 다음 작기의 목표값 설정에 활용할 수 있습니다.</p><em>경험을 데이터로 축적</em></section></div>
      <div class="official-source"><b>제조사 공식 자료</b><a href="https://sensorex.com/about/" target="_blank" rel="noopener">회사 연혁·전문 분야·생산 거점 확인</a><a href="https://sensorex.com/agriculture-hydroponics/" target="_blank" rel="noopener">농업·수경재배용 pH·EC 센서 적용 자료</a><span>출처: Sensorex 공식 홈페이지 · 확인일 2026.08.03</span></div>`,
    supplyMethods: `<h2>다양한 자동공급 방식</h2>
      <div class="control-intro blue"><b>재배 목적과 현장 조건에 맞춰 공급 기준을 선택</b><p>단순히 정해진 시각에 공급하는 방식부터 재배환경 센서와 연계한 복합제어까지 운용할 수 있습니다.</p></div>
      <div class="method-grid"><section><span>TIME</span><b>시간제어</b><p>설정한 시각과 구역에 맞춰 매일 반복 공급하므로 기본적인 관수 일정을 자동화할 수 있습니다.</p><em>정해진 작업을 놓치지 않고 인력과 시간을 절감</em></section><section><span>COMPLEX</span><b>성장광·환경 연계 복합제어</b><p>누적 성장광과 맑은날·흐린날, 배지온도·함수율을 함께 판단하여 공급횟수·간격·EC·pH·공급량을 자동 조절합니다.</p><em>고정 시간표를 넘어 작물과 환경 변화에 맞춘 정밀 공급</em></section><section><span>FLOW</span><b>유량공급</b><p>목표량을 10L 단위로 정하고 디지털 유량센서가 실제 흐른 양을 측정합니다. 배관 조건에 따라 같은 시간에도 공급량이 달라질 수 있는 문제를 관리하는 데 유리합니다.</p><em>‘몇 분’이 아닌 ‘몇 리터’를 기준으로 명확하게 관리</em></section><section><span>DURATION</span><b>시간공급</b><p>구역별 공급시간을 1분 단위로 설정하여 기존 관수시간표와 작업 경험을 간단하게 자동운전에 적용할 수 있습니다.</p><em>익숙한 운전 기준을 그대로 자동화</em></section></div>
      <p class="popup-note">복합제어에 사용하는 배지함수율·배지온도 등 일부 환경센서는 선택 사양이며, 적용 센서는 구성에 따라 확인이 필요합니다.</p>`,
    zones: `<h2>12구역·2그룹 분할공급</h2>
      <div class="control-intro green"><b>한 대의 장비로 서로 다른 재배구역을 나누어 관리</b><p>재배지를 최대 12개 구역으로 분할하고, 다시 2개 그룹으로 구분하여 각 그룹의 환경과 작물 조건에 맞게 공급할 수 있습니다.</p></div>
      <figure class="zone-piping-figure"><img src="assets/img/nutrient-12zone-2group-piping.png" alt="원수탱크와 양액탱크에서 최대 12구역, 2개 재배그룹으로 공급하는 배관 구성 예시"><figcaption><b>배양액 공급 배관 예시</b><span>이미지를 크게 펼쳐 원수·양액 흡입부터 A·B그룹과 최대 12구역으로 이어지는 공급 흐름을 확인할 수 있습니다.</span></figcaption></figure>
      <div class="zone-diagram"><div><b>A그룹 재배지</b><span>1구역</span><span>2구역</span><span>3구역</span><span>…</span></div><i>＋</i><div><b>B그룹 재배지</b><span>…</span><span>10구역</span><span>11구역</span><span>12구역</span></div></div>
      <div class="zone-meaning"><section><b>구역</b><p>각 구역밸브에 연결되어 개별적으로 배양액을 공급받는 재배 단위입니다.</p></section><section><b>그룹</b><p>작물·생육단계·재배환경이 비슷한 여러 구역을 묶어 공통 조건을 적용하는 관리 단위입니다.</p></section></div>
      <div class="guide-grid benefit-grid"><section><b>여러 구역을 한 시스템으로 관리</b><p>최대 12개 구역을 한 화면에서 설정하고 순차 공급할 수 있어 구역마다 별도의 공급기를 두는 부담을 줄일 수 있습니다.</p><em>설비와 운전 관리의 집중화</em></section><section><b>서로 다른 작물과 생육단계에 대응</b><p>작물 종류·생육단계·일사 조건이 다른 재배지를 두 그룹으로 구분하여 각 그룹에 맞는 공급조건을 적용합니다.</p><em>시설 전체를 동일한 조건으로 운전하지 않아도 됨</em></section><section><b>순차공급으로 공급능력을 효율적으로 활용</b><p>필요한 구역을 차례로 공급하여 동시에 모든 구역을 운전할 때보다 순간적으로 요구되는 유량과 배관 부담을 관리하기 쉽습니다.</p><em class="review-em">펌프와 배관의 효율적 운용</em></section><section><b>구역별 기록으로 문제 위치를 빠르게 확인</b><p>구역별 공급횟수와 공급정보를 비교하면 평소와 다른 구역을 구분하여 점검 범위를 좁히는 데 도움이 됩니다.</p><em>점검과 원인 확인 시간을 단축</em></section></div>`,
    independent: `<h2>흡입·공급 분리형 벤추리 정밀제어</h2>
      <div class="loop-summary"><b>흡입·혼합과 현장 공급을 분리한 2중 펌프 구조</b><p>하나의 펌프가 모든 역할을 담당하는 구조가 아니라, 벤추리 양액 흡입·혼합용 순환펌프와 재배구역으로 보내는 배양액 공급펌프를 각각 사용합니다.</p></div>
      <div class="loop-flow"><section><span>01</span><b>벤추리 전용 순환펌프</b><p>혼합탱크의 물을 순환시키며 벤추리에 필요한 흡입력을 안정적으로 만듭니다.</p></section><i>＋</i><section><span>02</span><b>배양액 공급펌프</b><p>혼합이 완료된 배양액을 설정된 재배구역과 공급 배관으로 보냅니다.</p></section></div>
      <div class="guide-grid"><section><b>안정적인 양액 흡입</b><p>현장 공급 배관의 거리·높이·밸브 동작에 따른 압력 변화가 벤추리 흡입에 미치는 영향을 줄입니다.</p></section><section><b>균형 있는 혼합과 공급</b><p>양액 흡입·혼합과 재배구역 공급이 서로 다른 펌프로 작동하여 각 역할에 맞는 운전이 가능합니다.</p></section></div>
      <p class="popup-note">양액 흡입·혼합과 현장 공급을 서로 다른 펌프가 담당하는 독립순환 구조입니다. 이 설명은 해당 구조가 적용된 인젝션 마스터 모델에 공통으로 사용할 수 있습니다.</p>`,
    sensors: `<h2>EC·pH 센서 점검 및 교체 기준 <span class="review-badge">설명서 추가 검토</span></h2>
      <div class="sensor-source-banner"><b>Sensorex 공식 안내 기준</b><span>당사 양액공급기에 적용하는 Sensorex 센서의 제조사 공식 관리 자료를 기준으로 정리했습니다.</span></div>
      <div class="sensor-guide-grid">
        <section><span class="sensor-kind">pH SENSOR</span><h3>일반적인 사용 수명 6~24개월</h3><p>사용시간, 양액의 농도와 온도, 오염 정도 및 관리 상태에 따라 실제 수명은 달라질 수 있습니다.</p><ul><li>반응이 현저히 느려진 경우</li><li>측정값이 계속 흔들리거나 이동하는 경우</li><li>세척 후에도 정상적으로 교정되지 않는 경우</li></ul></section>
        <section class="ec-guide"><span class="sensor-kind">EC SENSOR</span><h3>고정 주기보다 상태를 기준으로 교체</h3><p>오염물을 제거하고 새로운 표준액으로 교정한 후에도 성능이 회복되는지 확인합니다.</p><ul><li>세척·교정 후에도 오차가 계속되는 경우</li><li>표준액 교정이 반복해서 실패하는 경우</li><li>전극·케이블·커넥터가 손상된 경우</li></ul></section>
      </div>
      <div class="sensor-action-flow"><b>교체 판단 순서</b><span>센서 확인</span><i>›</i><span>세척</span><i>›</i><span>새 표준액으로 교정</span><i>›</i><span>회복되지 않으면 교체</span></div>
      <p class="popup-note"><b>중요:</b> 위 기간은 품질보증 기간이 아니라 제조사가 안내하는 일반적인 사용 범위입니다. 센서를 교체하거나 다른 계측기에 연결한 경우에는 센서와 계측기를 한 시스템으로 다시 교정해야 합니다.</p>
      <p class="sensor-reference">근거: Sensorex FAQ · pH Electrode Maintenance · Conductivity System Maintenance</p>`,
    spec: `<h2>WIN-9300S 제품 사양</h2><div class="spec-grid"><div><b>컴퓨터</b><span>임베디드 10.2인치 컬러 · Windows CE 6.0</span></div><div><b>설정 조작</b><span>화면 터치 · 마우스 사용 가능</span></div><div><b>소프트웨어</b><span>TCK22 한글 ★</span></div><div><b>기본 측정</b><span>EC·pH·유량·성장광 [옵션: 보조 pH]</span></div><div><b>최대 공급량</b><span>300L/분</span></div><div><b>공급펌프</b><span>횡형 SUS · 7.5마력(삼상)</span></div><div><b>흡입라인</b><span>5라인(A·B·C·D·E액)</span></div><div><b>흡입·조절</b><span>벤추리 · 솔레노이드 밸브 · 30~300L/시간 · 스텝 밸브</span></div><div><b>순환수 펌프</b><span>180L/분 · 890W</span></div><div><b>혼합탱크</b><span>8각형 · 270L · 정수위 유지</span></div><div><b>공급량 측정</b><span>디지털 유량센서</span></div><div><b>제어 출력</b><span>구역밸브 AC24V 12라인 · 원수펌프 AC220V 3kW · 교반기 AC220V 2kW</span></div><div><b>크기</b><span>1120 × 1230 × 1280mm</span></div><div><b>프레임</b><span>AL 프로파일 45 × 45mm</span></div><div><b>정격전압</b><span>AC380V 삼상 4선식</span></div><div><b>최대소비전류</b><span>32A(Max)</span></div></div><p class="popup-note">★ 표시는 (주)우성하이텍이 자체 제작한 항목입니다.</p>`,
    parts: `<h2>주요 구성품</h2><div class="parts-popup"><figure><img src="assets/img/win-9300s-supply-pump.png" alt="공급펌프"><figcaption>공급펌프<br><small>에바라 · Italy</small></figcaption></figure><figure><img src="assets/img/win-9300s-circulation-pump.png" alt="벤추리 전용 순환펌프"><figcaption>벤추리 전용 순환펌프</figcaption></figure><figure><img src="assets/img/win-9300s-injection-lines.png" alt="벤추리 정량밸브 순간유량계"><figcaption>벤추리·정량밸브·순간유량계 ★</figcaption></figure><figure><img src="assets/img/win-9300s-flow-sensor.png" alt="디지털 유량센서"><figcaption>디지털 유량센서 ★</figcaption></figure></div><div class="independent-loop"><b>벤추리 독립순환 방식</b><p>양액 흡입·혼합용 순환펌프와 배양액 공급펌프를 분리한 2중 펌프 구조입니다. 현장 공급 배관의 유량과 압력 변화가 양액 흡입에 미치는 영향을 줄여 안정적인 흡입·혼합과 공급에 유리합니다.</p></div><p class="popup-note">5개의 흡입라인에서 A·B·C·D·E액을 벤추리 방식으로 흡입하며, 솔레노이드 밸브와 스텝 밸브로 공급을 단속하고 미세 조절합니다.</p>`,
    software: `<h2>제어·데이터 관리</h2><img class="popup-hero" src="assets/img/win-9300s-software.png" alt="TCK22 화면"><div class="guide-grid"><section><b>컴퓨터 정밀제어</b><p>각종 센서 데이터와 사용자가 설정한 조건을 종합 연산하여 펌프·전자밸브 등 개별 유니트를 정밀하게 제어합니다.</p></section><section><b>다양한 공급 방식</b><p>수동·시간·복합제어를 지원하며, 유량은 10L 단위, 시간은 1분 단위로 설정할 수 있습니다.</p></section><section><b>12구역·2그룹</b><p>재배지를 최대 12구역으로 분할하고 2개 그룹으로 구분하여 서로 다른 환경 조건에 맞춰 순차 공급할 수 있습니다.</p></section><section><b>경보·공급 보호</b><p>EC·pH·제어용/측정용 pH 차이·저수위·공급유량 이상을 감시하고, 항목별 공급중지와 외부 경보출력을 설정합니다.</p></section><section><b>보정·기기점검</b><p>센서 측정 오차를 보정하고 펌프·흡입밸브·구역밸브·경보출력을 화면에서 개별 시험할 수 있습니다.</p></section><section><b>약 20년 데이터 저장</b><p>센서 측정값, 관수·공급량 및 경보 발생 정보를 장기간 저장하여 다음 작기의 설정과 운영 판단에 활용할 수 있습니다.</p></section></div><p class="popup-note">배지함수율·온도·배액량·배액 EC·pH·실내환경, 보조 pH와 TDR센서는 선택 사양입니다.</p>`,
    network: `<h2>인젝션 매니저 원격관리 <span class="paid-option">별도 구매 제품</span></h2><div class="control-intro blue"><b>농장 컴퓨터를 서버로 활용하는 원격관리 시스템</b><p>농장에 설치된 컴퓨터를 서버로 두고 인터넷에 연결하여, 장소에 구애받지 않고 PC와 모바일에서 인젝션 마스터의 상태를 확인하고 제어·설정할 수 있습니다.</p></div><div class="manager-flow"><span>인젝션 마스터</span><i>↔</i><span>농장 서버 컴퓨터</span><i>↔</i><span>인터넷</span><i>↔</i><span>모바일·외부 PC</span></div><p class="popup-note"><b>선택 제품:</b> 농장마다 인터넷 설치 여부와 통신환경이 다르므로 인젝션 매니저는 기본 구성에 포함되지 않습니다. 별도 구매 제품으로, 인터넷·서버 컴퓨터·원격접속 환경과 적용 가능 모델을 주문 전에 확인하십시오.</p>`,
    install: `<h2>설치·배관 확인</h2><div class="check-list"><section><b>01 설치 장소</b><p>단단하고 평평한 기초에 수평으로 설치하고, 직사광선·고온·다습·진동·침수 위험을 피하십시오. 점검을 위해 기기 둘레에 약 60cm 이상의 작업공간을 확보하는 것이 좋습니다.</p></section><section><b>02 전원·접지</b><p>AC380V 삼상 4선식 전원과 접지를 자격이 있는 작업자가 연결하고, 대형 모터·인버터 등 전기적 노이즈가 큰 장비와 배선을 분리하십시오.</p></section><section><b>03 원수·양액 배관</b><p>원수와 양액 입구 전단에 120메시 필터를 설치하고, 원수 입수구 2인치와 각 양액 흡입라인 1/2인치를 정해진 포트에 연결하십시오.</p></section><section><b>04 공급 배관</b><p>구역별 관로손실과 공급 면적이 비슷해지도록 구성하고 공급 주관은 가급적 짧게 설치하십시오. 실제 공급량은 거리·높이·동시 관수 구역 수에 따라 달라집니다.</p></section><section><b>05 설치 후 작동시험</b><p>TCK22의 작동 테스트에서 원수·공급·순환펌프, 흡입밸브, 구역밸브와 경보출력을 하나씩 짧게 시험하고 회전 방향·누수·밸브 동작을 확인하십시오.</p></section><section><b>06 첫 공급 확인</b><p>센서 표시값과 휴대용 EC·pH 측정값을 비교하고, 여러 공급 지점에서 배양액을 채취해 농도와 공급 편차를 확인하십시오.</p></section></div><p class="popup-note">작동 테스트는 완전히 설치한 뒤 실시하며, 펌프와 밸브는 과열·과압 방지를 위해 필요한 항목만 10초 이내로 짧게 작동하십시오. 설치와 배선·배관 작업은 전문 시공업체가 현장 조건을 검토한 후 진행해야 합니다.</p>`,
    safety: `<h2>점검·안전 안내</h2><div class="review-legend"><span class="review-badge">설명서 추가 검토</span><p>이 표시는 현재 하드웨어·소프트웨어 설명서에 직접 적혀 있지 않은 보완 제안입니다. 검토 후 차기 설명서 반영 여부를 결정하십시오.</p></div><div class="check-list"><section><b>운전 전 확인</b><p>누수·밸브·탱크 수위·필터·펌프 상태를 확인하고, TCK22 화면의 EC·pH·유량값이 휴대용 측정값 및 현장 상태와 맞는지 확인하십시오.</p></section><section><b>경보·공급중지 설정</b><p>EC·pH 이상, 제어용/측정용 pH 차이, 저수위와 공급유량 이상 경보를 현장 기준에 맞게 설정하고 필요한 항목에는 공급중지와 경보출력을 적용하십시오.</p></section><section class="needs-review"><b>경보 발생 시 <span class="review-badge">설명서 추가 검토</span></b><p>경보 데이터에서 발생 시각과 항목을 확인한 뒤 원수·양액 잔량, 필터, 배관, 밸브, 펌프와 센서를 점검하십시오. 원인을 확인하기 전 설정값만 변경하거나 공급을 강제로 계속하지 마십시오.</p></section><section><b>공급중지 후 재작동</b><p>소프트웨어의 재작동 기능은 경보로 중지된 공급을 제한된 횟수만 다시 시도하는 기능입니다. 일시적 문제에는 도움이 될 수 있지만 고장 원인을 해결하는 기능은 아닙니다.</p></section><section><b>센서 보정·교체</b><p>표준액과 신뢰할 수 있는 측정기로 비교한 뒤 센서를 보정하십시오. 세척·보정 후에도 값이 불안정하거나 오차가 지속되면 센서 상태와 교체 필요성을 확인하십시오.</p></section><section class="needs-review"><b>기록을 이용한 예방점검 <span class="review-badge">설명서 추가 검토</span></b><p>센서 그래프, 일별 공급횟수·공급시간·구역별 공급량, 월별 공급량과 경보 이력을 정기적으로 비교해 평소와 다른 변화를 조기에 확인하십시오.</p></section><section class="needs-review"><b>약액 보호구 <span class="review-badge">설명서 추가 검토</span></b><p>점검과 분해 전 전원과 배관 압력을 차단하고, 젖은 손으로 조작하지 마십시오. pH 조정액 등 산·알칼리 약액을 취급할 때는 보호안경과 내화학 장갑을 착용하십시오.</p></section><section><b>장기 미사용·동절기</b><p>기기와 배관 내부의 물을 배출하고 탱크·흡입라인을 세척하십시오. pH 센서는 마르지 않도록 지정 보관액에 보관하고 재가동 전에 누수·작동시험·센서 교정을 다시 확인하십시오.</p></section></div><p class="popup-note"><b>중요:</b> 경보가 해제되거나 재작동 후 정상 운전으로 돌아와도 원인이 해결되었다는 의미는 아닙니다. 공급 이상은 작물에 큰 영향을 줄 수 있으므로 경보·공급·센서 이력을 확인하고 필요한 조치를 취하십시오.</p>`
  };

  panels.spec = `<h2 class="spec-title">Specifications <small>WIN-9300S 제품 사양</small></h2>
    <div class="spec-table-wrap"><table class="win-spec-table"><tbody>
      <tr><th rowspan="3">컴퓨터</th><th>하드웨어</th><td>임베디드 10.2인치 컬러</td></tr>
      <tr><th>운영체제</th><td>MS Windows CE 6.0</td></tr>
      <tr><th>설정 조작</th><td>화면 터치 · 마우스 사용 가능</td></tr>
      <tr><th colspan="2">소프트웨어 No.</th><td>TCK22 한글 ★ · (주)우성하이텍 개발</td></tr>
      <tr><th rowspan="2">센서<br>Input</th><th>기본 측정</th><td>EC · pH · 유량 · 성장광 [옵션: 보조 pH]</td></tr>
      <tr><th>환경 [옵션]</th><td>배지 함수율 · 온도 · 배액량 · EC · pH · 실내환경</td></tr>
      <tr><th rowspan="2">공급<br>능력</th><th>최대 공급량</th><td>300L/분</td></tr>
      <tr><th>공급펌프</th><td>횡형 SUS · 7.5마력(삼상)</td></tr>
      <tr><th rowspan="5">양액<br>흡입</th><th>흡입라인</th><td>5라인(A · B · C · D · E액)</td></tr>
      <tr><th>흡입방식</th><td>벤추리 방식</td></tr>
      <tr><th>흡입단속</th><td>솔레노이드 밸브 ON·OFF</td></tr>
      <tr><th>조절범위</th><td>30~300L/시간</td></tr>
      <tr><th>미세조절</th><td>스텝 밸브</td></tr>
      <tr><th colspan="2">순환수 펌프</th><td>180L/분 · 890W</td></tr>
      <tr><th colspan="2">혼합탱크</th><td>8각형 · 270L · 정수위 유지</td></tr>
      <tr><th colspan="2">공급수 정압 유지</th><td>릴리프 밸브(40A 버마드)</td></tr>
      <tr><th colspan="2">공급량 측정장치</th><td>디지털 유량센서 ★</td></tr>
      <tr><th rowspan="3">제어<br>출력</th><th>구역밸브</th><td>AC24V · 12라인</td></tr>
      <tr><th>원수펌프</th><td>AC220V · 3kW</td></tr>
      <tr><th>교반기</th><td>AC220V · 2kW</td></tr>
      <tr><th colspan="2">크기(W × D × H)</th><td>1120 × 1230 × 1280mm</td></tr>
      <tr><th colspan="2">프레임 재질 및 규격</th><td>AL 프로파일 · 45 × 45mm</td></tr>
      <tr><th colspan="2">정격전압</th><td>AC380V · 삼상 4선식</td></tr>
      <tr><th colspan="2">최대소비전류</th><td>32A(Max)</td></tr>
    </tbody></table></div>
    <p class="popup-note">★ 표시는 (주)우성하이텍이 자체 제작한 항목입니다. 실제 제품의 사양은 주문 구성과 현장 조건에 따라 달라질 수 있습니다.</p>`;

  panels.relatedParts = `<h2>관련 부품 <span class="related-subtitle">A/S · 측정 · 성능 유지 · 기능 확장 · 소모성 부품</span></h2>
    <div class="related-intro"><b>장기간 최적의 컨디션을 유지하기 위한 관련 부품</b><p>정교하게 설계되고 고품질로 제작된 측정·제어·유지관리 부품입니다. <strong>자사 제작</strong> 표시는 (주)우성하이텍이 직접 제작한 부품입니다.</p></div>
    <div class="related-filters" role="group" aria-label="관련 부품 분류">
      <button type="button" class="on" data-related-filter="all">전체</button><button type="button" data-related-filter="measure">측정·교정</button><button type="button" data-related-filter="maintain">성능 유지</button><button type="button" data-related-filter="expand">기능 확장</button><button type="button" data-related-filter="service">A/S·소모성</button>
    </div>
    <div class="related-grid">
      <article data-related-category="measure service"><figure><img src="assets/img/related-ec-sensor.png" alt="EC 센서 Part No. 6210"><span>고화질 교체 예정</span></figure><div><em>측정·교정</em><h3>EC 센서</h3><p>Part No. 6210 · Sensorex</p></div></article>
      <article data-related-category="measure service"><figure><img src="assets/img/related-ph-sensor.png" alt="pH 센서 Part No. 6220"><span>고화질 교체 예정</span></figure><div><em>측정·교정</em><h3>pH 센서</h3><p>Part No. 6220 · Sensorex</p></div></article>
      <article data-related-category="measure expand"><figure><img src="assets/img/related-growth-light-card.png" alt="성장광 센서 WIS-207"></figure><div><em>기본 제공 · 측정</em><h3>성장광 센서</h3><p>WIS-207 · 누적 성장광 측정</p><b>자사 제작</b></div></article>
      <article data-related-category="measure maintain"><figure><img src="assets/img/related-flow-sensor.png" alt="유량 센서 IFS-50"><span>고화질 교체 예정</span></figure><div><em>측정·성능 유지</em><h3>유량 센서</h3><p>IFS-50 · 80~250L/분</p><b>자사 제작</b></div></article>
      <article data-related-category="measure expand"><figure><img src="assets/img/related-tdr-sensor-card.png" alt="TDR 배지 센서 STS-402"></figure><div><em>옵션 · 측정·기능 확장</em><h3>TDR 배지 센서</h3><p>STS-402 · 함수율·배지온도</p><b>자사 제작</b></div></article>
      <article data-related-category="measure expand"><figure><img src="assets/img/related-air-node-card.png" alt="실내 공기환경 센서노드 WSN-803"></figure><div><em>옵션 · 측정·기능 확장</em><h3>실내 공기환경 센서노드</h3><p>WSN-803 · 온도·습도·CO₂</p><b>자사 제작</b></div></article>
      <article data-related-category="measure expand"><figure><img src="assets/img/related-substrate-integrated-card.png" alt="배지 통합센서 GAS-515"></figure><div><em>옵션 · 환경 통합 측정</em><h3>배지 통합센서</h3><p>GAS-515 · 배액 EC·pH·함수율·배지온도·배액량</p></div></article>
      <article data-related-category="measure service"><figure><img src="assets/img/related-standard-solutions.png" alt="EC pH 표준액 세트"><span>고화질 교체 예정</span></figure><div><em>교정·소모성</em><h3>EC·pH 표준액</h3><p>Part No. 6230 · 500ml 세트</p></div></article>
      <article data-related-category="measure maintain"><figure><img src="assets/img/related-ec-ph-meter.png" alt="EC pH 측정기"><span>고화질 교체 예정</span></figure><div><em>측정·성능 유지</em><h3>EC·pH 측정기</h3><p>Part No. 6240</p></div></article>
      <article data-related-category="maintain service"><figure><img src="assets/img/related-nutrient-solenoid.png" alt="양액 흡입용 전자밸브"><span>고화질 교체 예정</span></figure><div><em>성능 유지·A/S</em><h3>양액 흡입용 전자밸브</h3><p>Part No. 6510 · AC24V</p></div></article>
      <article data-related-category="expand service"><figure><img src="assets/img/related-zone-valves.png" alt="구역 분할용 전자밸브"><span>고화질 교체 예정</span></figure><div><em>기능 확장·A/S</em><h3>구역 분할용 전자밸브</h3><p>Part No. 6520·6530 · AC24V</p></div></article>
      <article class="patent-part" data-related-category="maintain service"><figure><img src="assets/img/related-step-valve.png" alt="특허 적용 정밀조절 스텝밸브 DRV-189"><span>고화질 교체 예정</span></figure><div><em>성능 유지·A/S</em><h3>정밀조절 스텝밸브</h3><p>DRV-189</p><b>자사 제작</b><strong>특허 제10-1535637호</strong><small>양액별 유량을 정밀하게 조절하고, 진동 중에도 설정 유량을 안정적으로 유지하도록 고안된 구조입니다.</small></div></article>
      <article data-related-category="maintain service"><figure><img src="assets/img/related-venturi-flowmeter.png" alt="벤추리와 순간 유량계"><span>고화질 교체 예정</span></figure><div><em>성능 유지·A/S</em><h3>벤추리·순간 유량계</h3><p>VEN-242 · FIM-241</p><b>자사 제작</b></div></article>
      <article data-related-category="maintain service"><figure><img src="assets/img/related-raw-water-filter.png" alt="원수 여과기"><span>고화질 교체 예정</span></figure><div><em>성능 유지·소모성</em><h3>원수 여과기</h3><p>120메시 디스크 필터</p><mark>품번 확인 필요</mark></div></article>
      <article data-related-category="expand service"><figure><img src="assets/img/related-agitator.png" alt="양액 교반기 MIX-460"><span>고화질 교체 예정</span></figure><div><em>기능 확장·A/S</em><h3>양액 교반기</h3><p>MIX-460 · AC220V</p></div></article>
    </div>
    <p class="related-notice">제품 사양은 제조사의 사정에 따라 공지 없이 변경될 수 있습니다. 주문 전 적용 모델·규격·구성품을 확인해 주십시오.</p>`;

  panels.sites = `<h2>설치·사용 현장</h2>
    <p class="site-gallery-intro">실제 시설원예 현장에 설치·운용된 배양액 공급 시스템 사례입니다. 아래 사진을 선택하면 큰 화면으로 확인할 수 있습니다.</p>
    <div class="site-gallery">
      <figure class="site-gallery-main">
        <img id="siteFeatured" src="assets/img/injection-site-07.png" alt="대형 시설원예 배양액 공급 시스템 설치 현장">
        <figcaption id="siteCaption">대형 시설원예 배양액 공급 시스템 설치 전경</figcaption>
      </figure>
      <div class="site-gallery-thumbs">
        <button type="button" class="on" data-site-img="assets/img/injection-site-07.png" data-site-caption="대형 시설원예 배양액 공급 시스템 설치 전경"><img src="assets/img/injection-site-07.png" alt="설치 현장 1"><span>시스템 전경</span></button>
        <button type="button" data-site-img="assets/img/injection-site-01.png" data-site-caption="배양액 탱크와 공급기 설치 현장"><img src="assets/img/injection-site-01.png" alt="설치 현장 2"><span>탱크·공급기</span></button>
        <button type="button" data-site-img="assets/img/injection-site-02.png" data-site-caption="혼합탱크와 제어반 구성 현장"><img src="assets/img/injection-site-02.png" alt="설치 현장 3"><span>혼합·제어부</span></button>
        <button type="button" data-site-img="assets/img/injection-site-04.png" data-site-caption="공급펌프와 제어반 설치 현장"><img src="assets/img/injection-site-04.png" alt="설치 현장 4"><span>펌프·제어반</span></button>
        <button type="button" data-site-img="assets/img/injection-site-06.png" data-site-caption="대형 연속공급 시스템 설치 전경"><img src="assets/img/injection-site-06.png" alt="설치 현장 5"><span>연속공급</span></button>
        <button type="button" data-site-img="assets/img/injection-site-03.png" data-site-caption="펌프·배관·구역 제어 구성 현장"><img src="assets/img/injection-site-03.png" alt="설치 현장 6"><span>배관·구역제어</span></button>
        <button type="button" data-site-img="assets/img/injection-site-05.png" data-site-caption="혼합탱크와 펌프 설치 전경"><img src="assets/img/injection-site-05.png" alt="설치 현장 7"><span>탱크·펌프</span></button>
      </div>
    </div>`;

  panels.fiveLines = `<h2>5라인 독립 양액 흡입</h2>
    <div class="control-intro green"><b>A·B·C·D·E 원액을 분리하여 연결하는 벤추리 흡입 구성</b><p>다섯 개의 양액 흡입라인을 각각의 원액탱크에 연결하고, 설정 조건에 따라 필요한 원액을 선택적으로 흡입·혼합할 수 있습니다.</p></div>
    <div class="control-flow"><span>A액</span><i>＋</i><span>B액</span><i>＋</i><span>C액</span><i>＋</i><span>D액</span><i>＋</i><span>E액</span><i>›</i><span>혼합탱크</span></div>
    <div class="guide-grid benefit-grid"><section><b>원액별 분리 보관·흡입</b><p>서로 다른 원액을 각각의 탱크와 흡입라인에 분리하여 연결하므로, 공급할 때 필요한 원액을 선택적으로 사용할 수 있습니다.</p><em>원액 구성과 투입 관리가 명확</em></section><section><b>다양한 양액 처방 대응</b><p>A·B 기본 양액 외에 pH 조절액이나 생육단계·작물별 추가 원액을 별도 라인으로 구성할 수 있습니다.</p><em>작물과 생육단계에 맞춘 유연한 운용</em></section><section><b>라인별 독립 단속·조절</b><p>각 라인의 솔레노이드 밸브가 흡입을 독립적으로 단속하고, 정량조절 스텝밸브로 원액별 흡입량을 세밀하게 설정합니다.</p><em>EC·pH 목표값에 맞춘 정밀한 혼합</em></section><section><b>수작업 혼합 부담 절감</b><p>사용자가 원액을 매번 미리 혼합하거나 배관을 바꾸는 작업을 줄이고, 설정된 조건에 따라 자동으로 흡입·혼합합니다.</p><em>반복 작업과 투입 실수 감소에 도움</em></section></div>
    <p class="popup-note"><b>적용 모델:</b> WIN-9300S·WIN-9000S는 5라인, WIN-8000S는 기본 4라인에 옵션 1라인을 추가할 수 있습니다. WIN-7000S는 3라인 구성입니다. 각 라인의 실제 용도는 농장의 양액 처방과 시스템 설정에 따라 달라질 수 있습니다.</p>`;
  panels.independent += `<hr class="panel-divider"><h3>모델별 독립 양액 흡입라인</h3><div class="control-intro green"><b>여러 원액을 라인별로 분리하여 연결</b><p>각 라인의 솔레노이드 밸브가 흡입을 독립적으로 단속하고 정량조절 스텝밸브로 원액별 흡입량을 설정하여, 기본 양액과 추가 원액을 처방에 맞게 선택 혼합할 수 있습니다.</p></div><p class="popup-note">WIN-9300S·WIN-9000S는 5라인, WIN-8000S는 기본 4라인에 옵션 1라인 추가 가능, WIN-7000S는 3라인입니다.</p>`;
  panels.independent += `<div class="nutrient-example"><h3>양액 원액 구성 예시</h3><p class="example-lead">아래 내용은 5개 라인을 이해하기 위한 예시이며 고정된 배합 기준이 아닙니다.</p><div class="solution-line-grid"><section><span>A</span><div><b>기본 양액 원액 A</b><p>재배 처방에 따른 첫 번째 고농도 원액</p></div></section><section><span>B</span><div><b>기본 양액 원액 B</b><p>A액과 분리 보관하는 두 번째 고농도 원액</p></div></section><section><span>C</span><div><b>pH 조절액 예시</b><p>원수와 배양액의 pH 조절을 위한 전용 원액</p></div></section><section><span>D</span><div><b>추가 원액 예시</b><p>작물·생육단계에 따라 선택하는 보조 원액</p></div></section><section><span>E</span><div><b>추가 원액 예시</b><p>농가의 재배 처방에 맞춘 별도 원액</p></div></section></div></div>
    <div class="suction-process"><h3>양액이 흡입·공급되는 과정</h3><div class="process-row"><span><b>01</b>원액탱크 연결</span><i>›</i><span><b>02</b>사용 라인 선택</span><i>›</i><span><b>03</b>솔레노이드 밸브 열림</span><i>›</i><span><b>04</b>벤추리 흡입</span><i>›</i><span><b>05</b>혼합·EC·pH 확인</span><i>›</i><span><b>06</b>재배구역 공급</span></div><p>벤추리 전용 순환펌프가 흡입력을 만들면 선택된 라인의 원액이 정량조절부를 거쳐 혼합탱크로 유입됩니다. 시스템은 센서값과 설정조건을 확인하며 혼합하고, 공급펌프가 완성된 배양액을 선택 구역으로 보냅니다.</p></div>
    <div class="prescription-warning"><b>처방과 원액 선택은 사용자가 결정합니다</b><p>실제 A~E 원액의 종류·농도·사용 라인과 투입 비율은 작물, 생육단계, 원수 수질, 비료의 혼합 적합성 및 재배 방식에 따라 달라집니다. 농가의 재배 책임자 또는 양액 전문가가 결정하고, 비료·조절액 제조사의 사용방법과 안전자료를 확인하십시오.</p></div>`;

  const selectedModel = new URLSearchParams(window.location.search).get('model');
  const isWin9000 = selectedModel === 'WIN-9000S';
  const isWin8000 = selectedModel === 'WIN-8000S';
  const isWin7000 = selectedModel === 'WIN-7000S';
  const isWin5000 = selectedModel === 'WIN-5000S';
  if (isWin9000) {
    document.title = 'WIN-9000S 인젝션 마스터';
    const breadcrumbModel = document.querySelector('.win-top nav b');
    const currentModel = document.querySelector('.model-current b');
    const headingType = document.querySelector('.model-heading small');
    const headingName = document.querySelector('.model-heading h2');
    const headingCopy = document.querySelector('.model-heading p');
    const capacity = document.querySelector('.model-heading>span');
    if (breadcrumbModel) breadcrumbModel.textContent = 'WIN-9000S';
    if (currentModel) currentModel.textContent = 'WIN-9000S';
    if (headingType) headingType.textContent = '표준 탱크혼합형';
    if (headingName) headingName.textContent = 'WIN-9000S';
    if (headingCopy) headingCopy.textContent = '최대 200L/분의 공급능력과 170L 8각형 혼합탱크를 갖춘 표준형 배양액 자동공급기입니다.';
    if (capacity) capacity.innerHTML = '200L<small>최대 공급/분</small>';
    const productImage = document.querySelector('.product-view>img');
    if (productImage) { productImage.src = 'assets/img/win-9000s-front.png'; productImage.alt = 'WIN-9000S 정면'; }
    const views = document.querySelectorAll('.view-tabs [data-img]');
    const viewImages = ['assets/img/win-9000s-front.png','assets/img/win-9000s-rear-a.png','assets/img/win-9000s-rear-b.png','assets/img/win-9000s-side.png'];
    views.forEach(function (button, index) { if (viewImages[index]) button.dataset.img = viewImages[index]; });
    panels.spec = `<h2 class="spec-title">Specifications <small>WIN-9000S 제품 사양</small></h2><div class="spec-table-wrap"><table class="win-spec-table"><tbody>
      <tr><th rowspan="3">컴퓨터</th><th>하드웨어</th><td>임베디드 10.2인치 컬러</td></tr><tr><th>운영체제</th><td>MS Windows CE 6.0</td></tr><tr><th>설정조작</th><td>화면 터치 · 마우스 사용 가능</td></tr>
      <tr><th colspan="2">소프트웨어</th><td>TCK22 한글 · (주)우성하이텍 개발 ★</td></tr><tr><th rowspan="2">센서 Input</th><th>기본측정</th><td>EC · pH · 유량 · 성장광 [옵션: 보조 pH]</td></tr><tr><th>환경[옵션]</th><td>배지함수율·온도, 배액량·EC·pH, 실내환경</td></tr>
      <tr><th rowspan="2">공급능력</th><th>최대공급량</th><td>200L/분</td></tr><tr><th>공급펌프</th><td>입형 다단 · 5마력(삼상)</td></tr><tr><th rowspan="5">양액흡입</th><th>흡입라인</th><td>5라인(A·B·C·D·E액)</td></tr><tr><th>흡입방식</th><td>벤추리 방식</td></tr><tr><th>흡입단속</th><td>솔레노이드 밸브 ON·OFF</td></tr><tr><th>조절범위</th><td>30~300L/시간</td></tr><tr><th>미세조절</th><td>스텝 밸브</td></tr>
      <tr><th colspan="2">순환수 펌프</th><td>180L/분 · 890W</td></tr><tr><th colspan="2">혼합탱크</th><td>8각형 · 170L · 정수위 유지</td></tr><tr><th colspan="2">공급수 정압유지</th><td>릴리프 밸브(40A 버마드)</td></tr><tr><th colspan="2">공급량 측정장치</th><td>디지털 유량센서</td></tr><tr><th rowspan="3">제어출력</th><th>구역밸브</th><td>AC24V · 12라인</td></tr><tr><th>원수펌프</th><td>AC220V · 3kW</td></tr><tr><th>교반기</th><td>AC220V · 2kW</td></tr><tr><th colspan="2">크기(W·D·H)</th><td>1070 × 1050 × 1280mm</td></tr><tr><th colspan="2">프레임</th><td>AL 프로파일 45 × 45mm</td></tr><tr><th colspan="2">정격전압</th><td>AC380V · 삼상 4선식</td></tr><tr><th colspan="2">최대소비전류</th><td>28A(Max)</td></tr>
    </tbody></table></div><p class="popup-note">★ 표시는 (주)우성하이텍이 자체 제작한 항목입니다. 제품 사양은 제조사의 사정에 따라 변경될 수 있으므로 주문 전에 확인하십시오.</p>`;
    panels.parts = `<h2>WIN-9000S 주요 구성품</h2><div class="parts-popup"><figure><img src="assets/img/win-9000s-mixing-tank.png" alt="170L 8각형 혼합탱크"><figcaption>8각형 혼합탱크<br><small>170L · 정수위 유지 ★</small></figcaption></figure><figure><img src="assets/img/win-9000s-supply-pump.png" alt="WIN-9000S 공급펌프"><figcaption>공급펌프<br><small>입형 다단 · 5마력</small></figcaption></figure><figure><img src="assets/img/win-9000s-circulation-pump.png" alt="벤추리 전용 순환펌프"><figcaption>벤추리 전용 순환펌프</figcaption></figure><figure><img src="assets/img/win-9000s-injection-lines.png" alt="벤추리 정량밸브 순간유량계"><figcaption>벤추리·정량밸브·순간유량계 ★</figcaption></figure><figure><img src="assets/img/win-9000s-flow-sensor.png" alt="디지털 유량센서"><figcaption>디지털 유량센서 ★</figcaption></figure></div>`;
    panels.software = panels.software.replace('assets/img/win-9300s-software.png','assets/img/win-9000s-software.png');
  }
  const managerModelName = selectedModel || 'WIN-9300S';
  const managerCompatibility = isWin5000
    ? 'WIN-5000S의 직접주입형 운전 구성과 설치된 프로그램 버전을 함께 확인한 뒤 적용합니다.'
    : managerModelName + '의 제어 프로그램 버전과 농장 통신환경을 확인한 뒤 적용합니다.';
  const managerPanel = `<div class="manager-panel-head"><div><span>REMOTE MONITORING · CONTROL</span><h2>${managerModelName} + 인젝션 매니저 원격관리</h2><p>기존 양액공급기는 그대로 사용하고 인터넷 연결을 추가하여, 농장 밖에서도 주요 상태와 운전자료를 확인하고 필요한 설정·제어를 할 수 있습니다.</p></div><strong>별도 구매 제품</strong></div>
    <div class="manager-flow manager-flow-modern"><span>양액공급기<small>${managerModelName}</small></span><i>›</i><span>현장 서버 PC<small>관리 프로그램 설치</small></span><i>›</i><span>보안 연결<small>인터넷 통신</small></span><i>›</i><span>웹·앱<small>PC·태블릿·휴대폰</small></span></div>
    <div class="manager-benefits"><section><b>실시간 현황 확인</b><p>주요 측정값과 공급상태, 작동 중인 구역을 원격 화면에서 확인합니다.</p></section><section><b>운전자료·그래프 조회</b><p>시간에 따른 측정값과 공급 이력을 비교하여 농장 상태를 검토합니다.</p></section><section><b>설정·제어 관리</b><p>권한이 있는 사용자가 운전조건을 확인하고 필요한 설정과 제어를 수행합니다.</p></section></div>
    <div class="manager-demo-title"><div><b>인젝션 매니저 주요 화면</b><span>실제 사용 화면의 대표 구성을 확인할 수 있습니다.</span></div></div>
    <div class="manager-demo-grid"><figure><img src="assets/img/injection-manager-main.png" alt="인젝션 매니저 실시간 현황 화면"><figcaption><b>실시간 현황</b><span>측정값·공급상태·구역 확인</span></figcaption></figure><figure><img src="assets/img/injection-manager-data.png" alt="인젝션 매니저 데이터 조회 화면"><figcaption><b>데이터 조회</b><span>운전이력과 시간별 그래프 확인</span></figcaption></figure><figure><img src="assets/img/injection-manager-settings.png" alt="인젝션 매니저 설정 관리 화면"><figcaption><b>설정 관리</b><span>운전조건과 구역별 설정 확인</span></figcaption></figure></div>
    <div class="manager-actions"><a href="injection-manager.html">인젝션 매니저 상세 안내 <i>›</i></a><a class="primary" href="https://demo.woosunghitec.kr/" target="_blank" rel="noopener">인젝션 매니저 데모 체험 <i>↗</i></a></div>
    <p class="popup-note manager-compat-note"><b>${managerModelName} 적용 안내:</b> ${managerCompatibility} 인젝션 매니저는 기본 구성에 포함되지 않으며, 인터넷·현장 서버 PC·원격접속 환경과 설치 방법은 도입 전에 확인해야 합니다.</p>`;
  panels.manager = managerPanel;
  panels.network = managerPanel;

  if (isWin8000) {
    document.title = 'WIN-8000S 인젝션 마스터';
    const breadcrumbModel = document.querySelector('.win-top nav b');
    const currentModel = document.querySelector('.model-current b');
    const headingName = document.querySelector('.model-heading h2');
    const headingCopy = document.querySelector('.model-heading p');
    const capacity = document.querySelector('.model-heading>span');
    if (breadcrumbModel) breadcrumbModel.textContent = 'WIN-8000S';
    if (currentModel) currentModel.textContent = 'WIN-8000S';
    if (headingName) headingName.textContent = 'WIN-8000S';
    if (headingCopy) headingCopy.textContent = '최대 160L/분의 공급능력을 갖춘 중형 탱크혼합 배양액 자동공급기입니다.';
    if (capacity) capacity.innerHTML = '160L<small>최대 공급/분</small>';
    const productImage = document.querySelector('.product-view>img');
    if (productImage) { productImage.src = 'assets/img/win-8000s-front.png'; productImage.alt = 'WIN-8000S 정면'; }
    const views = document.querySelectorAll('.view-tabs [data-img]');
    const viewImages = ['assets/img/win-8000s-front.png','assets/img/win-8000s-tank-side.png','assets/img/win-8000s-pump-side.png','assets/img/win-8000s-control-side.png'];
    views.forEach(function (button, index) { if (viewImages[index]) button.dataset.img = viewImages[index]; });
    panels.spec = `<h2 class="spec-title">Specifications <small>WIN-8000S 제품 사양</small></h2><div class="spec-table-wrap"><table class="win-spec-table"><tbody>
      <tr><th rowspan="3">컴퓨터</th><th>하드웨어</th><td>임베디드 10.2인치 컬러</td></tr><tr><th>운영체제</th><td>MS 윈도우즈 CE6.0</td></tr><tr><th>설정조작</th><td>화면터치(마우스 사용가능)</td></tr><tr><th colspan="2">소프트웨어 NO.</th><td>TCK22 한글((주)우성하이텍 개발)</td></tr>
      <tr><th rowspan="2">센서 Input</th><th>기본측정</th><td>EC, pH, 유량, 성장광 [옵션: 보조pH]</td></tr><tr><th>환경[옵션]</th><td>배지함수율, 온도, 배액량, EC, pH, 실내환경</td></tr><tr><th rowspan="2">공급능력</th><th>최대공급량</th><td>160L/분</td></tr><tr><th>공급펌프</th><td>입형 다단 / 3마력(삼상)</td></tr>
      <tr><th rowspan="5">양액흡입</th><th>흡입라인</th><td>4라인(A·B·C·D액) [옵션: 1라인 추가가능]</td></tr><tr><th>흡입방식</th><td>벤추리 방식</td></tr><tr><th>흡입단속</th><td>솔레노이드 밸브 ON·OFF</td></tr><tr><th>조절범위</th><td>30~300L/시간</td></tr><tr><th>미세조절</th><td>스텝 밸브</td></tr>
      <tr><th colspan="2">순환수 펌프</th><td>180L/분 890W</td></tr><tr><th colspan="2">혼합탱크</th><td>8각형, 170L, 정수위유지</td></tr><tr><th colspan="2">공급수 정압유지</th><td>릴리프 밸브(40A 버마드)</td></tr><tr><th colspan="2">공급량 측정장치</th><td>디지털 유량센서</td></tr>
      <tr><th rowspan="3">제어출력</th><th>구역밸브</th><td>AC24V 12라인</td></tr><tr><th>원수펌프</th><td>AC220V 3KW</td></tr><tr><th>교반기</th><td>AC220V 2KW</td></tr><tr><th colspan="2">크기(W·D·H mm)</th><td>1070×1050×1280</td></tr><tr><th colspan="2">프레임 재질 및 규격</th><td>AL프로파일 45×45mm</td></tr><tr><th colspan="2">정격전압</th><td>AC380V(삼상4선식)</td></tr><tr><th colspan="2">최대소비전류</th><td>24A(Max)</td></tr>
    </tbody></table></div><p class="popup-note">제품 사양은 제조사의 사정에 따라 공지 없이 변경될 수 있으므로 주문 전에 확인하십시오.</p>`;
    panels.parts = `<h2>WIN-8000S 주요 구성품</h2><div class="parts-popup"><figure><img src="assets/img/win-8000s-mixing-tank.png" alt="WIN-8000S 8각형 혼합탱크"><figcaption>8각형 혼합탱크 ★</figcaption></figure><figure><img src="assets/img/win-8000s-supply-pump.png" alt="WIN-8000S 공급펌프"><figcaption>공급펌프<br><small>윌로 · 한국</small></figcaption></figure><figure><img src="assets/img/win-8000s-circulation-pump.png" alt="벤추리 전용 순환펌프"><figcaption>벤추리 전용 순환펌프<br><small>윌로</small></figcaption></figure><figure><img src="assets/img/win-8000s-injection-lines.png" alt="벤추리 정량밸브 순간유량계"><figcaption>벤추리·정량밸브·순간유량계 ★</figcaption></figure><figure><img src="assets/img/win-8000s-flow-sensor.png" alt="디지털 유량센서"><figcaption>디지털 유량센서 ★</figcaption></figure></div>`;
    panels.software = panels.software.replace('assets/img/win-9300s-software.png','assets/img/win-8000s-software.png');
  }
  if (isWin7000) {
    document.title = 'WIN-7000S 인젝션 마스터';
    const breadcrumbModel = document.querySelector('.win-top nav b');
    const currentModel = document.querySelector('.model-current b');
    const headingName = document.querySelector('.model-heading h2');
    const headingCopy = document.querySelector('.model-heading p');
    const capacity = document.querySelector('.model-heading>span');
    if (breadcrumbModel) breadcrumbModel.textContent = 'WIN-7000S';
    if (currentModel) currentModel.textContent = 'WIN-7000S';
    if (headingName) headingName.textContent = 'WIN-7000S';
    if (headingCopy) headingCopy.textContent = '최대 130L/분의 공급능력을 갖춘 AC220V 단상 탱크혼합 배양액 자동공급기입니다.';
    if (capacity) capacity.innerHTML = '130L<small>최대 공급/분</small>';
    const productImage = document.querySelector('.product-view>img');
    if (productImage) { productImage.src = 'assets/img/win-7000s-front.png'; productImage.alt = 'WIN-7000S 정면'; }
    const views = document.querySelectorAll('.view-tabs [data-img]');
    const viewImages = ['assets/img/win-7000s-front.png','assets/img/win-7000s-tank-side.png','assets/img/win-7000s-pump-side.png','assets/img/win-7000s-control-side.png'];
    views.forEach(function (button, index) { if (viewImages[index]) button.dataset.img = viewImages[index]; });
    panels.spec = `<h2 class="spec-title">Specifications <small>WIN-7000S 제품 사양</small></h2><div class="spec-table-wrap"><table class="win-spec-table"><tbody>
      <tr><th rowspan="3">컴퓨터</th><th>하드웨어</th><td>임베디드 10.2인치 컬러</td></tr><tr><th>운영체제</th><td>MS 윈도우즈 CE6.0</td></tr><tr><th>설정조작</th><td>화면터치(마우스 사용가능)</td></tr><tr><th colspan="2">소프트웨어 NO.</th><td>TCK22 한글((주)우성하이텍 개발)</td></tr>
      <tr><th rowspan="2">센서 Input</th><th>기본측정</th><td>EC, pH, 유량, 성장광 [옵션: 보조pH]</td></tr><tr><th>환경[옵션]</th><td>배지함수율, 온도, 배액량, EC, pH, 실내환경</td></tr><tr><th rowspan="2">공급능력</th><th>최대공급량</th><td>130L/분</td></tr><tr><th>공급펌프</th><td>횡형 농공업용 / 2마력(단상)</td></tr>
      <tr><th rowspan="5">양액흡입</th><th>흡입라인</th><td>3라인(A·B·C액)</td></tr><tr><th>흡입방식</th><td>벤추리 방식</td></tr><tr><th>흡입단속</th><td>솔레노이드 밸브 ON·OFF</td></tr><tr><th>조절범위</th><td>30~300L/시간</td></tr><tr><th>미세조절</th><td>스텝 밸브</td></tr>
      <tr><th colspan="2">순환수 펌프</th><td>180L/분 890W</td></tr><tr><th colspan="2">혼합탱크</th><td>8각형, 170L, 정수위유지</td></tr><tr><th colspan="2">공급수 정압유지</th><td>릴리프 밸브(40A 버마드)</td></tr><tr><th colspan="2">공급량 측정장치</th><td>디지털 유량센서</td></tr>
      <tr><th rowspan="3">제어출력</th><th>구역밸브</th><td>AC24V 12라인</td></tr><tr><th>원수펌프</th><td>AC220V 3KW</td></tr><tr><th>교반기</th><td>AC220V 2KW</td></tr><tr><th colspan="2">크기(W·D·H mm)</th><td>950×1000×1270</td></tr><tr><th colspan="2">프레임 재질 및 규격</th><td>AL프로파일 40×40mm</td></tr><tr><th colspan="2">정격전압</th><td>AC220V 60Hz</td></tr><tr><th colspan="2">최대소비전류</th><td>30A(Max)</td></tr>
    </tbody></table></div><p class="popup-note">제품 사양은 제조사의 사정에 따라 공지 없이 변경될 수 있으므로 주문 전에 확인하십시오.</p>`;
    panels.parts = `<h2>WIN-7000S 주요 구성품</h2><div class="parts-popup"><figure><img src="assets/img/win-7000s-mixing-tank.png" alt="WIN-7000S 8각형 혼합탱크"><figcaption>8각형 혼합탱크 ★</figcaption></figure><figure><img src="assets/img/win-7000s-supply-pump.png" alt="WIN-7000S 공급펌프"><figcaption>공급펌프<br><small>윌로 · 한국</small></figcaption></figure><figure><img src="assets/img/win-7000s-circulation-pump.png" alt="벤추리 전용 순환펌프"><figcaption>벤추리 전용 순환펌프<br><small>윌로</small></figcaption></figure><figure><img src="assets/img/win-7000s-injection-lines.png" alt="벤추리 정량밸브 순간유량계"><figcaption>벤추리·정량밸브·순간유량계 ★</figcaption></figure><figure><img src="assets/img/win-7000s-flow-sensor.png" alt="디지털 유량센서"><figcaption>디지털 유량센서 ★</figcaption></figure></div>`;
    panels.software = panels.software.replace('assets/img/win-9300s-software.png','assets/img/win-7000s-software.png');
  }
  if (isWin5000) {
    document.title = 'WIN-5000S 인젝션 마스터';
    const breadcrumbModel = document.querySelector('.win-top nav b');
    const currentModel = document.querySelector('.model-current b');
    const headingType = document.querySelector('.model-heading small');
    const headingName = document.querySelector('.model-heading h2');
    const headingCopy = document.querySelector('.model-heading p');
    const capacity = document.querySelector('.model-heading>span');
    if (breadcrumbModel) breadcrumbModel.textContent = 'WIN-5000S';
    if (currentModel) currentModel.textContent = 'WIN-5000S';
    if (headingType) headingType.textContent = '직접주입 연속공급형';
    if (headingName) headingName.textContent = 'WIN-5000S';
    if (headingCopy) headingCopy.textContent = '최대 130L/분의 공급능력을 갖추고 혼합탱크 없이 스마트 믹싱챔버와 배관에서 원수와 양액을 연속 혼합하는 직접주입형 배양액 자동공급기입니다.';
    if (capacity) capacity.innerHTML = '130L<small>최대 공급/분</small>';
    const productImage = document.querySelector('.product-view>img');
    if (productImage) { productImage.src = 'assets/img/win-5000s-front.png'; productImage.alt = 'WIN-5000S 정면'; }
    const views = document.querySelectorAll('.view-tabs [data-img]');
    const viewImages = ['assets/img/win-5000s-front.png','assets/img/win-5000s-rear.png','assets/img/win-5000s-injection.png','assets/img/win-5000s-mixing.png'];
    const viewLabels = ['정면','후면','정량주입부','믹싱챔버'];
    views.forEach(function (button, index) {
      if (viewImages[index]) button.dataset.img = viewImages[index];
      if (viewLabels[index]) button.textContent = viewLabels[index];
    });
    panels.spec = `<h2 class="spec-title">Specifications <small>WIN-5000S 제품 사양</small></h2><div class="spec-table-wrap"><table class="win-spec-table"><tbody>
      <tr><th rowspan="3">컴퓨터</th><th>하드웨어</th><td>임베디드 10.2인치 컬러</td></tr><tr><th>운영체제</th><td>MS 윈도우즈 CE6.0</td></tr><tr><th>설정조작</th><td>화면 터치 · 마우스 사용 가능</td></tr><tr><th colspan="2">소프트웨어 NO.</th><td>TCK22 한글 · e Farmer Nutri · (주)우성하이텍 개발</td></tr>
      <tr><th rowspan="2">센서 Input</th><th>기본측정</th><td>EC · pH · 유량 · 성장광</td></tr><tr><th>환경[옵션]</th><td>배지함수율·온도, 배액량·EC·pH, 실내환경</td></tr><tr><th rowspan="2">공급능력</th><th>최대공급량</th><td>130L/분</td></tr><tr><th>공급펌프</th><td>횡형 농공업용 · 2마력(단상)</td></tr>
      <tr><th rowspan="5">양액흡입</th><th>흡입라인</th><td>3라인(A·B·C액)</td></tr><tr><th>흡입방식</th><td>벤추리 방식</td></tr><tr><th>흡입단속</th><td>솔레노이드 밸브 ON·OFF</td></tr><tr><th>조절범위</th><td>30~300L/시간</td></tr><tr><th>미세조절</th><td>스텝 밸브</td></tr>
      <tr><th colspan="2">혼합탱크</th><td>사용하지 않음 · 배관 내 직접주입</td></tr><tr><th colspan="2">원수 여과기</th><td>디스크 필터(120메시)</td></tr><tr><th colspan="2">혼합장치</th><td>스마트 믹싱챔버</td></tr><tr><th colspan="2">공급수 정압유지</th><td>수압 유지 조절밸브(25A 버마드)</td></tr><tr><th colspan="2">공급량 측정장치</th><td>디지털 유량센서</td></tr>
      <tr><th rowspan="2">제어출력</th><th>구역밸브</th><td>AC24V · 12라인</td></tr><tr><th>교반기</th><td>AC220V · 2kW</td></tr><tr><th colspan="2">크기(W·D·H)</th><td>780 × 780 × 1330mm</td></tr><tr><th colspan="2">프레임 재질·규격</th><td>AL 프로파일 40 × 40mm</td></tr><tr><th colspan="2">정격전압</th><td>AC220V 60Hz</td></tr><tr><th colspan="2">최대소비전류</th><td>15A(Max)</td></tr>
    </tbody></table></div><div class="direct-function-note"><b>소프트웨어 기능 적용 안내</b><span>WIN-5000S는 혼합탱크를 사용하지 않는 직접주입형이므로 소프트웨어의 혼합통 연동 기능은 사용할 수 없습니다.</span></div><p class="popup-note">제품 사양은 제조사의 사정에 따라 공지 없이 변경될 수 있으므로 주문 전에 확인하십시오.</p>`;
    panels.parts = `<h2>WIN-5000S 주요 구성품</h2><div class="parts-popup"><figure><img src="assets/img/win-5000s-filter.png" alt="WIN-5000S 디스크 필터"><figcaption>디스크 필터<br><small>원수 여과</small></figcaption></figure><figure><img src="assets/img/win-5000s-pump.png" alt="WIN-5000S 공급펌프"><figcaption>공급펌프<br><small>윌로 · 한국</small></figcaption></figure><figure><img src="assets/img/win-5000s-mixing.png" alt="WIN-5000S 스마트 믹싱챔버"><figcaption>스마트 믹싱챔버 ★</figcaption></figure><figure><img src="assets/img/win-5000s-injection.png" alt="WIN-5000S 벤추리 정량밸브 순간유량계"><figcaption>벤추리·정량밸브·순간유량계 ★</figcaption></figure><figure><img src="assets/img/win-5000s-flow.png" alt="WIN-5000S 디지털 유량센서"><figcaption>디지털 유량센서 ★</figcaption></figure></div>`;
    panels.software = panels.software.replace('assets/img/win-9300s-software.png','assets/img/win-5000s-software.png') + `<div class="direct-function-note"><b>WIN-5000S 기능 차이</b><span>e Farmer Nutri의 공통 제어 기능을 사용하지만, 혼합탱크가 없는 직접주입 구조이므로 혼합통 연동 기능은 사용할 수 없습니다.</span></div>`;
    panels.threeLines = `<h2>A·B·C 3개 양액 흡입라인</h2><div class="control-intro green"><b>세 가지 원액을 분리 연결해 필요한 라인을 선택 흡입</b><p>각 라인의 솔레노이드 밸브가 흡입을 독립적으로 단속하고 정량조절 스텝밸브로 원액별 흡입량을 설정합니다.</p></div><div class="control-flow"><span>A액</span><i>＋</i><span>B액</span><i>＋</i><span>C액</span><i>›</i><span>스마트 믹싱챔버</span><i>›</i><span>배관 내 연속 혼합</span></div><p class="popup-note">실제 원액의 종류·농도와 투입 비율은 작물, 생육단계, 원수 수질과 재배 처방에 따라 사용자가 결정해야 합니다.</p>`;
    const overview = document.querySelector('.selection-warning');
    if (overview) overview.insertAdjacentHTML('beforebegin', '<aside class="direct-function-note overview-note"><b>소프트웨어 기능 적용 안내</b><span>혼합탱크를 사용하지 않는 모델이므로 <strong>혼합통 연동 기능은 사용할 수 없습니다.</strong> 그 밖의 공통 제어 기능은 동일하게 사용합니다.</span></aside>');
  }

  if (isWin8000) {
    panels.fiveLines = panels.fiveLines
      .replace('5라인 독립 양액 흡입', '기본 4라인 · 옵션 1라인 양액 흡입')
      .replace('A·B·C·D·E 원액을 분리하여 연결하는 벤추리 흡입 구성', 'A·B·C·D 기본 4라인과 선택 가능한 옵션 1라인 구성')
      .replace('다섯 개의 양액 흡입라인', '기본 네 개의 양액 흡입라인과 옵션 한 개 라인')
      .replace('<span>E액</span>', '<span>E액(옵션)</span>');
    panels.independent = panels.independent
      .replace('아래 내용은 5개 라인을 이해하기 위한 예시', '아래 내용은 기본 4개 라인과 옵션 1개 라인을 이해하기 위한 예시')
      .replace('<section><span>E</span>', '<section><span>E<br><small>옵션</small></span>');
  }
  if (isWin7000) {
    panels.fiveLines = panels.fiveLines
      .replace('5라인 독립 양액 흡입', '3라인 독립 양액 흡입')
      .replace(/A·B·C·D·E/g, 'A·B·C')
      .replace('다섯 개의 양액 흡입라인', '세 개의 양액 흡입라인')
      .replace('<span>C액</span><i>＋</i><span>D액</span><i>＋</i><span>E액</span>', '<span>C액</span>');
    panels.independent = panels.independent
      .replace(/A·B·C·D·E/g, 'A·B·C')
      .replace(/다섯 개/g, '세 개')
      .replace(/5개/g, '3개')
      .replace(/<section><span>D<\/span>[\s\S]*?<\/section>/, '')
      .replace(/<section><span>E<\/span>[\s\S]*?<\/section>/, '');
  }

  function closeModal() {
    modal.classList.remove('on');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  const advantageGrid = document.querySelector('.advantage-grid');
  if (advantageGrid) {
    const advantageButtons = advantageGrid.querySelectorAll('button');
    if (advantageButtons[1]) {
      advantageButtons[1].dataset.open = 'independent';
      advantageButtons[1].innerHTML = '<b>흡입·공급 분리형 벤추리</b><strong>2중 펌프 독립순환으로 흡입·혼합과 현장 공급을 분리</strong>';
      if (isWin5000) {
        advantageButtons[1].dataset.open = 'parts';
        advantageButtons[1].innerHTML = '<b>혼합탱크 없는 직접주입</b><strong>스마트 믹싱챔버와 배관에서 원수와 양액을 연속 혼합</strong>';
      }
    }
    const fiveLineCard = document.createElement('button');
    fiveLineCard.type = 'button';
    fiveLineCard.dataset.open = 'fiveLines';
    fiveLineCard.innerHTML = '<b>A·B·C·D·E 5개 흡입라인</b><strong>여러 원액을 분리 연결하고 필요한 라인을 선택해 정밀 흡입</strong>';
    if (isWin8000) fiveLineCard.innerHTML = '<b>기본 4개 흡입라인</b><strong>A·B·C·D 원액 연결 · 필요 시 옵션 1라인 추가 가능</strong>';
    if (isWin7000) fiveLineCard.innerHTML = '<b>A·B·C 3개 흡입라인</b><strong>세 가지 원액을 분리 연결하고 라인별로 정밀 흡입</strong>';
    if (isWin5000) { fiveLineCard.dataset.open = 'threeLines'; fiveLineCard.innerHTML = '<b>A·B·C 3개 흡입라인</b><strong>세 가지 원액을 분리 연결하고 라인별로 정밀 흡입</strong>'; }
    if (advantageButtons[1]) advantageButtons[1].after(fiveLineCard);
    else advantageGrid.appendChild(fiveLineCard);
    const dataRemote = advantageButtons[advantageButtons.length - 1];
    if (dataRemote) {
      dataRemote.dataset.open = 'history';
      dataRemote.innerHTML = '<b>약 20년 데이터 저장</b><strong>센서·공급·경보 기록을 다음 작기에 활용</strong>';
    }
    const maintenanceCard = document.createElement('button');
    maintenanceCard.type = 'button';
    maintenanceCard.dataset.open = 'maintenance';
    maintenanceCard.innerHTML = '<b>자체 개발·유지보수</b><strong>핵심 기술을 직접 개발해 신속한 기술지원</strong>';
    advantageGrid.appendChild(maintenanceCard);
    const managerCard = document.createElement('button');
    managerCard.type = 'button';
    managerCard.dataset.open = 'manager';
    managerCard.innerHTML = '<b>인젝션 매니저</b><strong>농장 PC를 서버로 언제 어디서나 원격관리 · 유료</strong>';
    advantageGrid.appendChild(managerCard);
  }
  document.querySelectorAll('[data-open="network"] span').forEach(function (label) {
    label.innerHTML = label.closest('.detail-cards') ? '<b>인젝션 매니저</b><small>원격 확인·제어·설정 · 별도 구매</small>' : '인젝션 매니저';
  });

  const detailCards = document.querySelector('.detail-cards');
  if (detailCards) {
    const sensorCard = document.createElement('button');
    sensorCard.type = 'button';
    sensorCard.dataset.open = 'sensors';
    sensorCard.innerHTML = '<i>07</i><span><b>EC·pH 센서 관리</b><small>Sensorex 공식 점검·교체 기준</small></span><em>›</em>';
    detailCards.appendChild(sensorCard);
  }
  const sideLast = document.querySelector('.win-side .all-models-link');
  if (sideLast) {
    const sensorMenu = document.createElement('button');
    sensorMenu.type = 'button';
    sensorMenu.dataset.open = 'sensors';
    sensorMenu.innerHTML = '<i>07</i><span>EC·pH 센서 관리</span>';
    sideLast.before(sensorMenu);
    const sitesMenu = document.createElement('button');
    sitesMenu.type = 'button';
    sitesMenu.dataset.open = 'sites';
    sitesMenu.innerHTML = '<i>08</i><span>설치·사용 현장</span>';
    sideLast.before(sitesMenu);
    const relatedMenu = document.createElement('button');
    relatedMenu.type = 'button';
    relatedMenu.dataset.open = 'relatedParts';
    relatedMenu.innerHTML = '<i>09</i><span>관련 부품</span>';
    sideLast.before(relatedMenu);
  }
  const winAboutImage = document.querySelector('#winAboutImage');
  const selectedProductImage = document.querySelector('.product-view>img');
  if (winAboutImage && selectedProductImage) {
    winAboutImage.src = selectedProductImage.getAttribute('src');
    winAboutImage.alt = (document.querySelector('.model-current b')?.textContent || '인젝션 마스터') + ' 제품 이미지';
  }

  document.addEventListener('click', function (event) {
    const relatedFilter = event.target.closest('[data-related-filter]');
    if (relatedFilter) {
      const selected = relatedFilter.dataset.relatedFilter;
      document.querySelectorAll('[data-related-filter]').forEach(function (item) {
        item.classList.toggle('on', item === relatedFilter);
      });
      document.querySelectorAll('[data-related-category]').forEach(function (card) {
        const categories = (card.dataset.relatedCategory || '').split(' ');
        card.hidden = selected !== 'all' && !categories.includes(selected);
      });
      return;
    }
    const siteThumb = event.target.closest('[data-site-img]');
    if (siteThumb) {
      const featured = document.getElementById('siteFeatured');
      const caption = document.getElementById('siteCaption');
      if (featured) {
        featured.src = siteThumb.dataset.siteImg;
        featured.alt = siteThumb.dataset.siteCaption || '배양액 공급 시스템 설치 현장';
      }
      if (caption) caption.textContent = siteThumb.dataset.siteCaption || '';
      document.querySelectorAll('[data-site-img]').forEach(function (item) {
        item.classList.toggle('on', item === siteThumb);
      });
      return;
    }
    const view = event.target.closest('[data-img]');
    if (view) {
      document.querySelector('.product-view>img').src = view.dataset.img;
      document.querySelectorAll('[data-img]').forEach(function (item) {
        item.classList.toggle('on', item === view);
      });
      return;
    }
    const open = event.target.closest('[data-open]');
    let panelKey = open && open.dataset.open;
    if (open && (open.textContent.includes('벤추리 독립순환') || open.textContent.includes('흡입·공급 분리형 벤추리'))) panelKey = 'independent';
    if (open && open.textContent.includes('컴퓨터 정밀제어')) panelKey = 'efarmer';
    if (open && open.textContent.includes('EC·pH 정밀관리')) panelKey = 'precision';
    if (open && open.textContent.includes('다양한 자동공급')) panelKey = 'supplyMethods';
    if (open && open.textContent.includes('12구역·2그룹')) panelKey = 'zones';
    if (open && panels[panelKey]) {
      body.innerHTML = panels[panelKey];
      modal.classList.add('on');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    if (event.target === modal || event.target.closest('.modal-x')) closeModal();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeModal();
  });
})();
