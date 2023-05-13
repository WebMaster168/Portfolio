const userInput = document.getElementById("userInput");
var expression='';

function press(num) {
	
	expression += num;
	if(expression=='+' || expression == '-' || expression== '*' || expression=='/' || expression=='.'){
		expression = '';
		userInput.value=expression;
	}else{
		
		userInput.value = expression;

	}

	
}
function equal(){
	let result = eval(expression);
	userInput.value=result
	expression = '';
}
function erase(){
	expression = '';
	userInput.value =expression;
}

