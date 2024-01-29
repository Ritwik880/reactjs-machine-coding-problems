// Implement a Lazy Loading Image Component in React Js
// Create an image component that loads images lazily as they come into the viewport. Use the Intersection Observer API for efficient lazy loading.

// Lazy loading is a technique where images are loaded only when they come into the user's viewport, improving the initial page load performance.

import React, { useRef, useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className }) => {
    //ref to the image element
    const imageRef = useRef(null);

    //image is visible in the viewport
    const [isVisible, setIsVisible] = useState(false);

    //to set up the intersection observer when the component mounts
    useEffect(() => {
        //Intersection observer to track when the image is in the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    //the image is intersecting with the viewport
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        //stop observing once the image is loaded
                        observer.unobserve(entry.target)
                    }
                });
            },
            { threshold: 0.5 } //adjust this threshold on the basis of your needs
        );

        //start observing the image element
        if (imageRef.current) {
            observer.observe(imageRef.current)
        }

        //clean the observer when the components unmounts
        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current)
            }
        }
    }, [])

    return (
        <img
            ref={imageRef}
            src={isVisible ? src : ''}
            alt={alt}
            className={className}
        />
    )
}

const Challenge37 = () => {
    return (
        <div>
            <h1>Lazy Loading Image</h1>
            <LazyImage
                src='https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Lazy-loaded-image'
                className='lazy-image'
            />
        </div>
    )
}

export default Challenge37