const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#ea9f94', '#def60c','#36ad16', '#2eecb4', '#204cf0','#a101fc','#f4175a','#165275'];
const newGame = document.querySelector('.newGame');
let timer;
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) =>{
	event.preventDefault();
	screens[0].classList.remove('up');
	screens[1].classList.add('up');
})

timeList.addEventListener('click', event => {

	if (event.target.classList.contains('time-btn')) {

		time = parseInt(event.target.getAttribute('data-time'));
		startGame();
		screens[1].classList.remove('up');
		screens[2].classList.add('up');
		newGame.classList.remove('hid');
	}
})

board.addEventListener('click', event =>{
	if(event.target.classList.contains('circle')){
		score++;
		event.target.remove();
		createRandomCircle();
	}
})
newGame.addEventListener('click', ()=>{
	screens[2].classList.remove('up');
	screens[1].classList.add('up');
	score=0;
})

function startGame(){
	timeEl.parentNode.classList.remove('hide');
	board.innerHTML = ``;
	timer=setInterval(decreaseTime,1000);
	createRandomCircle();
	setTime(time);
	
		
	
	
	
		
}

function decreaseTime(){
	if(time === 0){
		
		finishGame();
		clearInterval(timer);
	console.log("stop");
		

	} else{
		let current = --time;
		if (current < 10){
			current = `0${current}`;
		}
		setTime(current);
	}
	
	
}

function setTime(value){
	timeEl.innerHTML = `00:${value}`;
}

function finishGame(){
	time = 0;
	timeEl.parentNode.classList.add('hide');
	board.innerHTML = `<h1 class="score">Ваш счёт: <span class="primary">${score}</span><br></h1>`
	newGame.classList.add('hid');
	
	
}

function createRandomCircle(){
	const circle = document.createElement('div');
	const size = getRandomNumber(10, 60);
	const {width, height} = board.getBoundingClientRect();
	const x = getRandomNumber(0, width - size);
	const y = getRandomNumber(0, height - size);
	
	circle.classList.add('circle');
	circle.style.width =`${size}px`;
	circle.style.height =`${size}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;

	setColor(circle);
	board.append(circle);
	
}
function setColor(element){
	const color = getRandomColor();
	
	element.style.background = color;

}
function getRandomColor(){
	const index = Math.floor(Math.random()*colors.length);
	
	return colors[index]
}
function getRandomNumber(min,max){
	return Math.round(Math.random() * (max - min) + min)
}
