'use strict';
describe('Controller: PostsCtrl', function() {
  var PostsCtrl, location, scope;
  beforeEach(module('learningYeomanCh3App'));
  PostsCtrl = {};
  scope = {};
  location = {};
  beforeEach(inject(function($controller, $rootScope, $location) {
    var posts;
    scope = $rootScope.$new();
    location = $location;
    posts = [1, 2, 3];
    return PostsCtrl = $controller('PostsCtrl', {
      $scope: scope,
      $location: location,
      posts: posts
    });
  }));
  it('should have a name property equal to Posts on the scope', function() {
    expect(scope.name).toBe('Posts');
    return expect(scope.posts.length).toBe(3);
  });
  it('should change the location to /posts/new', function() {
    location.path('/posts');
    scope.add();
    return expect(location.path()).toEqual('/posts/new');
  });
  it('should change the location to /posts/view/:id', function() {
    location.path('/posts');
    scope.view(1);
    return expect(location.path()).toEqual('/posts/view/1');
  });
  return it('should change the location to /posts/edit/:id', function() {
    location.path('/posts');
    scope.edit(1);
    return expect(location.path()).toEqual('/posts/edit/1');
  });
});

/*
//@ sourceMappingURL=posts.js.map
*/