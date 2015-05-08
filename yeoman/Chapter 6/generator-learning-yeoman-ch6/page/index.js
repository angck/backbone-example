'use strict';
var util = require( 'util' );
var yeoman = require( 'yeoman-generator' );

var PageGenerator = yeoman.generators.NamedBase.extend( {
	//init - Initialize sub-generator
	init: function () {
		if (this.name) {
			console.log( 'You called the page sub-generator with the argument ' + this.name + '.' );
		} else {
			throw new Error( 'You must provide a page name!' );
		}
	},
	//files - Write the template to the projects app directory file
	files: function () {
		this.copy( '_page.html', 'app/pages/' + this.name + '.html' );
	},
	//Handle appending a link to the index.html pages .nav element
	appendLink: function () {
		var htmlLink = '<li><a href="#/' + this.name + '">' + this.name + '</a></li>';
		this.appendToFile( 'app/index.html', 'ul.nav', htmlLink );
	}
} );

module.exports = PageGenerator;