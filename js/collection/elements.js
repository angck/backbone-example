define('collection/elements', ['backbone', 'localforage', 'indexeddb', 'model/element'], function(Backbone, localforage, indexeddb, Element) {
	return Backbone.Collection.extend({
		model: Element,
		sync: Backbone.localforage.sync('elements'),
		
	});
});