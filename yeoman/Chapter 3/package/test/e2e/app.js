describe('Chapter3 e2e:', function() {
	beforeEach(function() {
		browser.get('http://localhost:9000');
	});
	it('should have site title', function() {
		var siteTitle;
		siteTitle = element(protractor.By.binding('App.sitetitle'));
		expect(siteTitle.getText()).toEqual('Learning Yeoman');
	});
});