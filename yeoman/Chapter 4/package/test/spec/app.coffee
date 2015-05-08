define(['jquery', 'backbone', 'app', 'config', 'views/app'], ($, Backbone, App, Config, AppView) ->
	router = null
	routerSpy = null
	pubsubSpy = null
	fixture = $('<div id="fixture" class="page"></div>')
	testApp = App.bootstrap()
	testAppView = null

	describe "My Backbone Project", ->

		describe 'App Namespace', ->

			it 'should have Collections property', ->
				expect( testApp.Collections ).toBeDefined

			it 'should have Models property', ->
				expect( testApp.Models ).toBeDefined

			it 'should have Routers property', ->
				expect( testApp.Routers ).toBeDefined

			it 'should have Views property', ->
				expect( testApp.Views ).toBeDefined

		describe 'App.pubsub', ->
			beforeEach ->
				pubsubSpy = jasmine.createSpy()
				App.pubsub.bind('test:event', pubsubSpy)

			it 'should trigger event handler', ->
				App.pubsub.trigger('test:event')
				expect(pubsubSpy).toHaveBeenCalled()

		describe 'AppView', ->
			beforeEach ->
				$('body').append(fixture)
				testAppView = new AppView(el: '.page', model: Config).render()
			afterEach ->
				fixture.remove()
			it 'should have a header, content, and footer element', ->
				expect(testAppView.$el.find('header').length).toBe(1)
)