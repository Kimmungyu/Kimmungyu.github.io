

$(window).on("scroll", function() {
  if($(window).scrollTop() > 300) {
    $(".nav").addClass("box-shadow");
  } else {
    $(".nav").removeClass("box-shadow");
  }
});

$('#menu-item-product').click(function(){
  $('.nav-sub-solutions').hide();
  $('.nav-sub-resources').hide();
  $('.nav-sub-company').hide();
  $('.nav-item-main-solutions').removeClass('active');
  $('.nav-item-main-resources').removeClass('active');
  $('.nav-item-main-company').removeClass('active');
  $('.nav-item-main-product').toggleClass('active');
  $('.nav-sub-product').fadeToggle(200);
});
$('#menu-item-solutions').click(function(){
  $('.nav-sub-product').hide();
  $('.nav-sub-resources').hide();
  $('.nav-sub-company').hide();
  $('.nav-item-main-product').removeClass('active');
  $('.nav-item-main-resources').removeClass('active');
  $('.nav-item-main-company').removeClass('active');
  $('.nav-item-main-solutions').toggleClass('active');
  $('.nav-sub-solutions').fadeToggle(200);
});
$('#menu-item-resources').click(function(){
  $('.nav-sub-product').hide();
  $('.nav-sub-solutions').hide();
  $('.nav-sub-company').hide();
  $('.nav-item-main-solutions').removeClass('active');
  $('.nav-item-main-product').removeClass('active');
  $('.nav-item-main-company').removeClass('active');
  $('.nav-item-main-resources').toggleClass('active');
  $('.nav-sub-resources').fadeToggle(200);
});
$('#menu-item-company').click(function(){
  $('.nav-sub-product').hide();
  $('.nav-sub-resources').hide();
  $('.nav-sub-solutions').hide();
  $('.nav-item-main-solutions').removeClass('active');
  $('.nav-item-main-resources').removeClass('active');
  $('.nav-item-main-product').removeClass('active');
  $('.nav-item-main-company').toggleClass('active');
  $('.nav-sub-company').fadeToggle(200);
});
