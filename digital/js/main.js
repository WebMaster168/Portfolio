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

