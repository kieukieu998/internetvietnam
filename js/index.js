$(function () {
  $(window).scroll(function () {
    var vitri = $(window).scrollTop();
    if (vitri < 400) {
      $('.backtotop').removeClass('show-backtotop1');
    } else if (vitri < 600) {
      $('.backtotop').addClass('show-backtotop1').removeClass('show-backtotop2');
    } else if (vitri < 1100) {
      $('.backtotop').addClass('show-backtotop2').removeClass('show-backtotop3');
    } else if (vitri < 1800) {
      $('.backtotop').addClass('show-backtotop3').removeClass('show-backtotop4');
    } else if (vitri < 2500) {
      $('.backtotop').addClass('show-backtotop4').removeClass('show-backtotop');
    } else {
      $('.backtotop').addClass('show-backtotop');
    }
  });

  $('.backtotop').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 1000);
  });
});

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

$('.slider01').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  accessibility: true,
  arrows: true,
  prevArrow: '<div class="prev slick_arrow"></div>',
  nextArrow: '<div class="next slick_arrow"></div>',
});
$('.slider02').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  accessibility: true,
  arrows: true,
  autoplay: true,
  prevArrow: '<div class="prev slick_arrow"></div>',
  nextArrow: '<div class="next slick_arrow"></div>',
});

$(document).ready(function () {
  $('#show-search-button').click(function (event) {
    event.stopPropagation();
    $('.form-search').toggle();
  });

  $(document).click(function (event) {
    var target = $(event.target);
    if (!target.is('#show-search-button') && !target.closest('.form-search').length) {
      $('.form-search').hide();
    }
  });
});

$(document).ready(function() {
  $('#toggle').click(function() {
      $('nav').slideToggle();
      $('body').toggleClass('no-scroll');
      $(this).find('i').toggleClass('fa-bars fa-times');
  });
})