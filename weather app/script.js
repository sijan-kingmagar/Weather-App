const apikey ="82bebc68cac95916e81998d0466a4fd6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-container input");
const searchBtn = document.querySelector(".search-icon");
const weatherIcon = document.querySelector(".weather-img");

async function checkWeather(city) {
  const responce = await fetch(apiUrl + city +`&appid=${apikey}`);
  if(responce.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".all").style.display="none";
  }
  else{
   var data = await responce.json();

   console.log(data);

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

   if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "cloudy.png";
   }else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "sun.png";
   }else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rainy.png";
   }else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "weather temp.jpg";
   }else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "mist.png"; 
}
document.querySelector(".all").style.display = "block";
document.querySelector(".error").style.display="none";
  }
}
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
  searchBox.value = "";
});


