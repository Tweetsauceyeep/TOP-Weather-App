let content = document.querySelector('#content')
let submitButton = document.querySelector('#submit')
let searchForm = document.querySelector('#input')
async function apiCall(location) {
  let results = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=635d5ac6bf50d18d320d3ac95935507b`)
  let weatherData = await results.json()
  console.log(weatherData)
  console.log(weatherData.name)
  console.log(weatherData.main.temp)
}

apiCall('London')
