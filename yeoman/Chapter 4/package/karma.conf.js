// Karma configuration
// Generated on Sun Feb 23 2014 17:14:52 GMT-0800 (PST)

module.exports = function (config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '.',


		// frameworks to use
		frameworks: ['jasmine', 'requirejs'],


		// list of files / patterns to load in the browser
		files: [
			{pattern: 'app/bower_components/**/*.js', included: false},
			{pattern: '.tmp/scripts/**/*.js', included: false},
			{pattern: '.tmp/spec/**/*.js', included: false},
			{pattern: '.tmp/scripts/config.js', included: true},
			{pattern: 'test/test-main.js', included: true}
		],


		// list of files to exclude
		exclude: [
			'.tmp/scripts/main.js',
			//'.tmp/scripts/templates.js',
			'app/bower_components/jasmine-jquery/spec'
		],


		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress', 'coverage'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,
		plugins: [
			'karma-*'
		],


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes

		preprocessors: {
			//'app/scripts/**/*.coffee': ['coffee'],
			//'test/spec/**/*.coffee': ['coffee'],
			'.tmp/scripts/**/*.js': ['coverage']
		},

		coffeePreprocessor: {
			// options passed to the coffee compiler
			options: {
				bare: true,
				sourceMap: false
			},
			// transforming the filenames
			transformPath: function (path) {
				return path.replace(/\.coffee$/, '.js');
			}
		},


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - PhantomJS
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		browsers: ['PhantomJS'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,
		autoWatch: false,
		client: {
			captureConsole: false,
			useIframe: false
		},

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true
	});
};
