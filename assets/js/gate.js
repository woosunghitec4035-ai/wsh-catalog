/* 비밀번호 게이트 — 3개 페이지 공통 */
(function(){
  var PW='8801';
  var gate=document.getElementById('gate'), notice=document.getElementById('notice');
  if(!gate) return;
  var authed=false; try{authed=sessionStorage.getItem('wsh-cat-auth')==='1';}catch(e){}
  function showNoticeMaybe(){
    var seen=false; try{seen=sessionStorage.getItem('wsh-cat-notice')==='1';}catch(e){}
    if(!seen){ notice.classList.add('show'); document.body.classList.add('locked'); }
    else{ document.body.classList.remove('locked'); }
  }
  function openCat(){ gate.style.display='none'; showNoticeMaybe(); }
  if(authed){ openCat(); } else { document.body.classList.add('locked'); }
  var pw=document.getElementById('gpw'), btn=document.getElementById('gbtn'), err=document.getElementById('gerr');
  function submit(){
    if((pw.value||'').trim()===PW){
      try{sessionStorage.setItem('wsh-cat-auth','1');}catch(e){}
      openCat();
    }else{ err.textContent='비밀번호가 올바르지 않습니다.'; pw.value=''; pw.focus(); }
  }
  if(btn) btn.addEventListener('click',submit);
  if(pw) pw.addEventListener('keydown',function(e){ if(e.key==='Enter'){ e.preventDefault(); submit(); } });
  var nbtn=document.getElementById('nbtn');
  if(nbtn) nbtn.addEventListener('click',function(){
    notice.classList.remove('show'); document.body.classList.remove('locked');
    try{sessionStorage.setItem('wsh-cat-notice','1');}catch(e){} });
  if(!authed && pw){ setTimeout(function(){ try{pw.focus();}catch(e){} },120); }
})();
