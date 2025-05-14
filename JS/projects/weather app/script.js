function fetchData ()
{
    const inp = document.getElementById('inp').value
    fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${inp}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`,
    )
        .then((res) => res.json())
        .then((data) => displayData(data.list[0]))
        .catch((err) => console.log(err))
}
document.getElementById('btn').addEventListener('click', fetchData);
const output = document.getElementById("output")
function displayData(d) {
	console.log(d)
	const latlong = document.createElement("p")
	latlong.textContent =
		"latitude: " + d.coord.lat + ",longitude: " + d.coord.lon
	const temp = document.createElement("h2")
	temp.innerHTML = d.main.temp + "<sup>o</sup> c"
	const desc = document.createElement("p")
	desc.textContent = d.weather[0].description
	output.append(latlong, temp, desc)
}