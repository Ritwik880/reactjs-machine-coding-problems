// 

import React, {useEffect} from 'react'

const FetchAPI = () => {
  const API_ENDPOINT = `https://jsonplaceholder.typicode.com/users`;

  const fetchData = async (uri)=>{
    try {
      const response = await fetch(uri);
      const incomingData = await response.json();
      console.log(incomingData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchData(API_ENDPOINT)
  }, [])
  
  return (
    <div>FetchAPI</div>
  )
}

export default FetchAPI