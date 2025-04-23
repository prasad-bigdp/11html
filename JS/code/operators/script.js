// Arithematic Operators
let a = 10, b = 5;
console.log(a + b) //15
console.log(a - b) //5
console.log(a * b); //50
console.log(a / b); //2
console.log(a % b); //0
console.log(a ** b); //100000

// logical operators
console.log((a > 5) && (b < 10)) // true
console.log((a > 5) || (b > 10))  //true
console.log(!(a>5)) //false

// relational operators
console.log(a > b)  //true
console.log(a < b) //false
console.log(a >= b); //true
console.log(a <= b); //false
a = "2", b = 2;
console.log(a == b) //true
console.log(a === b); //false
console.log(a != b); //false
console.log(a !== b); //true

//Assignment operators
a = 2, b = 3;
a += 1; // a=a+1;
a -= 1; // a=a-1
a *= 1; // a=a*1
a /= 1; // a=a/1;
a %= 1; //a=a%1;
a **= 1; // a = a**1

console.log(a)

// unary operators
// unary +  -- it will convert any value into number
console.log(2 + '2')//22
console.log(2 + +'2')//4
// increment ++  -- will increase value by 1
a = 2;
a++; //a=a+1;
console.log(a)
//++a  -- pre increment -- update, assign
//a++ -- post increment -- assign, update
a = 5;
// let x = ++a;
// let x = a++;
let x = ++a + a++ + ++a;
console.log(x)
//--a  -- pre increment -- update, assign
//a-- -- post increment -- assign, update
a = 5, b = 2;
// x = a++ + --b + ++a + b--; //5+1+7+1

x = a++ + b;
console.log(x, a)

a = 5, b = 2;
// ternary operator
const c = (a >= b) ? a : b;
console.log(c)

let res=(a % 2 == 0) ? "even":"odd";
console.log(res)

// js is a dynamically typed language
// '4'+2 ==> '4'+'2' ==>'42'






































