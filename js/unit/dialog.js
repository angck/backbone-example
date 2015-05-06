define(['jquery'], function($) {
    function Dialog(option) {
        var defaults = {
            id: '',
            title: '',
            content: '',
            mask: 0,
            opacity: 0.6,
            zIndex: 9999
        };
        this.config = $.extend(defaults, option);
    }

    Dialog.prototype = {
        init: function() {

        }
    };
});
