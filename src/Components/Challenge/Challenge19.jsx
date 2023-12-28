// Your task is to create a React carousel component using functional components and React hooks. The carousel should be capable of displaying a series of images in a sequential manner, allowing users to navigate to the next or previous image manually. Additionally, the carousel should support automatic sliding, where the images change automatically after a specified time interval.

import React, { useState, useEffect } from 'react'

const Caraousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide()
        }, 1000)

        return () => clearInterval(intervalId)
    }, [currentIndex])


    return (
        <section className='landing-section'>
            <div className="row container">
                <div className="landing-div">
                    <button className='btn btn-primary' onClick={prevSlide}>
                        Previous
                    </button>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='landing-image' />
                    <button className='btn btn-primary' onClick={nextSlide}>
                        Next
                    </button>
                </div>
            </div>
        </section>
    )
}

const Challenge19 = () => {

    const imageUrls = [
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
    return (
        <Caraousel images={imageUrls} />
    )
}

export default Challenge19