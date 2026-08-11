(function(){
 var body=document.body;if(!body.classList.contains('vdu-detail'))return;body.classList.add('vdu-wide-detail');
 var guide=document.querySelector('.vdu-guide-grid'),spec=document.querySelector('.vdu-lower-grid>.spec-table');if(!guide||!spec)return;
 var specCard=document.createElement('button');specCard.type='button';specCard.className='vdu-spec-card';specCard.innerHTML='<b>▦</b><span><strong>제품 사양</strong><small>VDU-670·890 비교</small></span><em>›</em>';guide.insertBefore(specCard,guide.querySelector('a'));
 var dialog=document.createElement('dialog');dialog.className='vdu-info-dialog';dialog.innerHTML='<header><div><small>VDU PRODUCT GUIDE</small><h2></h2></div><button type="button" class="vdu-info-close" aria-label="닫기">×</button></header><div class="vdu-info-body"></div>';document.body.appendChild(dialog);
 var title=dialog.querySelector('h2'),content=dialog.querySelector('.vdu-info-body');
 function open(titleText,html){title.textContent=titleText;content.innerHTML=html;dialog.showModal()}
 specCard.addEventListener('click',function(){open('제품 사양',spec.outerHTML)});
 document.querySelectorAll('.vdu-features .feature-card').forEach(function(card){card.addEventListener('click',function(){var full=card.dataset.full||'',benefit=card.dataset.benefit||'',lead=benefit&&full.endsWith(benefit)?full.slice(0,full.length-benefit.length):full;open(card.dataset.title||'핵심 기능','<p class="feature-popup-lead">'+lead+'</p>'+(benefit?'<div class="feature-popup-benefit"><strong>운용 장점</strong><br>'+benefit+'</div>':''))})});
 dialog.querySelector('.vdu-info-close').addEventListener('click',function(){dialog.close()});dialog.addEventListener('click',function(event){if(event.target===dialog)dialog.close()});
})();
