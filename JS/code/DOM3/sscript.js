let degree = 0;
function rotateShinchan ()
{
    degree = degree + 180;
    document.querySelector('#modal img').style.rotate=`${degree}deg`
}
function changePicture ()
{
    document.getElementById("modal").innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png" alt="shinchan" height="300" onclick="rotateShinchan()">
    <p><b>Doremon</b></p>
    `
}
function reverseName ()
{
    const input = document.getElementById('inp');
    let name = input.value;
    console.log(name)
    document.body.style.background = name;
    document.getElementById("rev").textContent= name.split('').reverse().join('')
}




