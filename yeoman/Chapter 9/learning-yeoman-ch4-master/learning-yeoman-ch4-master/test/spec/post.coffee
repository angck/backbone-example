define(['models/post'],(PostModel) ->
	describe 'PostModel:', ->
		postModel = null
		newModel = null
		extendsSpy = null

		beforeEach ->
			postModel = new PostModel()

			spyOn(window, "__extends").andCallThrough()
			spyOn($, "ajax").andCallFake (options) ->
				options.success()

		xit 'should extend the Backbone.Model class', ->
			expect(window.__extends).toHaveBeenCalled()

		#Default attributes
		it 'should have default attributes', ->
			expect(postModel.get('title')).toEqual('Post Title')
			expect(postModel.get('slug')).toEqual('post-title')
			expect(postModel.get('published')).toEqual(true)
			expect(postModel.get('body')).toEqual('This is an example post with default data.')
			expect(postModel.get('image')).toEqual('//placehold.it/250&text=Image')
			expect(postModel.get('tags')).toEqual(['featured', 'post'])

		#Set Attributes
		it 'should set attributes', ->
			postModel = new PostModel(title: 'NewPost', image: '', tags: 'jasmine')
			expect(postModel.get('title')).toEqual('NewPost')
			expect(postModel.get('image')).toEqual('')
			expect(postModel.get('tags')).toEqual('jasmine')

		#Test attribute validation
		it 'should validate model with no title', ->
			errorSpy = jasmine.createSpy('invalid error callback')
			postModel = new PostModel(title: '', image: '', tags: 'jasmine')
			postModel.on('invalid', errorSpy)
			postModel.save()

			errorArray = errorSpy.mostRecentCall.args
			expect(errorArray).toBeDefined()
			expect(errorArray[1]).toBe('You must provide a title.')

		it 'should validate model min title length', ->
			errorSpy = jasmine.createSpy('invalid error callback')
			postModel = new PostModel(title: 'A', image: '', tags: 'jasmine')
			postModel.on('invalid', errorSpy)
			postModel.save()

			errorArray = errorSpy.mostRecentCall.args
			expect(errorArray).toBeDefined()
			expect(errorArray[1]).toBe('The title must be at least 2 characters.')

		describe 'CRUD', ->
			#Create
			it 'should send a POST', ->
				postModel.save()
				request = $.ajax.mostRecentCall.args[0]
				expect(request.url).toEqual('/api/v2/learning-yeoman-ch3/posts');
				expect(request.type).toEqual('POST')
				
			#Update
			it 'should send a PUT', ->
				newModel = new PostModel(_id: 1, title: 'Jasmine Test', body: 'This was created in a spec')
				newModel.save()
				
				request = $.ajax.mostRecentCall.args[0]
				
				expect(request.url).toEqual('/api/v2/learning-yeoman-ch3/posts/1');
				expect(request.type).toEqual('PUT')

			#Delete
			it 'should send a DELETE', ->
				newModel.destroy()
				
				request = $.ajax.mostRecentCall.args[0]
				
				expect(request.url).toEqual('/api/v2/learning-yeoman-ch3/posts/1');
				expect(request.type).toEqual('DELETE')


)	