define(function() {
	return {
		bg: {
            title: '背景设置',
            content: '<label for="">图片地址：<input type="text" ></label>',
            isMask: 1,
            callback: function(o) {
                console.dir(o);
            }
        },
        music: {
            title: '设置背景音乐',
            content: '<label for="">音乐地址：<input type="text" ></label>',
            isMask: 1,
            callback: function(o) {
                console.dir(o);
            }
        },
        image: {
            title: '添加图片',
            content: '<label for="">图片地址：<input type="text" ></label>',
            isMask: 1,
            callback: function(o) {
                console.dir(o);
            }
        }
	};
});