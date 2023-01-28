$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

let burgerButton = document.querySelector('.burger__menu');
let navMenu = document.querySelector('.header__navigation');
let close = document.querySelector('.nav__close');

burgerButton.addEventListener('click', function(){
	navMenu.classList.add('show');
});

close.addEventListener('click', function(){
	navMenu.classList.remove('show');
});