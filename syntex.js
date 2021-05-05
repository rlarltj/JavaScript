// 1. Use strict
// add in ES 5
// use this for Vanila JavaScript
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'kiseo';
    console.log(name);
    name= 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var(don't ever use this!!!!!!!!!)
// var hoisting (move declaration from bottom to top)

// 3. Constants
// favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes

// 4. Variable types
// null
let nothing = null;
console.log(`value: ${nothing} type: ${typeof nothing}`);

// undefined
let x;
console.log(`value:{x} type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); 
// false 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
// h
text = 1;
console.log(`value:${text} , type: ${typeof text}`);
// number
text = '7' + 5;
console.log(`value:${text} , type: ${typeof text}`);
// String

text = '8' / '2';
console.log(`value:${text} , type: ${typeof text}`);
//number
console.log(text.charAt(0));
// error
// 타입스크립트의 필요성