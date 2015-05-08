'use strict';
describe('Controller: AboutCtrl', function() {
  var AboutCtrl, scope;
  beforeEach(module('learningYeomanCh3App'));
  AboutCtrl = {};
  scope = {};
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    return AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));
  return it('should attach a list of awesomeThings to the scope', function() {
    return expect(scope.awesomeThings.length).toBe(3);
  });
});

/*
//@ sourceMappingURL=about.js.map
*/