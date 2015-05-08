'use strict';
angular.module('learningYeomanCh3App').controller('PostsCtrl', function($scope, $location, posts) {
  $scope.name = 'Posts';
  $scope.p = null;
  $scope.postFilter = null;
  $scope.posts = posts;
  $scope.add = function() {
    return $location.path('/posts/new');
  };
  $scope.view = function(id) {
    return $location.path('/posts/view/' + id);
  };
  return $scope.edit = function(id) {
    return $location.path('/posts/edit/' + id);
  };
});

/*
//@ sourceMappingURL=posts.js.map
*/