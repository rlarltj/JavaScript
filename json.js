// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)

let json = JSON.stringify(true);
console.log(json);

let array = JSON.stringify(['apple','banana']);
console.log(array);

const rabbit ={
    name : 'rabbit',
    color : 'white',
    size : null,
    birthDate: new Date(),
    jump: function(){
        console.log(`${this.name} can jump!`);
    }

}
const Json = JSON.stringify(rabbit);
const Json1 = JSON.stringify(rabbit, ["name", "color"]);
const Json2 = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'kiseo' : value;
}
)
console.log(Json2);

// console.log(Json);
// console.log(Json1);
// Object를 JSON으로 변환하는 과정에서, 특정한 property만 변환하도록 하려면 콤마 뒤에 그 property를 입력해주면 된다.
// Json2 처럼 JSON으로 변환하면서, callback 함수를 이용하여 그 값을 미세하게 수정하는 것도 가능하다.



// 2. JSON to Object
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) =>{
   return key === 'birthDate' ? new Date : value;
});
console.log(obj);

rabbit.jump();
// obj.jump();
// json을 object로 만들어서 obj로 담았는데, 애초에 json으로 변환할때 jump라는 함수는 변환되지 않았다.
// 따라서 obj에는 jump라는 함수가 존재하지 않는다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// birthDate는 string이다. rabbit을 json으로 만들었을때 이는 string타입으로 저장된다.
// 이json을 다시 object로 가져올때도 당연히 string으로 할당이 된다. 하지만 rabbit 안에 있는 Date는 Date라는 object 그 자체이다.
// 52행을 출력하려면 42행과 같이 callback 함수를 이용해 Date라는 object를 생성해야 한다.