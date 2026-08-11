(function(){
 var main=document.querySelector('.rmp-detail .detail-main');
 if(!main)return;
 var sources={spec:document.querySelector('.d-spec-section'),models:document.getElementById('models'),operation:document.getElementById('operation'),included:document.getElementById('included')};
 var items=[
  {key:'spec',icon:'▤',eyebrow:'SPECIFICATION',title:'제품 사양·선택 기준',desc:'전원·출력·케이스와 적합한 운전 방식'},
  {key:'models',icon:'▦',eyebrow:'MODEL LINEUP',title:'케이스·출력별 모델',desc:'RMP·WRM과 50W·100W 모델 선택'},
  {key:'operation',icon:'↕',eyebrow:'MANUAL OPERATION',title:'열림·정지·닫힘 운전',desc:'3단 스위치와 LED 표시 사용 방법'},
  {key:'included',icon:'□',eyebrow:'STANDARD PARTS',title:'기본 제공 부품',desc:'플라스틱·스틸 케이스별 구성품 확인'}
 ];
 if(Object.keys(sources).some(function(key){return!sources[key]}))return;
 var contents={};
 items.forEach(function(item){var source=sources[item.key];contents[item.key]=item.key==='spec'?source.innerHTML:source.querySelector('.controller-fold-body').innerHTML});
 var menu=document.createElement('section');menu.className='d-wide-menu';menu.setAttribute('aria-label','RMP·WRM 상세 정보');
 items.forEach(function(item){var button=document.createElement('button');button.type='button';button.className='d-wide-card';button.id=item.key;button.setAttribute('data-rmp-panel',item.key);button.innerHTML='<i>'+item.icon+'</i><span><b>'+item.title+'</b><small>'+item.desc+'</small></span><em>›</em>';menu.appendChild(button)});
 var oldMenu=document.querySelector('.controller-detail-menu');main.insertBefore(menu,oldMenu);Object.keys(sources).forEach(function(key){sources[key].remove()});if(oldMenu)oldMenu.remove();
 var dialog=document.createElement('dialog');dialog.className='d-info-dialog';dialog.innerHTML='<header><div><small></small><h2></h2></div><button type="button" class="d-info-close" aria-label="닫기">×</button></header><div class="d-info-body"></div>';document.body.appendChild(dialog);
 var title=dialog.querySelector('h2'),eyebrow=dialog.querySelector('small'),body=dialog.querySelector('.d-info-body');
 function openPanel(key){var item=items.find(function(entry){return entry.key===key});if(!item)return;eyebrow.textContent=item.eyebrow;title.textContent=item.title;body.innerHTML=contents[key];dialog.showModal()}
 menu.addEventListener('click',function(event){var button=event.target.closest('[data-rmp-panel]');if(button)openPanel(button.dataset.rmpPanel)});
 document.querySelectorAll('.detail-side>a[href^="#"]').forEach(function(link){link.addEventListener('click',function(event){var key=link.getAttribute('href').slice(1);if(contents[key]){event.preventDefault();event.stopImmediatePropagation();openPanel(key)}},true)});
 dialog.querySelector('.d-info-close').addEventListener('click',function(){dialog.close()});dialog.addEventListener('click',function(event){if(event.target===dialog)dialog.close()});
})();
