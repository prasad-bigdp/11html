// let obj = {
//     name: "raj",
//     age: 25,
//     fun:function(){console.log(this.name)}
// }
// obj.fun();

console.log(this)  // window
// --get url details-- 
let a = window.location.href;
console.log(a)
console.log(window.location.search)
// window.location.reload //reloads the page
// window.location.replace(url) //replaces the url
const vd= document.getElementById('vd')
document.getElementById('btn1').addEventListener('click', () =>
{
    //window.history.forward()

    window.navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((res) =>vd.srcObject=res)
        .catch((err)=>console.log(err))
    
})

// localStorage.setItem('name', 'prasad')
//document.cookie = "username:Prasad"



