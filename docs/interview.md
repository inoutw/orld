Babel Core:

性能优化： https://zhuanlan.zhihu.com/p/121056616

1. 网络：
   - 减少 HTTP 请求,
   - 使用 HTTP2: HTTP2 是基于帧的协议，每个帧都有表示帧长度的字段; 多个请求可以共用一个 TCP 连接; 首部压缩;
   - 静态资源使用 CDN，让用户离服务器更近，从而缩短请求时间
2. 代码：
   - 减少 DOM 操作，减少重绘重排，
   - CSS 文件放在头部，javascript 文件放在尾部, Js 不阻止 DOM 解析，但会阻塞渲染
   - switch if-else, 数组或者对象建立查找表
3. 资源大小：
   - 压缩文件, UglifyPlugin, HtmlWebpackPlugin, Accept-Encoding 头添加 gzip
   - 字体图标 iconfont 代替图片图标, 矢量图，不会失真
   - 图片延迟加载, 图片压缩技术 image-webpack-loader, CSS3 效果代替图片
4. 缓存：

   - 提取第三方库

5. 其他：
   - 服务端渲染

React 为什么要用 Function

setTimeout 设置 0 毫秒做啥用？

突破并发限制：

useCallback:

ES6-ES11 变化:

Yarn，npm， pnpm 区别：

npm 查看库的引用：

查看可视化库的引用情况：

Cypress 原理, 为什么能启动浏览器

VSCode,

文件上传，断点续传

微任务，宏任务

怎么判断前端内存泄漏

CommonJs, ESM:

富文本编辑器:

webpack Plugin 和 loader 的区别

事件委托，

immutableData:

JSON.stringify 有几个参数，干嘛的，有什么缺点
