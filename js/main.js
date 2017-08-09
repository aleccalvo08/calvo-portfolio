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
  })
});
