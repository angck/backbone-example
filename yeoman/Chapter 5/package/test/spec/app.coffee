describe 'PostModel', ->
	#store = LearningYeomanCh5.Store.create( revision: 4 )
	postModel = LearningYeomanCh5.Post
	
	it 'title should be a string', ->
		expect(postModel.metaForProperty('title').type).toEqual('string')
	it 'body should be a string', ->
		expect(postModel.metaForProperty('body').type).toEqual('string')
	it 'image should be a string', ->
		expect(postModel.metaForProperty('image').type).toEqual('string')
	it 'published should be a boolean', ->
		expect(postModel.metaForProperty('published').type).toEqual('boolean')
