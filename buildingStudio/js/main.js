$(function(){
	$('.projects-style__title, .projects-colors__title, .projects-our__title').on('click',function(){
		$(this).toggleClass("projects-style__title--active");
		$(this).next().slideToggle('200');
	});
	$('.projects-colors__one').on('click', function(){
		$(this).addClass('projects-colors--active');
		$('.projects-colors__two').removeClass('projects-colors--active');
		$('.projects-colors__three').removeClass('projects-colors--active');
	});
	$('.projects-colors__two').on('click', function(){
		$(this).addClass('projects-colors--active');
		$('.projects-colors__one').removeClass('projects-colors--active');
		$('.projects-colors__three').removeClass('projects-colors--active');
	});
	$('.projects-colors__three').on('click', function(){
		$(this).addClass('projects-colors--active');
		$('.projects-colors__one').removeClass('projects-colors--active');
		$('.projects-colors__two').removeClass('projects-colors--active');
	});
	$('.reviews-slider').slick({
		arrows: true,
		dots:true,
		slidesToShow:1,
	});
	$('.questions-ask__call-now').on('click', function(){
		$(this).addClass('questions-ask__call--active');
		$('.questions-ask__call-time').removeClass('questions-ask__call--active');
		
	});
	$('.questions-ask__call-time').on('click', function(){
		$(this).addClass('questions-ask__call--active');
		$('.questions-ask__call-now').removeClass('questions-ask__call--active');
		
	});
});

const headers = document.querySelectorAll("[data-name='questions-accordeon']");
headers.forEach(function(item){
	item.addEventListener('click', function(){
		this.nextElementSibling.classList.toggle('accordeon-disabled');
		this.classList.toggle('accordeon-active');

	})
})