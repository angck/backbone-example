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
			console.log(this.model.isChecked());
			this.model.isChecked() && !this.$el.hasClass('current') && this.$el.addClass('current')
		},
		dialog: function() {
			var self = this;
			if(self.model.isChecked()) return;
			this.model.collection.each(function(item, i, models){
				if(item.id != self.model.id) {
					item.isChecked() && item.unChecked()
				} else {
					!self.model.isChecked() && self.model.setCheck()
				}
			});
		}
	});
});