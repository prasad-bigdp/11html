// function display ()
// {
//     console.log("hello world")
// }
// display()
// // sum of 2 numbers
// function sum ()
// {
//     let a = 10, b = 20;
//     console.log(a + b);
// }
// sum();
// // sum of 2 numbers with parameters
// function sum1 (a, b)
// {
//     console.log(a + b);
// }
// sum1(5, 6);
// sum1("raj", "prasad")


// function printLen(a)
// {
//     console.log(a.length);
// }
// printLen("alok")

// // sum with default values
// function sum2 (a, b =20)
// {
//      console.log(a+b)
// }
//  sum2(10,50) //60
// sum2(10);  //30

// //sum with rest
// function sum3 (...b)
// {
//     let sum = 0;
//     for (let i of b)
//     {
//         sum = sum + i;
//     }
//     console.log(sum)
// }
// sum3(10, 5, 4, 6, 3)
// // take an array and pass multiple values to function and print their product
// function sum3(...b) {
// 	let sum = 0
// 	for (let i of b) {
// 		sum = sum * i
// 	}
// 	console.log(sum)
// }
// sum3(10, 5, 4, 6, 3)

// function sum4 (a, ...b)
// {
//     console.log(a, b)
//     let c = [a, b];  // [5,4,3,2]
//     console.log(c,c.length)
// }
// sum4(5,4,3,2)

// let [a, ...c] = [6, 7, 8, 9, 10];
// let b=[5,...[4,3],...[5,4],3]
// console.log(b)

// // add two arrays
// let arr = [5, 4, 6], arr2 = [1, 2, 3];
// let arr3 = [...arr,...arr2]


// function sum (a,b)
// {
//     return a + b;
// }
// let res = sum(4, 5)
// console.log(res)

// //function expression
// const x = 2;
// const sum2 = function (a, b)
// {
//     return a + b
// }
// console.log(sum2)
// let res2 = sum2(4, 5)
// console.log(res)




// function display ()
// {
//     console.log("hellllo world")
// }
// console.log(display)
// display()


// const x = function ()
// {
//     console.log("hello world")
// }
// console.log(x)
// x()

// function sum (a, b)
// {
//     return a + b;
// }
// console.log(sum)
// // function expression
// let x = function (a, b)
// {
//     return a + b;
// }
// console.log(x)
// // arrow function
// let y = (a, b) => a+b

// console.log(y)











// function strLen (a)
// {
//     return a.length;
// }
// console.log(strLen("prasad"))
// // arrow function
// const z = (a) => a.length;
// console.log(z("prasad"))



function x (p,q)
{
    console.log("i'm  x"+(p+q))
}
function doPrint (a)
{
    a(5,3)
}
doPrint(x) // x is callback and doPrint is Higher order function


//closure
function outer ()
{
    let x = 10;
    function inner(){
        x++;
        console.log(x)
    }
    return inner;
}
let z = outer()  // let z = inner
console.log(z)
z() //11
z() //12
z() //13


// funny closure
function rani ()
{
    let msg="bye bye"
    function letter ()
    {
        console.log(msg)
    }
    return letter;
}
  let y = rani() /*
   let y = function letter ()
    {
        console.log(msg)
    }*/
y()









































