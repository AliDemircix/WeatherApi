// import { getWeatherInfo } from './getWeatherInfo';
const locationName = document.querySelector('.location-timezone');
const temperature = document.querySelector('.temperature-degree');
const description = document.querySelector('.temperature-description');
const iconImg = document.querySelector('#wicon');
let lon;
let lat;
const API_KEY = '277c6d1cede61ce80d475b5bd9f80f67';

window.addEventListener('load', async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      // await getWeatherInfo();
      getWeatherInfo();
    });
  }
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
  setInterval(() => {
    iconImg.style.width = '100px';
    setTimeout(() => {
      iconImg.style.width = '60px';
    }, 3500);
  }, 3000);
});
