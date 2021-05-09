//Promise is a JavaScript object for a asynchronous operation. 
// 즉, 비동기적인 것을 수행할때 callback 대신에 유용하게 사용할수 있다.
// state: pending -> fulfilled  or  rejected
// producer vs Consumer

// 1. producer
// 새로운 promise가 만들어질때, executive callback함수는 바로 실행된다.
// 아래의 예제에서 console.log('doing something');은 즉시 실행된다. 

const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something ...');
});
// promise는 클래스이므로 new라는 키워드로 오브젝트를 생성한다.

const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something ...');
    setTimeout(()=> {
        // resolve('kiseo');
        reject(new Error('no network'));
    },2000);
});

//이제 위 promise는 다른 일을 2초정도 하다가, 결국 잘 마무리하면
// resolve함수에 'kiseo'라는 값을 전달해주는 promise가 되었다.


// 2. Consumer: then, catch, finally
promise
.then((value)=>{
    console.log(value);
})
.catch(error => {
    console.log('hi error');
})
.finally(()=>{
    console.log('kiseo is handsome');
})

// value의 값은 promise가 잘 수행되어서
//  마지막에 resolve라는 callback 함수에서 전달된 kiseo라는 값