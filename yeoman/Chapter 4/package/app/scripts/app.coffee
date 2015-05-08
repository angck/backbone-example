define([
	'jquery'
	'underscore'
	'backbone'
	'handlebars'
	'templates'
	], ($, _, Backbone, Handlebars, JST) ->

	App = App or {}
	App.Config or (App.Config = {})
	App.Models or (App.Models = {})
	App.Collections or (App.Collections = {})
	App.Routers or (App.Routers = {})
	App.Views or (App.Views = {})
	App.Templates or (App.Templates = {})

	App.bootstrap =  (config, router) ->
		@config = config if config
		if router
			@router = new router()
			Backbone.history.start()
		return @

	App.log = () ->
		console?.log(arguments) if @debug

	#Pub/Sub with Backbone.Events
	App.pubsub = _.extend({}, Backbone.Events)
	App.pubsub.bind('fetch:posts', (data) ->
		alert data
	)

	return App
)