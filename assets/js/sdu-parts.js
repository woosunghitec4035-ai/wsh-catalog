(function(){
 var brackets=[
  ['50A (Ø60) 기둥용','품번 231008','sdu-bracket-50a.png','M10×Ø60 U볼트 2set'],
  ['40A (Ø48.6) 기둥용','품번 231007','sdu-bracket-40a.png','M10×Ø48.6 U볼트 2set'],
  ['□60 각관 기둥용','품번 231009','sdu-bracket-square60.png','M10×□60 U볼트 2set'],
  ['□80·100 각관 기둥용','품번 231010','sdu-bracket-weld.png','브라켓을 기둥에 용접']
 ];
 var chainParts=[
  ['40A(Ø48.6) 체인기어','규격 5016 · 품번 031044','sdu-chain-40a.png'],
  ['25A(Ø34) 체인기어','규격 5016 · 품번 030959','sdu-chain-25a.png'],
  ['스냅링','규격 S28 · 품번 031033','sdu-chain-snapring.png'],
  ['체인','규격 5016 · 품번 030834','sdu-chain.png'],
  ['체인 커버','5016 Cover · 품번 030833','sdu-chain-cover.png']
 ];
 var rigidParts=[
  ['40A(Ø48.6) · 200mm','품번 031053','sdu-rigid-40a-200.png'],
  ['40A(Ø48.6) · 433mm','품번 031056','sdu-rigid-40a-433.png'],
  ['40A 체결볼트 1팩','M10×75 · 4set','sdu-rigid-40a-bolts.png'],
  ['25A(Ø34) · 220mm','품번 031051','sdu-rigid-25a-220.png'],
  ['25A(Ø34) · 433mm','품번 031052','sdu-rigid-25a-433.png'],
  ['25A 체결볼트 1팩','M10×60 · 4set','sdu-rigid-25a-bolts.png']
 ];
 function cards(items,klass){return '<div class="'+klass+'">'+items.map(function(x,i){return '<article class="'+(klass==='sdu-parts-compare'&&i===3?'is-weld':'')+'"><img src="assets/img/'+x[2]+'" alt="'+x[0]+'"><strong>'+x[0]+'</strong><small>'+x[1]+'</small>'+(x[3]?'<p>'+x[3]+'</p>':'')+'</article>';}).join('')+'</div>';}
 function open(type){var title,lead,body,eye='TYPE PARTS';if(type==='parts'){eye='BRACKET';title='기둥 규격별 브라켓';lead='설치 기둥의 외경과 형상에 맞는 브라켓 타입을 선택합니다.';body=cards(brackets,'sdu-parts-compare')+'<p class="sdu-manual-warning"><b>설치 확인</b>□80·100 각관용은 U볼트를 사용하지 않고 브라켓을 기둥에 용접합니다.</p>';}else if(type==='chain-parts'){title='체인 커플링 타입별 부품';lead='25A·40A 체인기어를 선택하며 스냅링·체인·체인 커버는 공용입니다.';body=cards(chainParts,'sdu-coupling-cards');}else{title='리지드 커플링 타입별 부품';lead='구동축 규격과 설치 길이에 맞는 커플링 및 체결볼트를 선택합니다.';body=cards(rigidParts,'sdu-coupling-cards');}document.getElementById('dialogEye').textContent=eye;document.getElementById('dialogTitle').textContent=title;document.getElementById('dialogLead').textContent=lead;document.getElementById('dialogBody').innerHTML=body;document.getElementById('sduDialog').showModal();}
 var guideBox=document.getElementById('guideCards');
 var bracketButton=guideBox&&guideBox.querySelector('[data-guide="parts"]');
 if(bracketButton){bracketButton.querySelector('strong').textContent='브라켓';bracketButton.querySelector('small').textContent='기둥 규격별 브라켓 선택';var chainButton=document.createElement('button');chainButton.type='button';chainButton.dataset.guide='chain-parts';chainButton.innerHTML='<b></b><span><strong>체인 커플링 부품</strong><small>25A·40A 타입별 구성</small></span><em>›</em>';var rigidButton=document.createElement('button');rigidButton.type='button';rigidButton.dataset.guide='rigid-parts';rigidButton.innerHTML='<b></b><span><strong>리지드 커플링 부품</strong><small>규격·길이별 구성</small></span><em>›</em>';bracketButton.after(chainButton,rigidButton);guideBox.querySelectorAll('button>b').forEach(function(number,index){number.textContent=String(index+1).padStart(2,'0');});}
 document.addEventListener('click',function(event){var button=event.target.closest('[data-guide="parts"],[data-guide="chain-parts"],[data-guide="rigid-parts"]');if(!button)return;event.preventDefault();event.stopImmediatePropagation();open(button.dataset.guide);},true);
})();
