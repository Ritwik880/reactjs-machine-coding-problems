import React from 'react'
// import { useHistory } from 'react-router-dom'
const History = () => {
    // const history = useHistory();
    // console.log(history);
    const handleNaviagte = ()=>{
        // history.goBack('/landing');
        // window.location.reload();
    }
  return (
    <section className='landing-section'>
    <div className='row container'>
        <div className='landing-div'>
            <h1 className='landing-heading'>useHistory</h1>
            <button onClick={handleNaviagte} className='btn btn-primary'>Change route</button>
        </div>
    </div>
</section>
  )
}

export default History