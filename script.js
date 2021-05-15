$(function(){

    // -----ふわっと効果-----
  $(window).scroll(function (){
    $('.effect-fade').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
          $(this).addClass('effect-scroll');
        }
    });
  });

  // -----ヘッダー高さ変更-----
  $(window).on('load scroll', function() {
    var scrollPos = $(this).scrollTop();	if ( scrollPos > 100 ) {
    $('.header').addClass('is-animation');
    } else {
    $('.header').removeClass('is-animation');
    }
  });

  // -----ハンバーガーメニュー-----
  $('#header-nav-sp').hide();
  $('.openbtn').click(function () {
    $(this).toggleClass('active');
    $('#header-nav-sp').toggle(300);
  });

  $('#header-nav-sp a[href]').on('click',function(){
    $('.openbtn').trigger('click');
  });

  // -----ページトップ-----
  $('#js-page-top').hide();
    $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
    $('#js-page-top').fadeIn();
    } else {
    $('#js-page-top').fadeOut();
    }
  });
 
  $('#js-page-top').click(function () {
    $('body,html').animate({
    scrollTop: 0
    }, 700);
    return false;
  });
});