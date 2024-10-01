
import axios from "axios";
import clearIcon from "../assets/clear.png"; 
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import drizzleIcon from "../assets/drizzle.png";
import cloudIcon from "../assets/cloud.png";
import humidityIcon from "../assets/humidity.png"; 
import windIcon from "../assets/wind.png"; 

const API_KEY = '893f7f24ae8b946f034829ea212dd91f';

const weatherIcons = {
  "01d": clearIcon,
  "01n": clearIcon,
  "02d": cloudIcon,
  "02n": cloudIcon,
  "03d": cloudIcon,
  "03n": cloudIcon,
  "04d": drizzleIcon,
  "04n": drizzleIcon,
  "09d": rainIcon,
  "09n": rainIcon,
  "10d": rainIcon,
  "10n": rainIcon,
  "13d": snowIcon,
  "13n": snowIcon,
};

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const { temp, humidity } = response.data.main;
    const { speed } = response.data.wind;

    const weatherCode = response.data.weather[0].icon;
    const icon = weatherIcons[weatherCode] || clearIcon;

    return {
      city: response.data.name,
      temp: Math.round(temp),
      humidity: {
        value: humidity,
        icon: humidityIcon, 
      },
      windSpeed: {
        value: Math.round(speed),
        icon: windIcon, 
      },
      icon, 
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

export default fetchWeatherData;
