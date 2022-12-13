$(function(){
	
	$('.teachers__slider').slick({
		arrows: true,
		dots:false,
		
	});
	$('.rooms__slider').slick({
		arrows: true,
		dots:false,
		
	});
	$('.reviews__slider').slick({
		arrows: true,
		dots:false,
		
    });
});
const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
tabHeaders.forEach(function(item){
	item.addEventListener('click', function(){
		contentBoxes.forEach(function(item){
            item.classList.add('hidden');
            setTimeout(()=> {
                item.classList.remove('opacity');
            },150);
            
		})
		const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
        setTimeout(()=> {    
            contentBox.classList.add('opacity');
        },150);
	})
})
let tabNavItem=document.querySelectorAll('.tab');
tabNavItem.forEach(function(elem){
	elem.addEventListener('click', activeTab);
})

function activeTab(){
	tabNavItem.forEach(function(elem){
        elem.classList.remove('tab--active');
        
	})
	this.classList.add('tab--active');
}



const headers = document.querySelectorAll("[data-name='questions-accordeon']");
headers.forEach(function(item){
	item.addEventListener('click', function(){
		this.nextElementSibling.classList.toggle('accordeon-disabled');
		this.classList.toggle('accordeon-active');

	});
});
// Burger меню

let btnBurger = document.querySelector('.burger');
let menuBurger = document.querySelector('.header__menu');
let btnBurgerFoot = document.querySelector('.burger--footer');
let menuBurgerFoot = document.querySelector('.header__menu--footer');
/*btnBurger.addEventListener('click', function(){
	menuBurger.classList.toggle('hid');

	
});


btnBurgerFoot.addEventListener('click', function(){
	menuBurgerFoot.classList.toggle('hid');

	
});*/
function slick(btn,menu){
	btn.addEventListener('click', function(){
		menu.classList.toggle('hid');
	});
}

slick(btnBurger,menuBurger);
slick(btnBurgerFoot,menuBurgerFoot);

let btnMore = document.querySelector('#btn-review');
let rewMore = document.querySelector('#review-content');
let removeMore = document.querySelector('#btn-review02');

btnMore.addEventListener('click',function(){
	btnMore.classList.add('hidden');
	rewMore.classList.remove('hidden');
	removeMore.classList.remove('hidden');
});

removeMore.addEventListener('click',function(){
	btnMore.classList.remove('hidden');
	rewMore.classList.add('hidden');
	removeMore.classList.add('hidden');
});
