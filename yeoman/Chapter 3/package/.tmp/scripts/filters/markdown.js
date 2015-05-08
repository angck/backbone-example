'use strict';
angular.module('learningYeomanCh3App').filter('markdown', function() {
  return function(input, truncate) {
    if (input && truncate) {
      input = input.substring(0, truncate);
    }
    if (input) {
      return markdown.toHTML(input);
    }
  };
});

/*
//@ sourceMappingURL=markdown.js.map
*/