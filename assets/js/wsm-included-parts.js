(function(){
 var panel=document.getElementById('includedPanel');
 if(!panel)return;
 panel.innerHTML=
  '<div class="included-intro"><div><b>STANDARD PARTS</b><h3>기본 제공 부품</h3><p>롤업스타 설치에 필요한 기본 부품과 사용설명서가 함께 제공됩니다.</p></div><span>총 6종</span></div>'+
  '<div class="included-card-grid">'+
   '<article class="included-card featured"><em>01</em><div class="part-photo"><img src="assets/img/rollup-output-coupling.png" alt="출력축 커플링과 고정볼트"></div><div class="part-copy"><h3>출력축(개폐축) 커플링</h3><p>롤업스타의 출력축과 개폐 파이프를 연결하는 부품입니다.</p><ul><li>주문 시 지정한 개폐축 외경에 맞는 커플링 1개</li><li>M8×16mm 고정볼트 3개</li></ul><a class="coupling-jump" href="#couplingGuide">상세 규격 보기 <span>↓</span></a></div></article>'+
   '<article class="included-card conditional-card"><em>02</em><div class="part-photo"><img src="assets/img/rollup-guidearm-coupling.png" alt="가이드 암 커플링"></div><div class="part-copy"><h3>가이드 암 커플링</h3><p>가이드 암을 롤업스타 본체에 연결합니다.</p><ul><li>Ø25 · Ø32 · Ø42 파이프 규격</li><li>M8×16 볼트 2개 · M6×60 볼트 세트</li></ul><span class="conditional-note">가이드롤러 방식 설치 시 필요하지 않습니다</span><a class="coupling-jump" href="#guideArmCouplingGuide">상세 규격 보기 <span>↓</span></a></div></article>'+
   '<article class="included-card conditional-card"><em>03</em><div class="part-photo"><img src="assets/img/rollup-install-bolts.png" alt="개폐축용 및 가이드 암용 설치 볼트"></div><div class="part-copy"><h3>설치 볼트</h3><p>개폐축용 볼트와 가이드 암용 볼트 구성입니다.</p><span class="conditional-note">가이드롤러 방식 설치 시 가이드 암용 볼트는 필요하지 않습니다</span></div></article>'+
   '<article class="included-card conditional-card"><em>04</em><div class="part-photo"><img src="assets/img/rollup-guidearm-pin.png" alt="가이드 암 핀"></div><div class="part-copy"><h3>가이드 암 핀</h3><p>가이드 암의 위치를 고정하고 연결하는 부품입니다.</p><span class="conditional-note">가이드롤러 방식 설치 시 필요하지 않습니다</span><a class="coupling-jump" href="#guideArmPinGuide">상세 규격 보기 <span>↓</span></a></div></article>'+
   '<article class="included-card conditional-card"><em>05</em><div class="part-photo"><img src="assets/img/rollup-guidearm-pivot-set.png" alt="가이드 암 선회축 부품 세트"></div><div class="part-copy"><h3>가이드 암 선회축 부품</h3><p>선회축 고정 홀더와 체결 볼트·너트 세트입니다.</p><span class="conditional-note">가이드롤러 방식 설치 시 필요하지 않습니다</span><a class="coupling-jump" href="#guideArmPivotGuide">상세 규격 보기 <span>↓</span></a></div></article>'+
   '<article class="included-card manual-card"><em>06</em><div class="part-photo manual-photo"><img src="assets/img/rollup-user-manual.png" alt="롤업스타 종이 사용설명서"></div><div class="part-copy"><h3>사용설명서</h3><p><b class="current-format">현재</b> 종이 사용설명서로 설치·리미트 설정·안전 사용 방법을 제공합니다.</p><span class="manual-future"><b>향후 안내 방식</b> 종이 설명서를 제품의 QR코드로 확인하는 디지털 사용설명서로 대체할 예정입니다.</span></div></article>'+
  '</div><p class="included-condition-summary"><b>설치 방식에 따른 구성</b> 가이드롤러 방식으로 설치하는 경우 가이드 암 커플링, 가이드 암용 볼트, 가이드 암 핀 및 가이드 암 선회축 부품은 필요하지 않습니다.</p>'+
  '<details id="couplingGuide" class="coupling-guide"><summary><div><b>출력축 커플링 안내</b><span>사용 파이프에 맞는 내경 규격 확인</span></div><i>⌄</i></summary><div class="coupling-guide-body"><img src="assets/img/rollup-output-coupling.png" alt="출력축 커플링 상세 이미지"><div><h3>파이프에 구멍을 뚫지 않고 연결</h3><p>출력축 커플링은 롤업스타의 회전력을 개폐 파이프로 전달합니다. 커플링에 파이프를 끼운 뒤 고정볼트로 체결하는 방식이므로 파이프에 별도의 구멍을 뚫지 않고 설치할 수 있습니다.</p><dl><div><dt>주문 규격</dt><dd>주문 시 지정한 개폐축 외경에 맞는 커플링 1개 + M8×16mm 볼트 3개</dd></div><div><dt>재질</dt><dd>철 · 아연도금</dd></div><div><dt>주문 전 확인</dt><dd>사용할 개폐축 파이프의 외경을 반드시 확인하십시오.</dd></div></dl></div><div class="coupling-code-note"><b>부품번호로 파이프 규격 확인</b><span><strong>C22</strong>는 Ø22 파이프용, <strong>C25</strong>는 Ø25 파이프용처럼 C 뒤의 앞 두 숫자가 사용할 파이프의 외경을 나타냅니다.</span></div><table class="coupling-size-table"><thead><tr><th>사용 파이프 외경</th><th>커플링 내경 D</th><th>부품 NO.</th></tr></thead><tbody><tr><td>Ø22</td><td>Ø23.5</td><td>C2216</td></tr><tr><td>Ø25</td><td>Ø26.5</td><td>C2516</td></tr><tr><td>Ø28</td><td>Ø28.5</td><td>C2816</td></tr><tr><td>Ø32</td><td>Ø34.5</td><td>C3216</td></tr><tr><td>Ø42</td><td>Ø43.5</td><td>C4220</td></tr></tbody></table></div></details>';
 panel.insertAdjacentHTML('beforeend',
  '<details id="guideArmCouplingGuide" class="coupling-guide"><summary><div><b>가이드 암 커플링 세트</b><span>사용 파이프에 맞는 내경과 부품번호 확인</span></div><i>⌄</i></summary><div class="coupling-guide-body"><img src="assets/img/rollup-guidearm-coupling.png" alt="가이드 암 커플링 세트"><div><h3>파이프 규격에 맞는 커플링 선택</h3><p>가이드 암을 롤업스타 본체에 연결하며, 사용할 파이프 명칭에 맞춰 커플링 규격을 선택합니다.</p><dl><div><dt>기본 구성</dt><dd>커플링 1개 · M8×16 볼트 2개 · M6×60 볼트·너트 1세트</dd></div><div><dt>주문 전 확인</dt><dd>사용할 가이드 암 파이프의 외경을 확인하십시오.</dd></div><div><dt>가이드롤러 사용</dt><dd>가이드롤러 방식 설치 시 필요하지 않음</dd></div></dl></div><table class="coupling-size-table"><thead><tr><th>파이프(명칭)</th><th>커플링 내경 D</th><th>부품 NO.</th></tr></thead><tbody><tr><td>Ø25</td><td>Ø26.5</td><td>G25</td></tr><tr><td>Ø32</td><td>Ø34.5</td><td>G32</td></tr><tr><td>Ø42</td><td>Ø43.5</td><td>G42</td></tr></tbody></table></div></details>'+
  '<details id="guideArmPinGuide" class="coupling-guide"><summary><div><b>가이드 암 핀</b><span>사용 파이프에 맞는 핀 외경과 부품번호 확인</span></div><i>⌄</i></summary><div class="coupling-guide-body"><img src="assets/img/rollup-guidearm-pin.png" alt="가이드 암 핀"><div><h3>가이드 암 파이프 내부에 맞는 핀 선택</h3><p>가이드 암의 위치를 고정하고 연결하며, 파이프 명칭에 따라 핀 외경이 달라집니다.</p><dl><div><dt>적용 조건</dt><dd>가이드 암 방식 설치 시 사용</dd></div><div><dt>가이드롤러 사용</dt><dd>가이드롤러 방식 설치 시 필요하지 않음</dd></div></dl></div><table class="coupling-size-table"><thead><tr><th>파이프(명칭)</th><th>핀 외경 d</th><th>부품 NO.</th></tr></thead><tbody><tr><td>Ø25</td><td>Ø23</td><td>P25</td></tr><tr><td>Ø32</td><td>Ø30</td><td>P32</td></tr></tbody></table></div></details>'+
  '<details id="guideArmPivotGuide" class="coupling-guide"><summary><div><b>가이드 암 선회축 세트</b><span>파이프 규격별 브라켓과 부품번호 확인</span></div><i>⌄</i></summary><div class="coupling-guide-body"><img src="assets/img/rollup-guidearm-pivot-set.png" alt="가이드 암 선회축 세트"><div><h3>가이드 암을 지지하는 선회축 부품</h3><p>가이드 암이 설치 방향에 맞춰 움직일 수 있도록 지지하며, 파이프 규격에 맞는 브라켓을 선택합니다.</p><dl><div><dt>기본 구성</dt><dd>브라켓 · 3/8″×125 볼트·너트 1세트 · 5/16″×35 볼트·너트 1세트</dd></div><div><dt>가이드롤러 사용</dt><dd>가이드롤러 방식 설치 시 필요하지 않음</dd></div></dl></div><table class="coupling-size-table"><thead><tr><th>파이프(명칭)</th><th>브라켓</th><th>부품 NO.</th></tr></thead><tbody><tr><td>Ø25</td><td>Ø25</td><td>B25</td></tr><tr><td>Ø32</td><td>Ø32</td><td>B32</td></tr></tbody></table></div></details>'
 );
 panel.querySelectorAll('.coupling-jump').forEach(function(jump){
  jump.addEventListener('click',function(event){
   event.preventDefault();
   var guide=panel.querySelector(jump.getAttribute('href'));
   if(!guide)return;
   guide.open=true;
   guide.scrollIntoView({behavior:'smooth',block:'start'});
  });
 });
 function showIncludedParts(){
  var modal=document.getElementById('partsModal');
  if(!modal)return;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  modal.querySelectorAll('[data-tab]').forEach(function(tab){
   var active=tab.dataset.tab==='included';
   tab.classList.toggle('active',active);
   tab.setAttribute('aria-selected',active?'true':'false');
  });
  var outside=document.getElementById('outsidePanel');
  if(outside)outside.classList.remove('active');
  panel.classList.add('active');
 }
 var sideLink=document.querySelector('.detail-side a[href="#parts"]');
 if(sideLink)sideLink.addEventListener('click',function(event){event.preventDefault();showIncludedParts()});
 if(location.hash==='#included-parts')setTimeout(showIncludedParts,0);
 window.addEventListener('hashchange',function(){if(location.hash==='#included-parts')showIncludedParts()});
})();
