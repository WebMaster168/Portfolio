

var el = document.getElementById('song_01');
var playing = false; // текущее состояние плеера

var player = new Audio('./audio/Alsu-Tam_gde_net.mp3');
player.preload = "auto";
player.addEventListener('ended', function(){ // слушаем окончание трека
  
  playing = false;
});
el.addEventListener('click', playPause); // слушаем нажатие на кнопку

function playPause() {
  if( playing) {
    player.pause();
    el.classList.remove('song-btn--pause');    
  } else {
    player.play();
    el.classList.add('song-btn--pause');
    player02.pause();
    player03.pause();
    player04.pause();
    player05.pause();
    player06.pause();
    player07.pause();
    player08.pause();
    el02.classList.remove('song-btn--pause');
    el03.classList.remove('song-btn--pause');
    el04.classList.remove('song-btn--pause');
    el05.classList.remove('song-btn--pause');
    el06.classList.remove('song-btn--pause');
    el07.classList.remove('song-btn--pause');
    el08.classList.remove('song-btn--pause');
  }
  playing = !playing;
}
var el02 = document.getElementById('song_02');
var playing02 = false; // текущее состояние плеера

var player02 = new Audio('./audio/MakSim-Znaesh_li_ty.mp3');
player02.preload = "auto";
player02.addEventListener('ended', function(){ // слушаем окончание трека
  
  playing02 = false;
});
el02.addEventListener('click', playPause02); // слушаем нажатие на кнопку

function playPause02() {
  if( playing02) {
    player02.pause();
    el02.classList.remove('song-btn--pause');    
  } else {
    player02.play();
    el02.classList.add('song-btn--pause');
    player.pause();
    player03.pause();
    player04.pause();
    player05.pause();
    player06.pause();
    player07.pause();
    player08.pause();
    el.classList.remove('song-btn--pause');
    el03.classList.remove('song-btn--pause');
    el04.classList.remove('song-btn--pause');
    el05.classList.remove('song-btn--pause');
    el06.classList.remove('song-btn--pause');
    el07.classList.remove('song-btn--pause');
    el08.classList.remove('song-btn--pause');
  }
  playing02 = !playing02;
}
var el03 = document.getElementById('song_03');
var playing03 = false; // текущее состояние плеера

var player03 = new Audio('./audio/5sta_family-Vmeste_my.mp3');
player03.preload = "auto";
player03.addEventListener('ended', function(){ // слушаем окончание трека
  
  playing03 = false;
});
el03.addEventListener('click', playPause03); // слушаем нажатие на кнопку

function playPause03() {
  if( playing03) {
    player03.pause();
    el03.classList.remove('song-btn--pause');    
  } else {
    player03.play();
    el03.classList.add('song-btn--pause');
    player02.pause();
    player.pause();
    player04.pause();
    player05.pause();
    player06.pause();
    player07.pause();
    player08.pause();
    el02.classList.remove('song-btn--pause');
    el.classList.remove('song-btn--pause');
    el04.classList.remove('song-btn--pause');
    el05.classList.remove('song-btn--pause');
    el06.classList.remove('song-btn--pause');
    el07.classList.remove('song-btn--pause');
    el08.classList.remove('song-btn--pause');
    
  }
  playing03 = !playing03;
}
var el04 = document.getElementById('song_04');
var playing04 = false; // текущее состояние плеера

var player04 = new Audio('./audio/Dabro-YUnost.mp3');
player04.preload = "auto";
player04.addEventListener('ended', function(){ // слушаем окончание трека
  
  playing04 = false;
});
el04.addEventListener('click', playPause04); // слушаем нажатие на кнопку

function playPause04() {
  if( playing04) {
    player04.pause();
    el04.classList.remove('song-btn--pause');    
  } else {
    player04.play();
    el04.classList.add('song-btn--pause');
    player02.pause();
    player03.pause();
    player.pause();
    player05.pause();
    player06.pause();
    player07.pause();
    player08.pause();
    el02.classList.remove('song-btn--pause');
    el03.classList.remove('song-btn--pause');
    el.classList.remove('song-btn--pause');
    el05.classList.remove('song-btn--pause');
    el06.classList.remove('song-btn--pause');
    el07.classList.remove('song-btn--pause');
    el08.classList.remove('song-btn--pause');    
  }
  playing04 = !playing04;
}
var el05 = document.getElementById('song_05');
var playing05 = false; // текущее состояние плеера

var player05 = new Audio('./audio/MATRANG-Meduza.mp3');
player05.preload = "auto";
player05.addEventListener('ended', function(){ // слушаем окончание трека
  
  playing05 = false;
});
el05.addEventListener('click', playPause05); // слушаем нажатие на кнопку

function playPause05() {
  if( playing05) {
    player05.pause();
    el05.classList.remove('song-btn--pause');    
  } else {
    player05.play();
    el05.classList.add('song-btn--pause');
    player02.pause();
    player03.pause();
    player04.pause();
    player.pause();
    player06.pause();
    player07.pause();
    player08.pause();
    el02.classList.remove('song-btn--pause');
    el03.classList.remove('song-btn--pause');
    el04.classList.remove('song-btn--pause');
    el.classList.remove('song-btn--pause');
    el06.classList.remove('song-btn--pause');
    el07.classList.remove('song-btn--pause');
    el08.classList.remove('song-btn--pause');
  }
  playing05 = !playing05;
}
var el06 = document.getElementById('song_06');
var playing06 = false; // текущее состояние плеера

var player06 = new Audio('./audio/Johnyboy-Kogda_my_vzletaem.mp3');
player06.preload = "auto";
player06.addEventListener('ended', function(){ // слушаем окончание трека
  
  playing06 = false;
});
el06.addEventListener('click', playPause06); // слушаем нажатие на кнопку

function playPause06() {
  if( playing06) {
    player06.pause();
    el06.classList.remove('song-btn--pause');    
  } else {
    player06.play();
    el06.classList.add('song-btn--pause');
    player02.pause();
    player03.pause();
    player04.pause();
    player05.pause();
    player.pause();
    player07.pause();
    player08.pause();
    el02.classList.remove('song-btn--pause');
    el03.classList.remove('song-btn--pause');
    el04.classList.remove('song-btn--pause');
    el05.classList.remove('song-btn--pause');
    el.classList.remove('song-btn--pause');
    el07.classList.remove('song-btn--pause');
    el08.classList.remove('song-btn--pause');
  }
  playing06 = !playing06;
}
var el07 = document.getElementById('song_07');
var playing07 = false; // текущее состояние плеера

var player07 = new Audio('./audio/T-Fest-Okno.mp3');
player07.preload = "auto";
player07.addEventListener('ended', function(){ // слушаем окончание трека
  
  playing07 = false;
});
el07.addEventListener('click', playPause07); // слушаем нажатие на кнопку

function playPause07() {
  if( playing07) {
    player07.pause();
    el07.classList.remove('song-btn--pause');    
  } else {
    player07.play();
    el07.classList.add('song-btn--pause');
    player02.pause();
    player03.pause();
    player04.pause();
    player05.pause();
    player06.pause();
    player.pause();
    player08.pause();
    el02.classList.remove('song-btn--pause');
    el03.classList.remove('song-btn--pause');
    el04.classList.remove('song-btn--pause');
    el05.classList.remove('song-btn--pause');
    el06.classList.remove('song-btn--pause');
    el.classList.remove('song-btn--pause');
    el08.classList.remove('song-btn--pause');
  }
  playing07 = !playing07;
}
var el08 = document.getElementById('song_08');
var playing08 = false; // текущее состояние плеера

var player08 = new Audio('./audio/Homie-Bezumno_mozhno.mp3');
player08.preload = "auto";
player08.addEventListener('ended', function(){ // слушаем окончание трека
  
  playing08 = false;
});
el08.addEventListener('click', playPause08); // слушаем нажатие на кнопку

function playPause08() {
  if( playing08) {
    player08.pause();
    el08.classList.remove('song-btn--pause');    
  } else {
    player08.play();
    el08.classList.add('song-btn--pause');
    player02.pause();
    player03.pause();
    player04.pause();
    player05.pause();
    player06.pause();
    player07.pause();
    player.pause();
    el02.classList.remove('song-btn--pause');
    el03.classList.remove('song-btn--pause');
    el04.classList.remove('song-btn--pause');
    el05.classList.remove('song-btn--pause');
    el06.classList.remove('song-btn--pause');
    el07.classList.remove('song-btn--pause');
    el.classList.remove('song-btn--pause');
  }
  playing08 = !playing08;
}
$('.galery-slider').slick({
  arrows: true,
  dots:false,
  slidesToShow:4,
  responsive: [
		{
			breakpoint:900,
			settings: {
				slidesToShow:3,
			}
		},
		{
			breakpoint:653,
			settings: {
				slidesToShow:2,
			}
    },
    {
			breakpoint:454,
			settings: {
				slidesToShow:1,
			}
		}
		]
});
$('.reviews__slider').slick({
  arrows: true,
  dots:true,
  slidesToShow:3,
  responsive: [
		{
			breakpoint:966,
			settings: {
				slidesToShow:2,
			}
    },
    {
			breakpoint:629,
			settings: {
				slidesToShow:1,
			}
		}
		
		]
});
$(function(){
  var btn = $('.btn-up');

  $(window).scroll(function(){
    if($(window).scrollTop()>300){
      btn.addClass('show');
    } else{
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});
$(function(){
      const headers = document.querySelectorAll("[data-name='questions-accordeon']");
      headers.forEach(function(item){
              item.addEventListener('click', function(){
              $(this).next().slideToggle('200');
              this.nextElementSibling.classList.toggle('accordeon-disabled');
              
              this.classList.toggle('accordeon-active');

              })
      })
});
$(function(){
  $('.burger,.closed-menu').on('click',function(){
      $('nav').slideToggle();
  })
});