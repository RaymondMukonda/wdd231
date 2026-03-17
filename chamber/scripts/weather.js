const apiKey = "YOUR_API_KEY";

const url =
`https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=${apiKey}&units=metric`;

async function getWeather(){

const response = await fetch(url);

const data = await response.json();

document.querySelector("#weather").innerHTML = `
<p>${data.weather[0].description}</p>
<p>${data.main.temp}°C</p>
`;

}

getWeather();