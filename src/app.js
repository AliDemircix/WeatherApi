import { getWeatherInfo } from './getWeatherInfo.js';

const iconImg = document.querySelector('#wicon');
let lon;
let lat;

window.addEventListener('load', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      await getWeatherInfo(lon, lat, iconImg);
    });
  }
  setInterval(() => {
    iconImg.style.width = '100px';
    setTimeout(() => {
      iconImg.style.width = '60px';
    }, 3500);
  }, 3000);
});
