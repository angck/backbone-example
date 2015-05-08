define(['jquery', 'underscore', 'backbone', 'routes/app'], ($, _, Backbone, AppRouter) ->
	router = null
	routerSpy = null
	navigate = null

	describe 'AppRouter:', ->
		beforeEach ->
			router = new AppRouter()
			routerSpy = jasmine.createSpy()

			navigate = (route) ->
				router.bind("route:#{route}", routerSpy)
				router.navigate(route, true)
				routerSpy.wasCalled

			try
				Backbone.history.start(slient: true, pushState: false)
				router.navigate('_SpecRunner.html')
			catch error
				#console.log error.message

		afterEach ->
			router.navigate('_SpecRunner.html')

		it 'should have the correct # of routes', ->
			expect(_.size(router.routes)).toBeGreaterThan 6

		it 'should handle index route', ->
			expect(navigate('index')).toBe(true)

		it 'should handle about route', ->
			expect(navigate('about')).toBe(true)

		it 'should handle posts route', ->
			expect(navigate('posts')).toBe(true)

		it 'should not handle unknown route', ->
			router.bind('route:route-doesnt-exist', routerSpy)
			router.navigate('#route-doesnt-exist', true)
			expect(routerSpy.wasCalled).toBe(false)
)