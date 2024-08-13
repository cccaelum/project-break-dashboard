// fetch('http://api.weatherapi.com/v1/current.json?key=e1ff17c57d5c474f8d6121301241007&q=Cordoba, spain&aqi=no')
// .then(response => response.json())
// .then(data => console.log(data));

const apiKey = 'e1ff17c57d5c474f8d6121301241007';
const weatherDiv = document.getElementById('weather-container');


const getWeather = (locationObj) => {
const { city, country } = locationObj; // Desestructurar el objeto
console.log(`Fetching weather for ${city}, ${country}`);
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city},${country}&aqi=no`;

// Fetch a la api
fetch(apiUrl)
.then(response => response.json())
.then(data => {
  console.log(data);
  const location = `${data.location.name}, ${data.location.country}`,
  condition = data.current.condition.text,
  icon = data.current.condition.icon,
  tempC = data.current.temp_c,
  precip = data.current.precip_mm,
  humidity = data.current.humidity,
  windKph = data.current.wind_kph;

  const currentWeather = `
    <h1>${location}</h1>
    <p>${condition}</p>
    <div class='current-weather'>
      <div class='grados'>
      <img src="${icon}" alt="Weather Icon" class='weather-icon'>
      <p>${tempC}°C</p>
      </div>
      <ul class='otros-datos'>
        <li>Precipitaciones: ${precip} mm</li>
        <li>Humedad: ${humidity}%</li>
        <li>Viento: ${windKph} km/h</li>
      </ul>
    </div>
    <div id="hourly-forecast">
      <ul id="hour-list"></ul>
    </div>
  `;

  weatherDiv.innerHTML = currentWeather;

// Fetch prevision por horas
  const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city},${country}&aqi=no&days=1`;
  fetch(forecastUrl)
    .then(response => response.json())
    .then(forecastData => {
      const hourlyForecast = forecastData.forecast.forecastday[0].hour; // accedemos al primer elemento del array forecastday, [0], que el primer día de la previsión
      const hourUl = document.getElementById('hour-list');

      hourlyForecast.forEach(hour => {
        const hourLi = document.createElement('li');
        hourLi.className = 'forecast-item';
        hourLi.innerHTML = `
          <p>${hour.time.split(' ')[1]}</p> 
          <img src="${hour.condition.icon}" alt="Weather Icon">
          <p>${hour.temp_c}°C</p>
        `;
        hourUl.appendChild(hourLi);
      });
    })
    .catch(error => console.error('Error al obtener la previsión por horas:', error));
})
.catch(error => console.error('Error al obtener los datos:', error));
};

// convertir el input en un objeto
const locationToObj = (inputValue) => {
  const [city, country] = inputValue.split(','); //divide la cadena inputValue en un array utilizando la coma (,), por ejemplo ["Cordoba", "Spain"]
  return { city, country }; // crea un objeto utilizando las variables city y country
};

// Manejar el envío del formulario
const cityForm = document.getElementById('city-form');
const locationInput = document.getElementById('location-input');

if (cityForm) {cityForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar que el formulario recargue la página
  const locationInputValue = locationInput.value;


  if (locationInputValue) {
    const locationObj = locationToObj(locationInputValue);
    getWeather(locationObj); 
    locationInput.value = ''; // Limpiar el campo de entrada
  }
});
}


// mostrar Cordoba por defecto
getWeather({ city: 'Cordoba', country: 'spain' });
