var tests = Object.keys(window.__karma__.files).filter(function (file) {
	var isTest = /.tmp\/spec.*.js/.test(file);
	//console.log('File: ' + file, 'isSpec: ' + isTest);

	if (isTest) {
		return file;
	}
});


requirejs.config({
	baseUrl: '/base/.tmp/scripts',
	shim: {
	    "underscore": {
	      "exports": "_"
	    },
	    "backbone": {
	      "deps": [
	        "underscore",
	        "jquery"
	      ],
	      "exports": "Backbone"
	    },
	    "handlebars": {
	      "exports": "Handlebars"
	    }
	  },
	  paths: {
	    "jquery": "../../app/bower_components/jquery/jquery",
	    "backbone": "../../app/bower_components/backbone/backbone",
	    "underscore": "../../app/bower_components/underscore/underscore",
	    "handlebars": "../../app/bower_components/handlebars/handlebars",
	    "app": "app"
	  },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
