// Problem Statement
// You are provided with a React component named Challenge02. The goal of this challenge is to enhance the existing code to manage and display data fetched from an API.

// Instructions
// Fetch Data from API:

// Utilize the fetchData function to fetch data from the provided API endpoint (https://jsonplaceholder.typicode.com/users).
// Display the fetched data in the console using console.log(incomingData).
// Use useEffect Hook:

// Ensure that the data fetching is triggered when the component mounts using the useEffect hook.
// Display Component:

// Modify the component to render a list or any appropriate representation of the fetched data.
// Error Handling:

// Implement error handling in the fetchData function. If an error occurs during the API request, log the error message using console.error(error.message).


// Solution 👇

import React, {useEffect} from 'react'

const Challenge02 = () => {
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

export default Challenge02