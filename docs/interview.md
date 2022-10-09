
https://www.jianshu.com/p/51b046f8e4c0
https://www.jianshu.com/p/6e45274ce3ad
https://www.jianshu.com/p/3efad0e88a00
https://www.cnblogs.com/poloyy/category/1768839.html
https://zhuanlan.zhihu.com/p/29025460


https://developers.turing.com/welcome?s=outbound
2022前端必会的面试题（附答案）

https://www.zhihu.com/question/20790576/answer/32602154


------------------------------------
SCSS, SASS, LESS区别
css预处理器，
----------------------------------
TS: mobx 或者 formily
----------------------------------
Babel Core:
编译ES6

性能优化： https://zhuanlan.zhihu.com/p/121056616
1. 加载时优化
   - 减少 HTTP 请求,
   - 使用 HTTP2: HTTP2 是基于帧的协议，每个帧都有表示帧长度的字段; 多个请求可以共用一个 TCP 连接; 首部压缩;
   - 静态资源使用 CDN，让用户离服务器更近，从而缩短请求时间
   - CSS 文件放在头部，javascript 文件放在尾部, Js 不阻止 DOM 解析，但会阻塞渲染
   - 字体图标 iconfont 代替图片图标, 矢量图，体积小，不会失真
   - 压缩文件, UglifyPlugin, HtmlWebpackPlugin, Accept-Encoding 头添加 gzip
   - 图片延迟加载, 图片压缩技术 image-webpack-loader, CSS3 效果代替图片
2. 运行时优化
   - 减少 DOM 操作，减少重绘重排，
   - requestAnimationFrame视觉变化
   - switch if-else, 数组或者对象建立查找表
   - 使用Web Workers，
   - 提取第三方库

3. 其他：
   - 服务端渲染
----------------------------------------------------------
React 为什么要用 Function
逻辑复用的方式更优雅，不用关注生命周期，只需要关注业务逻辑，一个输入只会得到一个确定的输出
hooks时代的函数式组件依然是【外部数据=>view】的纯函数
Class中Class实例是可以改变的，但是props又是不可改变的，会出问题，
----------------------------------------------------
setTimeout 设置 0 毫秒做啥用？
把任务放在任务队列的末尾，等待同步任务或者任务队列中的任务执行完后再执行setTimeout中的任务
---------------------------------------------------------------------
突破并发限制 
-------------------------------------------------------------------
useCallback:
-----------------------------------------------------------------
ES6-ES11 变化:
变量，箭头，参数， map, reduce, filter, forEach
Json：Key和Value一样可以简写
:function 可以省略
结构赋值，三个点函数，链式操作符
ES7 async* 
------------------------------------
Promise:消除回调，Promise.all（[p1,p2,p3,...]）.then()
------------------------------------
generator--生成器， 特殊的函数，中间可以暂停，
yield:传参，返回值,
普通函数-一直执行到头
-------------------------------------

---------------------------------------
Yarn，npm， pnpm 区别：
yarn:并行安装，离线模式：如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了
npm:顺序安装
pnpm: 软链方式，多个项目使用同一个依赖，只会在磁盘空间安装一次，安装差异的地方
-----------------------------------------
npm 查看库的引用：npm ls -g; 
查看可视化库的引用情况：
webpack-bundle-analyzer
npm run build --report
webpack -p --progress
----------------------------------------
Cypress 原理, 为什么能启动浏览器
使用 webpack 将测试代码中的所有模块 bundle 到一个 js 文件中
启动浏览器客户端，Cypress测试代码和被测程序都在一个浏览器中执行；
支持回看，截屏快照，自动等待UI更新
缺点：多标签不支持，单一浏览器，不支持跨域
cy.stub: Replace a function, record its usage and control its behavior
----------------------------------------
文件上传，断点续传
slice分片，webworker独立的线程计算hash
----------------------------------------
微任务，宏任务
----------------------------------------
怎么判断前端内存泄漏
-------------------------------------------
CommonJs, ESM:
民间的sea.js, requireJs
CMD, AMD ?
nodejs模块化
ES6模块化
-------------------------------------------
富文本编辑器:

webpack Plugin 和 loader 的区别
-------------------------------------------
事件委托和普通事件的区别，
-------------------------------------------

immutableData:
-------------------------------------------------
JSON.stringify 有几个参数，干嘛的，有什么缺点
JSON.stringify(value[, replacer[, space]])
space 是一个数字，返回值文本在每个级别缩进指定数目的空格
--------------------------------------------------
possMessage
用于安全地实现跨源通信
otherWindow.postMessage(message, targetOrigin, [transfer]);
--------------------------------------------------
Cookie的安全策略
expires=-1
签名和加密
开启 Cookie 的 httponly 参数，让 Cookie 只能在网络请求中被传输，避免js操作和获取 Cookie
---------------------------------------------------
弹框变大随内容
flex:弹性布局flex-wrap换行
justify-content: 主轴上的对齐方式
align-item:交叉轴的对齐方式
---------------------------------------------------
vue: scoped,

route: hash, history

vue.$set
-----------------------------------------
CSS选择器优先级
important, id, class, 标签，伪类first-child，伪元素before after，
BFC:
absolute, CSS动画，

flex:1


0.1+0.3

apply call bind 
this

闭包：模块化，实现节流 防抖
https://vue3js.cn/interview/JavaScript/debounce_throttle.html#%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0


事件绑定和普通事件的区别：



Dom树和渲染树：head，隐藏元素不显示
原型和原型链



















