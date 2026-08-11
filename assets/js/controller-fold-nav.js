(function(){
  function openTarget(link){
    var href=link.getAttribute('href')||'';
    if(href.charAt(0)!=='#') return false;

    var target=document.getElementById(href.slice(1));
    if(!target) return false;

    if(target.tagName==='DETAILS') target.open=true;
    try{history.replaceState(null,'',href);}catch(e){}

    requestAnimationFrame(function(){
      target.scrollIntoView({behavior:'smooth',block:'start'});
    });
    return true;
  }

  document.addEventListener('click',function(event){
    var link=event.target.closest('.detail-side>a[href^="#"], .controller-detail-menu a[href^="#"]');
    if(!link) return;
    if(openTarget(link)) event.preventDefault();
  },true);

  if(location.hash){
    var initial=document.getElementById(location.hash.slice(1));
    if(initial&&initial.tagName==='DETAILS') initial.open=true;
  }
})();
