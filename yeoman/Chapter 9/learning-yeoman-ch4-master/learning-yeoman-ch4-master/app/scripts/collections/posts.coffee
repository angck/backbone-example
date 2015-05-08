define ['backbone', 'models/post'], (Backbone, PostModel) ->
	Backbone.Collection.extend(
		model: PostModel
		url: ->
			'/api/v2/learning-yeoman-ch3/posts'
		parse: (response) ->
			@trigger('posts:fetch:complete')
			return response
	)