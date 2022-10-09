
https://xiaochen1024.com/series/60b1b600712e370039088e24/60b1b636712e370039088e25

React 使用声明式编程语言，UI库，通过虚拟 DOM 与 HTML 文档进行交互。
jSX语法： javascript 中书写 HTML 代码，
函数式的思想，单向数据流, 数据不可变

React18: concurrent模式，渲染可中断，新特性transition, suspense,流式服务端渲染的基础，
ReactDOM.render => createRoot
setState 可同步：setTimeout， Promise里面实现
可异步：自动批量处理； flushSync实现setState同步
startTransition不会延迟调度，立即执行，更快被处理，感知不到.
useTransition获取transition的状态
Fiber:Js对象
sibling:

Hook: 链表
------------------
Vue.js 是一种开源 JavaScript 前端框架.单页应用程序和用户界面是使用MVVM架构构建的。
响应式的，也就是基于是数据可变的，通过对每一个属性建立 Watcher 来监听，当属性变化的时候，响应式的更新对应的虚拟 DOM
Vue3: Composition Api: 编写 Vue 组件的方式, 组件逻辑相关的选项以 API 函数的形式重新设计
state.username反应状态变量reactive
生命周期:beforeCreate: 实例初始化之后，数据观测和事件配置之前被调用，此时组件的选项对象还未创建，el 和 data 并未初始化，因此无法访问methods， data， computed等上的方法和数据,
 created: 数据观测、属性和方法
 beforeMount: 挂在开始之前被调用，相关的render函数首次被调用（虚拟DOM），实例已完成以下的配置： 编译模板，把data里面的数据和模板生成html，完成了el和data 初始化，注意此时还没有挂在html到页面上。
 mounted
挂载完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。
beforeUpdate
在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加地重渲染过程
updated
在由于数据更改导致地虚拟DOM重新渲染和打补丁只会调用，调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作，然后在大多是情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环，该钩子在服务器端渲染期间不被调用
beforeDestroy
实例销毁之前调用，实例仍然完全可用
-----------------------
React hooks原理：

useLayoutEffect区别：


