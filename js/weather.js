// fetch('http://api.weatherapi.com/v1/current.json?key=e1ff17c57d5c474f8d6121301241007&q=Cordoba, spain&aqi=no')
// .then(response => response.json())
// .then(data => console.log(data));

const apiKey = 'e1ff17c57d5c474f8d6121301241007',
city = 'Cordoba',
country = 'spain',
apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city},${country}&aqi=no`;

// Fetch a la api
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    weatherDiv = document.getElementById('weather-container');

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
      <img src="${icon}" alt="Weather Icon">
      <p>${tempC}°C</p>
      <p>Precipitaciones: ${precip} mm</p>
      <p>Humedad: ${humidity}%</p>
      <p>Viento: ${windKph} km/h</p>
      <h2>Previsión por horas</h2>
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
        const hourlyForecast = forecastData.forecast.forecastday[0].hour;
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