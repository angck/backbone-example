'use strict';
angular.module('learningYeomanCh3App', ['ngAnimate', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute']).config(function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  }).when('/posts', {
    templateUrl: 'views/posts.html',
    controller: 'PostsCtrl',
    resolve: {
      posts: function(PostsService) {
        return PostsService.query();
      }
    }
  }).when('/posts/view/:id*', {
    templateUrl: 'views/post-detail.html',
    controller: 'PostDetailCtrl',
    resolve: {
      post: function(PostsService) {
        return PostsService.get();
      }
    }
  }).when('/posts/edit/:id', {
    templateUrl: 'views/post-edit.html',
    controller: 'PostEditCtrl',
    resolve: {
      post: function(PostsService) {
        return PostsService.get();
      }
    }
  }).when('/posts/new', {
    templateUrl: 'views/post-edit.html',
    controller: 'PostNewCtrl'
  }).otherwise({
    redirectTo: '/'
  });
});

/*
//@ sourceMappingURL=app.js.map
*/