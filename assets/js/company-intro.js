(function(){
 var open=document.getElementById('companyIntroStart'),dialog=document.getElementById('companyIntroDialog');
 if(!open||!dialog)return;
 var head=dialog.querySelector(':scope > header');
 if(head&&!head.querySelector('.company-headquarters')){
  var photo=document.createElement('img');photo.className='company-headquarters';photo.src='assets/img/woosung-headquarters.png';photo.alt='우성하이텍 본사 전경';head.insertBefore(photo,head.firstChild);
 }
 open.addEventListener('click',function(){dialog.showModal()});
 dialog.querySelector('.company-intro-close').addEventListener('click',function(){dialog.close()});
 dialog.addEventListener('click',function(e){if(e.target===dialog)dialog.close()});
})();
