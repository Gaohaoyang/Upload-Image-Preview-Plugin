;
(function($, window, document, undefined) {


    /**
     * Previewer 构造函数
     * @param  {[type]} ele [description]
     * @param  {[type]} opt [description]
     * @return {[type]}     [description]
     */
    var Previewer = function(ele, opt) {
        this.$element = ele;
        this.defaults = {
            'color': 'red',
            'fontSize': '12px',
            'textDecoration': 'none'
        };
        this.options = $.extend({}, this.defaults, opt);
    };

    /**
     * 原型上的方法
     * @type {Object}
     */
    Previewer.prototype = {

        preview: function() {
            _setCSS(); //设置CSS
            _a();
            this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'textDecoration': this.options.textDecoration
            });
            return this.$element;
        },

        // _a: function() {
        //     console.log('aaaaaa');
        // },
    };

    /**
     * 设置CSS
     */
    var _setCSS = function() {
        var stylesheetExists = false;
        $('link').each(function() {
            if ($(this).attr('href') === '../uploadPreview/upload_preview.css') {
                stylesheetExists = true;
            }
        });

        if (stylesheetExists === false) {
            $('head').append('<link rel="stylesheet" href="../uploadPreview/upload_preview.css" type="text/css" />');
        }
    };

    //test
    var _a = function() {
        console.log('bbbbbbbbbb');
    };


    /**
     * 上传图片前预览插件
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    $.fn.uploadPreview = function(options) {

        //创建 Previewer 的实体
        var previewer = new Previewer(this, options);
        //调用其方法
        return previewer.preview();

    };
})(jQuery, window, document);
