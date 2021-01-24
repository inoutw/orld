const promise = new Promise((resolve, reject) => {
	console.log(1);
	resolve();
	console.log(2);
	reject('error');
})
promise.then(()=>{
	console.log(3);
}).catch(e=>console.log(e))
console.log(4);
// 1243

const promise = new Promise((resolve, reject) => {
	setTimeout(()=>{
			console.log('once')
			resolve('success')
	}, 1000)
})
promise.then((res)=>{
	console.log(res);
})
promise.then((res)=>{
	console.log(res);
})
//once 1's 后 success success

Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log)
// 1
// then函数接收值类型，发生透传，