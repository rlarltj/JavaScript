class UserStorage{
    loginUser(id, password){ 
       return new Promise((resolve, reject) => {
           setTimeout(()=>{
                if(
                (id === 'kiseo' && password === 'nice')||
                (id =  'coder' && password === 'genius')){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                     
                }
           },2000);
       });
    }


    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if( user === 'kiseo'){
                    resolve({ name: 'kiseo', role: 'admin'});
                }else{
                    reject(new Error('No access'));
                }
        }, 2000);       
    });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user =>  alert(`hello! ${user.name}, you have a ${user.role}`))
.catch(console.log);

