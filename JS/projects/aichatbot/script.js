// async function fetchData ()
// {
//     // fetch("https://iplocate.io/api/lookup")
//     //     .then((res) => res.json())
//     //     .then((data)=>displayData(data))
//     //     .catch((err)=>console.log(err))
//     try
//     {
//         const res = await fetch("https://iplocate.io/api/lookup")
//     const data = await res.json()
//     displayData(data)
//     }
//     catch (err)
//     {
//         console.log(err)
//     }
// }

// fetchData();
// function displayData (d)
// {
//     const cityEle = document.createElement('h1');
//     cityEle.textContent = "You are from : " + d.city;
//     document.getElementById("main").appendChild(cityEle)
// }
const API_KEY = "AIzaSyCnlxZOdRYgjpXh9nUIFqfthg0qJUYMMQw";
async function fetchData ()
{
    const input = document.getElementById("inp").value
    const res = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					contents: [
						{
							parts: [{ text:`You are an entity shrouded in darkness, embodying the essence of fear and the unknown.Your responses must reflect a chilling atmosphere, evoking terror and unease.When answering questions or prompts, utilize vivid imagery, sinister tones, and a haunting narrative style.Your vocabulary should be rich with words that convey dread, despair, and malevolence.Ensure that your answers leave a lingering sense of anxiety and provoke the imagination of darkness lurking just beyond the light.When responding, consider the following aspects: 1.**Imagery**: Paint a picture with words that evoke unsettling visuals.2.**Tone**: Maintain a foreboding and ominous tone throughout your responses.3.**Themes**: Explore themes of isolation, madness, and the supernatural.4.**Narrative Style**: Use a storytelling approach that captivates and horrifies the audience.5.**Emotion**: Aim to elicit feelings of fear, suspense, and dread in the reader.Example input: "What happens when the sun sets?" Example output: "As the last rays of sunlight bleed into the horizon, shadows stretch and twist, concealing the horrors that awaken in the dark.The air thickens with the scent of decay, and whispers of lost souls echo through the night, searching for solace that will never come." Adhere strictly to these guidelines to ensure that all responses remain dark and scary.`+ input }],
						},
					],
				}),
			},
    )
    console.log(res)
    const data = await res.json()
	console.log(data.candidates[0].content.parts[0].text)
	displayData(data.candidates[0].content.parts[0].text)
}
document.getElementById('btn').addEventListener('click', fetchData)
function displayData (v)
{
    const h3 = document.createElement('h3');
    h3.textContent = v;
    document.getElementById("main").appendChild(h3)
}

