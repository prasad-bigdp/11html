const ele= document.getElementById('heading')
function change ()
{
    ele.textContent = "Welcome back again"
    ele.style.color = "red"
}
function changeMode ()
{
    // document.body.classList.toggle('dark')
    document.getElementById("box").style.display="flex"
}
function closeBox ()
{
     document.getElementById("box").style.display = "none" 
}