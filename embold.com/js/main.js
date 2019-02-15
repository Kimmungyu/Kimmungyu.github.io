$(document).ready(function () {
$('.nav-hover').mouseover(function (e) {
  e.stopPropagation();
  $('.nav-sub').addClass('display',1000)
});
$('.nav-hover').mouseout(function (e) {
  e.stopPropagation();
  $('.nav-sub').removeClass('display',1000)
})
});
