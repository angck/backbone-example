'use strict';
describe('Service: Post', function() {
  var Post, httpBackend, mockData;
  beforeEach(module('learningYeomanCh3App'));
  Post = {};
  httpBackend = null;
  mockData = [
    {
      _id: 1
    }, {
      _id: 2
    }, {
      _id: 3
    }
  ];
  beforeEach(inject(function(_$httpBackend_, _Post_) {
    Post = _Post_;
    return httpBackend = _$httpBackend_;
  }));
  return it('should fetch list of posts', function() {
    var posts, promise;
    httpBackend.expectGET('/api/posts').respond(mockData);
    posts = null;
    promise = Post.query().$promise;
    promise.then(function(data) {
      return posts = data;
    });
    expect(posts).toBeNull();
    httpBackend.flush();
    return expect(posts.length).toEqual(3);
  });
});

/*
//@ sourceMappingURL=post.js.map
*/