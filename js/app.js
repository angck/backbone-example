/**
 * create by wangzhixiang 2015-04-28
 * require 配置
 */
require.config({
	baseUrl: './js/',
	paths: {
		jquery: 'lib/jquery-1.7.2.min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min',
		template: 'lib/template-native'
	},
	shim: {
		'lib/json2': {
			deps: [],
			exports: 'JSON'
		}
	}
});

require(['jquery', 'model/navigator'], function($, NavModel) {
	//console.log(JSON.parse);
});