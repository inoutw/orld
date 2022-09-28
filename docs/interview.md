



Babel Core:

性能优化： https://zhuanlan.zhihu.com/p/121056616
1. 减少HTTP请求,
2. 
3. 使用HTTP2: HTTP2 是基于帧的协议，每个帧都有表示帧长度的字段;
	  多个请求可以共用一个 TCP 连接; 首部压缩; 
4. 服务端渲染
5. 静态资源使用 CDN，让用户离服务器更近，从而缩短请求时间
6. CSS文件放在头部，javascript文件放在尾部, Js不阻止 DOM 解析，但会阻塞渲染
7. 字体图标 iconfont 代替图片图标, 矢量图，不会失真
8. 压缩文件, UglifyPlugin,HtmlWebpackPlugin,  Accept-Encoding 头添加 gzip 
9. 图片延迟加载, 图片压缩技术image-webpack-loader, CSS3效果代替图片
10. 提取第三方库
11. 减少重绘重排，减少DOM操作，


React为什么要用Function



突破并发限制：


useCallback:


ES6-ES11变化:



Yarn，npm， pnpm区别：


npm查看库的引用：


查看可视化库的引用情况：


Cypress原理, 为什么能启动浏览器


VSCode,


文件上传，断点续传


微任务，宏任务


怎么判断前端内存泄漏


CommonJs, ESM:


富文本编辑器:


webpack Plugin 和 loader的区别


事件委托，


immutableData:











