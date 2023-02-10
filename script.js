// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//849247e8eb57bb8cdfc21ae87b5c89b0


const weatherApi = {
    key: "849247e8eb57bb8cdfc21ae87b5c89b0",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


const searchInputBox = document.getElementById('input-box')

searchInputBox.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value)
        getWeatherReport(searchInputBox.value)

    }




})


//Event listner Function on keyPress

//Get Weather Report


function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}`)
        .then(weather => {
            return weather.json()

        }).then(showWeatherReport)
}

//Show Weather Report

function showWeatherReport(weather) {
    console.log(weather)
}

//Date manage