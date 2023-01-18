function displayForecast(city) {
  let forecastEndpoint = getForecastEndpoint(city);

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let forecastList = data.list;

      let weatherForecast = document.querySelector(".weather-forecast");
      weatherForecast.innerHTML = "";

      forecastList.forEach((forecast) => {
        console.log(forecast);
        const { dt, main, weather } = forecast;
        const day = getDayOfTheWeek(dt);
        const hours = getHour(dt);
        const weatherIcon = getWeatherIcon(weather[0].icon);
        const temperature = Math.round(main.temp);
        const realFeel = Math.round(main.feels_like);
        const description = weather[0].description;

        weatherForecast.innerHTML += `
        <h3>${day}</h3>
        <div class="forecast">
            <div class="time">${hours}</div>
            <img src="${weatherIcon}" alt="" />
            <strong>${temperature}°C</strong>
            <p>${description}</p>
            <p>Real feel: <strong>${realFeel}°C</strong></p>
            
        </div>
        `;
      });
    });
}
