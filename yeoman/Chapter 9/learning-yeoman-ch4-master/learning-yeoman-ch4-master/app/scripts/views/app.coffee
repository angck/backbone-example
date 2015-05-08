define [
	'jquery'
	'underscore'
	'backbone'
	'templates'
], ($, _, Backbone, JST) ->

	class AppView extends Backbone.View
		template: JST['app/scripts/templates/app.hbs']
		initialize : () ->
			@render()
			return @
		render: () ->
			@$el.html(@template(@model))
			return @