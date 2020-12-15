export default class WeatherService{

static gettingWeather() {
    return fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=53.69&lon=23.82&exclude=minutely,hourly,alerts&dt=1607609886469&units=metric&appid=6a1e02243bf5e10482ed1ea469dc44e6`)
}

static gettingPrevWeather(){
    const timestamp = Math.round(Date.now() / 1000) - 86400
    return fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=53.69&lon=23,82&dt=${timestamp}&appid=6a1e02243bf5e10482ed1ea469dc44e6&units=metric`)
}

}

