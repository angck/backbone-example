'use strict';
describe('Controller: MainCtrl', function() {
  var MainCtrl, scope;
  beforeEach(module('learningYeomanCh3App'));
  MainCtrl = {};
  scope = {};
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    return MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  return it('should have a name on the scope', function() {
    return expect(scope.name).toBe('MainCtrl');
  });
});

/*
//@ sourceMappingURL=main.js.map
*/