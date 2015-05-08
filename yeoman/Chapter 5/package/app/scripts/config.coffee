window.Config =
	baseurl: document.location.origin
	sitetitle: "Learning Yeoman"
	sitedesc: "a starting point for a modern ember.js application."
	sitecopy: "2014 Copywrite"
	version: '0.0.1'
	email: "admin@email.com"
	debug: true	
	feature: 
		image: 'http://goo.gl/ur9Ueu'
		title: 'Chapter 5'
		body: 'A starting point for a modern ember.js application.'

	features: [
		title: 'Yeoman' 
		body: 'Yeoman is a robust and opinionated client-side stack, comprising tools and frameworks that can help developers quickly build beautiful web applications.' 
		image: 'http://goo.gl/W3ZtMx'
	,
		title: 'EmberJS'
		body: 'Ember.js incorporates common idioms so you can focus on what makes your app special, not reinventing the wheel. Ember.js is built for productivity.'
		image: 'http://goo.gl/8bRsMq'
	,
		title: 'Grunt'
		body: 'The Grunt ecosystem is huge and its growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything.' 
		image: 'http://goo.gl/xvqzS6'
	]
	session: 
		authorized: false
		user: null
	menu: [
			title: 'Home', icon: 'home', href:'#/', requireLogin: false
		,
			title: 'About', icon: 'info', href:'#/about', requireLogin: false
		,
			title: 'Posts', icon: 'list', href:'#/posts', requireLogin: false
		]
