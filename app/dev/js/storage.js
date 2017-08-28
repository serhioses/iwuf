'use strict';

import $ from 'jquery';

var storage;

storage = {
  alias: {
    w: $(window),
    doc: $(document),
    body: $('body')
  }
};

export default storage;
