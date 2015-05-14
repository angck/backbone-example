define('model/element', ['backbone', 'localforage', 'indexeddb'],function(Backbone, localforage, indexeddb) {
	return Backbone.Model.extend({
		sync: Backbone.localforage.sync('element'),
		defaults: {
			aid: 1,
			className: 'element',
			styleSheets: '',
			animate: ''
			element: '这里是内容区域';
		}
	});
});