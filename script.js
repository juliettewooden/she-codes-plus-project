let now = new Date();
let h3 = document.querySelector("h3");
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
h3.innerHTML = `${day} ${hour}:${minutes}`;

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
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = `Wind: ${response.data.wind.speed}mph`;
}
