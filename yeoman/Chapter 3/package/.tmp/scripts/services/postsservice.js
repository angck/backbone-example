'use strict';
angular.module('learningYeomanCh3App').factory("PostsService", function($resource, $q, $route, Post) {
  var api;
  return api = {
    query: function() {
      var dfd;
      dfd = $q.defer();
      Post.query().$promise.then(function(posts) {
        return dfd.resolve(posts);
      }, function(error) {
        return dfd.reject(error);
      });
      return dfd.promise;
    },
    get: function(id) {
      var dfd;
      dfd = $q.defer();
      if ($route.current.params.id) {
        id = $route.current.params.id;
        if (!id) {
          throw new Error('Must provide ID!');
        }
      }
      Post.get({
        id: id
      }).$promise.then(function(post) {
        return dfd.resolve(post);
      }, function(error) {
        return dfd.reject(error);
      });
      return dfd.promise;
    }
  };
});

/*
//@ sourceMappingURL=postsservice.js.map
*/