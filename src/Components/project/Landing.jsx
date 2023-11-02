import React from 'react'
import useApi from './useApi'

const Landing = () => {
    const {users, loading} = useApi();
    console.log(users);
  return (
    <div>Landing</div>
  )
}

export default Landing