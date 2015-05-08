'use strict';
angular.module('learningYeomanCh3App').directive('loading', function($rootScope) {
  return {
    template: '<p>Loading...</p>',
    restrict: 'EA',
    replace: true,
    link: function(scope, element, attrs) {
      element.addClass('loading').hide();
      $rootScope.$on('$locationChangeStart', function() {
        return element.fadeIn('fast');
      });
      return $rootScope.$on('$locationChangeSuccess', function() {
        return element.fadeOut('fast');
      });
    }
  };
});

/*
//@ sourceMappingURL=loading.js.map
*/