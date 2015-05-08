define(['collections/posts'],(PostsCollection) ->
	postsCollection = null
	
	describe 'Post Collection:', ->
		beforeEach ->
			postsCollection = new PostsCollection()
			spyOn($, "ajax").andCallFake (options) -> options.success()
			

		it 'should add a model as an object to the collection', ->
			expect(postsCollection.length).toBe(0)
			postsCollection.add({title: 'New Post', body: 'This is the contents.'})
			expect(postsCollection.length).toBe(1)

		it 'should add models as an array to the collection', ->
			expect(postsCollection.length).toBe(0)
			postsCollection.add([
				{title: 'New Post 1', body: 'This is the contents.'},
				{title: 'New Post 2', body: 'This is the contents.'}
			])
			expect(postsCollection.length).toBe(2)

		xit 'should send a GET request to correct URL', ->
			postsCollection.fetch()
			request = $.ajax.mostRecentCall.args[0]
			expect(request.url).toEqual('/api/v2/learning-yeoman-ch3/posts');
			expect(request.type).toEqual('GET')
			

)	