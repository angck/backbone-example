'use strict';
angular.module('learningYeomanCh3App').filter("slugify", function() {
  return function(input, lowercase) {
    var out;
    out = "";
    if (input) {
      out = input.replace(/\s/g, "-");
    }
    if (lowercase) {
      out = out.toLowerCase();
    }
    return out;
  };
});

/*
//@ sourceMappingURL=slugify.js.map
*/