// create a React.js component that initiates an API call on each onChange event of an input field, dynamically updating its content based on the user's input?

import React, { useState } from 'react'

const Challenge22 = () => {
    const [inputVale, setInputVale] = useState('');
    const [apiData, setApiData] = useState(null);

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setInputVale(value);

        //make an api call only if the input value is not empty
        if (value.trim() !== '') {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const data = await response.json();

                const filterData = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
                setApiData(filterData);
                console.log(filterData);
            } catch (error) {
                console.error(error.message);
            }
        }
        else {
            //clear api data if input is empty
            setApiData(null);
        }

    }
    return (
        <section className='landing-section'>
            <div className="row container">
                <div className="form-div">
                    <h1 className="landing-heading">
                        Search:
                    </h1>
                    <input type="text" id='searchInput' placeholder='Type something...' className='form-control input-box' value={inputVale} onChange={handleInputChange} />
                </div>

                {
                    apiData && apiData.map((item => (
                        <div className='col-md-4' key={item.id}>
                            <div className='card card-wrap mb-2'>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {item.name}
                                    </h5>
                                    <p className="card-text">
                                        {item.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )))
                }
            </div>
        </section>
    )
}

export default Challenge22
