define [
	'backbone'
	'config'
	'views/app'
	'views/main'
	'views/about'
	'views/posts'
	'views/post'
	'views/post-detail'
	'views/post-form'
	'models/post'
], (Backbone, Config, AppView, MainView, AboutView, PostsView, PostView, PostDetailView, PostFormView, PostModel) ->
	Backbone.Router.extend(
		currentView: null
		childViews: {}
		routes:
			'': 'index'
			'index': 'index'
			'about': 'about'
			'posts': 'posts'
			'posts/new': 'postNew'
			'posts/:id': 'postDetail'
			'posts/:id/edit': 'postEdit'
		index: () ->
			#console.log('#/index route')
			App = new AppView(el: '.container', model: Config)
			@showView(new MainView(el: '.content', model: Config))

		about: () ->
			#console.log('#/about route')
			@showView(new AboutView(el: '.content'))

		posts: () ->
			#console.log('posts view')
			@showView(new PostsView(el: '.content'))

		postDetail: (id) ->
			post = new PostModel(_id: id)
			#console.log('show post detail', post)
			@showView(new PostDetailView(el: '.content', model: post))

		postEdit: (id) ->
			post = new PostModel(_id: id)
			#console.log('show post edit', post)
			@showView(new PostFormView(el: '.content', model: post))

		postNew: () ->
			#console.log('show post form')
			@showView(new PostFormView(el: '.content'))

		showView: (view) ->
			#@childViews[view.cid] = view
			@currentView.close() if @currentView
			@currentView = view
			@currentView.render()
			#console.log('App.showView', @)
	)