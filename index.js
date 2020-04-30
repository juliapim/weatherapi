let token = '52fa55210faa4816f21af863edfe5320';
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
console.log(baseUrl)
const result = document.querySelector('.result');
const button = document.querySelector('button');




  function submit(e) {
    e.preventDefault();
    let cityToSearch = document.querySelector('input');
    fetch(`${baseUrl}?q=${cityToSearch.value}&APPID=${token}`)
        .then(weatherResponse => {
            console.log(weatherResponse);
            return weatherResponse.json();
        }).then(weatherData => {
            console.log(weatherData);

            let tempCelsius = Math.round(weatherData.main.temp - 273);
            let icon = weatherData.weather[0].icon;
                if(tempCelsius > 40){
                    result.innerHTML +=
                    `<section class='red'>
                <h2>${weatherData.name}</h2>
                <p>${tempCelsius}°C</p>
                <span>${weatherData.weather[0].description}</span>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">

            </section>`


            } if (tempCelsius >= 35 && tempCelsius<40){
                result.innerHTML +=
                `<section class='orange'>
                <h2>${weatherData.name}</h2>
                <p>${Math.round(weatherData.main.temp - 273)}°C</p>
                <span>${tempCelsius}</span>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">

            </section>`
            } if(tempCelsius >= 30 && tempCelsius < 35){
                result.innerHTML +=
                `<section class='yellow'>
                <h2>${weatherData.name}</h2>
                <p>${tempCelsius}°C</p>
                <span>${weatherData.weather[0].description}</span>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">

            </section>`
            } if(tempCelsius >= 20 && tempCelsius<30){
                result.innerHTML +=
                `<section class='deepskyblue'>
                <h2>${weatherData.name}</h2>
                <p>${tempCelsius}°C</p>
                <span>${weatherData.weather[0].description}</span>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">

            </section>`
            } if(tempCelsius >= 10 && tempCelsius<20){
                result.innerHTML +=
                `<section class='purple'>
                <h2>${weatherData.name}</h2>
                <p>${tempCelsius}°C</p>
                <span>${weatherData.weather[0].description}</span>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">

            </section>`
            } if(tempCelsius === 0){
                result.innerHTML +=
                `<section class='grey'>
                <h2>${weatherData.name}</h2>
                <p>${tempCelsius}°C</p>
                <span>${weatherData.weather[0].description}</span>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">

            </section>`
            }if(tempCelsius < 0){
                result.innerHTML +=
                `<section class='white'>
                <h2>${weatherData.name}</h2>
                <p>${tempCelsius}°C</p>
                <span>${weatherData.weather[0].description}</span>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">

            </section>`
            }


        }).catch(()=>{
            alert('This name is not a valid location.')
        });


}


button.addEventListener('click', submit)