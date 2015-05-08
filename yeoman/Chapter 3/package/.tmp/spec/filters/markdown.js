'use strict';
describe('Filter: markdown', function() {
  var markdown;
  beforeEach(module('learningYeomanCh3App'));
  markdown = {};
  beforeEach(inject(function($filter) {
    return markdown = $filter('markdown');
  }));
  it('should return the input converted to HTML', function() {
    var input, output;
    input = '#Heading 1';
    output = '<h1>Heading 1</h1>';
    return expect(markdown(input)).toBe(output);
  });
  return it('should return the input converted to HTML and truncated to length', function() {
    var input, output;
    input = 'This text is **bold**, and this will be truncated.';
    output = '<p>This text is <strong>bold</strong>, and</p>';
    return expect(markdown(input, 26)).toBe(output);
  });
});

/*
//@ sourceMappingURL=markdown.js.map
*/