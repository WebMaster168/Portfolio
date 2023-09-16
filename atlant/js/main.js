const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
tabHeaders.forEach(function(item){
	item.addEventListener('click', function(){
		contentBoxes.forEach(function(item){
            
            item.classList.add('hidden');
            setTimeout(()=> {
                item.classList.remove('opacity');
            },300);
            
		})
		const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
        setTimeout(()=> {    
            contentBox.classList.add('opacity');
        },300);
	})
})

let tabNavItem=document.querySelectorAll('.volume__category');
tabNavItem.forEach(function(elem){
	elem.addEventListener('click', activeTab);
})

function activeTab(){
	tabNavItem.forEach(function(elem){
        elem.classList.remove('active');
        
	})
	this.classList.add('active');
}

$('.reviews__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    dots:true,
    responsive: [
        {
          breakpoint: 537,
          settings: {
            centerMode: false
          }
        }
    ]
    
});
$(function(){
    const headers = document.querySelectorAll("[data-name='questions-accordeon']");
    headers.forEach(function(item){
        item.addEventListener('click', function(){
        item.nextElementSibling.classList.remove('accordeon-disabled');
        $(this).next().slideToggle('200');
        this.nextElementSibling.classList.toggle('accordeon-disabled');
        
        this.classList.toggle('accordeon-active');

        })
    })
});

let btnModal = document.querySelectorAll('.btn-modal-open');
let modal = document.querySelector('.modal__atlant');
let sendBtn = document.querySelector('.modal__form-send');
let close = document.querySelector('.modal__item-close');

btnModal.forEach(btn =>{
    btn.addEventListener('click',openModal);
})

modal.addEventListener('click', (e)=>{
    if(e.target==modal){
        closeModal();
    }
});
function validation(form){
    let result = true;

    let formModal = form.parentNode;
    let formInputs = formModal.querySelectorAll('input');
    function removeError(input){
        let inputParent = input.parentNode;
        if(inputParent.classList.contains('error')){
            inputParent.querySelector('.error-label').remove();
            inputParent.classList.remove('error');
        }
    }
    function inputError(input, text){
        
        let inputParent = input.parentNode;
        let label = document.createElement('label');
        label.classList.add('error-label');
        label.textContent = text;
        inputParent.classList.add('error');
        inputParent.append(label);
    }
    formInputs.forEach(input => {
        removeError(input);
        if(input.value === ''){
            
            result = false;
            let textError = "Поле не должно быть пустым!";
            inputError(input, textError);
        }
    })
    return result;
}



sendBtn.addEventListener('click', function(e){
    
   if(validation(this)===true){
    
        closeModal();
        alert("Заказ сделан! ");
    }else{
        e.preventDefault();
    }
});


function openModal(){
        modal.classList.toggle('hide');
        document.body.style.overflow='hidden';
        
}

close.addEventListener('click',closeModal);


function closeModal(){
        modal.classList.toggle('hide');
        document.body.style.overflow='';
}



/*Анимация текста при скролле*/

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(){
                for(let index = 0; index < animItems.length; index++){
                        const animItem = animItems[index];
                        const animItemHeight = animItem.offsetHeight;
                        const animItemOffset = offset(animItem).top;
                        const animStart = 4;

                        let animItemPoint = window.innerHeight - animItemHeight / animStart;
                        if(animItemHeight > window.innerHeight){
                                animItemPoint = window.innerHeight - window.innerHeight / animStart;
                        }
                        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                                animItem.classList.add('_active');                       
                        } else {
                                animItem.classList.remove('_active');
                        }
                }
        }
        function offset(el){
                const rect = el.getBoundingClientRect();
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return { top: rect.top + scrollTop, left:rect.left + scrollLeft }
        }

        setTimeout(()=>{
                animOnScroll();
        }, 300);
        
}