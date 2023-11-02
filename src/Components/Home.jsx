import React from 'react'
import {useLocation} from 'react-router-dom'
const Home = () => {
    const location = useLocation();
    console.log(location);
  return (
    <section className='landing-section'>
    <div className='row container'>
        <div className='landing-div'>
            <h1 className="landing-heading">
                {location.pathname.replace('/', '')}
            </h1>
            {
                location.pathname === '/home/useLocation' ? <h1 className='landing-heading'>Route Matched</h1> : <h1 className='landing-heading'>Route not matched</h1>
            }
        </div>
    </div>
</section>
  )
}

export default Home