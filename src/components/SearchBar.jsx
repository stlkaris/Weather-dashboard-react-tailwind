import {useState} from 'react'


const SearchBar = ({onSearch}) => {
    const [city, setCity] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(city)
    }



  return (
    <form onSubmit={handleSearch} className='flex space-x-2 justify-center'>
        <input 
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City Name"
        className='p-2 rounded border bg-blue-200'
        />
        <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Search</button>
    </form>
  )
}

export default SearchBar
