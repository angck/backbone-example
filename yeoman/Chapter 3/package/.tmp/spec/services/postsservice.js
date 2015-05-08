'use strict';
describe('Service: PostsService', function() {
  var PostsService, httpBackend, mockData, posts, route;
  beforeEach(module('learningYeomanCh3App'));
  PostsService = {};
  httpBackend = null;
  posts = null;
  mockData = [
    {
      _id: 1
    }, {
      _id: 2
    }, {
      _id: 3
    }
  ];
  route = null;
  beforeEach(inject(function(_PostsService_, _$httpBackend_, _$route_) {
    PostsService = _PostsService_;
    httpBackend = _$httpBackend_;
    route - _$route_;
    return httpBackend.whenGET('views/main.html').respond(mockData);
  }));
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    return httpBackend.verifyNoOutstandingRequest();
  });
  it('should fetch list of posts and resolve promise on success', function() {
    var promise;
    httpBackend.expectGET('/api/posts').respond(200, mockData);
    posts = null;
    promise = PostsService.query();
    promise.then(function(data) {
      return posts = data;
    });
    expect(posts).toBeNull();
    httpBackend.flush();
    return expect(posts.length).toEqual(3);
  });
  it('should fetch list of posts and reject promise on error', function() {
    var promise;
    httpBackend.expectGET('/api/posts').respond(404, 'Error');
    posts = null;
    promise = PostsService.query();
    promise.then(function(data) {
      return posts = data;
    }, function(e) {
      return posts = e;
    });
    expect(posts).toBeNull();
    httpBackend.flush();
    return expect(posts.data).toBe('Error');
  });
  xit('should fetch a post and resolve promise on success', function() {
    var post, promise;
    httpBackend.expectGET('/api/posts/1').respond(200, {
      id: 1,
      title: 'Post'
    });
    route.params.id = 1;
    post = null;
    promise = PostsService.get(1);
    promise.then(function(data) {
      return post = data;
    });
    expect(post).toBeNull();
    httpBackend.flush();
    return expect(post.id).toEqual(1);
  });
  return xit('should fetch a post and reject promise on error', function() {
    var post, promise;
    httpBackend.expectGET('/api/posts/1').respond(404, 'Error');
    post = null;
    promise = PostsService.get(1);
    promise.then(function(data) {
      return post = data;
    }, function(e) {
      return post = e;
    });
    expect(post).toBeNull();
    httpBackend.flush();
    return expect(post.data).toBe('Error');
  });
});

/*
//@ sourceMappingURL=postsservice.js.map
*/