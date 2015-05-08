define ['backbone'], (Backbone) ->
	Backbone.Model.extend(
		idAttribute: '_id'
		urlRoot: '/api/v2/learning-yeoman-ch3/posts'
		defaults:
			title: 'Post Title'
			slug: 'post-title'
			image: '//placehold.it/250&text=Image'
			body: 'This is an example post with default data.'
			tags: ['featured', 'post']
			created: null
			modified: null
			published: true
		initialize: ->
			#console.log @
		validate: (attrs, options)->
			if attrs.title is ''
				'You must provide a title.'
			else if attrs.title.length < 2
				'The title must be at least 2 characters.'
	)