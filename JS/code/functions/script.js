function display ()
{
    console.log("hello world")
}
display()
// sum of 2 numbers
function sum ()
{
    let a = 10, b = 20;
    console.log(a + b);
}
sum();
// sum of 2 numbers with parameters
function sum1 (a, b)
{
    console.log(a + b);
}
sum1(5, 6);
sum1("raj", "prasad")


function printLen(a)
{
    console.log(a.length);
}
printLen("alok")

// sum with default values
function sum2 (a, b =20)
{
     console.log(a+b)
}
 sum2(10,50) //60
sum2(10);  //30

//sum with rest
function sum3 (...b)
{
    let sum = 0;
    for (let i of b)
    {
        sum = sum + i;
    }
    console.log(sum)
}
sum3(10, 5, 4, 6, 3)
// take an array and pass multiple values to function and print their product
function sum3(...b) {
	let sum = 0
	for (let i of b) {
		sum = sum * i
	}
	console.log(sum)
}
sum3(10, 5, 4, 6, 3)

function sum4 (a, ...b)
{
    console.log(a, b)
    let c = [a, b];  // [5,4,3,2]
    console.log(c,c.length)
}
sum4(5,4,3,2)

let [a, ...c] = [6, 7, 8, 9, 10];
let b=[5,...[4,3],...[5,4],3]
console.log(b)

// add two arrays
let arr = [5, 4, 6], arr2 = [1, 2, 3];
let arr3 = [...arr,...arr2]












