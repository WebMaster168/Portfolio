$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
$(function(){
	$('.slider').slick({
        autoplay:3000,
		arrows: false,
		fade:true,
		
		dots:false
	});
	
});
$(function(){
	$('.team__slider').slick({
		dots:true
	});
});
burgerButton = document.querySelector('.menu-burger');
navMenu = document.querySelector('.navigation');

burgerButton.addEventListener('click', function(){
	navMenu.classList.toggle('visible');
});

tabs=document.querySelectorAll('.pools__tab');
tabsContent=document.querySelectorAll('.pools__tab-content');
tabsParent=document.querySelector('.pools__tabs');
tabClose=document.querySelectorAll('.pools__tab-close');

function hideContentTabs(){
	tabsContent.forEach(item=>{
		item.classList.remove('show');
	});

	tabs.forEach(item=>{
		item.classList.remove('pools__tab--active');
	});

};

function showContentTabs(i=0){
	tabsContent[i].classList.add('show');
	tabs[i].classList.add('pools__tab--active');
}

hideContentTabs();


tabsParent.addEventListener('click', (event)=>{
	target=event.target;
	if(target && target.classList.contains('pools__tab')){
		tabs.forEach((item,i)=>{
			if(target==item){
				hideContentTabs();
				showContentTabs(i);
			}
		});
	}
});
tabClose.forEach(item=>{
	item.addEventListener('click', function(){
		hideContentTabs();
	});
})
	
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
let tabNavItem=document.querySelectorAll('.services__tab');
tabNavItem.forEach(function(elem){
	elem.addEventListener('click', activeTab);
})

function activeTab(){
	tabNavItem.forEach(function(elem){
        elem.classList.remove('services__tab--active');
        
	})
	this.classList.add('services__tab--active');
}
