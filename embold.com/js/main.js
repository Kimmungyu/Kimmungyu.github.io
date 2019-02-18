$(document).ready(function () {
  $('.nav-hover').mouseover(function (e) {
    e.stopPropagation();
    $('.nav').addClass('box-shadow-none')
    $('.nav-sub').addClass('display',1000)
  });
  $('.nav-hover').mouseout(function (e) {
    e.stopPropagation();
    $('.nav').removeClass('box-shadow-none')
    $('.nav-sub').removeClass('display',1000)
  })
});

$(window).on("scroll", function() {
  if($(window).scrollTop() > 300) {
    $(".nav").addClass("box-shadow");
  } else {
    $(".nav").removeClass("box-shadow");
  }
});
