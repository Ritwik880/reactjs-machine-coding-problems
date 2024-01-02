// Use the React Js and hooks to manage the theme of your application. Allow users to toggle between light and dark themes.

import React, {useState, useEffect} from 'react'

const lightTheme = {
    backgroundColor: '#fff',
    color: '#333'
}

const darkTheme = {
    backgroundColor: '#333',
    color: '#fff'
}
const Challenge17 = () => {
    //creating a use state
    const [theme, setTheme] = useState(lightTheme);

    //creating a function to toggle between themes
    const toggleTheme = ()=>{
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    }

    //check the users preference on initial load
    useEffect(() => {
      const usersPreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(usersPreference ? darkTheme : lightTheme)
    }, [])

    //apply current theme to the entire app
    useEffect(() => {
      const body = document.querySelector('body');
      if (body) {
        Object.keys(theme).forEach((key)=>{
            body.style.setProperty(`--${key}`, theme[key]);
        })
      }
    }, [theme])
    
    
  return (
    <section className="landing" style={{background: theme.backgroundColor, color: theme.color}}>
        <div className="row container">
            <h1 className="landing-heading" style={{color: theme.color}}>
                Theme toggle
            </h1>

            <button className="btn btn-primary button" onClick={toggleTheme}>
                Toggle
            </button>

            <p className="landing-heading mt-2" style={{color: theme.color}}>
                This is a theme changer application
            </p>
        </div>
    </section>
  )
}

export default Challenge17