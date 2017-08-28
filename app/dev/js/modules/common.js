'use strict';

import Module from '../module';

import $ from 'jquery';
import eclipse from 'eclipse';
import 'eclipse-ui';

var common = new Module('common');

eclipse.UI.Bundle.onClickOutside();

common.createBundle = function (trigger, close, options) {
  if (!trigger.length) {
    return {init: $.noop};
  }

  return new eclipse.UI.Bundle(trigger, close, options);
};

export default common;
