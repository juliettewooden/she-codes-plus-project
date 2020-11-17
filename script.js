let now = new Date();
let dayTime = document.querySelector("#day-time");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
dayTime.innerHTML = `${day} ${hour}:${minutes}`;

function enterCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let apiKey = "2e65e506db0f4f57568714e0acc190bb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=2e65e506db0f4f57568714e0acc190bb&units=metric`;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `${cityInput.value}`;
  axios.get(apiUrl).then(showCurrentCityTemp);
}

let form = document.querySelector("form");
form.addEventListener("submit", enterCity);

function showCurrentCityTemp(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#city-temperature");
  currentTemp.innerHTML = `${temperature}°C`;
  let description = document.querySelector("#description");
  description.innerHTML = `${response.data.weather[0].description}`;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = `Wind: ${response.data.wind.speed}mph`;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}