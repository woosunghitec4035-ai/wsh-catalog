(function(){
 var main=document.querySelector('.wsdt-detail .detail-main');if(!main)return;
 var sources={spec:document.querySelector('.d-spec-section'),models:document.getElementById('models'),settings:document.getElementById('settings'),operation:document.getElementById('operation'),troubleshooting:document.getElementById('troubleshooting'),included:document.getElementById('included')};
 var items=[
  {key:'spec',icon:'▤',eyebrow:'SPECIFICATION',title:'제품 사양·선택 기준',desc:'출력 용량·호환 개폐기·핵심 설정'},
  {key:'models',icon:'▦',eyebrow:'MODEL LINEUP',title:'출력·연결 대수별 모델',desc:'50W·100W와 최대 연결 대수 확인'},
  {key:'settings',icon:'◷',eyebrow:'TIME & STEP SETTING',title:'시간·작동 설정',desc:'현재시각·열림·닫힘·스텝·작동제한'},
  {key:'operation',icon:'↕',eyebrow:'AUTO & MANUAL',title:'자동·수동 운전',desc:'전체 자동운전과 라인별 직접 조작'},
  {key:'troubleshooting',icon:'⌕',eyebrow:'TROUBLESHOOTING',title:'점검 및 문제 해결',desc:'전원·퓨즈·회전방향·자동운전 점검'},
  {key:'included',icon:'□',eyebrow:'INCLUDED PARTS',title:'기본 제공 부품',desc:'퓨즈·서모스타트·TNR·설치 부품'}
 ];
 if(Object.keys(sources).some(function(key){return!sources[key]}))return;
 var contents={};items.forEach(function(item){var source=sources[item.key];contents[item.key]=item.key==='spec'?source.innerHTML:source.querySelector('.controller-fold-body').innerHTML});
 var menu=document.createElement('section');menu.className='d-wide-menu';menu.setAttribute('aria-label','WSDT 상세 정보');items.forEach(function(item){var button=document.createElement('button');button.type='button';button.className='d-wide-card';button.id=item.key;button.setAttribute('data-wsdt-panel',item.key);button.innerHTML='<i>'+item.icon+'</i><span><b>'+item.title+'</b><small>'+item.desc+'</small></span><em>›</em>';menu.appendChild(button)});
 var oldMenu=document.querySelector('.controller-detail-menu');main.insertBefore(menu,oldMenu);Object.keys(sources).forEach(function(key){sources[key].remove()});if(oldMenu)oldMenu.remove();
 var dialog=document.createElement('dialog');dialog.className='d-info-dialog';dialog.innerHTML='<header><div><small></small><h2></h2></div><button type="button" class="d-info-close" aria-label="닫기">×</button></header><div class="d-info-body"></div>';document.body.appendChild(dialog);
 var title=dialog.querySelector('h2'),eyebrow=dialog.querySelector('small'),body=dialog.querySelector('.d-info-body');function openPanel(key){var item=items.find(function(entry){return entry.key===key});if(!item)return;eyebrow.textContent=item.eyebrow;title.textContent=item.title;body.innerHTML=contents[key];dialog.showModal()}
 menu.addEventListener('click',function(event){var button=event.target.closest('[data-wsdt-panel]');if(button)openPanel(button.dataset.wsdtPanel)});document.querySelectorAll('.detail-side>a[href^="#"]').forEach(function(link){link.addEventListener('click',function(event){var key=link.getAttribute('href').slice(1);if(contents[key]){event.preventDefault();event.stopImmediatePropagation();openPanel(key)}},true)});dialog.querySelector('.d-info-close').addEventListener('click',function(){dialog.close()});dialog.addEventListener('click',function(event){if(event.target===dialog)dialog.close()});
})();
