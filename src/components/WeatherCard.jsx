
const WeatherCard = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="p-4 bg-pink-500 shadow-lg rounded-lg text-center">
     
      <img src={data.icon} alt="weather-icon" className="w-20 mx-auto" />

     
      <h1 className="text-2xl font-bold">{data.temp}°C</h1>
      <h2 className="text-lg">{data.city}</h2>

     
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
      
          <img src={data.humidity.icon} alt="humidity-icon" className="w-6 mr-2" />
          <p className="text-white">Humidity: {data.humidity.value}%</p>
        </div>
        
        <div className="flex items-center">
         
          <img src={data.windSpeed.icon} alt="wind-icon" className="w-6 mr-2" />
          <p className="text-white">Wind: {data.windSpeed.value} km/h</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
