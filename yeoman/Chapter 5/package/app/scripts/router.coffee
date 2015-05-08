LearningYeomanCh5.Router.map( ->
	@resource('about')
	@resource('posts', ->
		@resource('post', path: '/:post_id', ->
			@route('edit')
		)
		@route('create')
	)
)