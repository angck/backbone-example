define(function(require, exports, module){
    var Dialog = require('unit/dialog');

    exports.initialize = function(type, model) {

        switch (type) {
            case 'text':
                var element = $('<div class="test">填写内容</div>');
                $('.appContentView').append(element);
                break;
            case 'bg':
                new Dialog({
                    title: '背景设置',
                    content: '<label for="">图片地址：<input type="text" ></label>',
                    isMask: 1,
                    callback: function(o) {
                        if(o.returnVal) model.trigger(type);
                    }
                });
                break;
            case 'music':
                new Dialog({
                    title: '设置背景音乐',
                    content: '<label for="">音乐地址：<input type="text" ></label>',
                    isMask: 1,
                    callback: function(o) {
                        console.dir(o);
                    }
                });
                break;
            case 'image':
                new Dialog({
                    title: '添加图片',
                    content: '<label for="">图片地址：<input type="text" ></label>',
                    isMask: 1,
                    callback: function(o) {
                        console.dir(o);
                    }
                });
                break;
            default:
                break;
        }

    };
});