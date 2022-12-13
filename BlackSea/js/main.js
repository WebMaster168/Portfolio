const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
tabHeaders.forEach(function(item){
	item.addEventListener('click', function(){
		contentBoxes.forEach(function(item){
			item.classList.add('tab-content__hidden');
		})
		const contentBox = document.querySelector('#' + this.dataset.tab);
		contentBox.classList.remove('tab-content__hidden');
	})
})
const tabsHeaders = document.querySelectorAll('[data-layoutstab]');
const contentsBoxes = document.querySelectorAll('[data-tab-twocontent]');
tabsHeaders.forEach(function(item){
	item.addEventListener('click', function(){
		contentsBoxes.forEach(function(item){
			item.classList.add('hidden');
		})
		const contentsBox = document.querySelector('#' + this.dataset.layoutstab);
		contentsBox.classList.remove('hidden');
	})
})
$(function(){
	$('.header-languages__item-germany').on('click', function(){
		$(this).addClass('language--active');
		$('.header-languages__item-russian').removeClass('language--active');
		$('.header-languages__item-he').removeClass('language--active');
		$('.header-languages__item-english').removeClass('language--active');
	});
	$('.header-languages__item-russian').on('click', function(){
		$(this).addClass('language--active');
		$('.header-languages__item-germany').removeClass('language--active');
		$('.header-languages__item-he').removeClass('language--active');
		$('.header-languages__item-english').removeClass('language--active');
	});
	$('.header-languages__item-he').on('click', function(){
		$(this).addClass('language--active');
		$('.header-languages__item-germany').removeClass('language--active');
		$('.header-languages__item-russian').removeClass('language--active');
		$('.header-languages__item-english').removeClass('language--active');
	});
	$('.header-languages__item-english').on('click', function(){
		$(this).addClass('language--active');
		$('.header-languages__item-germany').removeClass('language--active');
		$('.header-languages__item-russian').removeClass('language--active');
		$('.header-languages__item-he').removeClass('language--active');
	});
	$('.slider').slick({
		arrows: true,
		fade:true,
		dots:false,
		responsive: [
		{
			breakpoint:885,
			settings: {
				arrows:false,
			}
		},
		
		]
	});
	$('.gallery-slider, .improvement-slider').slick({
		arrows: true,
		slidesToShow:3,
		dots:false,
		responsive: [
		{
			breakpoint:1123,
			settings: {
				slidesToShow:2,
			}
		},
		{
			breakpoint:793,
			settings: {
				slidesToShow:1,
			}
		}
		]

	});
	$('.selection-apartments__slider').slick({
		arrows: true,
		slidesToShow:2,
		dots:false,
		responsive: [
		{
			breakpoint:1300,
			settings: {
				slidesToShow:1,
			}
		}
		]

	});
	$('.concept-information').on('click', function(){
		$(this).addClass('concept--active');
		$('.concept-infrastructure').removeClass('concept--active');
		$('.concept-characteristics').removeClass('concept--active');
		
	});
	$('.concept-infrastructure').on('click', function(){
		$(this).addClass('concept--active');
		$('.concept-information').removeClass('concept--active');
		$('.concept-characteristics').removeClass('concept--active');
		
	});
	$('.concept-characteristics').on('click', function(){
		$(this).addClass('concept--active');
		$('.concept-infrastructure').removeClass('concept--active');
		$('.concept-information').removeClass('concept--active');
		
	});
	

	$('.layouts-tabs__item-one').on('click', function(){
		$(this).addClass('tab--active');
		$('.layouts-tabs__item-two').removeClass('tab--active');
		$('.layouts-tabs__item-three').removeClass('tab--active');
		$('.layouts-tabs__item-four').removeClass('tab--active');
	});
	$('.layouts-tabs__item-two').on('click', function(){
		$(this).addClass('tab--active');
		$('.layouts-tabs__item-one').removeClass('tab--active');
		$('.layouts-tabs__item-three').removeClass('tab--active');
		$('.layouts-tabs__item-four').removeClass('tab--active');
	});
	$('.layouts-tabs__item-three').on('click', function(){
		$(this).addClass('tab--active');
		$('.layouts-tabs__item-two').removeClass('tab--active');
		$('.layouts-tabs__item-one').removeClass('tab--active');
		$('.layouts-tabs__item-four').removeClass('tab--active');
	});
	$('.layouts-tabs__item-four').on('click', function(){
		$(this).addClass('tab--active');
		$('.layouts-tabs__item-two').removeClass('tab--active');
		$('.layouts-tabs__item-three').removeClass('tab--active');
		$('.layouts-tabs__item-one').removeClass('tab--active');
	});
	$(".js-range-slider").ionRangeSlider({
		
		type: "double",
		min: 1,
		max: 15,
	});
	$('.rooms-links__one').on('click', function(){
		$(this).addClass('rooms__links--active');
		$('.rooms-links__two').removeClass('rooms__links--active');
		$('.rooms-links__three').removeClass('rooms__links--active');
		$('.rooms-links__four').removeClass('rooms__links--active');
	});
	$('.rooms-links__two').on('click', function(){
		$(this).addClass('rooms__links--active');
		$('.rooms-links__one').removeClass('rooms__links--active');
		$('.rooms-links__three').removeClass('rooms__links--active');
		$('.rooms-links__four').removeClass('rooms__links--active');
	});
	$('.rooms-links__three').on('click', function(){
		$(this).addClass('rooms__links--active');
		$('.rooms-links__two').removeClass('rooms__links--active');
		$('.rooms-links__one').removeClass('rooms__links--active');
		$('.rooms-links__four').removeClass('rooms__links--active');
	});
	$('.rooms-links__four').on('click', function(){
		$(this).addClass('rooms__links--active');
		$('.rooms-links__two').removeClass('rooms__links--active');
		$('.rooms-links__three').removeClass('rooms__links--active');
		$('.rooms-links__one').removeClass('rooms__links--active');
	});
});
$(function(){
    $('.menu-btn, .header-down').on('click',function(){
        $('.header-top__wrapper').slideToggle();
    })
});