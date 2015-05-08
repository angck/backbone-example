describe "LearningYeomanCh5 Application", ->	
	it 'should display site title, navigation and site copywrite', ->
		visit('/').then ->
			expect(LearningYeomanCh5.text('.brand')).toBe(LearningYeomanCh5.config.sitetitle)
			expect(LearningYeomanCh5.text('footer .pull-left')).toBe(LearningYeomanCh5.config.sitecopy)
			expect(find('.nav li').length).toEqual(LearningYeomanCh5.config.menu.length)

	it "should display jumbotron title, image and body, and list features", ->
		visit('/').then ->
			expect(LearningYeomanCh5.text('.jumbotron h1')).toBe(LearningYeomanCh5.config.feature.title)
			expect(LearningYeomanCh5.text('.jumbotron p')).toBe(LearningYeomanCh5.config.feature.body)
			expect(find('.jumbotron img').attr('src')).toBe(LearningYeomanCh5.config.feature.image)
			expect(find('.feature').length).toBe(3)

