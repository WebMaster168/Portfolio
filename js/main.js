$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

let photo = document.querySelector('.card-photo-img');
let modal = document.querySelector('.modal__photo');
let close = document.querySelector('.close');

photo.addEventListener('click',openModal);

function openModal(){
        modal.classList.toggle('hide');
        document.body.style.overflow='hidden';
        
}

close.addEventListener('click',closeModal);


function closeModal(){
        modal.classList.toggle('hide');
        document.body.style.overflow='';
}