require.config({
	baseUrl: './js/',
	paths: {
		jquery: 'lib/jquery-1.7.2.min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min',
		localStorage: 'lib/backbone.localStorage',
		localforage: 'lib/localforage',
		indexeddb: 'lib/backbone.indexeddb',
		JSON: 'lib/json2',
		template: 'lib/template-native'
	},
	map: {
		'lib/json2': {
			deps: [],
			exports: 'JSON'
		}
	}
});

require(['backbone', 'view/nav', 'collection/page', 'view/pages'], function(Backbone, ViewNav, CollectionPage, ViewPages) {
	// 创建管理导航
	var navList = [
			{type: 'text', className: 'text', text: '文本'},
			{type: 'bg', className: 'bg', text: '背景'},
			{type: 'music', className: 'music', text: '音乐'},
			{type: 'vedio', className: 'vedio', text: '视频'},
			{type: 'image', className: 'image', text: '图片'},
			{type: 'textarea', className: 'textarea', text: '输入框'},
			{type: 'button', className: 'button', text: '按钮'},
			{type: 'phone', className: 'phone', text: '电话'},
			{type: 'contact', className: 'contact', text: '联系人'}
		],
		navView = new ViewNav({
			model: new Backbone.Model(navList)
		});

	var collPage = new CollectionPage;

	var pageList = new ViewPages({
		model: collPage
	});

	console.log(pageList.setUnChecked());
});