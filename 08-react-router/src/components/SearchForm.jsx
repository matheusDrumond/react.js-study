import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/search?q=' + query)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Digite o produto que você procura...'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        />
        <input type='submit' value='buscar'/>
    </form>
  )
}

export default SearchForm