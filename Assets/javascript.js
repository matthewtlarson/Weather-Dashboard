var cityName = document.getElementById("search");
var btn = document.getElementById("pressSearch");
var weather = document.querySelector("ul");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  var weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName.value +
    "&appid=b40af81dd3d94b19f0949cf426fd789a";
  console.log(event.target);
  fetch(weatherUrl)
    .then(function (taco) {
      return taco.json();
    })
    .then(function (data) {
      var list = document.createElement("li");
      console.log(data.main);
      var header = document.createElement("h3");
    });
  var weatherUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName.value +
    "&appid=b40af81dd3d94b19f0949cf426fd789a";
  console.log(event.target);
  fetch(weatherUrl)
    .then(function (weather) {
      return weather.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.list.length; i++) {
        const element = data.list[i];
        console.log(element);
    }
});
})