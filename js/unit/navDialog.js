define(function(require, exports, module){
    var Dialog = require('unit/dialog');
    var template = require('unit/navTemplate');

    function selectText(element) {
        if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(element);
            window.getSelection().addRange(range);
        }
    }

    exports.initialize = function(type) {
        template[type] && new Dialog(template[type]);
        if(type == 'text') {
            var element = $('<div class="test" contenteditable="true">填写内容</div>');
            $('.appContentView').append(element);
            
        }
    };
});