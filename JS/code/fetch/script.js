// function fetchData ()
// {
//     fetch("https://official-joke-api.appspot.com/random_joke")
//         .then((res) => res.json())
//         .then((data)=>displayData(data))
//         .catch((err)=>console.log(err))
// }
// fetchData();
// function displayData (joke)
// {
//     const setup = document.createElement('h2');
//     setup.textContent= joke.setup
//     const punchline = document.createElement('h1')
//     punchline.textContent = joke.punchline + "🤣";
//     document.getElementById('main').append(setup,punchline)
// }

function fetchData ()
{
    fetch("https://dummyjson.com/quotes/random")
        .then((res) => res.json())
        .then((data)=>displayData(data))
        .catch((err) => console.log(err))
}
setInterval(() =>
{
    fetchData()
},5000)
function displayData (q)
{
    document.getElementById("main").textContent=''
    const quote = document.createElement('h2');
    const author = document.createElement('p');
    quote.textContent = q.quote;
    author.textContent = "------" + q.author;
    document.getElementById('main').append(quote,author)
}




