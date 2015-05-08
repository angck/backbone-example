Ember.Test.JasmineAdapter = Ember.Test.Adapter.extend(
  asyncRunning: false
  asyncStart: ->
    Ember.Test.adapter.asyncRunning = true
    waitsFor Ember.Test.adapter.asyncComplete
    return

  asyncComplete: ->
    not Ember.Test.adapter.asyncRunning

  asyncEnd: ->
    Ember.Test.adapter.asyncRunning = false
    return

  exception: (error) ->
    expect(Ember.inspect(error)).toBeFalsy()
    return
)



#document.write('<style>#ember-testing-container { position: absolute; background: white; bottom: 0; right: 0; width: 800px; height: 500px; overflow: auto; z-index: 9999; border: 5px solid #ccc; } #ember-testing { zoom: 80%; }</style>');

#Set testing to true
Ember.testing = true
#Create a new test adapter
Ember.Test.adapter = Ember.Test.JasmineAdapter.create()

#Inject a test container element
document.write('<div id="ember-app"></div>');

#Set the root element to the test container
LearningYeomanCh5.rootElement = "#ember-app"

#Setup testing
LearningYeomanCh5.setupForTesting()

#Inject helpers
LearningYeomanCh5.injectTestHelpers()

#Set the adapter
LearningYeomanCh5.ApplicationAdapter = DS.FixtureAdapter

Helper = {}

#Check if an element exists
LearningYeomanCh5.exists = (selector) ->
	!!find(selector).length

#Get the trimmed value from element
LearningYeomanCh5.text = (selector) ->
	return $.trim(find(selector).text())