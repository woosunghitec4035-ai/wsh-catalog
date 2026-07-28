/* 비밀번호 게이트 — 전 페이지 공통
 *
 * ┌─ 비밀번호를 다시 켜려면 ────────────────────────────────┐
 * │ 1. 바로 아래 REQUIRE_PASSWORD 를 true 로 바꾸고         │
 * │ 2. assets/css/base.css 끝부분의 "게이트 임시 해제"      │
 * │    블록을 지우면 됩니다. (두 곳 모두 바꿔야 합니다)     │
 * └────────────────────────────────────────────────────────┘
 * CSS 를 함께 쓰는 이유: 이 파일은 body 끝에서 실행되므로,
 * 여기서만 숨기면 초록색 게이트 화면이 잠깐 번쩍이고 사라집니다.
 */
(function(){
  /* 테스트 기간 동안 비밀번호를 묻지 않습니다. */
  var REQUIRE_PASSWORD = false;

  var PW='8801';
  var gate=document.getElementById('gate'), notice=document.getElementById('notice');
  if(!gate) return;

  var authed=false;
  if(!REQUIRE_PASSWORD){
    authed=true;
  } else {
    try{authed=sessionStorage.getItem('wsh-cat-auth')==='1';}catch(e){}
  }
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
