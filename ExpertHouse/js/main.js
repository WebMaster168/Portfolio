$(function(){
	$('.slider').slick({
		arrows: false,
		fade:true,
		autoplay:3000,
		dots:true
	});
	$('.team-people').slick({
		slidesToShow:4,
		responsive: [
		{
			breakpoint:1025,
			settings: {
				slidesToShow:2,
			}
		},
		{
			breakpoint:430,
			settings: {
				slidesToShow:1,
			}
		}
		]
	});
});
$(function(){
    $('.btn-menu__list').on('click',function(){
        $('.toogle-inner').slideToggle();
    })
});