define('view/nav', ['backbone', 'unit/navDialog'], function(Backbone, Dialog) {
	return Backbone.View.extend({
		el: $('#navigator'),
		template: _.template($('#navTemplate').html()),
		events: {
			'click .dialog-model' : 'dialog'
		},
		initialize: function() {
			this.nav = $('#navigator');
			this.render();
		},
		render: function() {
			this.nav.html(this.template({navList: this.model.toJSON()}));
		},
		dialog: function(e) {
			var target = e.target || e.srcElement,
				element = $(target);
			Dialog.initialize(element.attr('ctype'), this.model);
		}
	});
});