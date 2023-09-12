const API_KEY = "32c147347912cad775b7a6038be87c75";

function loadPage() {
    document.querySelector(".input-city").innerHTML = "";
    searchCity('Teresina');
}

function populateWeatherData(weatherData) {
    document.querySelector(".text-city").innerHTML = `Tempo em ${weatherData.name}`;
    document.querySelector(".temp").innerHTML = `${Math.round(weatherData.main.temp)} °C`;
    document.querySelector(".text-weather").innerHTML = weatherData.weather[0].description;
    document.querySelector(".text-humidity").innerHTML = `Umidade: ${weatherData.main.humidity}%`;
    document.querySelector(".img-weather").src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
}

async function searchCity(cityName) {
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=pt_br&units=metric`).then( 
        response => response.json()
    );
    populateWeatherData(weatherData);
}

function btnSearchClick () {
    const cityName = document.querySelector(".input-city").value;
    searchCity(cityName);
}

window.onload = loadPage();