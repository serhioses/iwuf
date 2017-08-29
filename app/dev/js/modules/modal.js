'use strict';

import Module from '../module';

import $ from 'jquery';
import fancybox from 'fancybox';

fancybox($);

const MODAL_SETTINGS = {
  margin: 24,
  padding: 0,
  maxWidth: '98%',
  wrapCSS: 'fancybox-custom'
};

var modal = new Module('modal');

modal.launch = function (settings, el) {
  if (typeof el !== 'undefined' && el.length) {
    el.fancybox($.extend(true, {}, MODAL_SETTINGS, settings));
  } else {
    $.fancybox($.extend(true, {}, MODAL_SETTINGS, settings));
  }
};

export default modal;
