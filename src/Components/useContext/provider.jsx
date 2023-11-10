import { useState, useEffect } from "react";
import MyContext from "./context";

const DataProvider = ({ children }) => {

  // const data = 'I am from the useContext Hook';

  const [items, setItems] = useState([]);

  const getData = async ()=>{
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    setItems(data);
   } catch (error) {
    console.error(error.message);
   }
  }
  useEffect(() => {
    getData();
  }, [])
  


  return <MyContext.Provider value={items}>
    {children}
  </MyContext.Provider>
}

export default DataProvider