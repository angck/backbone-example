define ['jquery', 'underscore', 'backbone', 'templates'], ($, _, Backbone, JST) ->
	class PostDetailView extends Backbone.View
		template: JST['app/scripts/templates/post-detail.hbs']
		#Events listening for
		events: 
			'click .edit': 'editItemHandler'
			'click .delete' : 'deleteItemHandler'
		#Setup event binding
		initialize: () ->
			_.bindAll(@, "render")
			#console.log('PostDetailView initialize:', @)
			#@model.fetch(dataType: 'jsonp') if @model.id
			@model.fetch() if @model.id
			@model.bind("change", @render, @)
			@model.bind("destroy", @close, @)
		
		#Handle injecting template
		render: () ->
			@$el.html(@template(@model.toJSON()))
		
		editItemHandler: (e) ->
			Backbone.trigger('post:edit', @)
			#console.warn(@)
		
		deleteItemHandler: (e) ->
			e.preventDefault()
			if confirm('Are you sure you want to delete this?')
				Backbone.trigger('post:delete', @model) 
				@model.destroy(success: ()->
					Backbone.history.navigate('#/posts')
				)
			#console.warn(@)

		#Cleanup child views when closed
		onClose: () ->

	
