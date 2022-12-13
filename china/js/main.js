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

const modalButton = document.querySelector('[data-btn__play]'),
modalButtonLesson= document.querySelector('[data-btn__lesson]'),
modalClose = document.querySelector('.modal__close'),
modalCloseLesson = document.querySelector('.modal__close--lesson'),
modal = document.querySelector('.modal-play'),
modalLesson = document.querySelector('.modal-lesson'),
dialog=document.querySelector('.modal__dialog'),
dialogLesson=document.querySelector('.modal__dialog--lesson'),
content=document.querySelector('.modal-play__content'),
contentLesson=document.querySelector('.modal-lesson__content'),
menuBtn=document.querySelector('.header__btn'),
menuModal=document.querySelector('.menu'),
closeMenu=document.querySelector('.menu__close'),
modalRewBtnOne=document.querySelector('[data__screenOne]'),
modalRewBtnTwo=document.querySelector('[data__screenTwo]'),
modalRewBtnThree=document.querySelector('[data__screenThree]'),
modalRewCloseOne=document.querySelector('.modal__close--one'),
modalRewCloseTwo=document.querySelector('.modal__close--two'),
modalRewCloseThree=document.querySelector('.modal__close--three'),
modalRewOne= document.querySelector('.modal-item--one'),
modalRewDialogOne= document.querySelector('.modal__dialog--one'),
modalRewTwo= document.querySelector('.modal-item--two'),
modalRewThree= document.querySelector('.modal-item--three'),
modalRewContentOne= document.querySelector('.modal-item__content');
function openModal(){
        modal.classList.add('hide');
        document.body.style.overflow='hidden';
        
}
function openModalLesson(){
        modalLesson.classList.add('hide');
        document.body.style.overflow='hidden';
        
}
function openMenu(){
        menuModal.classList.add('hide--flex');
        document.body.style.overflow='hidden';
        
}
function openRewOne(){
        modalRewOne.classList.add('hide');
        document.body.style.overflow='hidden';
}
function openRewTwo(){
        modalRewTwo.classList.add('hide');
        document.body.style.overflow='hidden';
}
function openRewThree(){
        modalRewThree.classList.add('hide');
        document.body.style.overflow='hidden';
}
modalButton.addEventListener('click',openModal);
modalButtonLesson.addEventListener('click',openModalLesson);
menuBtn.addEventListener('click',openMenu);
modalRewBtnOne.addEventListener('click',openRewOne);
modalRewBtnTwo.addEventListener('click',openRewTwo);
modalRewBtnThree.addEventListener('click',openRewThree);

function closeModal(){
        modal.classList.remove('hide');
        document.body.style.overflow='';
}
function closeModalLesson(){
        modalLesson.classList.remove('hide');
        document.body.style.overflow='';
}
function closeMENU(){
        menuModal.classList.remove('hide--flex');
        document.body.style.overflow='';
}
function closeRewOne(){
        modalRewOne.classList.remove('hide');
        document.body.style.overflow='';
}
function closeRewTwo(){
        modalRewTwo.classList.remove('hide');
        document.body.style.overflow='';
}
function closeRewThree(){
        modalRewThree.classList.remove('hide');
        document.body.style.overflow='';
}
modal.addEventListener('click', (e)=>{
        if(e.target==dialog){
                closeModal();
        }
});
modalLesson.addEventListener('click', (e)=>{
        if(e.target==dialogLesson){
                closeModalLesson();
        }
});

document.addEventListener('keydown', (e)=>{
        if(e.code==="Escape"&& modal.classList.contains('hide')){
                closeModal();
                closeModalLesson();
        }
});
closeMenu.addEventListener('click', closeMENU);
modalCloseLesson.addEventListener('click', closeModalLesson);
modalRewCloseOne.addEventListener('click', closeRewOne);
modalRewCloseTwo.addEventListener('click', closeRewTwo);
modalRewCloseThree.addEventListener('click', closeRewThree);
modalClose.addEventListener('click', closeModal);

$(function(){
        $('.reviews__look').slick({
		arrows: true,
                
                slidesToShow:3,
                dots:true,
                slidesToScroll:3,
                responsive: [
                {
                        breakpoint:898,
                        settings: {
                                slidesToShow:2,
                                slidesToScroll:2,
                        }
                },
                {
                        breakpoint:665,
                        settings: {
                                slidesToShow:1,
                                slidesToScroll:1,
                        }
                }
                ]
		
        });
        $('.reviews__read').slick({
		arrows: true,
                
                slidesToShow:3,
                dots:true,
                slidesToScroll:1,
                responsive: [
                        {
                                breakpoint:898,
                                settings: {
                                        slidesToShow:2,
                                        slidesToScroll:2,
                                }
                        },
                        {
                                breakpoint:665,
                                settings: {
                                        slidesToShow:1,
                                        slidesToScroll:1,
                                }
                        }
                        ]
		
        });
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
let tabNavItem=document.querySelectorAll('.reviews__tab');
tabNavItem.forEach(function(elem){
	elem.addEventListener('click', activeTab);
})

function activeTab(){
	tabNavItem.forEach(function(elem){
        elem.classList.remove('reviews__tab--active');
        
	})
	this.classList.add('reviews__tab--active');
}

