// 1. String concatenation
console.log('my' +'cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1 +2 }`);

// 2.  || 연산자
//  or은 console.log(val1 || val2 || check());
// 중 하나라도 true면 true를 반환한다.
// 검사를 val1부터 순서대로 하므로, check()와 같이 
// 메모리 할당이 비교적 큰 함수는 맨 뒤에 배치하는 것이 효율적이다.
// && 연산자도 마찬가지이다.

// 3. equality

console.log(0 == false);
// 0과 null, undefined는 다 false로 간주될 수 있다. 따라서 true

console.log(0 === false);
// 하지만 0은 boolean 타입이 아니다. 따라서 type strict equailty에서는 false
console.log('' == false);
// true
console.log('' === false);
// false
console.log(null == undefined);
//true
console.log(null === undefined);
// false


