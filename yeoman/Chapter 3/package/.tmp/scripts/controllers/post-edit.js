'use strict';
angular.module('learningYeomanCh3App').controller('PostEditCtrl', function($scope, $location, post, slugifyFilter) {
  $scope.name = 'PostEditCtrl';
  $scope.post = post;
  $scope.save = function() {
    $scope.post.tags = String($scope.post.tags).split(',');
    $scope.post.slug = slugifyFilter($scope.post.title, true);
    return $scope.post.$update().then(function(data) {
      return $location.path("/posts/view/" + data._id);
    });
  };
  $scope.cancel = function() {
    return $location.path("/posts/view/" + $scope.post._id);
  };
  return $scope.remove = function() {
    return $scope.post.$remove().then(function(data) {
      return $location.path("/posts");
    });
  };
});

/*
//@ sourceMappingURL=post-edit.js.map
*/