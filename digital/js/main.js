$(function(){
    $('.menu-burger').on('click',function(){
        $('nav').slideToggle();
    })
});
function scrollTo(element){
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
}

var button = document.querySelector('.scroll-btn');
var about = document.querySelector('#scroll-about');

button.addEventListener('click', () => {
	scrollTo(about);
})

const reverseString = function (str) {
    let reversed = '';
    for(let i = str.length - 1; i>=0;i--){
        reversed += str[i];
    }
    return reversed
};

console.log(reverseString("hello"))

const sumArray = function (nums) {
    let summary = 0;
    nums.forEach(item=>{
		
        summary += item
		
    })
    return summary
};

console.log(sumArray([1, 2, 3, 4, 5]))
const countPositiveNumbers = function (nums) {
    const positiveNumbers = nums.filter(digit => digit>0)
    return positiveNumbers.length
};
console.log(countPositiveNumbers([1, -2, 3, -4, 5]));

const sortByLength = function(arr){
    const stringsAndLengthsOfArray = arr.map(item => {
        return {
            string: item,
            length: item.length
        }
    })
    stringsAndLengthsOfArray.sort((a, b)=>a.length - b.length)
    const sortedArray = stringsAndLengthsOfArray.map(item=>item.string)
    return sortedArray;
};

console.log(sortByLength(["apple", "banana", "orange", "kiwi", "grape"]));