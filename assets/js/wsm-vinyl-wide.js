(function(){
 var specSection=document.querySelector('.lower-grid .spec-table');
 var guide=document.querySelector('.lower-grid .guide-grid');
 if(!specSection||!guide)return;

 var model=(document.querySelector('.product-title h1')||{}).textContent||'롤업스타';
 var card=document.createElement('a');
 card.href='#';
 card.className='spec-guide-card';
 card.setAttribute('data-open-spec','');
 card.innerHTML='<b>▤</b><span><strong>제품 사양</strong><small>전원·모터·토크·리미트 사양 확인</small></span><em>›</em>';
 guide.insertBefore(card,guide.firstChild);

 var popup=document.createElement('div');
 popup.className='parts-modal spec-modal';
 popup.id='specModal';
 popup.setAttribute('aria-hidden','true');
 popup.innerHTML='<div class="parts-dialog spec-dialog" role="dialog" aria-modal="true" aria-labelledby="specTitle"><header><h2 id="specTitle">'+model+' 제품 사양</h2><button type="button" class="parts-close spec-close" aria-label="닫기">×</button></header><section class="spec-popup-body"><p>제품 선정과 설치 전에 정격값과 안전 사용 기준을 확인하십시오.</p>'+specSection.querySelector('table').outerHTML+'<aside>※ 실제 적용은 하우스 구조와 현장 부하를 확인하여 안전 사용 범위 안에서 선정하십시오.</aside></section><button type="button" class="mobile-close spec-mobile-close">닫기</button></div>';
 document.body.appendChild(popup);
 specSection.remove();

 var lastFocus;
 function openSpec(){lastFocus=document.activeElement;popup.classList.add('show');popup.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');popup.querySelector('.spec-close').focus()}
 function closeSpec(){popup.classList.remove('show');popup.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(lastFocus)lastFocus.focus()}
 card.addEventListener('click',function(e){e.preventDefault();openSpec()});
 popup.querySelectorAll('.spec-close,.spec-mobile-close').forEach(function(button){button.addEventListener('click',closeSpec)});
 popup.addEventListener('click',function(e){if(e.target===popup)closeSpec()});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&popup.classList.contains('show'))closeSpec()});
})();
