$(function(){
	$('.header__slider').slick({
    arrows: true,
    
    fade:true,
    autoplay:3000,
    dots:true,

    
    });
    $('.slider-cordinates').slick({
        arrows: false,
        fade:true,
        focusOnSelect:true,
        centerMode: true,
        
        asNavFor:'.slider__map, .slider__map--two',
        dots:false
    
        
    });
    $('.surf-slider').slick({
        arrows: true,
        slidesToShow:4,
        slidesToScroll:1,
        focusOnSelect:true,
        centerMode: true,
        
        dots:false,
        asNavFor:'.slider__map, .slider-cordinates, .slider__map--two',
    
        responsive: [
            {
              breakpoint: 1251,
              settings: {
                
                slidesToShow: 3
              }
            },
            {
              breakpoint: 867,
              settings: {
                
                slidesToShow: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1
              }
            }
        
        ]
        });
    $('.slider__map').slick({
        slidesToShow:8,
        slidesToScroll:1,
        arrows: false,
        focusOnSelect:true,
        centerMode: true,
        asNavFor:'.surf-slider, .slider-cordinates',
        responsive: [
            {
              breakpoint: 1251,
              settings: {
                centerMode:false,
                slidesToShow: 3
              }
            }
        ],

        
    });
    $('.slider__map--two').slick({
        slidesToShow:3,
        slidesToScroll:1,
        arrows: false,
        focusOnSelect:true,
        centerMode: true,
        asNavFor:'.surf-slider, .slider-cordinates',
        responsive: [
            {
              breakpoint: 867,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1
              }
            }
        ]
        
    });
    $('.travel__slider,.shop__slider').slick({
        dots:false,
        arrows: true,
        fade:true       
    });
    $('.surfboard__box-circle').on('click', function(){
        $(this).toggleClass('active')
    });
});
let burgerBtn = document.querySelector('.burger');
let burgerShow = document.querySelector('.header__navigation');

burgerBtn.addEventListener('click', function(){
    burgerShow.classList.toggle('show');
})
function zero(value)
{
    if(value<10){
        value='0'+value;
    }
    return value;
}

let current = new Date();
function getYear(){
    let year = current.getFullYear();
    return year;
}
document.querySelector('.header__date-year').innerHTML=` ${getYear()}`;

function getMount(){
    let month = zero(current.getMonth()+1);
    return month;
}
document.querySelector('.header__date-mounth').innerHTML=`${getMount()} `;
function getDay(){
    let day = zero(current.getDate());
    return day;
}
document.querySelector('.header__date-day').innerHTML=`${getDay()}`;

let minusNights = document.querySelector('.number__count-minus--nights');
let minusGuests = document.querySelector('.number__count-minus--guests');
let plusNights = document.querySelector('.number__count-plus--nights');
let plusGuests = document.querySelector('.number__count-plus--guests');
let countNights = document.querySelector('.number__enter--nights');
let countGuests = document.querySelector('.number__enter--guests');
let summ = document.querySelector('.summ');

function calculate(){
    let summary;
    summary = (countNights.value * summ.dataset.night) + ((countGuests.value-1) * summ.dataset.guests);
    summ.textContent=`$${summary} USD`;
}
calculate();
minusNights.addEventListener('click', function(){
    
    
    countNights.value= countNights.value - 1;
    if(countNights.value<1){
        countNights.value=1;
    }
    calculate();
});

minusGuests.addEventListener('click', function(){
    
    
    countGuests.value= countGuests.value - 1;
    if(countGuests.value<1){
        countGuests.value=1;
    }
    calculate();
});

plusNights.addEventListener('click', function(){
    
    
    countNights.value= ++countNights.value;
    if(countNights.value>=9){
        countNights.value=9;
    }
    calculate();
});

plusGuests.addEventListener('click', function(){
    
    
    countGuests.value= ++countGuests.value;
    if(countGuests.value>=9){
        countGuests.value=9;
    }
    calculate();
});

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

new WOW().init();


