(function(){
 document.querySelectorAll('.system-card,.product-choice,.supply-card,.model-card').forEach(function(card){
  var target=card.querySelector('a.system-button,a.choice-button,.model-copy>a,.supply-button');if(!target)return;
  card.classList.add('whole-card-link');card.tabIndex=0;card.setAttribute('role','link');card.setAttribute('aria-label',target.getAttribute('aria-label')||target.textContent.trim());
  function open(){if(target.tagName==='A')location.href=target.href;else target.click()}
  card.addEventListener('click',function(event){if(event.target.closest('a,button'))return;open()});
  card.addEventListener('keydown',function(event){if(event.target!==card)return;if(event.key==='Enter'||event.key===' '){event.preventDefault();open()}});
 });
})();
