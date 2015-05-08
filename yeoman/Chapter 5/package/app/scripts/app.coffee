require 'scripts/config'

LearningYeomanCh5 = window.LearningYeomanCh5 = Ember.Application.create(
	config: window.Config
)

# Order and include as you please.
require 'scripts/controllers/*'
require 'scripts/store'
require 'scripts/models/*'
require 'scripts/routes/*'
require 'scripts/views/*'
require 'scripts/router'

#Markdown helper
Ember.Handlebars.helper "format-markdown", (input) ->
	new Handlebars.SafeString(markdown.toHTML(input))

