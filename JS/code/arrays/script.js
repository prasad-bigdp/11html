// // let arr = [5, 4, 6, 9];
// // console.log(arr[0] + arr[1]) //5+4 = 9
// // //array methods
// // console.log(arr.length) //4
// // arr[10] = 50;
// // console.log(arr.length, arr) //11
// // arr = [10, 9, 8, 7]
// // arr.push(5,6,1,3)
// // console.log(arr) //[10,9,8,7,5,6,1,3]
// // arr.pop()
// // console.log(arr) // [10,9,8,7,5,6,1]
// // arr.unshift(12, 11) 
// // console.log(arr) // [12,11,10,9,8,7,5,6,1]
// // arr.shift();
// // console.log(arr) // [11,10,9,8,7,5,6,1]
// // arr.splice(5)
// // console.log(arr); //[11,10,9,8,7]
// // arr.splice(0,1)
// // console.log(arr); //[10,9,8,7]
// // arr.splice(1, 2, 15, 16, 17, 18)
// // console.log(arr) //[10,15,16,17,18,7]
// // arr.reverse();
// // console.log(arr) //[7,18,17,16,15,10]
// // console.log(arr.indexOf(17)) //2
// // console.log([5, 4, 3, 5, 2, 5, 1].lastIndexOf(5))//5






// // //forEach
// // let arr = [5, 4, 6, 3];
// // arr.forEach(function (e,i)
// // {
// //     console.log(e,i)
// // })

// // let names = "Durga Prasad",str=''
// // names.split(' ').forEach(function (v, i)
// // {
// //     str = str + v.charAt(0).toUpperCase()
// // })
// // console.log(str) //DP

// // arr = [1, 2, 3, 4];
// // // print sum of array elements using forEach
// // let sum = 0;
// // arr.forEach(function (v)
// // {
// //     sum = sum + v;
// // })
// // console.log(sum);
// // arr = [[10, 20], [30, 40]] //input
// // //output: [30,70]
// // let arr2=[]
// // arr.forEach(function (val)
// // {
// //     console.log(val) // internal array
// //     let sum = 0;
// //     val.forEach((v) =>
// //     {
// //         sum = sum + v;
// //     })
// //     arr2.push(sum)
// // })
// // console.log(arr2) //[30,70]

// //for each with return
// let arr = [1, 2, 3, 4]
// const arr4 = arr.forEach((v) =>
// {
//     return v*2
// })
// console.log(arr4) // undefined

// // forEach cannot return values
//  arr = [1, 2, 3, 4]
// const arr5 = arr.map((v) =>
// {
//     return v*2
// })
// console.log(arr5) //
// let marks = [55,66,33,44,21,12]
// const arr6 = marks.map((v) => {
//     if (v >= 35)
//     {
//         return v
//     }
// })
// console.log(arr6)
// const arr7 = marks.filter((v) => {
// 	if (v >= 35) {
// 		return v
// 	}
// })
// console.log(arr7)



// arr = [5, 7, 8,11]
// let res = arr.some((v, i) =>
// {
//     return v%2==0
// })
// console.log(res)
// arr=[4,6]
// let res2 = arr.every((v, i) => {
// 	return v % 2 == 0
// })
// console.log(res2)


let arr= [5,4,6,1,11,14,8,22]
// console.log(arr.sort()) //[1,11,14,22,4,5,6,8]
arr.sort((a,b)=>a-b) //increasing order
arr.sort((a, b) => b - a); // reverse order
console.log(arr)

//reduce
arr = [1, 2, 3, 4, 5];
let res= arr.reduce((pr, cr) => pr + cr, 0);
console.log(res)

//flattening array
arr = [[5, 4], [3, 1]] //[5,4,3,1]
let res2=arr.reduce((pr,cr)=>pr.concat(cr),[])
console.log(res2)





















