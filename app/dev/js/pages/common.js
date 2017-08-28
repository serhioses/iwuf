'use strict';

import common from '../modules/common';

import $ from 'jquery';

common.createBundle($('.menu-trigger'), '', {
  container: $('.side-menu'),
  overlay: $('.overlay--menu')
}).init();
