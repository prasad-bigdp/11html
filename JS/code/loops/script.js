// // loops
// let i=123
//  while (i < 10) {
//      console.log(i);
//      i++;
// }
 
// // do while
// let j = 123;
// do
// {
//     console.log(j);
//     j++;
// } while (j < 10);



// i = 25;
// while (i >= 1) {
//     if (i % 2 == 0)
//     {
//         console.log(i)
//     }
// 	i--
// }









// let r = 1
// while (r <= 4) {
// 	let c = 1,
// 		stars = ""
// 	while (c <= r) {
// 		stars = stars + "* "
// 		c++
// 	}
// 	console.log(stars)
// 	r++
// }

// //print numbers from 10 to 1 using for
// for (let i = 10; i >= 1; i--)
// {
//     console.log(i)
// }

let arr = [5, 4, 9, 8, 1];
for (let i = 0; i <= arr.length-1; i++) {
	console.log(arr[i])
}
// for of
for (let e of arr)//e is element here
{
    console.log(e)
}
let obj = {
    name: "prasad",
    age:50
}
// for in
for (let e in obj) // e is key or index here
{
    console.log(obj[e], e)
}


























