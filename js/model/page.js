define('model/page', ['backbone', 'localforage', 'indexeddb'], function(Backbone, localforage, indexeddb) {
	return Backbone.Model.extend({
		sync: Backbone.localforage.sync('item'),
		defaults: {
			aid: 1,
			backgroundColor: '',
			backgroundImage: '',
			checked: false
		},
		isChecked: function() {
			return this.get('checked');
		}
	});
});