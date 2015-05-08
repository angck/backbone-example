define ['jquery', 'underscore', 'backbone','templates', 'collections/posts', 'views/post'], ($, _, Backbone, JST, PostsCollection, PostView) ->
	class PostsView extends Backbone.View
		template: JST['app/scripts/templates/posts.hbs']
		initialize: () ->
			_.bindAll(@, "render")
			@collection = new PostsCollection()
			@collection.fetch()
			@collection.bind('posts:fetch:complete', @render, @)
			@childViews = []
			@listenTo(@collection, 'add', @renderOne)
			@listenTo(@collection, 'reset', @renderAll)
		
		render: () ->
			#@$el.html(@template(@model.toJSON())
			@$el.html(@template())
			return @
		
		renderOne: (item) ->
			#Create new list item view passing in a single model
			itemView = new PostView(model: item)
			#Store a reference to the view by adding it to the views child-views
			@childViews.push(itemView)
			#Append the item view to this view element by calling the render method.
			@$el.append(itemView.render())
		
		#Render all
		renderAll: () ->
			@collection.each(@renderOne, @)
		
		#Cleanup child views when closed
		onClose: () ->
			_.each(@childViews, (view)->
				view.remove()
			)
	
