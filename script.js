
const subButton = document.querySelector(".City-submit")
const City = document.querySelector(".City")
const des = document.querySelector(".City-des")
const maxTemp = document.querySelector(".max-Temp")
const minTemp = document.querySelector(".min-Temp")
const windSpeed = document.querySelector(".City-WindSpeed")
const MainDate = new Date()
const DateDay = document.querySelector(".Date-day")
const DateDate = document.querySelector(".Date-Date")
const WeatherMain = document.querySelector(".Weather-Main")
const WeatherTemp = document.querySelector(".Weather-temp")

const DateDay1 = MainDate.getDate().toString().padStart(2, "0")
const DateMonth = (MainDate.getMonth()+ 1).toString().padStart(2, "0") 
const DateYear = MainDate.getFullYear().toString()

DateDate.textContent = `${DateMonth}/${DateDay1}/${DateYear}`


switch(MainDate.getDay()){
    case 1:{
        DateDay.textContent = "MONDAY"
        break
    }
    case 2:{
        DateDay.textContent = "TUESDAY"
        break
    }
    case 3:{
        DateDay.textContent = "WENDNESDAY"
        break
    }
    case 4:{
        DateDay.textContent = "THURSDAY"
        break
    }
    case 5:{
        DateDay.textContent = "FIRDAY"
        break
    }
    case 6:{
        DateDay.textContent = "SATURDAY"
        break
    }
    case 0:{
        DateDay.textContent = "SUNDAY"
        break
    }
}

console.log(MainDate.getDay())

const getWeather = async function(city){
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=423cc6de3caf91b9480345c5aed9fc11&units=metric`)
    const weatherData = await res.json()
    if(weatherData.name){
        City.textContent = weatherData.name
        maxTemp.innerHTML = `${weatherData.main.temp_max}  <i class="fa-solid fa-arrow-up"></i>`
        minTemp.innerHTML = `${weatherData.main.temp_min}  <i class="fa-solid fa-arrow-down"></i>`
        windSpeed.textContent = `${weatherData.wind.speed}km/h`
        WeatherMain.textContent = weatherData.weather[0].main
        WeatherTemp.textContent = weatherData.main.temp
        
    }else{
        City.textContent = "City not found"
        maxTemp.textContent = 0
        minTemp.textContent = 0
        windSpeed.textContent = `0km/h`
        WeatherMain.textContent = ""
        WeatherTemp.textContent = ""
    }
    console.log(weatherData)
}

subButton.addEventListener("click", function(){
    const CityInput = document.querySelector(".City-input").value.trim()
    getWeather(CityInput)
})