'use strict';
describe('Controller: PostEditCtrl', function() {
  var PostEditCtrl, httpBackend, location, post, scope, slugify;
  beforeEach(module('learningYeomanCh3App'));
  PostEditCtrl = null;
  scope = null;
  location = null;
  slugify = null;
  httpBackend = null;
  post = null;
  beforeEach(inject(function($controller, $rootScope, _$httpBackend_, $location, Post, slugifyFilter) {
    scope = $rootScope.$new();
    location = $location;
    post = new Post({
      _id: 1,
      title: 'Test Post',
      tags: ['jasmine', 'karma']
    });
    slugify = slugifyFilter;
    httpBackend = _$httpBackend_;
    scope.post = post;
    httpBackend.when('DELETE', '/api/posts/1').respond({
      _id: 1
    });
    httpBackend.when('PUT', '/api/posts/1').respond({
      _id: 1
    });
    return PostEditCtrl = $controller('PostEditCtrl', {
      $scope: scope,
      $location: location,
      post: post,
      slugifyFilter: slugify
    });
  }));
  it('should have a name on the scope', function() {
    expect(scope.name).toBe('PostEditCtrl');
    return expect(scope.post.title).toEqual('Test Post');
  });
  it('should change location to detail view on cancel', function() {
    scope.cancel();
    return expect(location.path()).toBe('/posts/view/1');
  });
  it('should update the post', function() {
    scope.save();
    httpBackend.flush();
    return expect(location.path()).toBe('/posts/view/1');
  });
  return it('should delete the post', function() {
    location.path('/posts/edit/1');
    scope.remove();
    httpBackend.flush();
    return expect(location.path()).toBe('/posts');
  });
});

/*
//@ sourceMappingURL=post-edit.js.map
*/