// // JavaScript is synchronous.
// // hoisting: var, function 의 선언이 자동적으로 맨 위로 올라가는 것~!!

// console.log('1');
// setTimeout(() => console.log('2') ,1000);
// console.log('3');


// // Synchronous callback
// function printImmediately(print){
//     print();
// }
// printImmediately(() => console.log('hello!')) ;


// // asynchronous callback
// function printWithDelay(print, timeout){
//     setTimeout(print, timeout);
// } 

// printWithDelay(() => console.log('async callback'), 2000);

// // 콘솔창에는 1 3 hello! 2 async callbck 순으로 출력된다.


// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){ 
        setTimeout(() => {
            if((id === 'kiseo' && password === 'nice')||
            (id =  'coder' && password === 'genius')){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000)
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if( user === 'kiseo'){
                onSuccess({ name: 'kiseo', role: 'admin'});
            }else{
                onError(new Error('No access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user)=> {
        userStorage.getRoles(user, (userWithRole)=>{
            alert(`hello! ${userWithRole.name}, you have a ${userWithRole.role}`);
        }, (error)=> {
            console.log(error);
        })
    }, 
    (error) => {
        console.log(error);
});