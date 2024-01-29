// Your task is to develop a dynamic dropdown component in React that allows users to select options from a list. The dropdown should be capable of adapting to changes in the available options, and the selected option should be displayed

// The options can be static or fetched from an external source. Implement the necessary logic to update the dropdown dynamically, handle user selections, and display the selected option.

import React, { useState } from 'react'

const Challenge36 = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const [options, setOptions] = useState([
        'Option 1',
        'Option 2',
        'Option 3'
    ])

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value)
    }
    return (
        <section className='landing-section'>
            <div className='row container'>
                <label htmlFor='dropdown' className='landing-heading'>
                    Select an option:
                </label>
                <select id='dropdown' onChange={handleSelectChange} value={selectedOption} className='select'>
                    {/* default option */}
                    <option>
                        Select an option
                    </option>
                    {/* dynamic render options from the state */}
                    {
                        options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>

                {
                    selectedOption && (
                        <p className='selectedOption'>
                            Selected Option: {selectedOption}
                        </p>
                    )
                }
            </div>
        </section>
    )
}

export default Challenge36