// Function
// -fundamental building block in the program
// -subprogram can be used multiple Times
// -performs a task or calculates a value

// 1. Function declaration 
// function name(param1, param2){ body. ... return;}
// 1개의 함수는 1개의 기능을 한다.
// naming: doSomething, 동사 형태로 지어준다.


// 2. Parameters
// premitive parameters: passed by value 
// object parameters: passed by refernce
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name : 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i = 0; i<args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console. log(arg));
}
printAll('dream', 'coding', 'ellie');

// for of
// args에 있는 모든 값들이 arg에 지정되고, 이를 출력하는 방식

// 5. Local scope
// 안에서는 밖을 볼 수 있으나, 밖에서는 안을 볼 수 없다.

// 6. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic....
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic ...
}

// 7. callback
function checkAnswer(answer, printNo, printYes){
    if(answer != 'love you'){
        printNo();
    }else{
        printYes();
    }
}

const printNo= function(){
    console.log('wrong!!');
}

function printYes(){
    console.log('yes!!!');
}
checkAnswer('love you', printNo, printYes);

// 8. arrow function 
// always anonymous
const simplePrint = function(){
    console.log('simpleprint');
};

const simplePrint = () => console.log('simplePrint!!!');
const add = (a,b) => a+b;
const simpleMultiply = (a,b) => {
    return a*b;
};

(function hello(){
    console.log('hello!');
})();

//QUIZ
function calculate(command, a, b){
    switch(command){
        case 'add' :
            return a+b;
        case 'subtract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        default:
            throw Error('unknown command');
    }
}

calculate(add, a, b);
calculate(subtract, a, b);
calculate(divide, a, b);
calculate(multiply, a, b);

