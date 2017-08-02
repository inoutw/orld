http://blog.csdn.net/yita90/article/details/51564118

PostCSS 是一套利用JS插件实现的用来改变CSS的工具.这些插件能够支持变量和混合语法，转换未来CSS语法，内联图片，等等

样式表内将图像做成数据的URL方式, 减少了一个HTTP请求！
/* input.css */
div {
  background: inline("images/logos/postcss.png");
}

/* output.css */
div {
  background: url("data:image/png;base64,iVBORw0KGgoAAAA...ggg==");
}

根据你所使用的图像的尺寸大小来决定背景尺寸
/* input.css */
body {
  width: width("images/foobar.png");
  height: height("images/foobar.png");
  background-size: size("images/foobar.png");
}

/* output.css */
body {
  width: 320px;
  height: 240px;
  background-size: 320px 240px;
}
如果我们处理的是二倍图，我们可以通过传递第二个参数输出：
/* input.css */
body {
  width: width("images/foobar.png", 2);
  height: height("images/foobar.png", 2);
  background-size: size("images/foobar.png", 2);
}

/* output.css */
body {
  width: 160px;
  height: 120px;
  background-size: 160px 120px;
}

该插件可以自动补全文件路径。我们并不需要知道完整路径图像。只要知道文件名就可以了。

例如，我们有这样的文件夹结构：

images/
 logos/
  postcss.png
input.css

我们传这样的一个参数。** 表示当前路径下所有文件夹和文件进行搜索。

postcss([
  require('postcss-assets')({
   loadPaths: ['**']
  })
])

/* input.css */
div {
  background: resolve("postcss.png");
  background: resolve("logos/postcss.png");
}

/* output.css */
div {
  background: url("/images/logos/postcss.png");
  background: url("/images/logos/postcss.png");
}

这个插件可以使图片缓存失效。
postcss([
  require('postcss-assets')({
    cachebuster: true
  })
])
/* input.css */
div {
  background: url("images/logos/postcss.png");
}

/* output.css */
div {
  background: url("images/logos/postcss.png?153bd5d59c8");
}

在CSS中使用图像有两种方式   1）url(/path/to/image.jpg) 传文件路径 2）url(data:...)数据URL。后者有时也被称为“内联”图像，完成的图像精灵的主要优势之一：结合HTTP请求。有了postcss-inline-svg，我们可以这样做（让我们的CSS精灵图像），单独调整颜色
/* input.css */
.star--red {
  background-image: svg-load("img/star.svg", fill=#f00);
}
.star--green {
  background-image: svg-load("img/star.svg", fill=#0f0, stroke=#abc);
}

/* output.css */
.star--red {
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%23f00'%3E...%3C/svg%3E");
}
.star--green {
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%230f0' stroke='%23abc'%3E...%3C/svg%3E");
}

