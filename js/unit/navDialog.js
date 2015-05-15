define(function(require, exports, module){
    var Dialog = require('unit/dialog');
    var template = require('unit/navTemplate');
    
    exports.initialize = function(type) {
        template[type] && new Dialog(template[type]);
        if(type == 'text') {
            var element = $('<div class="test">填写内容</div>');
            $('.appContentView').append(element);
        }
    };
});