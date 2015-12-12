# Upload-Image-Preview-jQuery-Plugin
Choose upload image, local preview.

## Demo

[click here to try it](http://gaohaoyang.github.io/Upload-Image-Preview-Plugin/example/) or see below ↓

![demo](http://ww1.sinaimg.cn/large/7011d6cfjw1eyvnqhp2v1g20k30eqb2a.gif)

## Usage
HTML

```html
<script src="jquery-2.1.4.min.js"></script>
<script src="jquery.upload_preview.min.js"></script>
```

> You should edit the path according your situation.

put this anyWhere

```html
<div class="anyName">
    <input type="file" accept="image/gif, image/jpeg, image/png">
</div>
```

> Or you can use other way to import jQuery and jQuery plugins, such as webpack, browserify

JavaScript

```js
$('.anyName').uploadPreview({
    width: '200px',
    height: '200px',
    backgroundSize: 'cover',
    fontSize: '16px',
    borderRadius: '200px',
    border: '3px solid #dedede',
    lang: 'en', //language
});
```

## Options

Name           | Type   | Default | Description
-------------- | ------ | ------- | ---------------------------------
width          | String | '200px' | the width of preview area
height         | String | '200px' | the height of preview area
backgroundSize | String | 'cover' | only 'cover', 'contain'
fontSize       | String | '16px'  | the size of words on preview area
borderRadius   | String | '5px'   | border-radius
border         | String | 0       | the border of preview area
lang           | String | 'zh-cn' | the language of plugin, now only 'en','zh-cn'

<!-- ## Donate -->

## license

[MIT](https://github.com/Gaohaoyang/Upload-Preview-Plugin/blob/master/LICENSE)


<!-- 关于编写 jQuery 插件，参考了一些教程 -->
<!-- - [jQuery插件开发精品教程，让你的jQuery提升一个台阶](http://www.cnblogs.com/Wayou/p/jquery_plugin_tutorial.html) -->
