// Implement Logic for URL Shortner

import axios from 'axios';
import React, { useState } from 'react';

function Challenge07() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenUrl, setShortenUrl] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.post('https://api-ssl.bitly.com/v4/shorten', {
                long_url: originalUrl,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'a6d50d6385c75ff31cf33fd17cac003f4f5f6d45' //YOUR_API_KEY
                }
            });

            setShortenUrl(response.data.id);
            console.log(response.data.id);

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <section className="landing-section">
            <div className="row container">
                <div className="landing-box">
                    <h2 className='landing-heading'>URL Shortener</h2>
                    <div>
                        <label className='form-label'>Enter URL:</label>
                        <input
                            className="form-control"
                            placeholder='https://example.com'
                            type="text"
                            value={originalUrl}
                            onChange={(e) => setOriginalUrl(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-primary mt-3' onClick={handleClick}>Shorten</button>

                    {
                        shortenUrl && (
                            <div className='mt-3'>
                                <h4 className='landing-sub-heading'>Shorten URL:</h4>
                                <button className='btn btn-primary'>
                                    {shortenUrl}
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Challenge07;
