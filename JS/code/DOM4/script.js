const movies = [
	{
		url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/250px-RRR_Poster.jpg",
		title: "RRR",
	},
	{
		url: "https://m.media-amazon.com/images/S/pv-target-images/c375e2d530a3c1bb5fdd18e372370baba44a8cadcb8465dc060fb4437905a1a3.jpg",
		title: "KGF",
	},
	{
		url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
		title: "salaar",
	},
]
function displayData ()
{
    movies.forEach((val,i) =>
    {
       const movieDiv = document.createElement("div")
        const movieImage = document.createElement("img")
        movieImage.src = val.url;
        movieImage.alt = val.title;
        movieImage.height='200'
        const movieiTltle = document.createElement("h1")
        movieiTltle.textContent = val.title;
        movieDiv.append(movieImage,movieiTltle)
        document.getElementById('main').append(movieDiv);
    })
 
}
displayData();