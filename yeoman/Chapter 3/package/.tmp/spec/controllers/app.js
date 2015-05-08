'use strict';
describe('Controller: AppCtrl', function() {
  var AppCtrl, scope;
  beforeEach(module('learningYeomanCh3App'));
  AppCtrl = {};
  scope = {};
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    return AppCtrl = $controller('AppCtrl', {
      $scope: scope
    });
  }));
  return xit('should attach a list of awesomeThings to the scope', function() {
    return expect(scope.awesomeThings.length).toBe(3);
  });
});

/*
//@ sourceMappingURL=app.js.map
*/