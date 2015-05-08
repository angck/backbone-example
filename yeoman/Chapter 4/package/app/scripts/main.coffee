#/*global require*/
'use strict'

require.config
  shim:
    underscore:
      exports: '_'
    backbone:
      deps: [
        'underscore'
        'jquery'
      ]
      exports: 'Backbone'
    handlebars:
      exports: 'Handlebars'
  paths:
    jquery: '../bower_components/jquery/dist/jquery'
    backbone: '../bower_components/backbone/backbone'
    underscore: '../bower_components/underscore/underscore'
    handlebars: '../bower_components/handlebars/handlebars'
require [
	'backbone'
	'app'
	'routes/app'
], (Backbone, App, AppRouter) ->

	Backbone.View::close = ->
		@unbind()
		@onClose() if @onClose

	App.router = new AppRouter()
	window.App = App

	Backbone.history.start()