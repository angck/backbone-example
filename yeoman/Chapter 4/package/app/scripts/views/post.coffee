define ['jquery', 'underscore', 'backbone', 'templates'], ($, _, Backbone, JST) ->
	class PostView extends Backbone.View
		className: 'post'
		template: JST['app/scripts/templates/post.hbs']
		#Events listening for
		events: 
			'click .media': 'itemClickHandler'
			'click .edit': 'editItemHandler'
			'click .delete' : 'deleteItemHandler'
		#Setup event binding
		initialize: () ->
			_.bindAll(@, "render")
			#console.log('PostView initialize:', @)
			@model.bind("change", @render, @)
			@model.bind("destroy", @close, @)
		
		#Handle injecting template
		render: () ->
			@$el.html(@template(@model.toJSON()))
		
		#Handle when a item is clicked
		itemClickHandler: (e) ->
			e.preventDefault()
			Backbone.trigger('post:click', @)
			Backbone.history.navigate('#/posts/'+@model.id)
		
		editItemHandler: (e) ->
			Backbone.trigger('post:edit', @)
			#console.log(@)
		
		deleteItemHandler: (e) ->
			e.preventDefault()
			confirmDelete = confirm('Are you sure you want to delete this?')
			if confirmDelete
				Backbone.trigger('post:delete', @model) 
				@model.destroy(success: ()->
					Backbone.history.navigate('#/posts')
				)
			#console.warn(@)
		
		close: () ->
			@unbind()
	
