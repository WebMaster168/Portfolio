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
const modalButtons = document.querySelectorAll('[data-btn]'),
modalClose = document.querySelector('.modal__close'),
modal = document.querySelector('.modal__call'),
dialog=document.querySelector('.modal__dialog'),
openMenu=document.querySelectorAll('.header-menu__dots'),
menu=document.querySelector('.menu');


function openModal(){
        modal.classList.toggle('hide');
        document.body.style.overflow='hidden';
        
}

modalButtons.forEach(btn=>{
        btn.addEventListener('click',openModal);
});

function closeModal(){
        modal.classList.toggle('hide');
        document.body.style.overflow='';
}
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e)=>{
        if(e.target===dialog){
                closeModal();
        }
})

document.addEventListener('keydown', (e)=>{
        if(e.code==="Escape"&& modal.classList.contains('hide')){
                closeModal();
        }
});

function OpenMenu(){
        menu.classList.toggle('hide');
        document.body.style.overflow='hidden';
        setTimeout(()=> {
                menu.classList.remove('menu--opacity');
        },150);
}



function closeMenu(){
        setTimeout(()=> {
                menu.classList.add('menu--opacity');
                
        },150);
        
        menu.classList.remove('hide');
        document.body.style.overflow='';
        
}
 openMenu.forEach(item =>{
        item.addEventListener('click', ()=>{
   
                if(!menu.classList.contains('hide')){
                        OpenMenu();    
                }else {
                        closeMenu();
                        
                }
        });
});



