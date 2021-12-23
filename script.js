let content = document.querySelector('#content');
let submitButton = document.getElementById('submit');
let searchForm = document.getElementById('form');

async function apiCall(location) {
  try {
    let results = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=635d5ac6bf50d18d320d3ac95935507b`,
      {mode: 'cors'},
    );
    let weatherData = await results.json();
    console.log(weatherData);
    processData(weatherData);
  } catch (error) {
    console.log(error);
  }
}

// Processes data from the API to stuff that i need
function processData(data) {
  let name = data.name;
  let temperature = Math.round(data.main.temp - 273);
  let weather = data.weather[0].main;
  let description = data.weather[0].description;
  let container = document.createElement('div');
  container.id = 'container';
  content.appendChild(container);

  container.appendChild(createDiv(`Country: ${name}`));
  container.appendChild(createDiv(`Temperature: ${temperature} °C`));
  container.appendChild(createDiv(`Weather: ${weather}`));
  container.appendChild(createDiv(`Description: ${description}`));
}

function createDiv(text) {
  let newDiv = document.createElement('div');
  newDiv.textContent = text;
  return newDiv;
}

function handleSearchInput() {
    let query = searchForm.elements[0].value;
    apiCall(query);
  }
submitButton.addEventListener('click', handleSearchInput);
