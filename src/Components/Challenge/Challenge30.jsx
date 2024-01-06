// Create a Random Quote Generator using React js and React Hooks

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import '../../Quote.css';

const Challenge30 = () => {
    const [randomQuote, setRandomQuote] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        generateRandomQuote();
    }, [])

    const generateRandomQuote = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://api.quotable.io/random');
            const { content, author } = response.data;
            const selectedQuote = `${content} - ${author}`;
            setRandomQuote(selectedQuote);
        } catch (error) {
            console.error('Error fetching quote:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="landing-section">
            <div className="row container">
                <div className="quote-div">
                    <h1 className="landing-heading">
                        Random Quotes
                    </h1>
                    {
                        loading ? (
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="color-ring-loading"
                                wrapperStyle={{}}
                                wrapperClass="color-ring-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        ) : (
                            <>
                                <p className='para'>
                                    {randomQuote}
                                </p>
                                <button onClick={generateRandomQuote} className='btn btn-dark'>
                                    Get Quote
                                </button>
                            </>
                        )
                    }

                </div>
            </div>
        </section>
    )
}

export default Challenge30