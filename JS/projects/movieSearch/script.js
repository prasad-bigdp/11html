function fetchData() {
	const inp = document.getElementById("inp").value
	fetch(`https://www.omdbapi.com/?apikey=7bd91a6d&s=${inp}`)
		.then((res) => res.json())
		.then((data) => displayData(data.Search))
		.catch((err) => console.log(err))
}
document.getElementById('inp').addEventListener('input',fetchData)
document.getElementById("btn").addEventListener("click", fetchData)
const output = document.getElementById("output")
function displayData(d) {
    console.log(d)
    output.textContent=''
    d.forEach((v,i) =>
    {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie')
        const moviePoster = document.createElement("img");
        moviePoster.src = v.Poster;
        moviePoster.alt = v.Title;
        const movieTitle = document.createElement('h2');
        movieTitle.textContent= v.Title
        const movieYear = document.createElement('h3');
        movieYear.textContent=v.Year
        const movieLink = document.createElement('a');
        movieLink.href = `https://www.imdb.com/title/${v.imdbID}`
        movieLink.target = "_blank";
        movieLink.textContent="See More"
        movieDiv.append(moviePoster, movieTitle, movieYear, movieLink)
        output.appendChild(movieDiv)
    
    })

}
