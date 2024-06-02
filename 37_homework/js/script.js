import { initializeBurgerMenu } from './burger.js';
initializeBurgerMenu();

$('.hero').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  dots: true,
});

$('.arrivals__items').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 4.999,
  prevArrow: $('.arrivals__arrow_left'),
  nextArrow: $('.arrivals__arrow_right'),
});

$.getJSON('../json_file/arrivals.json', function (data) {
  data.forEach((slide) => {
    let isInStock = slide.inStock ? 'IN STOCK' : 'SOLD';
    let sliderItem = `
      <li class="arrivals__item">
        <span class="arrivals__label" data-stock="${isInStock}">
          ${isInStock}
        </span>
        <img
          data-lazy="${slide.img}"
          class="arrivals__img"
          src="${slide.img}"
          alt="guitar"
        ></img>
        <h3 class="arrivals__card-title">${slide.name}</h3>
        <p class="arrivals__price">${slide.price}</p>
      </li>
    `;
    $('.arrivals__items').slick('slickAdd', sliderItem);
  });
});

$('.partners__slider').slick({
  slidesToShow: 8.99,
  autoplay: true,
  infinite: true,
  prevArrow: $('.partners__arrow_left'),
  nextArrow: $('.partners__arrow_right'),
});
