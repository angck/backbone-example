define('view/page', ['backbone', 'collection/page'], function(Backbone) {
	return Backbone.View.extend({
		tagName: 'li',
		template: _.template($('#PLTemplate').html()),
		events: {
			'click .destroy': 'deleteItem',
			'click strong': 'editElement'
		},
		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},
		render: function() {
			// build the model localeForage key only for debug purpose
			// at this point this key might not have been set if no sync
			// operation has been made
			// console.log(this.model.get('aid'));
			this.model.sync._localeForageKeyFn(this.model);
			this.setChecked();
			this.$el.html(this.template({
				aid: this.model.get('aid'),
				checked: this.model.get('checked')
			}));
			return this;
		},
		deleteItem: function(event) {
			event.preventDefault();
			this.model.destroy();
		},
		setChecked: function() {
			this.model.isChecked() && !this.$el.hasClass('current') && this.$el.addClass('current')
		},
		editElement: function() {
			// console.log('This is checked');
			this.model.setCheck();
		}
	});
});