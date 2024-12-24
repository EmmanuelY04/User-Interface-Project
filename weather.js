
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '243acfb744cb4f695466b351db79e4b0' 
    
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.5073219&lon=-0.1276474&exclude=hourly,minutely&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            // Make sure you are accessing the correct data properties
            const dailyData = data.daily.slice(0, 7); // Get the next 7 days
            dailyData.forEach(day => {
                const date = new Date(day.dt * 1000);
                const temperature = day.temp.day; // thi is assuming 'temp' and 'day' are correct properties
                const conditions = day.weather[0].description; // this is to check your data structure in console
                const suitable = (day.weather[0].id === 800 || (day.weather[0].id >= 801 && day.weather[0].id <= 804) && temperature > 15) ? "Good for basketball." : "Not ideal for basketball.";

                const dayDiv = document.createElement('div');
                dayDiv.innerHTML = `<b>${date.toDateString()}</b>: ${conditions}, ${temperature}°C - ${suitable}`;
                weatherDiv.appendChild(dayDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').innerText = 'Failed to retrieve weather data: ' + error.message;
        });
});
