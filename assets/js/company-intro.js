(function(){
 if(!document.querySelector('link[data-company-ip]')){var ipStyle=document.createElement('link');ipStyle.rel='stylesheet';ipStyle.href='assets/css/company-ip.css?v=20260819-2';ipStyle.dataset.companyIp='1';document.head.appendChild(ipStyle)}
 if(!document.querySelector('link[data-company-certification]')){var certStyle=document.createElement('link');certStyle.rel='stylesheet';certStyle.href='assets/css/company-certification.css';certStyle.dataset.companyCertification='1';document.head.appendChild(certStyle)}
 var open=document.getElementById('companyIntroStart'),dialog=document.getElementById('companyIntroDialog');
 if(!open||!dialog)return;
 var head=dialog.querySelector(':scope > header');
 if(head&&!head.querySelector('.company-headquarters')){
  var photo=document.createElement('img');photo.className='company-headquarters';photo.src='assets/img/company/company-main.jpg';photo.alt='우성하이텍 본사 전경';head.insertBefore(photo,head.firstChild);
 }
 var body=dialog.querySelector('.company-intro-body');
 if(body&&!body.querySelector('.company-value .company-automation-value')){
  var valueGrid=body.querySelector('.company-value>div');
  if(valueGrid){var automation=document.createElement('article');automation.className='company-automation-value';automation.innerHTML='<b>통합 자동화</b><p>농가 고령화와 노동력 부족에 대응할 수 있도록 반복 작업을 줄이고 시설 운영의 안정화를 지원합니다.</p>';valueGrid.classList.add('company-value-four');valueGrid.insertBefore(automation,valueGrid.firstChild)}
 }
 if(body&&!body.querySelector('.company-visual-story')){
  var story=document.createElement('section');story.className='company-visual-story';
  story.innerHTML='<header><small>OUR COMPANY</small><h3>현장 가까이에서 개발하고 직접 생산합니다</h3><p>사업장, 생산, 연구개발과 서비스가 하나의 기술체계로 이어집니다.</p></header><div class="company-story-tabs" role="tablist" aria-label="회사 소개 사진"><button type="button" class="on" data-company-gallery="locations">사업장</button><button type="button" data-company-gallery="production">생산</button><button type="button" data-company-gallery="research">연구·A/S</button></div><div class="company-story-gallery" id="companyStoryGallery"></div>';
  var philosophy=body.querySelector('.company-philosophy');body.insertBefore(story,philosophy||body.firstChild);
  var galleries={
   locations:[['company-main.jpg','본사','경남 양산'],['location-busan.jpg','부산지사','부산 강서구'],['location-central.jpg','중부지사','충북 청주'],['location-jeju.jpg','제주지사','제주 연구개발 거점'],['company-farm.jpg','연구농장','현장 실증과 재배 연구']],
   production:[['company-production1.jpg','롤업스타','전동개폐기 생산'],['company-production2.jpg','DC24V 전동모터','자동화 생산'],['company-production3.jpg','롤업마스터','컨트롤러 생산'],['company-production4.jpg','구동장치','조립과 검사'],['company-production5.jpg','양액공급기','시스템 제작'],['company-production6.jpg','무선센서','전자제품 생산']],
   research:[['company-research1.jpg','하드웨어 연구개발','구동기와 제어기 설계'],['company-research2.jpg','소프트웨어 연구개발','환경제어 프로그램 개발'],['company-as.jpg','애프터서비스','제품 점검과 신속한 기술지원']]
  };
  var gallery=story.querySelector('#companyStoryGallery');
  function renderGallery(key){gallery.dataset.gallery=key;gallery.innerHTML=galleries[key].map(function(x){return '<figure><img src="assets/img/company/'+x[0]+'" alt="'+x[1]+'"><figcaption><b>'+x[1]+'</b><span>'+x[2]+'</span></figcaption></figure>'}).join('')}
  story.querySelector('.company-story-tabs').addEventListener('click',function(e){var button=e.target.closest('button[data-company-gallery]');if(!button)return;story.querySelectorAll('.company-story-tabs button').forEach(function(x){x.classList.toggle('on',x===button)});renderGallery(button.dataset.companyGallery)});
  renderGallery('locations');
 }
 if(body&&!body.querySelector('.company-certification')){
  var certification=document.createElement('section');
  certification.className='company-certification';
  certification.innerHTML='<div><small>CERTIFICATION & QUALITY</small><h3>제품 신뢰도를 확인하는 인증·적합성 자료</h3><p>KC·IP·CE 자료와 스마트팜 성능·국가표준시험 성적서를 제품군별로 확인할 수 있습니다.</p></div><div class="company-certification-summary"><span><b>3</b>KC 안전인증</span><span><b>6</b>KC 적합등록</span><span><b>3</b>IP54 성적서</span><span><b>3</b>표준화 자료</span><span><b>1</b>CE 관련 자료</span></div><button type="button" class="company-certification-open">인증 현황 보기 <span>›</span></button>';
  var philosophyTarget=body.querySelector('.company-philosophy');
  body.insertBefore(certification,philosophyTarget||body.firstChild);

  var certDialog=document.createElement('dialog');
  certDialog.className='company-certification-dialog';
  certDialog.innerHTML='<header><div><small>WOOSUNG HITEC · CERTIFICATION</small><h2>인증·적합성 자료</h2><p>인증 구분과 적용 모델을 확인한 뒤 원본 문서를 열어볼 수 있습니다.</p></div><button type="button" class="company-certification-close" aria-label="닫기">×</button></header><div class="company-certification-body">'+
   '<section><h3><span>KC 안전인증</span> GAC 컨트롤러</h3><div class="certification-grid">'+
    '<article><b>GAC-1P320S</b><p>KC 안전인증서</p><a href="assets/certificates/kc-safety-gac-1p320s.pdf" target="_blank">원본 보기 ›</a></article>'+
    '<article><b>GAC-1P300S</b><p>KC 안전인증서</p><a href="assets/certificates/kc-safety-gac-1p300s.pdf" target="_blank">원본 보기 ›</a></article>'+
    '<article><b>GAC-1P270S</b><p>KC 안전인증서</p><a href="assets/certificates/kc-safety-gac-1p270s.pdf" target="_blank">원본 보기 ›</a></article></div></section>'+
   '<section><h3><span>KC 적합등록</span> 스마트팜·센서·관비 제품</h3><div class="certification-grid">'+
    '<article><b>FARMSYS II · FS-20</b><p>스마트팜 시스템</p><a href="assets/certificates/kc-farmsys-ii-fs20.pdf" target="_blank">원본 보기 ›</a></article>'+
    '<article><b>FSC-1820 · FSC-1520</b><p>팜시스 컨트롤러</p><a href="assets/certificates/kc-fsc-1820.pdf" target="_blank">원본 보기 ›</a></article>'+
    '<article><b>WSN-800</b><p>기상센서 노드</p><a href="assets/certificates/kc-wsn-800.pdf" target="_blank">원본 보기 ›</a></article>'+
    '<article><b>WSN-803 · WSN-802</b><p>실내대기센서 노드</p><a href="assets/certificates/kc-wsn-803.pdf" target="_blank">원본 보기 ›</a></article>'+
    '<article><b>WSN-804A</b><p>배지센서 노드</p><a href="assets/certificates/kc-wsn-804a.pdf" target="_blank">원본 보기 ›</a></article>'+
    '<article><b>ISS-202</b><p>관비 자동공급기</p><a href="assets/certificates/kc-iss-202.pdf" target="_blank">원본 보기 ›</a></article></div></section>'+
   '<section><h3><span>스마트팜 표준화 시험</span> 양액공급기·센서</h3><div class="certification-grid">'+
    '<article><b>WIN-9000S</b><p>양액공급기 성능시험 · 국가표준 적합</p><a href="assets/certificates/standard-win9000s-result.pdf" target="_blank">상세 결과 보기 ›</a> <a href="assets/certificates/standard-win9000s-certificate.pdf" target="_blank">공식 성적서 보기 ›</a></article>'+
    '<article><b>WSH-EPC2 · EC/pH</b><p>센서 성능시험 · 국가표준시험 적합</p><a href="assets/certificates/standard-smartfarm-sensors-2025.pdf" target="_blank">통합 성적서 보기 ›</a></article>'+
    '<article><b>STS-401 · 지온/토양함수율</b><p>지온: 성능·국가표준 적합<br>토양함수율: 국가표준 적합</p><a href="assets/certificates/standard-smartfarm-sensors-2025.pdf" target="_blank">통합 성적서 보기 ›</a></article></div></section>'+
   '<section><h3><span>IP54 시험성적서</span> 공급사 모터 어셈블리</h3><div class="certification-grid">'+
    '<article><b>KN-270 · IP54</b><p>의뢰자: (주)금남충전기 · KOMERI 시험</p><a href="assets/certificates/ip54-kn-270.pdf" target="_blank">원본 보기 ›</a></article>'+
    '<article><b>KN-300 · IP54</b><p>의뢰자: (주)금남충전기 · KOMERI 시험</p><a href="assets/certificates/ip54-kn-300.pdf" target="_blank">원본 보기 ›</a></article>'+
    '<article><b>KN-400 · IP54</b><p>의뢰자: (주)금남충전기 · KOMERI 시험</p><a href="assets/certificates/ip54-kn-400.pdf" target="_blank">원본 보기 ›</a></article></div></section>'+
   '<section><h3><span>유럽 지침 관련</span> 전동개폐기</h3><div class="certification-grid certification-grid-wide"><article><b>WSM-18033 · WSM-9055 · WSM-6035 · WSM-4035</b><p>유럽 기계류 지침 관련 적합성 자료</p><a href="assets/certificates/ce-wsm-series.pdf" target="_blank">원본 보기 ›</a></article></div></section>'+
   '<p class="certification-caution">※ KC 안전인증과 KC 적합등록은 서로 다른 제도입니다. 토양함수율센서는 국가표준시험 적합 자료만 포함되며 별도 성능시험 결과는 포함되지 않았습니다. IP54 성적서는 KN-270·300·400 시험 시료에 한하며 수중 침수 사용을 의미하지 않습니다. 각 원본 문서의 모델명과 명의자를 기준으로 확인해 주세요.</p></div>';
  document.body.appendChild(certDialog);
  certification.querySelector('.company-certification-open').addEventListener('click',function(){certDialog.showModal()});
  certDialog.querySelector('.company-certification-close').addEventListener('click',function(){certDialog.close()});
  certDialog.addEventListener('click',function(e){if(e.target===certDialog)certDialog.close()});
 }
 if(body&&!body.querySelector('.company-ip')){
  var ip=document.createElement('section');
  ip.className='company-ip';
  ip.innerHTML='<div><small>PATENT & TECHNOLOGY</small><h3>현장에서 발전시켜 온 특허·기술</h3><p>전동개폐기, 양액공급과 수경재배 제어 분야의 주요 등록특허 자료를 확인할 수 있습니다.</p></div><div class="company-ip-summary"><span><b>6</b>자사 유지자료</span><span><b>1</b>공동 연구성과</span><span><b>11</b>만료 기술이력</span></div><button type="button" class="company-ip-open">특허 현황 보기 <span>›</span></button>';
  var philosophyTargetForIp=body.querySelector('.company-philosophy');body.insertBefore(ip,philosophyTargetForIp||body.firstChild);
  var patents=[['10-1173093','전동개폐기용 리미트장치','전동개폐기','patent-10-1173093.pdf','active'],['10-1535637','양액 공급조정장치용 유량조절밸브장치','양액공급','patent-10-1535637.pdf','active'],['10-1818042','비닐하우스의 전동 개폐장치','전동개폐기','patent-10-1818042.pdf','active'],['10-2234522','작물 증산량 및 근권 전이온농도를 복합 기준으로 하는 수경재배 양액 제어 방법','수경재배 제어','patent-10-2234522.pdf','partner'],['10-2278375','비닐하우스용 전동개폐기','전동개폐기','patent-10-2278375.pdf','active'],['10-2457170','전동개폐기용 리미트장치','전동개폐기','patent-10-2457170.pdf','active'],['10-2671987','양액 자동조정 공급장치','양액공급','patent-10-2671987.pdf','active'],['10-0950731','흰가루병 자동 방제 장치 및 그의 제어방법','환경제어','patent-10-0950731.jpg','expired'],['10-1102584','전동개폐기','전동개폐기','patent-10-1102584.jpg','expired'],['10-1178565','농업용 연막 분사장치','환경제어','patent-10-1178565.jpg','expired'],['10-1240375','식물재배장치','재배장치','patent-10-1240375.jpg','expired'],['10-1350893','양액 자동조정 공급장치','양액공급','patent-10-1350893.jpg','expired'],['10-1471936','터널식 보온커튼 개폐시스템 및 그의 제어방법','보온커튼','patent-10-1471936.jpg','expired'],['10-1546873','복합환경 제어시스템 및 그의 제어방법','환경제어','patent-10-1546873.jpg','expired'],['10-1566445','복합환경 제어시스템 및 그의 제어방법','환경제어','patent-10-1566445.jpg','expired'],['10-1635010','양액 자동조절 공급장치','양액공급','patent-10-1635010.jpg','expired'],['10-1701394','배액 측정장치','배액측정','patent-10-1701394.jpg','expired'],['10-2066193','양액 자동조정 공급장치 및 공급방법','양액공급','patent-10-2066193.jpg','expired']];
  var cards=patents.map(function(x){var relation=x[4]==='partner'?'<em class="ip-partner">공동 연구·출원 참여</em>':x[4]==='expired'?'<em class="ip-expired">만료 기술자료</em>':'<em>보유자료상 유지</em>';return '<article class="ip-'+x[4]+'"><div><span>'+x[2]+'</span>'+relation+'</div><b>'+x[1]+'</b><p>등록번호 '+x[0]+(x[4]==='partner'?' · 현재 대표 권리자: 농촌진흥청':'')+'</p><a href="assets/patents/'+x[3]+'" target="_blank">등록 자료 보기 ›</a></article>'}).join('');
  var ipDialog=document.createElement('dialog');ipDialog.className='company-ip-dialog';ipDialog.innerHTML='<header><div><small>WOOSUNG HITEC · INTELLECTUAL PROPERTY</small><h2>특허·기술 현황 <strong>총 18건</strong></h2><p>현재 유지 중인 특허와 공동 연구성과, 만료된 기술개발 이력을 함께 확인할 수 있습니다.</p></div><button type="button" class="company-ip-close" aria-label="닫기">×</button></header><div class="company-ip-body"><div class="company-ip-legend"><span class="legend-active">자사 유지자료 6건</span><span class="legend-partner">공동 연구·출원 참여 1건</span><span class="legend-expired">만료 기술자료 11건</span></div><div class="company-ip-grid">'+cards+'</div><p class="company-ip-caution"><b>안내</b> 10-2234522는 농촌진흥청·안동대학교 산학협력단·우성하이텍의 공동 출원 연구성과이며, 현재 조회되는 대표 권리자는 농촌진흥청입니다. ‘만료 기술자료’는 현재 독점권이 아닌 과거 기술개발 이력으로 제공합니다.</p></div>';
  document.body.appendChild(ipDialog);ip.querySelector('.company-ip-open').addEventListener('click',function(){ipDialog.showModal()});ipDialog.querySelector('.company-ip-close').addEventListener('click',function(){ipDialog.close()});ipDialog.addEventListener('click',function(e){if(e.target===ipDialog)ipDialog.close()});
 }
 open.addEventListener('click',function(){dialog.showModal()});
 dialog.querySelector('.company-intro-close').addEventListener('click',function(){dialog.close()});
 dialog.addEventListener('click',function(e){if(e.target===dialog)dialog.close()});
})();
