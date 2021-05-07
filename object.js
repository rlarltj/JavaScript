// Objects
// object = { key : value};
// 속성과 값의 집합이다!!!

// // 1. Literals and properties
// const obj1 = {};  //object literal syntex
// const obj2 = new Person(); //object constructor syntexx

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const kiseo = {name: 'kiseo', age: 25};
print(kiseo);
kiseo.hasJob = true;
console.log(kiseo.hasJob);
// true
delete kiseo.hasJob;
console.log(kiseo.hasJob);
// undefined

// 2. Computed properties
// key should be always string!!!

console.log(kiseo.name);
console.log(kiseo['name']);
kiseo['hasJob'] = true;
console.log(kiseo.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(kiseo, 'hasJob');
//key값을 사용자가 입력해야 하는 함수의 경우, 개발자는 어떤 값이 입력될지 모르기 때문에
// computed property로 지정해둔다. console.log(obj.key);로 지정하면 obj에는 key라는 property가 없기 때문이다.

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 5};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('kiseo', 25);
function makePerson(name, age){
    return {
        name,
        age
    };
}
console.log(person4);

// // 4. Constructor function
// const person4 = new Person('kiseo', 25);
// function Person(name, age){
//     // this = {};
//     this.name = name;
//     this.age = age;
//     // return this;
// }

// 5. in operator: property existence check (key in obj)
console.log('name' in kiseo);
// true


// 6. for...in   vs for...of
// for (key in obj)
console.clear();
for (key in kiseo){
    console.log(key);
}

// 모든 key들을 받아와서 처리할 수 있다.


// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array){
    console.log(value);
}
// 배열 리스트를 하나씩 꺼내올 수 있다.


// 7. Cloning
// old school
const user3 = {};
for (key in user){
    user3[key] = user[key];
}

// new school
const user4 ={};
Object.assign(user4, user);
console.log(user4);

// 이런식으로도 복사가 가능하다
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

// color의 경우 뒤에 것을 복사한다. 캐스캐이딩과 똑같다고 이해하면 되겠다.