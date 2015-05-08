'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var LearningYeomanCh6Generator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous LearningYeomanCh6 generator!'));

	this.prompts = [
		{
			type: 'input',
			name: 'siteTitle',
			message: 'What is the name of your site',
			default: 'My Site'
		},
		{
			type: 'input',
			name: 'siteDesc',
			message: 'What is the site description?',
			default: 'A modern site built with a Yeoman Generator.'
		},
		{
			type: 'input',
			name: 'featureTitle',
			message: 'What is the feature?',
			default: 'Modern Site'
		},
		{
			type: 'input',
			name: 'featureBody',
			message: 'The feature description?',
			default: 'A modern site using modern tools & technologies.'
		},
		{
			type: 'input',
			name: 'featureImage',
			message: 'The feature image?',
			default: 'http://goo.gl/SYjnUf'
		}
	];
	this.prompt(this.prompts, (function (props) {
		this.siteTitle = props.siteTitle;
		this.siteDesc = props.siteDesc;
		this.featureTitle = props.featureTitle;
		this.featureBody = props.featureBody;
		this.featureImage = props.featureImage;
		done();
	}).bind(this));
  },

  app: function () {
		this.mkdir('app');
		this.mkdir('app/images');
		this.mkdir('app/scripts');
		this.mkdir('app/styles');
		this.mkdir('app/pages');
		
		this.copy('_index.html', 'app/index.html');
	//	this.copy('_main.html', 'app/pages/main.html');
		this.copy('_main.js', 'app/scripts/main.js');
		this.copy('_main.css', 'app/styles/main.css');
  },

  projectfiles: function () {
	  this.copy('_package.json', 'package.json');
		this.copy('_Gruntfile.js', 'Gruntfile.js');

		// Copy all of the bower specific files.
		this.copy('bowerrc', '.bowerrc');
		this.copy('_bower.json', 'bower.json');

		// Copy all files that handle code editing.
		this.copy('editorconfig', '.editorconfig');
		this.copy('jshintrc', '.jshintrc');

		// Copy all files that handle git repositorys
		this.copy('gitignore', '.gitignore');
		this.copy('gitattributes', '.gitattributes');

		// Copy files for Travis CI.
		this.copy('travis.yml', '.travis.yml');
  },
  
  bowerInstaller: function () {
		if (this.options['skip-install'] !== true) {
			this.bowerInstall(['jquery', 'handlebars', 'bootstrap'], {
				save: true
			});
		}
	}
});

module.exports = LearningYeomanCh6Generator;
