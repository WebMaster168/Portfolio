let area = document.querySelector('.area-wrapper');
let newBodySegment;
let flyMouseInner;
let flyMouse;
let score = 0;
const scoreDOM = document.querySelector('.snake__score-number')
const contentWrapper = document.getElementById('content');
const modalResult = document.querySelector('.modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnStart = document.querySelector('.startGame');
const snake = document.querySelector('.snake');
const snakeHead = document.querySelector('.snake__head');
const snakeHeadInner = document.querySelector('.snake__headWrapper');
const snakeSecond = document.querySelector('.snake__body-crocodily');
const snakeSegments = snake.querySelectorAll('.snake__body');
let firstPause = false;
let snakeArray = []
let X, Y;
let firstMove = true;
let snakeLength = snakeArray.length;
let cycleGame = false;
let positionX = 0;
let positionY = 0;
let incrementX = 25;
let rotX, rotY;
let positionXhead = 175;
let positionYhead = 50;

snakeHead.style.top = positionYhead
snakeHead.style.left = positionXhead

snakeHead.style.transform = 'rotate(90deg)'

    snakeSegments.forEach((item, index)=>{
        
        snakeArray.push(item)
        
    })

console.log(snakeArray)
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
    initGame(score);
    
	
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
function getRandomNumber(min, max) {
    // Округляем min и max до ближайших значений, кратных 25
    min = Math.ceil(min / 25) * 25; // Округляем вверх
    max = Math.floor(max / 25) * 25; // Округляем вниз
  
    // Генерируем случайное число кратное 25
    return Math.floor(Math.random() * ((max - min) / 25 + 1)) * 25 + min;
}

function setColor(element){
	const color = getRandomColor();
	
	element.style.background = color;

}

function moveRight(head){
    
    segmentHeadX = head.style.left 
    segmentHeadX = parseInt(segmentHeadX.match(/\d+/))
    segmentHeadX += 25
    head.style.left = `${segmentHeadX}px`;
}
const createSegment =(snakeHead)=>{
    firstMove = false
    newBodySegment = document.createElement('div')
    newBodySegment.classList.add('snake__segment', 'snake__body')
    snakeSecond.classList.add('snake__body-crocodily--visible')
    //newBodySegment.style.transform =
    const headRect = snakeHead.getBoundingClientRect();
    const snakeRect = snake.getBoundingClientRect();
    snakeArray.push(newBodySegment)
    newBodySegment.style.left = `${(headRect.x - snakeRect.x) + 25}px`
    
    newBodySegment.style.top = `${headRect.y - snakeRect.y}px`
    
    snakeHeadInner.append(newBodySegment, snakeSecond)
    
}
function createRandomFood(score){
	flyMouseInner = document.createElement('div');
    flyMouse = document.createElement('img');
    flyMouse.src="images/flyMouse.gif"
    
    
	const size = 25
	const {width, height} = area.getBoundingClientRect();
	X = getRandomNumber(0, width);
	Y = getRandomNumber(0, height);
	
	flyMouseInner.classList.add('food');
	flyMouse.style.width =`${size}px`;
	flyMouse.style.height =`${size}px`;
	flyMouseInner.style.top = `${Y}px`;
	flyMouseInner.style.left = `${X}px`;

	
	area.append(flyMouseInner)
    flyMouseInner.append(flyMouse)
    
}
const createSegmentIntheEndSnake=(snakeHead)=>{
    const headRect = snakeHead.getBoundingClientRect();
    const snakeRect = snakeSecond.getBoundingClientRect();
    const newBodysnakeSegment = document.createElement('div')
    newBodysnakeSegment.classList.add('snake__segment', 'snake__body', 'snake__body--eating')
    setTimeout(()=>{
        newBodysnakeSegment.classList.add('snake__body--eatingVisible')
    }, 300)
    //newBodysnakeSegment.style.left = `${(headRect.x - snakeRect.x)}px`
    //newBodysnakeSegment.style.top = `${headRect.y - snakeRect.y}px`
    snakeArray.push(newBodysnakeSegment)
    snake.append(newBodysnakeSegment)

}
const examinationOnFoodEating =(score, X, Y) =>{
    let snakeHeadXposition = snakeHead.style.left
    
    snakeHeadXposition = parseInt(snakeHeadXposition.match(/\d+/))
    let snakeHeadYposition = snakeHead.style.top
    snakeHeadYposition = parseInt(snakeHeadYposition.match(/\d+/))
    
    if(snakeHeadXposition === X && snakeHeadYposition === Y){
        
        
        createSegmentIntheEndSnake(snakeHead)
        flyMouseInner.remove()
        createRandomFood(score)
        score += 1
        
        
    }
    return score   
}

const moveSnake = (score) => {
    if(!firstPause){
        createRandomFood(score);
        
    }
    document.addEventListener('keydown',e=>{
        if(e.key === "Escape"){
            cycleGame = false;
            modalResult.classList.remove('hidden');
            contentWrapper.textContent = "Игра приостановлена";
            btnStart.textContent = "Продолжить";
            firstPause = true
            
            btnStart.addEventListener('click',()=>{
                clearInterval(intervalBegin)
                score = score
                moveSnake(score)
                modalResult.classList.add('hidden');
            })
            clearInterval(intervalBegin)            
        }else{
            keyPress = e.key    
        }
        
    });
    

    intervalBegin = setInterval(()=>{
        let segmentX;
            let segmentY;
        
        const logicMove = (prevX, prevY) =>{
            snakeArray.forEach(el =>{
                snakeLength = snakeArray.length;
                currentX = el.style.left;
                currentY = el.style.top;
                el.style.left = prevX;
                el.style.top = prevY;
                prevX = currentX;
                prevY = currentY; 
                
                console.log('work2')
            })
            
           
            
        }
        if(cycleGame){
            
            
            
            //snakeHead.style.left = `${snakeHead.style.left + 25}px`;
            let prevX = snakeHead.style.left;
            let prevY = snakeHead.style.top;

            let prev2X, prev2Y;
            logicMove(prevX, prevY) 
            let newScore = examinationOnFoodEating(score, X, Y)
            score = newScore;
            console.log("score", score)
            scoreDOM.innerHTML=`${score}`
            snakeSegments.forEach((item,index)=>{
                
                //const {width, height} = item.getBoundingClientRect();
                
                
                // Save the current coordinates of the snake's head
                let segmentHeadX, segmentHeadY;
                
                // Movement of the snake's head depending on the direction
                if(index === 0 ){
                   
                    
                    switch (keyPress) {
                        case 'ArrowUp': 
                                if(firstMove === true){
                                    
                                    createSegment(item)
                                    
                                }
                                    
                                    if(direction != 'D'){
                                        moveUp(item)
                                        item.style.transform = 'rotate(360deg)'
                                        direction = 'U'
                                    }else if (direction == 'D') {
                                        moveDown(item)
                                    }
                                        
                                        
                                    
                                    
                                
                                break;
                        case 'ArrowDown':
                                if(firstMove === true){
                                    
                                    createSegment(item)
                                }
                                if(direction != 'U'){
                                    moveDown(item)
                                    rotX = item.style.left
                                    rotY = item.style.top
                                    item.style.transform = 'rotate(180deg)'
                                    direction = 'D'
                                }else if (direction == 'U') {
                                    moveUp(item)
                                }
                                break;
                        case 'ArrowLeft':
                                if(firstMove === true){
                                    
                                    createSegment(item)
                                }
                                if(direction != 'Rr'){
                                    moveLeft(item)
                                    item.style.transform = 'rotate(270deg)'
                                    direction = 'L'
                                }else if (direction == 'Rr') {
                                    moveRight(item)
                                }
                                break;
                        case 'ArrowRight':
                                
                                if(firstMove == true){
                                    createSegment(item)
                                    
                                }    
                                    //
                                    
                                   // 
                                
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
                    if (direction == 'R') {
                        segmentX = item.style.left
                        segmentX = parseInt(segmentX.match(/\d+/))
                        item.style.left = `${segmentX + incrementX}px`
                            
                    }
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
            /*
            for(let i = 0; i < snakeLength; i++){
                /*
                segmentX = snakeSegments[i-1].style.left
                segmentY = snakeSegments[i-1].style.top
                segmentX = parseInt(segmentX.match(/\d+/))
                segmentY = parseInt(segmentY.match(/\d+/))
                if(direction == 'R'){
                    snakeSegments[i].style.left = `${segmentX-25}px` 
                    
                }else if(direction == 'D'){
                   
                        snakeSegments[i].style.top = `${segmentY-25}px` 
                        snakeSegments[i].style.left = `${segmentX-25}px` 
                    
                        
                   
                   //snakeSegments[i].style.left = `${segmentX-25}px` 
                    //snakeSegments[i].style.top = `${segmentY+25}px` 
                      
                }
                
                //snakeSegments[i].style.top = `${segmentY}px` 
                
                    
        
                //snakeSegments[i-1].style.left = `${segmentX+incrementX}px` 
            }*/
            
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
const initGame =(score) => {
    
    
    moveSnake(score);
    

}

//overlay.addEventListener('click', closeModal);