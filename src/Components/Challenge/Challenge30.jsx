import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import axios from 'axios';
import '../../Quote.css';

const QuoteGenerator = () => {
    const [randomQuote, setRandomQuote] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        generateRandomQuote();
    }, []);

    const generateRandomQuote = async () => {
        try {
            setLoading(true); // Set loading to true when fetching
            const response = await axios.get('https://api.quotable.io/random');
            const { content, author } = response.data;
            const selectedQuote = `${content} - ${author}`;
            setRandomQuote(selectedQuote);
        } catch (error) {
            console.error('Error fetching quote:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching, regardless of success or error
        }
    };

    return (
        <section className='landing-section'>
            <div className="row container">
                <div className="quote-div">
                    <h1 className='landing-heading'>Random Quotes</h1>
                    {loading ? (
                        <div className="loading-spinner">
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="color-ring-loading"
                                wrapperStyle={{}}
                                wrapperClass="color-ring-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </div>
                    ) : (
                        <>
                            <p className='para'>{randomQuote}</p>
                            <button onClick={generateRandomQuote} className='btn btn-dark'>Get Quote</button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default QuoteGenerator;
