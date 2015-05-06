define('view/page', ['backbone'], function(Backbone) {
	return Backbone.View.extend({
		tagName: 'li',
		template: _.template($('#PLTemplate').html()),
		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},
		render: function() {
			console.log(this.$el);
		}
	});
});