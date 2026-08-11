(function(){
 var path=location.pathname.toLowerCase();
 function setImage(scope,selector,src){
  var image=scope&&scope.querySelector(selector);
  if(image) image.src=src;
 }

 if(path.indexOf('d-series.html')>-1){
  var groups=document.querySelectorAll('#included .controller-case-group');
  if(groups[0]){
   var plasticCards=groups[0].querySelectorAll('.controller-part-card');
   setImage(plasticCards[0],'img','assets/img/d-install-parts-plastic.png');
   setImage(plasticCards[1],'img','assets/img/d-spare-fuses.png');
   setImage(plasticCards[2],'img','assets/img/controller-manual-source.png');
  }
  if(groups[1]){
   var steelCards=groups[1].querySelectorAll('.controller-part-card');
   setImage(steelCards[0],'img','assets/img/d-power-cord.png');
   setImage(steelCards[1],'img','assets/img/d-install-parts-steel.png');
   setImage(steelCards[2],'img','assets/img/d-spare-fuses.png');
   setImage(steelCards[3],'img','assets/img/controller-manual-source.png');
  }
 }

 if(path.indexOf('wsdt-series.html')>-1){
  var cards=document.querySelectorAll('#included .controller-part-card');
  var sources=[
   'assets/img/wsdt-spare-fuses.png',
   'assets/img/wsdt-thermostat.png',
   'assets/img/wsdt-power-cord.png',
   'assets/img/wsdt-tnr-box.png',
   'assets/img/wsdt-install-parts.png',
   'assets/img/controller-manual-source.png'
  ];
  cards.forEach(function(card,index){setImage(card,'img',sources[index]);});
  var surgeButton=document.querySelector('[data-feature="surge"]');
  if(surgeButton) surgeButton.addEventListener('click',function(){
   setImage(document,'.wsdt-surge-product img','assets/img/wsdt-tnr-box.png');
  });
 }
})();
