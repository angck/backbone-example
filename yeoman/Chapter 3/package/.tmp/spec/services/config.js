'use strict';
describe('Service: config', function() {
  var config;
  beforeEach(module('learningYeomanCh3App'));
  config = {};
  beforeEach(inject(function(_Config_) {
    return config = _Config_;
  }));
  return it('should contain sitetitle and sitedesc', function() {
    expect(!!config).toBe(true);
    expect(config.sitetitle).toBeDefined();
    return expect(config.sitedesc).toBeDefined();
  });
});

/*
//@ sourceMappingURL=config.js.map
*/