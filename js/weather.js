const API_KEY = '5f282239ac75ee8a0e8d01847c90956d';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ja&appid=${API_KEY}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}°`;
    });
}

function onGeoErr() {
  alert('すみません。位置情報が取得出来ませんでした。');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
