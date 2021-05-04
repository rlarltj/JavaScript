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
