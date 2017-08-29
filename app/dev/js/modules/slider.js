'use strict';

import Module from '../module';

import $ from 'jquery';
import slick from 'slick-carousel';

const SLIDER_SETTINGS = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  mobileFirst: true
},
  THUMBS_SETTINGS = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    mobileFirst: true
  };

var slider = new Module('slider');

slider.createSlider = function (id, settings) {
  if (!$(id).length) {
    return;
  }
  
  return $(id).slick($.extend(true, {}, SLIDER_SETTINGS, settings));
};

slider.setCurrentThumb = function (idx) {
  slider.state.thumbs
    .removeClass('js-thumb--active')
    .eq(idx)
    .addClass('js-thumb--active');
};

slider.createThumbs = function (id, settings) {
  if (!$(id).length) {
    return;
  }
  
  return $(id).slick($.extend(true, {}, THUMBS_SETTINGS, settings));
};

export default slider;
