'use strict';

/*
01 - Initialize api url and credentials, and execute the api using fetch function and display results.
*/

const api = {
    key: "813570f361c3eadf12ad920eccf8d5e7",
    url: "https://api.openweathermap.org/data/2.5/"
}
const searchbox = document.querySelector('.search-box');

function getResults(query) {
    fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
        return weather.json();
    }).then(displayResults);
}

/*
02 - Fetch the json data and parse and append it on the screen with respective elements.
*/

function displayResults(weather) {
    document.querySelector('.location .city').innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    document.querySelector('.location .date').innerText = dateBuilder(now);
    document.querySelector('.current .temp').innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    document.querySelector('.current .weather').innerText = weather.weather[0].main;
    document.querySelector('.hi-low').innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

/*
03 - Datebuilder is a helper function to fetch the date and format it in a readable format.
*/

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}

/*
04 - When the input field is changed, it should trigger the getResults function with the field's value.
*/

searchbox.addEventListener('change', () => {getResults(searchbox.value);});