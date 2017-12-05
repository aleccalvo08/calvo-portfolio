$(document).ready(function () {
  // $('.hero__box2-cta').click(function(){
  //   $('.hero__lines-top').addClass('top-back');
  //   $('.hero__lines-bottom').addClass('bottom-back');
  //   $('.hero__lines-right').addClass('right-back');
  //   $('.hero__lines-left').addClass('left-back');
  //   $('.words__draw').css("opacity", "0");
  //   $('.words__code').css("opacity", "0");
  //   $('.words__play').css("opacity", "0");
  //   $('.words__design').css("opacity", "0");
  //   $('.hero__box2').addClass('desc-ani-reverse');
  //   $('.hero__box1').addClass('box-to-circle');
  //   setTimeout( function() {
  //     $('html,body').animate({
  //         scrollTop: $(".web-design").offset().top},
  //         'slow');
  //           },
  //           1800);
  // })

  $('.hero__nav-list__projects').click(function(){
    $('html,body').animate({
        scrollTop: $(".web-design").offset().top},
        'slow');
          });

  $('.hero__nav-list__contact').click(function(){
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
          });

  var waypoints = $('.web-design').waypoint(function(direction) {
    if (direction == 'down') {
      $('.web-design__box2-top').addClass('web-mobile-top-go')
      $('.web-design__box2-right').addClass('web-mobile-right-go')
      $('.web-design__box2-bottom').addClass('web-mobile-bottom-go')
      $('.web-design__box2-top').removeClass('web-mobile-top-back')
      $('.web-design__box2-right').removeClass('web-mobile-right-back')
      $('.web-design__box2-bottom').removeClass('web-mobile-bottom-back')
    } else {
      $('.web-design__box2-top').addClass('web-mobile-top-back')
      $('.web-design__box2-right').addClass('web-mobile-right-back')
      $('.web-design__box2-bottom').addClass('web-mobile-bottom-back')
      $('.web-design__box2-top').removeClass('web-mobile-top-go')
      $('.web-design__box2-right').removeClass('web-mobile-right-go')
      $('.web-design__box2-bottom').removeClass('web-mobile-bottom-go')
    }
  }, {
    offset: 100
  })

  var waypoints2 = $('.illustration').waypoint(function(direction) {
    if (direction == 'down') {
      $('.illustration__box2-top').addClass('illustration-mobile-top-go')
      $('.illustration__box2-top').removeClass('illustration-mobile-top-back')
      $('.illustration__box2-right').addClass('illustration-mobile-right-go')
      $('.illustration__box2-right').removeClass('illustration-mobile-right-back')
      $('.illustration__box2-bottom').addClass('illustration-mobile-bottom-go')
      $('.illustration__box2-bottom').removeClass('illustration-mobile-bottom-back')
      $('.illustration__image-svg').addClass('illustration-mobile-svg-ani')
    } else {
      $('.illustration__box2-top').addClass('illustration-mobile-top-back')
      $('.illustration__box2-top').removeClass('illustration-mobile-top-go')
      $('.illustration__box2-right').addClass('illustration-mobile-right-back')
      $('.illustration__box2-right').removeClass('illustration-mobile-right-go')
      $('.illustration__box2-bottom').addClass('illustration-mobile-bottom-back')
      $('.illustration__box2-bottom').removeClass('illustration-mobile-bottom-go')
    }
  }, {
    offset: 100
  })
});
