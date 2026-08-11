/* 편집·검토 기간에는 비밀번호 화면을 사용하지 않습니다. */
(function(){
  var gate=document.getElementById('gate');
  var notice=document.getElementById('notice');

  if(gate) gate.style.display='none';
  document.body.classList.remove('locked');

  if(!notice) return;

  var seen=false;
  try{seen=sessionStorage.getItem('wsh-cat-notice')==='1';}catch(e){}

  if(!seen){
    notice.classList.add('show');
    document.body.classList.add('locked');
  }

  var noticeButton=document.getElementById('nbtn');
  if(noticeButton){
    noticeButton.addEventListener('click',function(){
      notice.classList.remove('show');
      document.body.classList.remove('locked');
      try{sessionStorage.setItem('wsh-cat-notice','1');}catch(e){}
    });
  }
})();
