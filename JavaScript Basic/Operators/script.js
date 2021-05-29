//1. Arithmetic Operators
let x = 10;
let y = 10;
console.log('x + y = ', x + y);
console.log('x - y = ', x - y);
console.log('x * y = ', x * y);
console.log('x / y = ', x / y);
console.log('x % y = ', x % y);

//2. Assignment Operators
x = y + 1;
console.log('x = ', x);

//3. Comparison Operators
//Relational
console.log('x > y', x > y);
console.log('x < y', x < y);
console.log('x >= y', x >= y);
console.log('x <= y', x <= y);
//Equality
console.log('x === y', x === y);
console.log('x !== y', x !== y);

//4. Equality Operators
//Strict equality
console.log(1 === 1);
//Lose equality
console.log(1 == 1);
console.log('1' == 1);

//5. Ternary Operators
let a = 1;
let b = a > 2 ? 'Yes' : 'No';
console.log('a > 2', b);

//6. Logical Operators
var c = true;
var d = false;
console.log('c || d = ', c || d);
console.log('c && d = ', c && d);
console.log('! c = ', !c);

//falsy and truthy
//falsy -> undefined, null, 0, false, '', NaN
console.log('Nitish' || 1);
console.log('Nitish' && 1);
console.log(false && undefined);

//7. BitWise Operators
console.log('1 | 2 = ', 1 | 2); // any binary digit 1 then result 1
console.log('1 & 2 = ', 1 & 2);//both binary digit should be 1 then result 1 otherwise 0