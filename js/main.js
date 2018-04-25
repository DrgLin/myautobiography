$(document).ready(function(){
  $('.container').on('click', '.anchor', function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);       
  });
//利用滾輪位置高度設定動畫啟動


$(window).scroll(function() {

  if ($(window).scrollTop() >= $('.personal_data').offset().top) {
    $('.nav').addClass('fixed');
    $('.menu-s').addClass('fixed').css('top','56px'); //避免重疊,預留導覽列的高(行高跟框線)
    $('.profile').addClass('here');
    $('.resume').removeClass('here');
    $('.slider').css('margin-left','0');
    $('.intro').fadeIn(2000);
  } else {
    $('.nav').removeClass('fixed');
    $('.menu-s').removeClass('fixed');
    $('.profile').removeClass('here');
    $('.resume').removeClass('here');  
  }
});

$(window).scroll(function() {

  if($(window).scrollTop() >= $('.resume_wrap').offset().top){
    $('.resume_article').slideDown(1500);
    $('.sub-title').delay(1500).css('margin-left','0');
    $('.resume').addClass('here');
    $('.profile').removeClass('here');
    $('.skill').removeClass('here');
    $('.portfolio').removeClass('here');
  }
  else if($(window).scrollTop() <= $('.resume_wrap').offset().top - 310){
   $('.resume_article').slideUp(1500);
 }
});

$(window).scroll(function() {

  if($(window).scrollTop() >= $('.skill_wrap').offset().top){
    $('#bar-1').delay(1000).css('height', '300px');//html
    $('#bar-2').delay(1000).css('height', '280px');//css
    $('#bar-3').delay(1000).css('height', '280px');//asp/dw
    $('#bar-4').delay(1000).css('height', '200px');//jquery
    $('#bar-5').delay(1000).css('height', '120px');//js
    $('#bar-6').delay(1000).css('height', '80px');//git
    $('.skill').addClass('here');
    $('.resume').removeClass('here');
    $('.aboutme').removeClass('here');
    $('.portfolio').removeClass('here');
  }
});

$(window).scroll(function() {

  if($(window).scrollTop() >= $('.portfolio_wrap').offset().top - 10){
    $('.portfolio_list').fadeIn(1500);
    $('.portfolio').addClass('here');
    $('.profile').removeClass('here');
    $('.skill').removeClass('here');
  }
});

$(window).scroll(function() {

  if($(window).scrollTop() >= $('.about_wrap').offset().top - 10){
    $('.about_list').css('margin-left','0');
    $('.about_form').css('margin-right','0');
    $('.aboutme').addClass('here');
    $('.skill').removeClass('here');
    $('.portfolio').removeClass('here');
  }
});


//當畫面產生變動時，讓導覽列收回
$(window).resize(function(){  
 $('.menu-s').hide()
});

// 手機版menu

$('.phone-bar').click(function(){
  $('.menu-s').slideToggle();
});

});
