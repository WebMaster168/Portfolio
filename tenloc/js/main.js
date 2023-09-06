$('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    dots:true,
    arrows: true
    
});
$('.blog__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    dots:false,
    arrows: true
    
});
let panelBtn = document.querySelector('.header__list-help');
let panel = document.querySelector('.header__window');

panelBtn.addEventListener('click', function(){
    panel.classList.toggle('visible');
})