define('model/page', ['backbone', 'localforage', 'indexeddb'], function(Backbone, localforage, indexeddb) {
	return Backbone.Model.extend({
		sync: Backbone.localforage.sync('item'),
		defaults: {
			aid: 1,
			backgroundImage: '',
			checked: false
		},
		isChecked: function() {
			return this.get('checked');
		},
		setCheck: function() {
			this.save({checked: true});
		},
		unChecked: function() {
			this.save({checked: false});
		}
	});
});