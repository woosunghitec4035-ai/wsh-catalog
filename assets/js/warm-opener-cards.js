(function () {
  var grid = document.querySelector('.warm-model-grid');
  if (!grid) return;

  var style = document.createElement('style');
  style.textContent = '.warm-model-grid .model-card dl{display:block!important;width:100%;margin:0 0 7px!important}.warm-model-grid .model-card dl div{height:22px;font-size:11px}.warm-model-grid .model-card h3{margin:4px 0!important}.warm-model-grid .model-card>a{margin-top:auto!important;height:34px!important;font-size:13px!important;flex:0 0 34px}@media(min-width:1251px){.warm-model-grid{grid-template-columns:repeat(6,minmax(0,1fr))}.warm-card-photo{height:clamp(92px,14vh,132px)}}';
  document.head.appendChild(style);

  var models = [
    { id:'9055', name:'WSM-9055', image:'assets/img/warm-wsm-9055-hq.png', use:'두꺼운 비닐·경량 보온재', badge:'livestock-badge', torque:'9 kg·m', current:'3.5A', rpm:'2.7 rpm', limit:'55회전' },
    { id:'15033', name:'WSM-15033', image:'assets/img/warm-wsm-15033-hq.png', use:'보온용 피복재', badge:'quilt-badge', torque:'15 kg·m', current:'3.3A', rpm:'1.6 rpm', limit:'33회전' },
    { id:'15066', name:'WSM-15066', image:'assets/img/warm-wsm-15033-hq.png', use:'보온용 피복재·넓은 리미트', badge:'quilt-badge', torque:'15 kg·m', current:'3.3A', rpm:'1.6 rpm', limit:'66회전', note:'외형 동일 모델 이미지' },
    { id:'16033', name:'WSM-16033', image:'assets/img/warm-wsm-16033-hq.png', use:'보온용 피복재', badge:'quilt-badge', torque:'16 kg·m', current:'5.0A', rpm:'2.4 rpm', limit:'33회전' },
    { id:'18033', name:'WSM-18033', image:'assets/img/warm-wsm-18033-hq.png', use:'고중량 보온용 피복재', badge:'quilt-badge', torque:'18 kg·m', current:'4.3A', rpm:'1.5 rpm', limit:'33회전' },
    { id:'18066', name:'WSM-18066', image:'assets/img/warm-wsm-18033-hq.png', use:'고중량 피복재·넓은 리미트', badge:'quilt-badge', torque:'18 kg·m', current:'4.3A', rpm:'1.5 rpm', limit:'66회전', note:'외형 동일 모델 이미지' }
  ];

  grid.innerHTML = models.map(function (m) {
    return '<article class="model-card">' +
      '<div class="warm-card-photo"><img src="' + m.image + '" alt="' + m.name + '">' +
      (m.note ? '<small>' + m.note + '</small>' : '') + '</div>' +
      '<h3>' + m.name + '</h3>' +
      '<span class="film-badge ' + m.badge + '">' + m.use + '</span>' +
      '<dl><div><dt>안전 사용 토크</dt><dd>' + m.torque + '</dd></div>' +
      '<div><dt>안전 사용 전류</dt><dd>' + m.current + '</dd></div>' +
      '<div><dt>회전속도</dt><dd>' + m.rpm + '</dd></div>' +
      '<div><dt>리미트 범위</dt><dd>' + m.limit + '</dd></div></dl>' +
      '<a href="warm-model.html?model=' + m.id + '">상세 보기 <b>›</b></a></article>';
  }).join('');
})();
