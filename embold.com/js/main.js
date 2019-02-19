$(".nav-hover").load("../nav.html");
$(".nav-company").load("../nav-company.html");
$(".nav-product").load("../nav-product.html");
$(".nav-resources").load("../nav-resources.html");
$(".nav-user-stories").load("../nav-user-stories.html");

$(window).on("scroll", function() {
  if($(window).scrollTop() > 300) {
    $(".nav").addClass("box-shadow");
  } else {
    $(".nav").removeClass("box-shadow");
  }
});
