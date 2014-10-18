# 自动繁体转换

当检测到当前用户使用繁体中文系统的时候自动将页面转换成繁体中文。

## 特性

* 不支持IE
* 仅在繁体中文系统页面上载入
* 支持按词转换：
  忧郁的台湾乌龟发财后在服务器上洗头发写软件 ->
  憂鬱的台灣烏龜發財後在伺服器上洗頭髮寫軟體
* 适应台湾、香港、新加坡的各地特色用词

## 使用方法

将`chinese-auto-sim-to-trans.js`和`lazy-loaded.js`放到你的页面下面，然后在`html`
中加入:

```html
<script src="chinese-auto-sim-to-trans.js"></script>
```

范例可以参考`index.html`文件。

## 授权

公共领域（Public Domain）
