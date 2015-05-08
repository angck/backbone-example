LearningYeomanCh5.PostEditRoute = Ember.Route.extend(
  model: (params) ->
    @get('store').find('post', @modelFor('post').id)
)