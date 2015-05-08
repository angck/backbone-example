'use strict';
angular.module('learningYeomanCh3App').controller('PostNewCtrl', function($scope, $location, Post) {
  $scope.name = 'PostNewCtrl';
  $scope.post = {
    title: '',
    body: '',
    published: true,
    image: '',
    tags: []
  };
  $scope.cancel = function() {
    return $location.path('/posts');
  };
  return $scope.save = function(post) {
    $scope.post = new Post(post);
    $scope.post.tags = String($scope.post.tags).split(',');
    return $scope.post.$save().then(function(result) {
      return $location.path('/posts');
    });
  };
});

/*
//@ sourceMappingURL=post-new.js.map
*/