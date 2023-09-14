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
    arrows: true,
    responsive: [
        {
          breakpoint: 1139,
          settings: {
            infinite: false,
            slidesToShow: 3
          }
        },
        {
            breakpoint: 721,
            settings: {
              infinite: true,
              centerMode: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 531,
            settings: {
              infinite: true,
              centerMode: false,
              slidesToShow: 1
            }
          }
    ]
    
});
let panelBtn = document.querySelector('.header__list-help');
let panel = document.querySelector('.header__window');

panelBtn.addEventListener('click', function(){
    panel.classList.toggle('visible');
})

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const burgerClose = document.querySelector('.burger__menu-close');

burgerBtn.addEventListener('click', openMenu);
burgerClose.addEventListener('click', closeMenu);

function openMenu(){
    burgerMenu.classList.add('visible');
}
function closeMenu(){
    burgerMenu.classList.remove('visible');
}