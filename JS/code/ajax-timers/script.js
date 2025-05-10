console.log("before timer");
let count=0
// setTimeout(() =>
// {
//     count++;
//     document.getElementById('heading').textContent=count
// }, 5000)
let c= setInterval(() => {
	count++
    document.getElementById("heading").textContent = count;
    if (count == 20)
    {
        clearInterval(c)
    }
}, 100)
// for (let i = 0; i < 100000; i++)
// {
//     console.log("after timer")
// }