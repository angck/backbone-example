define('collection/page', ['backbone', 'localforage', 'indexeddb', 'model/page'], function(Backbone, localforage, indexeddb, pageModel) {
	return Backbone.Collection.extend({
		model: pageModel,
		sync: Backbone.localforage.sync('list'),
		getOnePage: function(aid) {
			return this.where({aid: aid});
		},
		removeAll: function() {
			this.reset();
        	localforage.clear();
		},
		comparator: 'aid'
	});
});