define(() ->
	return window.Config =
		baseurl: document.location.origin
		sitetitle: 'Learning Yeoman'
		sitedesc: "The tutorial for Chapter 4"
		version: '0.0.1'
		email: 'admin@email.com'
		debug: true
		sitecopy: '2014 Copywrite'
		feature:
			image: 'http://goo.gl/fOq55C'
			title: 'Chapter 4'
			body: 'A starting point for a modern backbone.js application.'
		features: [
			title: 'CoffeeScript'
			body: 'CoffeeScript is a little language that compiles into JavaScript...'
			image: 'http://goo.gl/DTiliC'
		,
			title: 'BackboneJS'
			body: 'Backbone.js gives structure to web applications by providing...'
			image: 'http://goo.gl/94Pe0E'
		,
			title: 'RequireJS'
			body: 'RequireJS is a JavaScript file and module loader...'
			image: 'http://goo.gl/GOc6Mr'
		]
		menu: [
			title: 'Home'
			href: '/'
		,
			title: 'About'
			href: '/about'
		,
			title: 'Posts'
			href: '/posts'
		]
)