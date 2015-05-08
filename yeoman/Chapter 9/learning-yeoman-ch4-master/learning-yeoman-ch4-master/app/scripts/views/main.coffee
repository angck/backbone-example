define ['jquery', 'underscore', 'backbone','templates'], ($, _, Backbone, JST) ->
	class MainView extends Backbone.View
		template: JST['app/scripts/templates/main.hbs']
		initialize: () ->
			#console.log('initialize MainView', @)
		render: () ->
			@$el.html(@template(@model))
			return @