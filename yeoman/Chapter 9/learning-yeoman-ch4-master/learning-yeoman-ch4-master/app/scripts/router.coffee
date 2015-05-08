# Create an object that will be used as the prototype for our master router
loadModule = (moduleName) ->
  
  #the module needs to be loaded
  loader.loadModule moduleName, ->
    
    # Module is loaded, reloading the route
    # will trigger callback in the module's
    # router
    Backbone.history.loadUrl()

handlers = routes: {}
_.each config.modules, (module, moduleName) ->
  if module.routes
    callbackName = "loader_" + moduleName
    
    # Generate a loading callback for the module
    handlers[callbackName] = ->
      if loader.isLoaded(moduleName)
        
        # Do nothing if the module is loaded
        return
      else
        loadModule moduleName
  
  # Each route in the module should trigger the loading callback
  _.each module.routes, (methodName, route) ->
    handlers.routes[route] = callbackName



# Create the master router
window.router = new Backbone.Router.extend(handlers)