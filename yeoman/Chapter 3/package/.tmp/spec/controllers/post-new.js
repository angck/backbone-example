'use strict';
describe('Controller: PostNewCtrl', function() {
  var PostNewCtrl, httpBackend, location, post, scope;
  beforeEach(module('learningYeomanCh3App'));
  PostNewCtrl = {};
  scope = {};
  location = null;
  post = {
    _id: null,
    title: 'Test Post',
    tags: ['jasmine', 'karma']
  };
  httpBackend = null;
  beforeEach(inject(function($controller, $rootScope, _$httpBackend_, $location, Post) {
    scope = $rootScope.$new();
    location = $location;
    httpBackend = _$httpBackend_;
    scope.post = post;
    return PostNewCtrl = $controller('PostNewCtrl', {
      $scope: scope,
      $location: location,
      Post: Post
    });
  }));
  it('should have a name on the scope', function() {
    return expect(scope.name).toBe('PostNewCtrl');
  });
  return it('should create a new post', function() {
    httpBackend.expectPOST('/api/posts', post).respond({
      _id: 1
    });
    scope.save(post);
    httpBackend.flush();
    return expect(location.path()).toBe('/posts');
  });
});

/*
//@ sourceMappingURL=post-new.js.map
*/