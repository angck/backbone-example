require.config({
	baseUrl : '.tmp/scripts',
	shim : {
		underscore : {
			exports : '_'
		},
		backbone : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		},
		handlebars : {
			exports : 'Handlebars'
		}
	},
	paths : {
		jquery : '../../../app/bower_components/jquery/dist/jquery',
		backbone : '../../../app/bower_components/backbone/backbone',
		underscore : '../..../app/bower_components/underscore/underscore',
		handlebars : '../../../app/bower_components/handlebars/handlebars',
		config : 'config',
		app : 'app'
	}
});