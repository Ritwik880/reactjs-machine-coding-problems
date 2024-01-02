// Create a special tool in React, called useLocalStorage, that helps easily connect to an API and store data in a way that works smoothly with different parts of my website?


// localStorage -> The localStorage object allows you to save key/value pairs in the browser.

// The data stored is not deleted when the browser session ends, and it persists even after closing and reopening the browser.

import React from 'react'
import useLocalStorage from '../react-custom-hook/useLocalStorage'
const Challenge14 = () => {
    const [data, setData] = useLocalStorage('myData', []);

    const fetchData = async ()=>{
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const newData = await response.json();
            setData(newData);
        } catch (error) {
            console.error(error.message);
        }
    }
  return (
    <div>
        <button className='btn btn-primary' onClick={fetchData}>
            Fetch Data
        </button>
        <p>
            Data: {
                JSON.stringify(data)
            }
        </p>
    </div>
  )
}

export default Challenge14