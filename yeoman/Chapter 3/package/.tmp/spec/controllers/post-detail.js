'use strict';
describe('Controller: PostDetailCtrl', function() {
  var PostDetailCtrl, location, post, scope;
  beforeEach(module('learningYeomanCh3App'));
  PostDetailCtrl = {};
  scope = {};
  post = {};
  location = null;
  beforeEach(inject(function($controller, $rootScope, $location, Post) {
    scope = $rootScope.$new();
    location = $location;
    return PostDetailCtrl = $controller('PostDetailCtrl', {
      $scope: scope,
      $location: location,
      post: new Post({
        _id: 1,
        title: 'Test Post'
      })
    });
  }));
  it('should have a name on the scope', function() {
    expect(scope.name).toBe('PostDetailCtrl');
    return expect(scope.post.title).toEqual('Test Post');
  });
  return it('should load the edit view', function() {
    location.path('posts/view/1');
    scope.edit();
    return expect(location.path()).toBe('/posts/edit/1');
  });
});

/*
//@ sourceMappingURL=post-detail.js.map
*/