// async & await
// clear style of using promise :)

// 1. async
async function fetchUser (){
    // do network request in 10seconds...

    return 'kiseo';
}

const user = fetchUser();
console.log(user);
user.then(console.log);
// async를 함수 앞에 적으면, 코드 블럭이 자동으로 promise로 바뀐다.


// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(1000);
    return 'apple';
}

async function getBanana(){
    await delay(2000);
    return 'banana';
}

// await은 async가 붙은 함수 안에서만 이용 가능하다!!!!!
// await delay(3000);  --> 3초의 딜레이가 끝나고 나서야 return 'apple'을 실행한다.

// function getBanana(){
//     return delay(3000)
//     .then(()=> 'banana'); 
// }

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}+${banana}`;
}
pickFruits().then(console.log);
// 위처럼 사과와 바나나의 출력을 병렬적으로 할 수 있는 경우
// 아래와 같은 방법을 이용하는 것이 훨씬 좋다.

// 3. useful Promise APIs

function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// promise에있는 all라는 api를 이용하면 된다.
// promise 배열을 전달하게 되면 모든 promise들이 병렬적으로 다 받을때까지 모아주는 역할을 한다.
// 과일의 배열을 전달 받고 난 후, fruits.join으로 string으로 출력했다.  

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

// race라는 api를 이용하면, 먼저 전달이 된 과일을 출력할 수 있다.
