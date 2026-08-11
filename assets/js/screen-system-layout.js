(function(){
  document.querySelectorAll('.screen-grid > .screen-series-link > .screen-series-image, .screen-grid > button > .screen-series-image').forEach(function(image){
    if(image.parentElement.classList.contains('screen-image-stage'))return;
    var stage=document.createElement('div');
    stage.className='screen-image-stage';
    image.parentNode.insertBefore(stage,image);
    stage.appendChild(image);
  });
})();
