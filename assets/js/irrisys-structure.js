const irrisysOneParts=[
 '수압계','공급량 조절밸브','출수구(出水口) 규격: 2″','전동펌프(AC220V 2.7kW)','입수구(入水口) 규격: 2″','체크밸브(역류방지 밸브)','컨트롤러','순환수 조절밸브','벤추리(Venturi)','액비 전자밸브(솔레노이드 밸브)','A액 조절밸브','B액 조절밸브','순간 유량계','액비 유입구(규격 ½″)','수평조절 다리'
];
function renderIrrisysStructure(){
 if(id!=='1')return `<h2>${x.name} 제품 구조</h2><img src="assets/img/irrisys-2-angle.png" alt="${x.name} 제품 구조"><p class="note">부품 명칭과 실제 구성은 모델 및 주문 사양에 따라 달라질 수 있습니다.</p>`;
 return `<div class="irrisys-structure"><div class="structure-head"><span>PRODUCT STRUCTURE</span><h2>이리시스 I 제품 구조</h2><p>번호가 표시된 구조 이미지와 부품 명칭을 함께 확인할 수 있습니다.</p></div><div class="structure-layout"><figure><img src="assets/img/irrisys-parts-drawing.png" alt="이리시스 I 주요 부품 위치"><figcaption>주요 부품 위치</figcaption></figure><div class="structure-table-wrap"><table class="structure-table"><thead><tr><th>NO.</th><th>부품 명칭</th></tr></thead><tbody>${irrisysOneParts.map((part,index)=>`<tr><td>${String(index+1).padStart(2,'0')}</td><td>${part}</td></tr>`).join('')}</tbody></table><div class="structure-size"><b>외형 치수 <small>(mm)</small></b><strong>740(W) × 600(D) × 1,250(H)</strong></div></div></div></div>`;
}
const previousIrrisysStructureContent=content;
content=function(key){return key==='parts'?renderIrrisysStructure():previousIrrisysStructureContent(key)};
