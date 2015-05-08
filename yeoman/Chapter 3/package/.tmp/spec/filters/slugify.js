'use strict';
describe('Filter: slugify', function() {
  var slugify;
  beforeEach(module('learningYeomanCh3App'));
  slugify = {};
  beforeEach(inject(function($filter) {
    return slugify = $filter('slugify');
  }));
  it('should make "a string like this" to "a-string-like-this"', function() {
    var input, output;
    input = 'a string like this';
    output = 'a-string-like-this';
    return expect(slugify(input)).toBe(output);
  });
  return it('should make "A String Like This" to "a-string-like-this"', function() {
    var input, output;
    input = 'a string like this';
    output = 'a-string-like-this';
    return expect(slugify(input, true)).toBe(output);
  });
});

/*
//@ sourceMappingURL=slugify.js.map
*/