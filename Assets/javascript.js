var textbox = document.querySelectorAll("search");

// search.addEventListener("click");

fetch("https://api.openweathermap.org/data/2.5/forecast?q=Tucson&units=imperial&appid=7e663f4b1d9924a34d2b5f917f979be1")
.then(function(weather){
return weather.json()
}).then(function(data){
console.log(data)
console.log(data.city.coord.lat)


fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&appid=7e663f4b1d9924a34d2b5f917f979be1`)
.then(function(anything){
return anything.json()
})
// .then(function(UV){
  //console.log(UV)




})



// https://api.openweathermap.org/data/2.5/forecast?q=Tucson&appid=7e663f4b1d9924a34d2b5f917f979be1
//  https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=7e663f4b1d9924a34d2b5f917f979be1
//  https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//  https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}