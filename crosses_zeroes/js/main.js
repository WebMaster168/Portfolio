const area=document.getElementById('area');
const contentWrapper=document.getElementById('content');
const modalResult=document.getElementById('modal-result-wrapper');
const overlay=document.getElementById('overlay');
const btnClose=document.getElementById('btn-close');
const boxes = document.querySelectorAll('.box');                                                                         
let board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]; 
let boxesBoard = [[null,null,null],[null,null,null],[null,null,null]];

const checkWin = () => {
    
    for (let i = 0; i < 3; i++) {
        if (board[i][0] != ' ' && board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
            return 1; 
        }
    }

    
    for (let j = 0; j < 3; j++) {
        if (board[0][j] != ' ' && board[0][j] == board[1][j] && board[0][j] == board[2][j]) {
            return 1; 
        }
    }

    
    if (board[0][0] != ' ' && board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
        return 1; 
    }
    if (board[0][2] != ' ' && board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
        return 1; 
    }

    
    let emptySpaces = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == ' ') emptySpaces++;
        }
    }
    if (emptySpaces == 0) {
        noWin();      
    }

    return 0; 
}

function playerMove(currentArea) {
    boxes.forEach((item, index) => {
        
        const i = Math.floor(index / 3);
        const j = index % 3;
        boxesBoard[i][j] = item;
                
        
        if (currentArea === boxesBoard[i][j]) {
            currentArea.innerHTML = 'X';
            currentArea.disabled = true;
            board[i][j] = 'X';
        }
    }) 
           
}
function logicBotMove(){
    let k, m;
    do {
        k = Math.floor(Math.random() * 3);
        m = Math.floor(Math.random() * 3);
    } while (board[k][m] != ' '); 
    board[k][m] = 'O';
    boxesBoard[k][m].innerHTML = 'O';
    boxesBoard[k][m].disabled = true;
}
function botMove(){
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == 'O' && board[i][1] == ' ' && board[i][2] == 'O') {
            board[i][1] = 'O';
            boxesBoard[i][1].innerHTML = 'O';
            return;
        }else if(board[i][0] == ' ' && board[i][1] == 'O' && board[i][2] == 'O'){
            board[i][0] = 'O';
            boxesBoard[i][0].innerHTML = 'O';
            return;
        }else if(board[i][0] == 'O' && board[i][1] == 'O' && board[i][2] == ' '){
            board[i][2] = 'O';
            boxesBoard[i][2].innerHTML = 'O';
            return;
        }
    }


    for (let j = 0; j < 3; j++) {
        if (board[0][j] == 'O' && board[1][j] == ' ' && board[2][j] == 'O') {
            board[1][j] = 'O';
            boxesBoard[1][j].innerHTML = 'O';
            return;
        }else if(board[0][j] == ' ' && board[1][j] == 'O' && board[2][j] == 'O'){
            board[0][j] = 'O';
            boxesBoard[0][j].innerHTML = 'O';
            return;
        }else if(board[0][j] == 'O' && board[1][j] == 'O' && board[2][j] == ' '){
            board[2][j] = 'O';
            boxesBoard[2][j].innerHTML = 'O';
            return;
        }
    }


    if (board[0][0] == 'O' && board[1][1] == ' ' && board[2][2] == 'O') {
        board[1][1] = 'O';
        boxesBoard[1][1].innerHTML = 'O';
        return;
    }else if(board[0][0] == ' ' && board[1][1] == 'O' && board[2][2] == 'O'){
        board[0][0] = 'O';
        boxesBoard[0][0].innerHTML = 'O';
        return;
    }else if(board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == ' '){
        board[2][2] = 'O';
        boxesBoard[2][2].innerHTML = 'O';
        return;
    }else if(board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == ' '){
        board[2][0] = 'O';
        boxesBoard[2][0].innerHTML = 'O';
        return;
    }else if(board[0][2] == ' ' && board[1][1] == 'O' && board[2][0] == 'O'){
        board[0][2] = 'O';
        boxesBoard[0][2].innerHTML = 'O';
        return;
    }else if(board[0][2] == 'O' && board[1][1] == ' ' && board[2][0] == 'O'){
        board[1][1] = 'O';
        boxesBoard[1][1].innerHTML = 'O';
        return;
    }
    
    
    for (let k = 0; k < 3; k++) {
        if (board[k][0] == 'X' && board[k][1] == ' ' && board[k][2] == 'X') {
            board[k][1] = 'O';
            boxesBoard[k][1].innerHTML = 'O';
            return;
        }else if(board[k][0] == ' ' && board[k][1] == 'X' && board[k][2] == 'X'){
            board[k][0] = 'O';
            boxesBoard[k][0].innerHTML = 'O';
            return;
        }else if(board[k][0] == 'X' && board[k][1] == 'X' && board[k][2] == ' '){
            board[k][2] = 'O';
            boxesBoard[k][2].innerHTML = 'O';
            return;
        }
    }


    for (let m = 0; m < 3; m++) {
        if (board[0][m] == 'X' && board[1][m] == ' ' && board[2][m] == 'X') {
            board[1][m] = 'O';
            boxesBoard[1][m].innerHTML = 'O';
            return;
        }else if(board[0][m] == ' ' && board[1][m] == 'X' && board[2][m] == 'X'){
            board[0][m] = 'O';
            boxesBoard[0][m].innerHTML = 'O';
            return;
        }else if(board[0][m] == 'X' && board[1][m] == 'X' && board[2][m] == ' '){
            board[2][m] = 'O';
            boxesBoard[2][m].innerHTML = 'O';
            return;
        }
    }


    if (board[0][0] == 'X' && board[1][1] == ' ' && board[2][2] == 'X') {
        board[1][1] = 'O';
        boxesBoard[1][1].innerHTML = 'O';
        return;
    }else if(board[0][0] == ' ' && board[1][1] == 'X' && board[2][2] == 'X'){
        board[0][0] = 'O';
        boxesBoard[0][0].innerHTML = 'O';
        return;
    }else if(board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == ' '){
        board[2][2] = 'O';
        boxesBoard[2][2].innerHTML = 'O';
        return;
    }else if(board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == ' '){
        board[2][0] = 'O';
        boxesBoard[2][0].innerHTML = 'O';
        return;
    }else if(board[0][2] == ' ' && board[1][1] == 'X' && board[2][0] == 'X'){
        board[0][2] = 'O';
        boxesBoard[0][2].innerHTML = 'O';
        return;
    }else if(board[0][2] == 'X' && board[1][1] == ' ' && board[2][0] == 'X'){
        board[1][1] = 'O';
        boxesBoard[1][1].innerHTML = 'O';
        return;
    }else{
        logicBotMove();
    }
    
}



const logic = () => {

    //drawSymbols();
     
    
    area.addEventListener('click', e => {
        if(e.target.className = 'box'){
            
            let onesBoard = board.flat();
            let emptyField = onesBoard.filter(item => item === ' ');
            
            playerMove(e.target);
            if(checkWin()){
                prepareResult("крестики");

            }else{
                if(emptyField.length > 2){
                
                    botMove();
                    
                }
                if(checkWin()){
                    prepareResult("нолики");
                }
            }
            
            
        }
        
    })    
/*
    if(playerMove(x, y)){
        while(1){
            drawSymbols();
        } 
    }
*/
}

const initGame = () => {
    
    
                     
    
    logic();
    
    
}


initGame();
/*
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
*/
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
