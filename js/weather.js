const API_KEY = "8683c2a565c9a9f06b98e6f4c9a7702f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((Response) =>
    Response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child ");
      const city = document.querySelector("#weather span:last-child ");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC / `;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
