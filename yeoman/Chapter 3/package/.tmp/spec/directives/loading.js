'use strict';
describe('Directive: loading', function() {
  var element, scope;
  beforeEach(module('learningYeomanCh3App'));
  scope = null;
  element = null;
  beforeEach(inject(function($controller, $rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<loading></loading>');
    return element = $compile(element)(scope);
  }));
  it('should replace element with Loading...', function() {
    return expect(element.text()).toBe('Loading...');
  });
  it('should hidden by default', function() {
    return expect(element.attr('style')).toContain('display: none;');
  });
  return it('should be visible during $locationChangeStart event', inject(function($rootScope, $location) {
    $location.path('/about');
    $rootScope.$apply();
    return expect(element.attr('style')).not.toContain('display: none;');
  }));
});

/*
//@ sourceMappingURL=loading.js.map
*/