'use strict';
/**
 # @ngdoc function
 # @name learningYeomanCh3App.controller:AppCtrl
 # @description
 # # AppCtrl
 # Controller of the learningYeomanCh3App
*/

angular.module('learningYeomanCh3App').controller('AppCtrl', function($rootScope, $cookieStore, Config) {
  var App;
  $rootScope.name = 'AppCtrl';
  App = angular.copy(Config);
  App.session = $cookieStore.get('App.session');
  return window.App = $rootScope.App = App;
});

/*
//@ sourceMappingURL=app.js.map
*/