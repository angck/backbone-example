LearningYeomanCh5.PostEditController = Ember.ObjectController.extend(
	needs: 'post'
	actions:
		save: ->
			@get('model').save()
			@transitionToRoute 'posts'
		destroy: ->
			@get('model').deleteRecord()
			@transitionToRoute 'posts'
		create: ->
			@store.createRecord('post', {
				title: 'New Post'
				body: 'This is a new post'
				image: '//placehold.it/225'
			})
)