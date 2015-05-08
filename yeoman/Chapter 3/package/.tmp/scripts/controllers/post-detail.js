'use strict';
angular.module('learningYeomanCh3App').controller('PostDetailCtrl', function($scope, $location, post) {
  $scope.name = 'PostDetailCtrl';
  $scope.post = post;
  $scope.edit = function() {
    return $location.path("/posts/edit/" + $scope.post._id);
  };
  return $scope.remove = function() {
    var confirmDelete;
    confirmDelete = confirm('Are you sure you want to delete this?');
    if (confirmDelete) {
      $scope.post.$remove().then(function(data) {
        return $location.path('/posts');
      });
    }
    return $location.path("/posts/edit/" + post._id);
  };
});

/*
//@ sourceMappingURL=post-detail.js.map
*/