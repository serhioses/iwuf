'use strict';

import slider from '../modules/slider';
import modal from '../modules/modal';

import $ from 'jquery';

var body = slider.alias.body,
  sliderEl = $('#slider'),
  thumbs = $('.js-thumb'),
  animationFinished = true;

slider.extend({
  thumbs
});

slider.createSlider('#slider', {
  dots: true,
  arrows: false
});

sliderEl.on('swipe', function (e, slick) {
  slider.setCurrentThumb(slick.currentSlide);
  animationFinished = false;
});
sliderEl.on('beforeChange', function (slick, currentSlide, nextSlide) {
  slider.setCurrentThumb((nextSlide + 1) % currentSlide.slideCount);
  animationFinished = false;
});
sliderEl.on('afterChange', function (slick, currentSlide, nextSlide) {
  animationFinished = true;
});
body.on('click', '.js-thumb', function (e) {
  e.preventDefault();

  if (animationFinished) {
    sliderEl.slick('slickGoTo', $(this).index());
    slider.setCurrentThumb($(this).index());
  }
});

modal.launch({}, $('.js-modal'));
