define('model/page', ['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		defaults: {
			aid: 1,
			backgroundColor: '',
			backgroundImage: '',
			checked: false
		}
	});
});