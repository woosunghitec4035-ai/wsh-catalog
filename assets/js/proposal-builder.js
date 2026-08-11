(function () {
  var start = document.getElementById('proposalBuilderStart');
  var products = window.PROPOSAL_PRODUCTS || [];
  var context = window.PROPOSAL_CONTEXT || {};
  if (!start || !products.length) return;
  var dialog = document.createElement('dialog');
  dialog.className = 'proposal-builder-dialog';
  dialog.innerHTML = '<header><div><small>BUSINESS PROPOSAL BUILDER · 1차</small><h2>사업 제안 자료 구성</h2><p>사업 목적과 현장 문제, 적용 제품을 선택하면 제안 문장을 구성합니다.</p></div><button type="button" class="proposal-close" aria-label="닫기">×</button></header><div class="proposal-builder-body"><div class="proposal-fields"><label><span>사업명</span><input id="proposalProject" maxlength="80" placeholder="예: 시설원예 환기·관수 자동화 시범사업"></label><label><span>제안 대상 업체·기관</span><input id="proposalOrg" maxlength="50" placeholder="선택 입력"></label></div><div class="proposal-context"></div><h3 class="proposal-product-title">적용할 제품과 모델을 선택하세요.</h3><div class="proposal-groups"></div></div><footer><span class="proposal-count">선택 0개</span><button type="button" class="proposal-reset">전체 초기화</button><button type="button" class="proposal-create" disabled>사업 제안문 만들기</button></footer>';
  document.body.appendChild(dialog);
  function choices(key, title, radio) {
    return '<fieldset data-context="'+key+'"><legend>'+title+'</legend><div>'+context[key].map(function(item){return '<label><input type="'+(radio?'radio':'checkbox')+'" name="'+key+'" value="'+item[0]+'"><span>'+item[1]+'</span></label>';}).join('')+'</div><input class="proposal-other-input" data-other="'+key+'" maxlength="100" placeholder="기타 내용을 직접 입력하세요."></fieldset>';
  }
  dialog.querySelector('.proposal-context').innerHTML = choices('targets','사업 대상',true)+choices('purposes','사업 목적',false)+choices('problems','현장 문제',false);
  var groups = {};
  products.forEach(function (p) { (groups[p.group] || (groups[p.group] = [])).push(p); });
  dialog.querySelector('.proposal-groups').innerHTML = Object.keys(groups).map(function (name) {
    return '<details open><summary><b>'+name+'</b><span>'+groups[name].length+'개 모델</span><i>⌃</i></summary><div>'+groups[name].map(function(p){return '<label class="proposal-option"><input type="checkbox" name="product" value="'+p.id+'"><span><b>'+p.name+'</b><small>'+p.tag+'</small></span><em>선택</em></label>';}).join('')+'</div></details>';
  }).join('');
  var productChecks = dialog.querySelectorAll('input[name="product"]');
  var count = dialog.querySelector('.proposal-count');
  var create = dialog.querySelector('.proposal-create');
  function update(){var n=Array.from(productChecks).filter(function(c){return c.checked;}).length;count.textContent='선택 '+n+'개';create.disabled=!n;}
  dialog.addEventListener('change', function(event){var input=event.target;if(input.matches('.proposal-context input[type="checkbox"]')){var field=input.closest('fieldset');if(input.value==='none'&&input.checked)field.querySelectorAll('input[type="checkbox"]').forEach(function(c){if(c!==input)c.checked=false;});else if(input.checked){var none=field.querySelector('input[value="none"]');if(none)none.checked=false;}}dialog.querySelectorAll('.proposal-other-input').forEach(function(other){var choice=other.closest('fieldset').querySelector('input[value="other"]');other.classList.toggle('is-visible',!!(choice&&choice.checked));});update();});
  dialog.querySelector('.proposal-reset').addEventListener('click',function(){dialog.querySelectorAll('input').forEach(function(i){if(i.type==='checkbox'||i.type==='radio')i.checked=false;else i.value='';});dialog.querySelectorAll('.proposal-other-input').forEach(function(i){i.classList.remove('is-visible');});update();});
  create.addEventListener('click',function(){
    var params=new URLSearchParams();
    params.set('items',Array.from(productChecks).filter(function(c){return c.checked;}).map(function(c){return c.value;}).join(','));
    ['target','purposes','problems'].forEach(function(key){var name=key==='target'?'targets':key;var values=Array.from(dialog.querySelectorAll('input[name="'+name+'"]:checked')).map(function(c){return c.value;});if(values.length)params.set(key,values.join(','));var custom=dialog.querySelector('[data-other="'+name+'"]').value.trim();if(custom&&values.indexOf('other')>-1)params.set(key+'Custom',custom);});
    var project=dialog.querySelector('#proposalProject').value.trim(),org=dialog.querySelector('#proposalOrg').value.trim();
    if(project)params.set('project',project);if(org)params.set('org',org);location.href='proposal.html?'+params.toString();
  });
  function close(){dialog.close();}
  start.addEventListener('click',function(){document.body.classList.add('proposal-builder-open');dialog.showModal();});
  dialog.querySelector('.proposal-close').addEventListener('click',close);
  dialog.addEventListener('click',function(e){if(e.target===dialog)close();});
  dialog.addEventListener('close',function(){document.body.classList.remove('proposal-builder-open');});
  var initial=new URLSearchParams(location.search);
  if(initial.get('proposal')==='1'){
    ['items','purposes','problems'].forEach(function(key){(initial.get(key)||'').split(',').forEach(function(v){var c=dialog.querySelector('input[value="'+v+'"]');if(c)c.checked=true;});});
    var target=initial.get('target');if(target){var t=dialog.querySelector('input[name="targets"][value="'+target+'"]');if(t)t.checked=true;}
    ['target','purposes','problems'].forEach(function(key){var name=key==='target'?'targets':key;var other=dialog.querySelector('[data-other="'+name+'"]');other.value=initial.get(key+'Custom')||'';var choice=dialog.querySelector('input[name="'+name+'"][value="other"]');other.classList.toggle('is-visible',!!(choice&&choice.checked));});dialog.querySelector('#proposalProject').value=initial.get('project')||'';dialog.querySelector('#proposalOrg').value=initial.get('org')||'';update();document.body.classList.add('proposal-builder-open');dialog.showModal();
  }
})();
