$('.nav-index').load('../embold-blue.com/nav.html');
$('.nav-product').load('../embold-blue.com/nav-product.html');
$('.nav-solutions').load('../embold-blue.com/nav-solutions.html');
$('.nav-resources').load('../embold-blue.com/nav-resources.html');
$('.nav-company').load('../embold-blue.com/nav-company.html');
$('#nav-sub-solutions').load('../embold-blue.com/nav-sub-solutions.html');
$('#nav-mobile-full-screen-top').load('../embold-blue.com/nav-mobile.html');

$(window).on("scroll", function() {
  if($(window).scrollTop() > 300) {
    $(".nav").addClass("box-shadow");
  } else {
    $(".nav").removeClass("box-shadow");
  }
});

$(window).on("scroll", function() {
  if($(window).scrollTop() > 500) {
    $('.wrap-sub-menu-alt').addClass('display').fadeIn(200);
  } else {
    $('.wrap-sub-menu-alt').removeClass('display');
  }
});

jQuery(document).ready(function ($) {
  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth,});

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});


$( "#as-content-1 .click" ).click(function() {
   $('#as-content-1 .paragraph').slideToggle();
   $('#as-content-1 .arrow').toggleClass('active');
});

$( "#as-content-2 .click" ).click(function() {
   $('#as-content-2 .paragraph').slideToggle();
   $('#as-content-2 .arrow').toggleClass('active');
});

$( "#as-content-3 .click" ).click(function() {
   $('#as-content-3 .paragraph').slideToggle();
   $('#as-content-3 .arrow').toggleClass('active');
});

$( "#as-content-4 .click" ).click(function() {
   $('#as-content-4 .paragraph').slideToggle();
   $('#as-content-4 .arrow').toggleClass('active');
});

$( "#as-content-5 .click" ).click(function() {
   $('#as-content-5 .paragraph').slideToggle();
   $('#as-content-5 .arrow').toggleClass('active');
});

$("#summary").click(function() {
    $('html, body').animate({scrollTop: $("#section-summary").offset().top -140 }, 200);
});
$("#customerStories").click(function() {
    $('html, body').animate({scrollTop: $("#section-customerStories").offset().top -140 }, 200);
});
$("#useCases").click(function() {
    $('html, body').animate({scrollTop: $("#section-useCases").offset().top -140 }, 200);
});
$("#contactSales").click(function() {
    $('html, body').animate({scrollTop: $("#section-contactSales").offset().top -140 }, 200);
});
