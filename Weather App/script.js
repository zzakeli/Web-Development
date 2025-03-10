const API_KEY = `002db930ab5c51de69ab0c08fb3ce67b`;
document.getElementById("input-city").value = "";

const getCity = () =>{
    return document.getElementById("input-city").value;
}

async function fetchWeather(){
    const weatherType = document.getElementById("weather-type");
    const weatherBox = document.getElementById("weather-box");
    try{
        const city = document.getElementById("input-city");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getCity()},PH&units=metric&appid=${API_KEY}`;    
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200){
        getWeather(data,city,weatherType,weatherBox);
        return;
    }
    weatherType.textContent = "N/A";
    weatherBox.innerHTML = '<img class="weather-image" id="weather-image" src="weather/cloud-connection.png">';
    city.style.backgroundColor = 'rgb(255, 120, 120)';

    const weatherLabel = document.getElementById("weather-label");
    weatherLabel.textContent = `Weather`;
    }catch (error){
        console.log("not working");
    }
}

const getWeather = (data, city, weatherType, weatherBox) =>{
    let weather = data.weather[0].description;
    const weatherLabel = document.getElementById("weather-label");
    let weatherString = null;

    if(weather.includes("clouds")){
        weatherType.textContent = "Cloudy";
        weatherString = "cloudy";
    }else if(weather.includes("rain")){
        weatherType.textContent = "Rainy";
        weatherString = "rainy";
    }else if(weather.includes("clear sky")){
        weatherType.textContent = "Clear";
        weatherString = "sunny";
    }else if(weather.includes("thunderstorm")){
        weatherType.textContent = "Thunderstorm";
        weatherString = "rainy";
    }

    weatherBox.innerHTML = `
    <img class="weather-image" id="weather-image" src="weather/${weatherString}.png">
    `;

    let cityText = null;
    cityText = city.value.toLowerCase();
    cityText = cityText[0].toUpperCase() + cityText.slice(1, cityText.length);
    weatherLabel.textContent = `Weather, ${cityText}`;

}

function setBackgroundDefault(){
    const cityText = document.getElementById("input-city");
    cityText.style.backgroundColor = 'rgb(255, 255, 255)';
}