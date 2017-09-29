$(document).ready(function () {
  $('.hero__box2-cta').click(function(){
    $('.hero__lines-top').addClass('top-back');
    $('.hero__lines-bottom').addClass('bottom-back');
    $('.hero__lines-right').addClass('right-back');
    $('.hero__lines-left').addClass('left-back');
    $('.words__draw').css("opacity", "0");
    $('.words__code').css("opacity", "0");
    $('.words__play').css("opacity", "0");
    $('.words__design').css("opacity", "0");
    $('.hero__box2').addClass('desc-ani-reverse');
    $('.hero__box1').addClass('box-to-circle');
    setTimeout( function() {
      $('html,body').animate({
          scrollTop: $(".web-design").offset().top},
          'slow');
            },
            1800);
  })
});




//delay to scrolldown on web-design div after clicking
// setTimeout( function() {
//   $('html,body').animate({
//       scrollTop: $(".web-design").offset().top},
//       'slow');
//         },
//         3000);
        //delay ends
