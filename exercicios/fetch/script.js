function getWeatherData() {
    const container = document.querySelector(".forecast");

    fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
        .then((res) => res.json())
        .then((json) => container.textContent = `Resultado: ${json.properties.periods[1].shortForecast}`);
}