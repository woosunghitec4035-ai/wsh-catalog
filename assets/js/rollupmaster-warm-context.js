(function(){
 if(new URLSearchParams(location.search).get('usage')!=='warm')return;
 var selection='rollupmaster-select.html?usage=warm';
 var back=document.querySelector('.detail-actions a:first-child');
 if(back)back.href=selection;
 document.querySelectorAll('.all-models').forEach(function(link){link.href=selection});
 document.querySelectorAll('.model-switch-list a[href]').forEach(function(link){
  var url=new URL(link.getAttribute('href'),location.href);
  url.searchParams.set('usage','warm');
  link.href=url.pathname.split('/').pop()+url.search;
 });
})();
