
// a
const fruits = ['apple', 'banana']

for(i=0;  i<fruits.length; i++){
    console.log(fruits[i]);
}

// b
for(fruit of fruits){
    console.log(fruit);
}

// c
fruits.forEach((fruit) => console.log(fruit));
// forEach는 배열 속 value들마다 내가 전달하는 함수를 출력한다.


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('lemon', 'orange');

// pop: remove an item from the array
fruits.pop();
console.log(fruits);

// unshift: 배열 앞에서부터 데이터를 넣는다.
fruits.unshift('potato');
console.log(fruits);

// shift: 배열 앞에서부터 데이터를 삭제한다.
fruits.shift();
console.log(fruits);

// note!!!!!!!!!!!! shift와 unshift는 pop과 push보다 엄~~청 느리다.
// 빈 공간에 넣고 빼는 것은 쉽게 가능하나, 앞에서부터 채우고 밀고 하는것은 복잡하다.

//splice: remove an item by index position
fruits.push('orange', 'lime', 'pineapple');
fruits.splice(1, 1, 'melon');
console.log(fruits);

// combine two arrays
const fruit2 = [1, 2 ,3];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

console.clear();
// 5. Searching
console.log(fruits.indexOf('lime'));
console.log(fruits.includes('pineapple'));
// true

// lastindexOf
// 배열에 같은 데이터가 있는 경우, 뒤에 배치된 데이터의 index값을 가져온다.
