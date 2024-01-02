import React, {useState, useEffect} from 'react'

const useApi = () => {
    const URL = 'https://randomuser.me/api/?results=19';
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async (uri)=>{
        try {
            setLoading(true);
            const response = await fetch(uri);
            const data = await response.json();
            console.log(data);
            // setUsers
            setLoading(false);
            
        } catch (error) {
            setLoading(false);
            console.log(error.message);
        }
    }

    useEffect(() => {
      getUsers(URL);
    }, [])
    
  return {users, loading}
}

export default useApi