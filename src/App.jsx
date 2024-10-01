import './index.css'
import {useState} from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { fetchWeatherData } from './services/WeatherService.jsx'
import ErrorMessage from './components/ErrorMessage'


  function App() {
    const[weatherData, setWeatherData] = useState(null);
    const[error, setError] = useState(null);

    const handleSearch = async(city) => {
      try {
        const data = await fetchWeatherData(city)
        setWeatherData(data)
        setError(null)
        
      } catch (error) {
        setError('City not found or network error')
        setWeatherData(null)
      }
    }

  
  return (
    <div className="container mx-auto p-4">
      <h1 className='text-4xl font-bold text-center mb-6 bg-blue-200'>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <ErrorMessage message={error} />
      <WeatherCard data={weatherData}/>
    </div>
  )
}

export default App
