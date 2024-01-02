import React, {useState, useEffect} from 'react'

const useLocalStorage = (key, intialValue) => {

    const storedValue = JSON.parse(localStorage.getItem(key)) || intialValue;
    const [value, setValue] = useState(storedValue);

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    
  return [value, setValue]
}

export default useLocalStorage