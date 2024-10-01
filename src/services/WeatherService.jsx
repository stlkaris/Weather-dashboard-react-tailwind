import axios from "axios"


const API_KEY = '893f7f24ae8b946f034829ea212dd91f'

    export const fetchWeatherData = async(city) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    
  const {temp, humidity} = response.data.main;
  const {speed} = response.data.wind;
 const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
 
    return {
       city: response.data.name,
       temp: Math.round(temp),
       humidity,
       windSpeed:Math.round(speed),
       icon,
    }
}

export default fetchWeatherData
