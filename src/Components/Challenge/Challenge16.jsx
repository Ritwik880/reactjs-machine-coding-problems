// Develop a React component that demonstrates the infinite scroll feature.

import React, { useState, useEffect } from 'react'

const Challenge16 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`);
            const incomingData = await response.json();
            setData((prev)=> [...prev, ...incomingData])
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error.message);
        }
    }
   


    const handleScroll = ()=>{
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
            setLoading(true);
            setPage((prev)=> prev +1);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
    
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    
    return (
        <section className="landing">
            <div className="row container">
                <h1 className='landing-heading'>
                    Infinite Scroll:
                </h1>
                {
                    data && data.map((item) => (
                        <div key={item.id}>
                            <h3 className="heading">
                                Title: {item.title}
                            </h3>
                        </div>
                    ))
                }
                {
                    loading && <p className='loading'>
                        Loading...
                    </p>
                }
            </div>
        </section>
    )
}

export default Challenge16