'use strict';
// class: template
// object: instance of a class

// 1. Class declarations
class Person{
    //constructor
    constructor(name, age){
    //fields
    this.name= name;
    this.age= age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const kiseo = new Person('kiseo', 25);
console.log(kiseo.name);
console.log(kiseo.age);


//2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // if(value <0){
        //     throw Error('age can not be negative');
        // }
        this._age= value < 0 ? 0 : value;
        this._age = value; 
    }
}
const user1 = new User('steve', 'job', -1);

// 3. Field (public, private)
// 엄청 최신버전

class Experiment{
    publicField = 2;
    #privateFiled = 3;
}

const Experiment = new Experiment();
console.log(publicField);
console.log(privateField);

// 4. Static properties and methods
// 엄청 최신버전
class Article{
    static publisher = 'Kiseo Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article1.publisher);
// static이 아니었다면 이 값이 출력 되었을 것이나, 지금은 undefined이 출력된다.
// static은 오브젝트마다 할당되는 것이 아니라, 클래스 자체에 할당되는 것이므로
console.log(Article.publisher);
// 이렇게 클래스로 출력해야 한다.
Article.printPublisher();
// static 함수를 호출할때도 마찬가지이다.

// 5. Inheritance
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width* this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('삼각형')
    }
    getArea(){  
        return (this.width* this.height)/2
    }
    toString(){
        return `Triangle: color: ${this.color}`;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
// rectangle.draw();

const triangle = new Triangle (30, 20, 'red');
console.log(triangle.getArea());
triangle.draw();
//overriding


// 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle);
// true
console.log(triangle instanceof Rectangle);
// false
console.log(triangle instanceof Triangle);
// true
console.log(triangle instanceof Shape);
// true
console.log(triangle instanceof Object);
// true
console.log(triangle.toString());

