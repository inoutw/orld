# React-Native Jest
 - RN自带jest测试， 初始化项目会包含jest依赖
 - 运行jest或yarn test，可以查看测试结果
## Snapshot test
可以测试DOM变化相关的功能，包括（数据，事件对DOM的影响）
 - 生成的snapshot文件要作为代码一部分提交到版本仓库
 - RN快照测试会用到react-test-renderer, API Doc: https://reactjs.org/docs/test-renderer.html#testrenderer;
## jest.mock
rn 内置的jest会有一些默认的模拟器，还有一些rn或第三方组件依赖于原生代码渲染，于是我们需要jest.mock模拟底层实现；
eg：
```
jest.mock('Button', () => 'Button'});
或者:
jest.mock('Button', () => {
	const mockComponent = require('jest-react-native');
	return mockComponent('Button');
});
```
如果不用jest.mock， Button底层渲染成View，无法访问需要的属性。

## 异步测试
 - callback,
 - promise,
 - resolve/reject,
 - async/await,

## issue
动画测试问题：
 - https://github.com/facebook/jest/issues/4710

