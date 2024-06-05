const apiKey = 'f8e322cfdd65c196dfdcff149b113120';
const city = 'Kyiv';
const weatherDiv = document.getElementById('weather');

async function fetchWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  return data;
}

function displayWeather(data) {
  weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

async function updateWeather() {
  const weatherData = await fetchWeather();
  localStorage.setItem('weatherData', JSON.stringify(weatherData));
  localStorage.setItem('lastFetchTime', Date.now());
  displayWeather(weatherData);
}

function checkWeather() {
  const lastFetchTime = localStorage.getItem('lastFetchTime');
  const weatherData = localStorage.getItem('weatherData');

  if (lastFetchTime && weatherData) {
    const currentTime = Date.now();
    const timeDifference = currentTime - lastFetchTime;

    if (timeDifference < 2 * 60 * 60 * 1000) {
      displayWeather(JSON.parse(weatherData));
      return;
    }
  }

  updateWeather();
}

document.addEventListener('DOMContentLoaded', checkWeather);
