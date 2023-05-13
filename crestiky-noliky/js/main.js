const area=document.getElementById('area');
let move=0;
let result = '';
const contentWrapper=document.getElementById('content');
const modalResult=document.getElementById('modal-result-wrapper');
const overlay=document.getElementById('overlay');
const btnClose=document.getElementById('btn-close');


area.addEventListener('click', e => {
	if(e.target.className = 'box'){
		move % 2 ===0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
		move++;
		check();
	}
})

const check = () => {
	const boxes = document.getElementsByClassName('box');
	const arr = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]
	for(i = 0; i<arr.length; i++){
		if(
			boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML =='X' && boxes[arr[i][2]].innerHTML == 'X'
		){

			result = 'крестики';
			
			prepareResult(result);
		} else if(
			boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML =='O' && boxes[arr[i][2]].innerHTML == 'O'
		) {
			result = 'нолики';
			
			prepareResult(result);
		} 
	}
	
	if((boxes[arr[0][0]].innerHTML != '' && boxes[arr[0][1]].innerHTML !='' && boxes[arr[0][2]].innerHTML != '')
		&&(boxes[arr[1][0]].innerHTML != '' && boxes[arr[1][1]].innerHTML !='' && boxes[arr[1][2]].innerHTML != '')
		&&(boxes[arr[2][0]].innerHTML != '' && boxes[arr[2][1]].innerHTML !='' && boxes[arr[2][2]].innerHTML != '')
		&&(boxes[arr[3][0]].innerHTML != '' && boxes[arr[3][1]].innerHTML !='' && boxes[arr[3][2]].innerHTML != '')
		&&(boxes[arr[4][0]].innerHTML != '' && boxes[arr[4][1]].innerHTML !='' && boxes[arr[4][2]].innerHTML != '')
		&&(boxes[arr[5][0]].innerHTML != '' && boxes[arr[5][1]].innerHTML !='' && boxes[arr[5][2]].innerHTML != '')
		&&(boxes[arr[6][0]].innerHTML != '' && boxes[arr[6][1]].innerHTML !='' && boxes[arr[6][2]].innerHTML != '')
		&&(boxes[arr[7][0]].innerHTML != '' && boxes[arr[7][1]].innerHTML !='' && boxes[arr[7][2]].innerHTML != '')
		){
		noWin();
	}
}

const prepareResult = winner =>{
	contentWrapper.innerHTML=`Победили ${winner} !`;
	modalResult.style.display ='block';
}
function noWin() {
	contentWrapper.innerHTML=`Ничья`;
	modalResult.style.display ='block';
}
const closeModal = () => {
	modalResult.style.display='none';
	location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);