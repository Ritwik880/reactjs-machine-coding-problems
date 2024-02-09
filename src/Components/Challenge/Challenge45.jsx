// Build a traffic light in React js and React Hooks where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

// Red light: 4000ms
// Yellow light: 500ms
// Green light: 3000ms

import React, {useState, useEffect} from 'react'

const Challenge45 = () => {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (light) {
        case 'red':
          setLight('green');
          setTimeout(()=> setLight('yellow'), 3000)
          break;
        case 'yellow':
          setLight('red');
          break;
        case 'green':
          setLight('yellow');
          break;
        default:
          break;
      }
    }, getDuration(light));

    return ()=> clearTimeout(timer);
  }, [light])

  const getDuration = (currentLight) =>{
    switch (currentLight) {
      case 'red':
        return 4000;
      case 'yellow':
        return 500;
      case 'green':
        return 3000;
      default:
        return 0;
    }
  }
  

  return (
    <div className='traffic-light'>
      <div className={`light red ${light === 'red'? 'active': ''}`}></div>
      <div className={`light yellow ${light === 'yellow'? 'active': ''}`}></div>
      <div className={`light green ${light === 'green'? 'active': ''}`}></div>
    </div>
  )
}

export default Challenge45