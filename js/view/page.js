define('view/page', ['backbone', 'collection/page'], function(Backbone) {
	return Backbone.View.extend({
		tagName: 'li',
		template: _.template($('#PLTemplate').html()),
		events: {
			'click .destroy': 'deleteItem',
			'click strong': 'dialog'
		},
		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},
		render: function() {
			// build the model localeForage key only for debug purpose
			// at this point this key might not have been set if no sync
			// operation has been made
			this.model.sync._localeForageKeyFn(this.model);
			this.setChecked();
			this.$el.html(this.template({
				aid: this.model.get('aid')
			}));
			return this;
		},
		deleteItem: function(event) {
			event.preventDefault();
			this.model.destroy();
		},
		setChecked: function() {
			this.model.get('checked') && !this.$el.hasClass('current') && this.$el.addClass('current')
		},
		dialog: function() {
			/*!this.model.get('checked') && this.model.save({
				checked: true
			});*/
			this.model.isChecked()
		}
	});
});