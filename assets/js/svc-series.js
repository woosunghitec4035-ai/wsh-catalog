(function(){
const data={
 temperature:{title:'온도·시간 선택제어',lead:'한 채널의 자동운전 기준을 온도 또는 시간 중에서 선택합니다.',visual:['온도제어','운전방식 선택','시간제어'],body:'온도제어와 시간제어는 서로 다른 두 채널이 아닙니다. <b>한 채널에서 필요한 운전방식 하나를 선택</b>합니다. 같은 채널에 연결된 여러 개폐기는 선택한 조건에 따라 함께 작동합니다.'},
 variable:{title:'온도 5단 변온제어',lead:'하루를 최대 다섯 시간대로 나누고 각 시간대에 목표온도와 열림률을 적용합니다.',visual:['1단','2단','3단','4단','5단'],body:'작물과 시간대에 맞춰 단계별 시작시각, 목표온도와 열림률을 설정합니다. 다음 단계의 시작시각이 되면 해당 단계의 조건이 자동으로 적용됩니다. 5단은 다섯 채널이 아니라 <b>한 채널의 온도조건을 시간대별로 변경하는 기능</b>입니다.'},
 opening:{title:'열림률(%) 제어',lead:'환기창의 최대 개방 범위를 백분율로 설정하여 필요한 만큼만 열 수 있습니다.',visual:['0% 닫힘','설정 열림률','100% 최대열림'],body:'각 온도 단계 또는 시간 운전에 적용할 열림률을 설정합니다. 예를 들어 60%로 설정하면 전체 개폐 범위 중 설정된 비율까지만 열어 과도한 개방을 제한합니다. 실제 개방량은 개폐기 리미트 설정 범위를 기준으로 합니다.'},
 screen:{title:'5인치 TFT 컬러화면',lead:'현재시각, 온도, 경보, 운전상태와 설정 데이터를 한 화면에서 확인합니다.',visual:['실내·외 온도','현재 상황','운전모드·열림률'],body:'메인화면에서 일출·일몰, 실내·외 온도, 고온·저온 경보, 강우·풍속 상태, 열림·정지·닫힘 상태와 설정 데이터를 확인할 수 있습니다. 기본설정과 운전 데이터도 화면 메뉴에서 변경합니다.'},
 outside:{title:'외부온도 적용 비례제어',lead:'외부온도 조건을 반영하여 열림·닫힘 작동시간을 비례 조절합니다.',visual:['실내온도','외부온도 비교','비례 작동시간'],body:'외부온도를 함께 측정하여 실내외 온도조건에 따라 개폐기의 작동시간을 조정하는 기능입니다. 급격한 외부환경 변화에 맞춰 환기창의 움직임을 보다 세밀하게 제어할 수 있습니다.'},
 weather:{title:'강우·풍속 경보 대응',lead:'레인센서와 풍향·풍속센서의 신호를 받아 설정한 특별작동을 수행합니다.',visual:['강우 감지','풍속 경보','설정 방향 특별작동'],body:'강우 또는 풍속 경보가 발생하면 자동 온도·시간 운전보다 우선하여 설정된 열림 또는 닫힘 방향으로 작동합니다. 센서는 선택 구성이며 설치 위치, 감지 상태와 경보 적용 여부를 정기적으로 확인해야 합니다.'},
 sun:{title:'일출·일몰 적용제어',lead:'지역과 날짜에 따른 일출·일몰 시각을 운전 조건에 반영합니다.',visual:['날짜·지역','일출·일몰 계산','운전시각 적용'],body:'고정 시각뿐 아니라 일출·일몰을 기준으로 운전시각을 설정할 수 있어 계절에 따라 달라지는 낮의 길이를 자동운전에 반영할 수 있습니다.'},
 alarm:{title:'고온·저온 경보제어',lead:'설정 범위를 벗어난 온도에서 경보와 작물 보호 특별작동을 수행합니다.',visual:['고온 경보','작물 보호 운전','저온 경보'],body:'고온 시 환기창 열림, 저온 시 닫힘 등 설정된 경보작동을 수행합니다. 비상고온 대응은 서모스타트 특별작동과 함께 사용할 수 있으며 실제 작동 방향은 설정 화면에서 확인해야 합니다.'},
 sleep:{title:'잠자기 기능',lead:'보호시간이 지나면 부품 보호를 위해 출력을 중단하고 대기합니다.',visual:['보호시간 경과','출력 중단','다음 설정 조건에 복귀'],body:'한 방향으로 지나치게 오래 출력되는 것을 막기 위해 설정된 보호시간이 지나면 출력을 중단합니다. 이후 다음으로 설정된 운전 조건이 되면 정상운전으로 복귀합니다.'},
 step:{title:'스텝·비례 작동',lead:'작동과 대기를 반복하거나 온도차에 따라 작동시간을 조절합니다.',visual:['스텝작동','작동방식 선택','비례제어'],body:'스텝작동은 짧게 작동하고 대기하는 과정을 반복하여 환기창을 단계적으로 움직입니다. 비례제어는 온도차와 설정조건에 따라 작동 또는 대기시간을 조절해 보다 세밀하게 운전합니다.'},
 communication:{title:'RS485 통신기능',lead:'선택 사양으로 PC와 연결하여 컨트롤러 정보를 연동할 수 있습니다.',visual:['SVC 컨트롤러','RS485 통신','PC 소프트웨어'],body:'RS485 통신모듈과 전용 소프트웨어를 이용하는 선택 기능입니다. 컨트롤러는 최대 4대까지 연결하는 구성이 안내되어 있으며, 실제 PC 접속 구성은 당사 기술부와 협의하여 적용하십시오.'},
 individual:{title:'개별작동·개별퓨즈',lead:'각 출력 라인은 독립된 운전 스위치와 보호 퓨즈를 갖습니다.',visual:['LINE-1: 스위치 + 퓨즈','LINE-2: 스위치 + 퓨즈','LINE-n: 각각 독립'],body:'각 출력 라인마다 전용 개별 스위치와 전용 퓨즈가 있어 필요한 라인만 수동 운전하거나 정지할 수 있고, 이상이 생긴 라인을 개별적으로 보호합니다. 모든 라인은 각자의 스위치와 퓨즈를 가진 병렬 구성입니다.',parallel:true}
};
const dialog=document.querySelector('#feature-dialog');if(!dialog)return;
document.querySelectorAll('[data-feature]').forEach(button=>button.addEventListener('click',()=>{const item=data[button.dataset.feature];if(!item)return;dialog.querySelector('h2').textContent=item.title;dialog.querySelector('.feature-dialog-head p').textContent=item.lead;const visual=dialog.querySelector('.feature-dialog-visual');visual.classList.toggle('parallel',!!item.parallel);visual.innerHTML=item.visual.map((v,i)=>`<span>${v}</span>${i<item.visual.length-1&&!item.parallel?'<i>›</i>':''}`).join('');dialog.querySelector('.feature-dialog-body').innerHTML=item.body;dialog.showModal();}));
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
function openFold(id,shouldScroll){const el=document.getElementById(id);if(!el||el.tagName!=='DETAILS')return;el.open=true;if(shouldScroll)requestAnimationFrame(()=>el.scrollIntoView({behavior:'smooth',block:'start'}));}
document.querySelectorAll('.controller-detail-menu a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const id=link.getAttribute('href').slice(1);event.preventDefault();history.replaceState(null,'','#'+id);openFold(id,true);}));
if(location.hash)openFold(location.hash.slice(1),false);
})();
