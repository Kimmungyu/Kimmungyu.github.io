$('.nav-index').load('../embold.com/nav.html');
$('.nav-product').load('../embold.com/nav-product.html');
$('.nav-solutions').load('../embold.com/nav-solutions.html');
$('.nav-resources').load('../embold.com/nav-resources.html');
$('.nav-company').load('../embold.com/nav-company.html');
$('#nav-sub-solutions').load('../embold.com/nav-sub-solutions.html');

$(window).on("scroll", function() {
  if($(window).scrollTop() > 300) {
    $(".nav").addClass("box-shadow");
  } else {
    $(".nav").removeClass("box-shadow");
  }
});
