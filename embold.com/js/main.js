$('.nav-product').load('/embold.com/nav-product.html');

$(window).on("scroll", function() {
  if($(window).scrollTop() > 300) {
    $(".nav").addClass("box-shadow");
  } else {
    $(".nav").removeClass("box-shadow");
  }
});
