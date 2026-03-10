let api_key = "22be15ee2e57af24a0a2144c2f8aa49d"
let api_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

let searchbox = document.querySelector(".search input")
let searchbtn = document.querySelector(".search button")
let weather_icon = document.querySelector(".weather-icon")

async function check_weather(city) {
    let response = await fetch(api_url + city + `&appid=${api_key}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        let data = await response.json();
    
    
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"

    if(data.weather[0].main.toLowerCase() == "clouds"){
        weather_icon.src = "images/clouds.png"
    }
    else if(data.weather[0].main.toLowerCase() == "rain"){
        weather_icon.src = "images/rain.png"
    }
    else if(data.weather[0].main.toLowerCase() == "clear"){
        weather_icon.src = "images/clear.png"
    }
    else if(data.weather[0].main.toLowerCase() == "drizzle"){
        weather_icon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main.toLowerCase() == "mist"){
        weather_icon.src = "images/mist.png"
    }
    else if(data.weather[0].main.toLowerCase() == "snow"){
        weather_icon.src = "images/snow.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"

    }
    
    
}

searchbtn.addEventListener("click", ()=>{
    check_weather(searchbox.value)
})
