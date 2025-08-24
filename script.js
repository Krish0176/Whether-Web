const API_KEY = "84641794ddec3146647234536f204b15"; 
async function getWeather() {
    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("result");

    if (city === "") {
        resultDiv.innerHTML = "❌ Please enter a city name!";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            resultDiv.innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
                <p>🌡️ Temp: ${temp}°C</p>
                <p>💧 Humidity: ${humidity}%</p>
                <p>☁️ Condition: ${description}</p>
            `;
        } else {
            resultDiv.innerHTML = "❌ City not found!";
        }
    } catch (error) {
        resultDiv.innerHTML = "⚠️ Error fetching data!";
    }
}
