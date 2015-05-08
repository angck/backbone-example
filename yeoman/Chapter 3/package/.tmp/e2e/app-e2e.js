/**
 @filename app-e2e.coffee
 This file contains the test for Karma e2e Runner.
*/

describe('Learning Yeoman Chapter 3', function() {
  return it('should display feature and list of features', function() {
    browser().navigateTo('/');
    return expect(repeater('.media').count()).toEqual(3);
  });
});

/*
//@ sourceMappingURL=app-e2e.js.map
*/