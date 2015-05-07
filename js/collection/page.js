define('collection/page', ['backbone', 'localforage', 'indexeddb', 'model/page'], function(Backbone, localforage, indexeddb, pageModel) {
	return Backbone.Collection.extend({
		model: pageModel,
		sync: Backbone.localforage.sync('h5Custom'),
		getOnePage: function(aid) {
			return this.where({aid: aid});
		},
		comparator: 'aid'
	});
});