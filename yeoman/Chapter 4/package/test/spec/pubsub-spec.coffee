describe 'App.pubsub', ->
  beforeEach ->
    pubsubSpy = jasmine.createSpy()
    App.pubsub.bind('test:event', pubsubSpy)

  it 'should trigger event handler', ->
    App.pubsub.trigger('test:event')
    expect(pubsubSpy).toHaveBeenCalled()
