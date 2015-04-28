define(['backbone'], function() {
	var _navData = [
		{type: 1, className: 'text', text: '文本'},
		{type: 2, className: 'bg', text: '背景'},
		{type: 3, className: 'music', text: '音乐'},
		{type: 4, className: 'vedio', text: '视频'},
		{type: 5, className: 'image', text: '图片'},
		{type: 6, className: 'textarea', text: '输入框'},
		{type: 7, className: 'button', text: '按钮'},
		{type: 8, className: 'images', text: '图集'},
		{type: 9, className: 'phone', text: '电话'},
		{type: 10, className: 'contact', text: '联系人'}
	];
	return Backbone.Model.extend({
		defaults: {
			data: _navData
		}
	});
});