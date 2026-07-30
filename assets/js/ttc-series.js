(function(){
const data={
 mode:{title:'온도·시간 선택제어',lead:'한 채널을 온도제어 또는 시간제어 중 하나로 선택해 운전합니다.',visual:['온도제어','또는','시간제어'],body:'TTC는 온도와 시간을 동시에 조합하는 복합제어가 아닙니다. 시설 운전 목적에 따라 <b>온도제어 또는 시간제어 중 한 가지 방식</b>을 선택합니다. 같은 채널에 연결된 모든 개폐기는 선택한 동일 조건으로 함께 작동합니다.'},
 temperature:{title:'온도 자동제어',lead:'목표온도와 온도 폭을 기준으로 환기창의 열림·닫힘을 자동 제어합니다.',visual:['목표온도','+½ 온도 폭 → 열림','-½ 온도 폭 → 닫힘'],body:'목표온도를 중심으로 온도 폭의 절반을 더한 값이 열림 개시온도, 절반을 뺀 값이 닫힘 개시온도가 됩니다. 예를 들어 목표온도 26℃, 온도 폭 3℃이면 27.5℃에서 열림을 시작하고 24.5℃에서 닫힘을 시작합니다.'},
 timer:{title:'시간 자동운전',lead:'설정한 열림·닫힘 시각에 환기창을 자동 운전합니다.',visual:['열림시각 설정','자동 열림','닫힘시각 설정 → 자동 닫힘'],body:'현재시각과 열림·닫힘 시각을 설정하면 매일 해당 시각에 같은 채널의 개폐기가 함께 작동합니다. 온도와 관계없이 일정한 운전 일정이 필요한 시설에 적합합니다.'},
 rain:{title:'빗물감지 기능',lead:'선택 사양인 강우센서가 빗물을 감지하면 환기창을 닫는 특별작동을 수행합니다.',visual:['강우센서','빗물 감지','환기창 닫힘'],body:'강우센서 적용을 설정한 상태에서 빗물이 감지되면 자동운전 조건보다 우선하여 닫힘 방향으로 특별작동합니다. 센서 설치 상태와 감지부 오염 여부를 정기적으로 확인해야 합니다.'},
 fnd:{title:'데이터 FND 표시',lead:'현재시각, 현재온도와 각종 설정 데이터를 적색 FND로 확인합니다.',visual:['현재시각','현재온도','설정 데이터'],body:'두 표시창을 통해 운전 상태와 설정값을 확인할 수 있습니다. 설정 중에는 설정기호와 데이터가 점멸하므로 어떤 항목을 변경하는지 확인한 뒤 저장하십시오.'},
 safety:{title:'2중안전 기능',lead:'이상고온 경보와 서모스타트 특별작동으로 고온 상황에 이중 대응합니다.',visual:['전자식 고온경보','서모스타트','비상 열림'],body:'컨트롤러의 이상고온 경보 기능과 별도의 서모스타트 특별작동을 함께 사용하여 한쪽 기능에 문제가 생겨도 고온 피해에 대응할 수 있도록 구성합니다.'},
 alarm:{title:'고온비상 경보기능',lead:'실내온도가 설정한 고온경보 온도보다 높아지면 경보음과 열림작동을 실행합니다.',visual:['고온경보 설정','온도 초과','경음기 + 열림'],body:'자동운전 중 실내온도가 고온경보 설정값을 초과하면 내장 경음기가 울리고 환기창 열림 특별작동을 수행합니다. 경보가 발생하면 시설 온도와 환기창의 실제 작동 상태를 함께 확인하십시오.'},
 crop:{title:'서모스타트 고온 특별작동',lead:'설정 온도를 넘으면 기본 운전 조건과 별도로 환기창을 열어 고온 피해에 대응합니다.',visual:['고온 감지','서모스타트 신호','특별 열림'],body:'별도 설치한 서모스타트 주변 온도가 설정값보다 높아지면 열림 특별작동을 실행합니다. <b>서모스타트는 현장에 맞게 별도 설치·설정</b>해야 합니다.'},
 step:{title:'스텝작동',lead:'개폐기를 한 번에 끝까지 움직이지 않고 작동과 대기를 나누어 반복합니다.',visual:['작동','대기','반복'],body:'설정된 횟수에 따라 작동과 대기를 반복하여 환기창을 단계적으로 이동시킵니다. 급격한 환기 변화를 완화할 때 사용할 수 있습니다.'},
 individual:{title:'개별작동·개별퓨즈',lead:'각 출력 라인은 독립된 운전 스위치와 보호 퓨즈를 갖습니다.',visual:['LINE-1: 스위치 + 퓨즈','LINE-2: 스위치 + 퓨즈','LINE-n: 각각 독립'],body:'각 라인은 서로 이어지는 직렬 구조가 아닙니다. <b>각 출력 라인마다 전용 개별 스위치와 전용 퓨즈</b>가 있어 필요한 라인만 수동 운전하거나 정지할 수 있고, 이상이 생긴 라인을 개별적으로 보호합니다.',parallel:true},
 runtime:{title:'총 작동시간 설정',lead:'시간제어에서 열림 시각 이후 개폐기가 실제로 작동하는 누적시간을 설정합니다.',visual:['설정한 열림 시각','작동시간 누적','총 작동시간 경과 → 잠자기'],body:'총 작동시간은 하루 전체의 사용시간이 아니라, <b>설정한 열림 시각부터 개폐기가 실제로 작동한 시간을 합산한 값</b>입니다. 분할작동을 사용하면 작동 구간만 합산되며 대기시간은 포함되지 않습니다. 설정한 총 작동시간이 경과하면 출력을 멈추고 잠자기 상태가 됩니다.'},
 sleep:{title:'잠자기 기능',lead:'보호시간이 지나면 부품 보호를 위해 출력을 중단하고 대기합니다.',visual:['보호시간 경과','SLEEP·표시 점멸','다음 설정 조건에 정상복귀'],body:'설정된 보호시간이 지나면 내부 마그네틱 스위치 작동을 멈추고 대기합니다. 이 상태를 잠자기 상태라고 하며 표시램프가 점멸합니다. 이후 선택된 제어 방식의 다음 작동 조건이 되면 정상운전으로 복귀합니다.'},
 rewind:{title:'분할되감기 닫힘작동',lead:'닫힘 때 되감기 동작을 나누어 비닐의 쏠림과 말림을 완화합니다.',visual:['닫힘','짧은 되감기','다시 닫힘'],body:'환기창을 닫는 과정에서 되감기 동작을 나누어 수행합니다. 현장 구조와 비닐 상태에 따라 효과가 달라질 수 있으므로 실제 작동 상태를 확인하여 설정합니다.'},
 surge:{title:'과전압 방지기능',lead:'TNR 박스로 개폐기 작동 중 발생할 수 있는 과전압을 완화합니다.',visual:['개폐기 작동','과전압 발생','TNR 보호'],body:'TNR 박스는 출력 회로에 연결하여 전동개폐기 작동 과정에서 생길 수 있는 과전압으로부터 컨트롤러 회로를 보호하는 부품입니다.'},
 central:{title:'중첩신호 출력',lead:'센트럴 컨트롤러와 연동할 수 있도록 운전 상태에 따른 제어 신호를 출력합니다.',visual:['TTC 자동제어','중첩신호 출력','센트럴 연동'],body:'TTC의 자체 온도·시간 자동제어를 사용하면서 센트럴 컨트롤러와 연동할 수 있는 신호 출력 기능입니다. 실제 연결은 적용하는 센트럴 모델과 배선 사양을 확인하여 구성해야 합니다.'},
};
const dialog=document.querySelector('#feature-dialog'); if(!dialog)return;
document.querySelectorAll('[data-feature]').forEach(button=>button.addEventListener('click',()=>{const item=data[button.dataset.feature];if(!item)return;dialog.querySelector('h2').textContent=item.title;dialog.querySelector('.feature-dialog-head p').textContent=item.lead;const visual=dialog.querySelector('.feature-dialog-visual');visual.classList.toggle('parallel',!!item.parallel);visual.innerHTML=item.visual.map((v,i)=>`<span>${v}</span>${i<item.visual.length-1&&!item.parallel?'<i>›</i>':''}`).join('');dialog.querySelector('.feature-dialog-body').innerHTML=item.body;dialog.showModal();}));
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
function openFold(id,shouldScroll){const el=document.getElementById(id);if(!el||el.tagName!=='DETAILS')return;el.open=true;if(shouldScroll)requestAnimationFrame(()=>el.scrollIntoView({behavior:'smooth',block:'start'}));}
document.querySelectorAll('.controller-detail-menu a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const id=link.getAttribute('href').slice(1);if(!id)return;event.preventDefault();history.replaceState(null,'','#'+id);openFold(id,true);}));
if(location.hash)openFold(location.hash.slice(1),false);
})();
