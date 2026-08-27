(function () {
  var grid = document.querySelector('.warm-model-grid');
  if (!grid) return;
  var about = document.querySelector('.warm-rs-page .rs-side .about');
  if (about && !about.querySelector('img')) {
    var aboutTitle = about.querySelector('h3');
    if (aboutTitle) {
      var titleWrap = document.createElement('div');
      titleWrap.className = 'about-title';
      var image = document.createElement('img');
      image.src = 'assets/img/warm-wsm-15033-hq.png';
      image.alt = '보온재용 롤업스타';
      about.insertBefore(titleWrap, aboutTitle);
      titleWrap.appendChild(image);
      titleWrap.appendChild(aboutTitle);
    }
  }
  var models = [
    { id:'9055', name:'WSM-9055', image:'assets/img/warm-wsm-9055-hq.png', use:'두꺼운 비닐·경량 보온재', badge:'livestock-badge', torque:'9 kg·m', current:'3.5A', rpm:'2.7 rpm', limit:'55회전' },
    { family:'150', name:'WSM-150 시리즈', image:'assets/img/warm-wsm-15033-hq.png', use:'보온용 피복재', badge:'quilt-badge', torque:'15 kg·m', current:'3.3A', rpm:'1.6 rpm', limits:['16','33','66'] },
    { id:'16033', name:'WSM-16033', image:'assets/img/warm-wsm-16033-hq.png', use:'보온용 피복재', badge:'quilt-badge', torque:'16 kg·m', current:'5.0A', rpm:'2.4 rpm', limit:'33회전' },
    { family:'180', name:'WSM-180 시리즈', image:'assets/img/warm-wsm-18033-hq.png', use:'고중량 보온용 피복재', badge:'quilt-badge', torque:'18 kg·m', current:'4.3A', rpm:'1.5 rpm', limits:['16','33','66'] }
  ];
  function limitLinks(model) {
    if (!model.family) return '<div class="warm-limit-single"><span>리미트</span><strong>' + model.limit + '</strong></div><a class="warm-detail-link" href="warm-model.html?model=' + model.id + '">상세 보기 <b>›</b></a>';
    return '<div class="warm-limit-heading"><span>리미트 선택</span><small>숫자를 눌러 상세 확인</small></div><div class="warm-limit-options">' + model.limits.map(function (limit) {
      var recommended = limit === '16';
      return '<a class="' + (recommended ? 'recommended' : '') + '" href="warm-model.html?model=' + model.family + limit + '"><strong>' + limit + '</strong><span>회전</span>' + (recommended ? '<em>정밀 설정</em>' : '') + '</a>';
    }).join('') + '</div>';
  }
  grid.innerHTML = models.map(function (m) {
    return '<article class="model-card' + (m.family ? ' family-card' : '') + '"><div class="warm-card-photo"><img src="' + m.image + '" alt="' + m.name + '"></div><h3>' + m.name + '</h3><span class="film-badge ' + m.badge + '">' + m.use + '</span><dl><div><dt>안전 사용 토크</dt><dd>' + m.torque + '</dd></div><div><dt>안전 사용 전류</dt><dd>' + m.current + '</dd></div><div><dt>회전속도</dt><dd>' + m.rpm + '</dd></div></dl>' + limitLinks(m) + '</article>';
  }).join('');
  var style = document.createElement('style');
  style.textContent = '.warm-model-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:14px!important}.warm-model-grid .model-card{display:flex;flex-direction:column;padding:10px 12px!important}.warm-model-grid .warm-card-photo{height:112px!important;flex:0 0 112px}.warm-model-grid .model-card dl{display:block!important;width:100%;margin:2px 0 5px!important}.warm-model-grid .model-card dl div{height:20px;font-size:10.5px}.warm-model-grid .model-card h3{margin:3px 0!important;font-size:19px!important}.warm-model-grid .film-badge{margin-bottom:3px!important}.warm-limit-heading,.warm-limit-single{display:flex;align-items:center;justify-content:space-between;margin-top:auto;padding-top:5px;border-top:1px solid #dce5ed;color:#52687d;font-size:10.5px}.warm-limit-heading small{font-size:8.5px;color:#7b8d9e}.warm-limit-single strong{color:#224f80}.warm-limit-options{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-top:4px}.warm-limit-options a{display:grid;grid-template-columns:auto auto;align-content:center;justify-content:center;column-gap:2px;min-height:42px;padding:4px 2px;border:1px solid #bdd0df;border-radius:8px;background:#f5f9fc;color:#24517f;text-decoration:none;transition:background .16s ease,border-color .16s ease,color .16s ease,transform .16s ease}.warm-limit-options strong{font-size:17px}.warm-limit-options span{align-self:end;padding-bottom:3px;font-size:8px}.warm-limit-options a.recommended{border-color:#e2a555;background:#fff5e6;color:#a65b13}.warm-limit-options em{grid-column:1/-1;margin-top:-2px;color:#c46b12;font-size:7.5px;font-style:normal;font-weight:800;line-height:1}.warm-limit-options a:hover,.warm-limit-options a:focus-visible,.warm-limit-options a.recommended:hover,.warm-limit-options a.recommended:focus-visible{border-color:#1f61a7;background:#286caf;color:#fff;transform:translateY(-1px);outline:none}.warm-limit-options a:hover em,.warm-limit-options a:focus-visible em{color:#fff}.warm-limit-options a:active{background:#174d87;transform:translateY(0)}.warm-detail-link{margin-top:5px!important;height:30px!important;min-height:30px!important;font-size:12px!important}.family-card{border-color:#b8cee0!important}@media(max-width:1100px){.warm-model-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}.warm-model-grid .warm-card-photo{height:130px!important;flex-basis:130px}}@media(max-width:560px){.warm-model-grid{grid-template-columns:1fr!important}}';
  document.head.appendChild(style);
})();
