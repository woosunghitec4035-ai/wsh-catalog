(function(){
const data={
 temperature:{title:'1채널 온도 자동제어',lead:'1채널은 설정한 온도 조건에 따라 개폐기를 자동 운전합니다.',visual:['현재온도 감지','1채널 온도조건 판단','1채널 열림·닫힘'],body:'1채널은 온도센서로 시설 내부온도를 감지하고 설정한 목표온도와 작동방식에 따라 운전합니다. 같은 1채널에 연결된 개폐기들은 모두 동일한 온도 조건으로 함께 작동합니다.'},
 timer:{title:'2채널 시간 자동제어',lead:'2채널은 설정한 열림·닫힘 시각에 개폐기를 자동 운전합니다.',visual:['열림·닫힘 시각','2채널 시간조건 판단','2채널 열림·닫힘'],body:'2채널은 현재시각과 설정한 열림·닫힘 시각을 기준으로 운전합니다. 같은 2채널에 연결된 개폐기들은 모두 동일한 시간 조건으로 함께 작동합니다.'},
 rain:{title:'빗물감지 기능',lead:'선택 사양인 강우센서가 빗물을 감지하면 환기창을 닫는 특별작동을 수행합니다.',visual:['강우센서','빗물 감지','환기창 닫힘'],body:'강우센서를 적용한 상태에서 빗물이 감지되면 자동운전 조건보다 우선하여 닫힘 특별작동을 실행합니다. 감지부의 오염과 설치 상태를 정기적으로 확인하십시오.'},
 fnd:{title:'데이터 FND 표시',lead:'현재시각, 현재온도와 설정 데이터를 적색 FND로 확인합니다.',visual:['현재시각','현재온도','설정 데이터'],body:'표시창을 통해 두 채널의 운전 상태와 설정값을 확인할 수 있습니다. 설정 중에는 설정기호와 데이터가 점멸하므로 항목을 확인한 뒤 저장하십시오.'},
 safety:{title:'2중안전 기능',lead:'고온경보와 서모스타트 특별작동으로 고온 상황에 이중 대응합니다.',visual:['고온경보','서모스타트','비상 열림'],body:'전자식 고온경보 기능과 별도의 서모스타트 고온 특별작동을 함께 사용하여 시설의 비정상적인 온도 상승에 대응합니다.'},
 alarm:{title:'고온비상 경보기능',lead:'시설온도가 설정한 고온경보 온도를 넘으면 경보와 열림작동을 실행합니다.',visual:['고온경보 설정','이상고온 감지','경보 + 열림'],body:'고온경보가 발생하면 연결된 경보기로 신호를 출력하고 작물 보호를 위해 1채널 개폐기를 열림 방향으로 특별작동합니다. 경보기는 선택 사양입니다.'},
 thermostat:{title:'서모스타트 고온 특별작동',lead:'설정 온도를 넘으면 기본 운전 조건과 별도로 환기창을 열어 고온 피해에 대응합니다.',visual:['고온 감지','서모스타트 신호','특별 열림'],body:'별도 설치한 서모스타트 주변 온도가 설정값보다 높아지면 열림 특별작동을 실행합니다. <b>서모스타트는 현장에 맞게 설치·설정</b>해야 합니다.'},
 surge:{title:'과전압 방지기능',lead:'TNR 박스로 개폐기 작동 중 발생할 수 있는 과전압을 완화합니다.',visual:['개폐기 작동','과전압 발생','TNR 보호'],body:'TNR 박스는 출력 회로에 연결하여 전동개폐기 작동 과정에서 생길 수 있는 과전압으로부터 컨트롤러 회로를 보호합니다.'},
 sleep:{title:'잠자기 기능',lead:'보호시간이 지나면 부품 보호를 위해 출력을 중단하고 대기합니다.',visual:['보호시간 경과','잠자기 상태','다음 설정 조건에 복귀'],body:'설정된 보호시간이 지나면 내부 출력을 멈추고 대기합니다. 이후 해당 채널의 다음 작동 조건이 되면 잠자기 상태가 해제되어 정상운전으로 돌아갑니다.'},
 step:{title:'스텝작동',lead:'작동과 대기를 반복하여 환기창을 단계적으로 이동합니다.',visual:['작동','대기','반복'],body:'1채널 온도제어에서는 표준 스텝작동 또는 고급 온도비례작동 중 현장 조건에 맞는 방식을 선택할 수 있습니다.'},
 central:{title:'중첩신호 출력',lead:'센트럴 컨트롤러와 연동할 수 있도록 제어 신호를 출력합니다.',visual:['WFTC 자체제어','중첩신호 출력','센트럴 연동'],body:'WFTC의 자체 자동제어와 함께 센트럴 컨트롤러 연동에 사용할 수 있는 신호 출력 기능입니다. 실제 연결은 적용 센트럴 모델과 배선 사양을 확인해야 합니다.'},
 individual:{title:'개별작동·개별퓨즈',lead:'각 출력 라인은 독립된 운전 스위치와 보호 퓨즈를 갖습니다.',visual:['LINE-1: 스위치 + 퓨즈','LINE-2: 스위치 + 퓨즈','LINE-n: 각각 독립'],body:'각 출력 라인마다 전용 개별 스위치와 전용 퓨즈가 있어 필요한 라인만 수동 운전하거나 정지할 수 있고, 이상이 생긴 라인을 개별적으로 보호합니다.',parallel:true}
};
const dialog=document.querySelector('#feature-dialog');if(!dialog)return;
document.querySelectorAll('[data-feature]').forEach(button=>button.addEventListener('click',()=>{const item=data[button.dataset.feature];if(!item)return;dialog.querySelector('h2').textContent=item.title;dialog.querySelector('.feature-dialog-head p').textContent=item.lead;const visual=dialog.querySelector('.feature-dialog-visual');visual.classList.toggle('parallel',!!item.parallel);visual.innerHTML=item.visual.map((v,i)=>`<span>${v}</span>${i<item.visual.length-1&&!item.parallel?'<i>›</i>':''}`).join('');dialog.querySelector('.feature-dialog-body').innerHTML=item.body;dialog.showModal();}));
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
function openFold(id,shouldScroll){const el=document.getElementById(id);if(!el||el.tagName!=='DETAILS')return;el.open=true;if(shouldScroll)requestAnimationFrame(()=>el.scrollIntoView({behavior:'smooth',block:'start'}));}
document.querySelectorAll('.controller-detail-menu a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const id=link.getAttribute('href').slice(1);event.preventDefault();history.replaceState(null,'','#'+id);openFold(id,true);}));
if(location.hash)openFold(location.hash.slice(1),false);
})();
