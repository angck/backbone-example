define ['jquery', 'backbone', 'templates'], ($, Backbone, JST) ->
	Backbone.View.extend(
		template: JST['app/scripts/templates/about.hbs']
		initialize: () ->
			#console.log('initialize AboutView', @)
		render: () ->
			@$el.html(@template(title: 'About'))
			return @
	)