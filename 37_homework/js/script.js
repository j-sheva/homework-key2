// import { initializeBurgerMenu } from './burgerMenu.js';

// document.addEventListener('DOMContentLoaded', function () {
//   initializeBurgerMenu();
// });

$('.hero').slick({
  autoplay: true,
  infinity: true,
  slideToShow: 1,
  arrows: false,
  dots: true,
});

$('.partners__slider').slick({
  slidesToShow: 8.99,
  autoplay: true,
  infinity: true,
  prevArrow: $('.partners__arrow_left'),
  nextArrow: $('.partners__arrow_right'),
});
