import React, {useState, useEffect} from 'react'

const useApi = () => {
    const apiURL = `https://restcountries.com/v3.1/all?fields=name`;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async (uri)=>{
        try {
            setLoading(true);
            const response = await fetch(uri);
            const incomingData = await response.json();
            setData(incomingData);

        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
        }
    }
    useEffect(() => {
      fetchData(apiURL);
    }, [])
    
  return {data, loading, error}
}

export default useApi