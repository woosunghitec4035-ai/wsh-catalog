(function(){
 var parts=[
  ['measure service','EC 센서','측정·교정','ec-sensor.png',['Body: Epoxy · 측정부: Graphite','Cell constant K=1.0 · 사용온도 0~70℃','Ø12 × 152mm · Sensorex(미국)']],
  ['measure service','pH 센서','측정·교정','ph-sensor.png',['Body: Polycarbonate · pH 0~14','Isopotential 7.0pH · 최대 60℃','Ø12 × 150mm · Sensorex(미국)']],
  ['measure expand','성장광 센서','기본 제공 · 측정','growth-light-sensor.png',['0~2,000W/㎡ · 정밀도 ±5% 이내','출력 0~250mV','제조사: (주)우성하이텍']],
  ['measure maintain','유량 센서','측정·성능 유지','flow-sensor.png',['80~250L/분 · DC12V','리드접점 1펄스/4L · 정밀도 ±3%','2인치 유니온 커플링']],
  ['measure expand','TDR 배지센서','옵션 · 기능 확장','tdr-substrate-sensor.png',['함수율 0~100% · 0~5V 출력','배지온도 -19~60℃ · 케이블 15m','정밀도 ±0.5℃(20~50℃), 그 외 ±1℃']],
  ['measure expand','실내 공기환경 센서노드','옵션 · 환경 측정','indoor-environment-node.png',['온도 -19~60℃ · 습도 0~100%RH','CO₂ 0~3,000ppm · 무선 최대 150m','크기 Ø180 × 260mm · 100W FAN']],
  ['measure service','EC·pH 표준액','교정·소모성','ec-ph-standard-solution.png',['500ml','EC 1.4 · EC 5.0','pH 6.86 · pH 4.0']],
  ['measure maintain','휴대용 EC·pH 측정기','측정·성능 유지','ec-ph-meter.png',['EC 0~20mS · pH 0~14','제조사: TASERON(네덜란드)']],
  ['maintain service','양액 흡입용 전자밸브','성능 유지·A/S','nutrient-solenoid-valve.png',['AC24V · Body PVC · Orifice Ø8','제조사: BACCARA(이스라엘)']],
  ['expand service','구역 전자밸브 · 글로브형','기능 확장·A/S','zone-valve-globe.png',['AC24V · Body Plastic','연결 2인치 암나사 · BERMAD']],
  ['expand service','구역 전자밸브 · 앵글형','기능 확장·A/S','zone-valve-angle.png',['AC24V · Body Plastic','연결 2인치 암나사 · BERMAD']],
  ['maintain service','정밀조절밸브','성능 유지·A/S','precision-control-valve.png',['Body·Knob PVC · 조절부 Stainless','Orifice Ø9 · 설정위치 유지','제조사: (주)우성하이텍']],
  ['maintain service','벤추리','성능 유지·A/S','venturi.png',['Body PVC · Orifice Ø3','제조사: (주)우성하이텍']],
  ['maintain service','순간 유량계','성능 유지·A/S','instant-flow-meter.png',['Body P.C · Float SUS','유량범위 0~5.5LPM','제조사: (주)우성하이텍']],
  ['maintain service','원수 여과기','성능 유지·소모성','raw-water-filter.png',['120mesh 디스크 필터','입수구·토출구 2인치 암나사','제조사: 태광에이텍(한국)']],
  ['expand service','양액 교반기','기능 확장 · 외부 제조품','nutrient-mixer.png',['AC220V · 40W · 35rpm','감속비 50:1 · 샤프트 Ø12 × 800(SUS)','프로펠러 600 × 40 · 탱크커버 Ø490(SUS)','제조사: 우성하이텍 원예자재(한국) · 당사 제작품 아님']]
 ];
 function render(){return '<h2>관련 부품 <span class="related-subtitle">사진 · 용도 · 주요 사양</span></h2><div class="related-intro"><b>고화질 부품 사진과 주요 스펙</b><p>센서 측정범위, 전원, 재질과 연결 규격을 함께 확인할 수 있습니다. PART NO.는 제외했습니다.</p></div><div class="related-filters" role="group" aria-label="관련 부품 분류"><button type="button" class="on" data-related-filter="all">전체</button><button type="button" data-related-filter="measure">측정·교정</button><button type="button" data-related-filter="maintain">성능 유지</button><button type="button" data-related-filter="expand">기능 확장</button><button type="button" data-related-filter="service">A/S·소모성</button></div><div class="related-grid related-grid-detailed">'+parts.map(function(part){return '<article data-related-category="'+part[0]+'"><figure><img src="assets/img/injection-master-parts/'+part[3]+'" alt="'+part[1]+'"></figure><div><em>'+part[2]+'</em><h3>'+part[1]+'</h3><ul>'+part[4].map(function(spec){return '<li>'+spec+'</li>'}).join('')+'</ul></div></article>'}).join('')+'</div><p class="related-notice">제품 사양은 변경될 수 있습니다. 주문 전 적용 모델·전원·배관 규격과 기본·선택 구성을 확인해 주십시오.</p>'}
 document.addEventListener('click',function(event){var button=event.target.closest('[data-open="relatedParts"]');if(!button)return;document.getElementById('winModalBody').innerHTML=render()});
})();
