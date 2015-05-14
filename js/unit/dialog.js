define('unit/dialog', ['jquery', 'underscore'], function($, _) {

    function Dialog(options) {
        var defaults = {
            title: '标题',
            content: '内容',
            opacity: .6,
            isMask: false,
            callback: function(o) {},
            zIndex: 999
        }
        this.options = $.extend(defaults, options);
        this.initialize();
    }

    Dialog.prototype = {
        returnVal: 0,
        _setTemplate: function() {
            var template = '<div class="dialog" style="z-index:' + this.options.zIndex + ';">' +
                '<div class="head"><%=title%><a class="closeDialog" href="javascript:void(0);">×</a></div>' +
                '<div class="content"><%=content%></div>' +
                '<div class="buttonGroup"><a class="confirm" href="javascript:void(0);">确定</a><a class="cancel" href="javascript:void(0);">取消</a></div>' +
                '</div>'
            return _.template(template)(this.options);
        },
        initialize: function() {
            var _self = this;
            var element = $(this._setTemplate());
            $('.wrapper').append(element);
            _self.setLayer(element);
            // 设置遮罩
            this.options.isMask && this.setMask();
            //$('.closeDialog', element).bind('click', this.close);
            element.delegate('.closeDialog, .confirm, .cancel', 'click', function(event) {

                this.className == 'confirm' && (_self.returnVal = 1, _self.options.callback(_self))
                this.className == 'cancel' && (_self.returnVal = 0, _self.options.callback(_self))

                _self.close(this);
            });

            $(window).bind('resize scroll', function() {
                _self.setLayer(element);
            });
        },
        setLayer: function(o) {
            var windowHeight = $(window).height(),
                windowWidth = $(window).width(),
                width = o.width(),
                height = o.height(),
                scrollTop = $(window).scrollTop();

            o.css({
                left: (windowWidth - width) / 2,
                top: (windowHeight - height) / 2 //+ scrollTop
            });
        },
        setMask: function() {
            $('body').append('<div class="dialogMask" style="z-index: ' + (--this.options.zIndex) + '; opacity: ' + this.options.opacity + ' ;" ></div>');
        },
        close: function(obj) {
            $('.dialogMask').remove();
            $(obj).parents('.dialog').remove();
        }
    }

    return Dialog;
});