const area = document.getElementById('area-wrapper');
const contentWrapper = document.getElementById('content');
const modalResult = document.querySelector('.modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnStart = document.querySelector('.startGame');
const snake = document.querySelector('.snake');
const snakeHead = document.querySelector('.snake__head');
const snakeSegments = snake.querySelectorAll('.snake__body');



let snakeLength = snakeSegments.length;
let cycleGame = false;
let positionX = 0;
let positionY = 0;
let incrementX = 25;
let positionXhead = 175;
let positionYhead = 50;
snakeHead.style.top = positionYhead
snakeHead.style.left = positionXhead
snakeHead.style.transform = 'rotate(90deg)'
let direction = 'R';
let keyPress = '';
snakeSegments.forEach((item, index) =>{
	item.style.left = `${positionXhead - (index * 25)}px`
	item.style.top = `${positionYhead}px`
})
const prepareResult = (score, stoped) =>{
    modalResult.classList.remove('hidden');
	
    contentWrapper.textContent = 'Game over! \nScore: ' + score;
    contentWrapper.style.fontSize = '24px'
    btnStart.textContent = 'Начать новую игру'
    
    
}


const closeModal = () => {
    modalResult.classList.add('hidden');
	cycleGame = true;
    initGame();
    
	
}
btnStart.addEventListener('click', closeModal);
let intervalBegin;
let intervalHead;

function moveDown(head){
    segmentHeadY = head.style.top
    segmentHeadY = parseInt(segmentHeadY.match(/\d+/))
    segmentHeadY += 25
    head.style.top = `${segmentHeadY}px`;
    
}

function moveUp(head){
    segmentHeadY = head.style.top
    segmentHeadY = parseInt(segmentHeadY.match(/\d+/))
    segmentHeadY -= 25
    head.style.top = `${segmentHeadY}px`;
}
function moveLeft(head){
    segmentHeadX = head.style.left
    segmentHeadX = parseInt(segmentHeadX.match(/\d+/))
    segmentHeadX -= 25
    head.style.left = `${segmentHeadX}px`;
    
}

function moveRight(head){
    segmentHeadX = head.style.left
    segmentHeadX = parseInt(segmentHeadX.match(/\d+/))
    segmentHeadX += 25
    head.style.left = `${segmentHeadX}px`;
}
const moveSnake = () => {
     
    document.addEventListener('keydown',e=>{
        if(e.key === "Escape"){
            cycleGame = false;
            modalResult.classList.remove('hidden');
            contentWrapper.textContent = "Игра приостановлена";
            btnStart.textContent = "Продолжить";
            /*
            btnStart.addEventListener('click',()=>{
                direction = direction
            })*/
            clearInterval(intervalBegin)            
        }else{
            keyPress = e.key    
        }
        
    });
    

    intervalBegin = setInterval(()=>{
        if(cycleGame){
            
            
            let segmentX;
            snakeSegments.forEach((item,index)=>{
                //const {width, height} = item.getBoundingClientRect();

                // Save the current coordinates of the snake's head
                let prevX = positionXhead; 
                let prevY = positionYhead;
                
                let prev2X, prev2Y;
                let segmentHeadX, segmentHeadY;
                // Movement of the snake's head depending on the direction
                if(index === 0 && direction){
                    if (direction === 'R') {
                        segmentX = item.style.left
                        segmentX = parseInt(segmentX.match(/\d+/))
                        item.style.left = `${segmentX+incrementX}px`
                            
                    }
                    switch (keyPress) {
                        case 'ArrowUp': 

                                    
                                    if(direction != 'D'){
                                        moveUp(item)
                                        item.style.transform = 'rotate(360deg)'
                                        direction = 'U'
                                    }else if (direction == 'D') {
                                        moveDown(item)
                                    }
                                        
                                        
                                    
                                    
                                
                                break;
                        case 'ArrowDown':
                                if(direction != 'U'){
                                    moveDown(item)
                                    item.style.transform = 'rotate(180deg)'
                                    direction = 'D'
                                }else if (direction == 'U') {
                                    moveUp(item)
                                }
                                break;
                        case 'ArrowLeft':
                                
                                if(direction != 'Rr'){
                                    moveLeft(item)
                                    item.style.transform = 'rotate(270deg)'
                                    direction = 'L'
                                }else if (direction == 'Rr') {
                                    moveRight(item)
                                }
                                break;
                        case 'ArrowRight':
                                
                                if(direction != 'L'){
                                    moveRight(item)
                                    item.style.transform = 'rotate(450deg)'
                                    direction = 'Rr'
                                }else if (direction == 'L') {
                                    moveLeft(item)
                                }
                                break;
                    }
                }else{
                    segmentX = item.style.left
                    segmentX = parseInt(segmentX.match(/\d+/))
                    item.style.left = `${segmentX+incrementX}px`
                        
                }
/*
                // Snake body update
                for (let i = 1; i < snakeLength; i++) {
                    prev2X = snake[i].x;
                    prev2Y = snake[i].y;
                    snake[i].x = prevX;
                    snake[i].y = prevY;
                    prevX = prev2X;
                    prevY = prev2Y;
                }
*/
            
            })    
                
            }
        

    }, 300)
/*
    intervalHead = setInterval(()=>{
        if(cycleGame){
            positionXhead = snakeHead.style.left;
            positionYhead = snakeHead.style.top;
        }
    }, 300)
    /*
    do{
        
    }while(running === true)*/
    
}
const initGame =() => {
    let score = 0;
    
    moveSnake();
    

}

//overlay.addEventListener('click', closeModal);