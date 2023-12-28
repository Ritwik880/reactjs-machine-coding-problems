// Create a basic weather app using React which involves fetching weather data from a weather API and displaying it in your React application.

import React, { useState } from 'react'

const Challenge23 = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const apikey = `7593e3327d1a0a72f822d29a6633d396`;

    const getWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
            const data = await response.json();
            setWeatherData(data);
            console.log(data);
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <section className='landing-section'>
            <div className='row container'>
                <h2 className="landing-heading">
                    Weather App
                </h2>
                <div className="landing-form-div">
                    <input type="text" className='form-control input-box' placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)} />
                    <button className='btn btn-primary' onClick={getWeather}>
                        Get Weather
                    </button>

                    {
                        weatherData && (
                            <div>
                                <h3 className="landing-sub-heading">
                                    City: {weatherData?.name}, Country: {weatherData.sys ? weatherData.sys.country : 'India'}

                                </h3>
                                <p className="para">
                                    Temperature: {weatherData.main.temp}
                                </p>
                                <p className="para">
                                    Weather: {weatherData.weather[0].description}
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Challenge23