const getWeatherInfo = () => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  return fetch(API_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const iconurl =
        'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
      iconImg.setAttribute('src', iconurl);
      locationName.textContent = data.name;
      temperature.textContent = Math.round(data.main.temp);
      description.textContent = data.weather[0].description;
      console.log(data);
    });
};
