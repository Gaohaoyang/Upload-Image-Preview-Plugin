;(function($, window, document, undefined) {

    /**
     * Previewer 构造函数
     * @param  {[type]} ele [description]
     * @param  {[type]} opt [description]
     * @return {[type]}     [description]
     */
    var Previewer = function(ele, opt) {
        this.$element = ele;

        //默认配置
        this.defaults = {
            width: '200px',
            height: '200px',
            backgroundSize: 'cover' //cover,contain
        };
        this.options = $.extend({}, this.defaults, opt);
    };

    /**
     * 原型上的方法
     * @type {Object}
     */
    Previewer.prototype = {

        preview: function() {
            //设置 HTML 和 CSS
            _setHTMLnCSS({
                width: this.options.width,
                height: this.options.height,
                backgroundSize: this.options.backgroundSize, //cover,contain
            }); //设置CSS
            _imgPreview(this.$element, this.$element.children('input'));
            return this.$element;
        },
    };

    /**
     * 设置 HTML 和 CSS
     */
    var _setHTMLnCSS = function(param) {

        $('.hy-upload-preview').append('<span>点击选择图片</span><div class="up_again">点击重新<br>选择图片</div>');
        $('head').append('<style>.hy-upload-preview{width:' + param.width + ';height:' + param.height + ';border-radius:5px;position:relative;overflow:hidden;background-color:#eee;background-size:' + param.backgroundSize + ';background-repeat:no-repeat;background-position:center}.hy-upload-preview span{display:block;padding:0;line-height:' + param.height + ';text-align:center}.hy-upload-preview input{position:absolute;font-size:2000px;z-index:200;top:0;right:0;opacity:0;-ms-filter:"alpha(opacity=0)";cursor:pointer}.hy-upload-preview input:hover+.black_mask{-ms-filter:"alpha(opacity=20)"}.hy-upload-preview .up_again{display:table-cell;vertical-align:middle;text-align:center;width:' + param.width + ';height:' + param.height + ';opacity:0;color:#fff;transition:0.3s ease-in-out;-moz-transition:0.3s ease-in-out;-webkit-transition:0.3s ease-in-out;-o-transition:0.3s ease-in-out}.hy-upload-preview:hover .up_again{opacity:1;background:rgba(0,0,0,0.4)}</style>');
        /*var stylesheetExists = false;
        $('link').each(function() {
            if ($(this).attr('href') === '../uploadPreview/upload_preview.css') {
                stylesheetExists = true;
            }
        });

        if (stylesheetExists === false) {
            $('head').append('<link rel="stylesheet" href="../uploadPreview/upload_preview.css" type="text/css" />');
        }*/
    };

    /**
     * 读取图片
     * @param  {Object} input       jQuery对象
     * @param  {Object} previewArea jQuery对象
     * @return {[type]}             [description]
     */
    var _readURL = function(previewArea, input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                // previewArea.attr('src', e.target.result);
                previewArea.css('background-image', 'url(' + e.target.result + ')');
            };

            reader.readAsDataURL(input.files[0]);

            $(input).next('span').hide(); //将默认文字隐藏

        }
    };

    /**
     * 图片上传前预览
     * @return {[type]} [description]
     */
    var _imgPreview = function(previewArea, input) {
        input.change(function() {
            _readURL(previewArea, this);
        });
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
