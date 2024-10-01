
const WeatherCard = ({data}) => {
    if(!data) return null;
  return (
    <div className="p-4 bg-green-200 shadow-lg rounded-lg text-center">
      <img src={data.icon} alt="weather-icon" className="w-20 mx-auto" />
      <h1 className="text-2xl font-bold">{data.temp}°C</h1>
      <h2 className="text-lg">{data.city}</h2>
      <div className="flex justify-between mt-4">
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.windSpeed}km/h</p>
      </div>
    </div>
  )
}

export default WeatherCard
