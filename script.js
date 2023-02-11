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

    let city = document.getElementById("city")
    city.innerText = `${weather.name},${weather.sys.country}`

    let temperature = document.getElementById("temp")
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let minMaxTemp = document.getElementById('min-max')
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`


    let weatherType = document.getElementById('weather')
    weatherType.innerText = `${weather.weather[0].main}`

    let date = document.getElementById('date')
    let todayDate = new Date();
    date.innerText = dateManage(todayDate)


}

//Date manage
function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let year = dateArg.getFullYear()
    let month = months[dateArg.getMonth()]
    let date = dateArg.getDate()
    let day = days[dateArg.getDay()]

    return `${date}${month}(${day}), ${year}`
}