// Build a Search Autocomplete Component:
// Develop a search autocomplete component that provides suggestions based on user input. Fetch data asynchronously from an API.

import React, { useState, useEffect } from 'react'

const Challenge34 = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const getSuggestions = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`);
                const data = await response.json();
                setSuggestions(data);
                console.log(data);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }


        }
        //fetch suggestions only if the query is not empty
        if (query.trim() !== '') {
            getSuggestions();
        }
        else {
            setSuggestions([])
        }
    }, [query])


    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }
    return (
        <div className='search-autocomplete'>
            <input
                type='text'
                placeholder='Type to search...'
                value={query}
                onChange={handleInputChange}
            />
            {loading && <div>Loading....</div>}
            {
                suggestions.length > 0 && (
                    <ul>
                        {suggestions.map((user) => (
                            <li key={user.id}>
                                {user.name}
                            </li>
                        ))}

                    </ul>
                )
            }
        </div>
    )
}

export default Challenge34