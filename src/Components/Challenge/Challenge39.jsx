// You are tasked with building a React.js component for a multi-select search functionality. Users should be able to search and select multiple items from a list of options.

import React, {useState} from 'react';
import Select from 'react-select';

const Challenge39 = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const option = [
        {value: 'apple', label: 'Apple'},
        {value: 'banana', label: 'Banana'},
        {value: 'orange', label: 'Orange'},
        {value: 'grape', label: 'Grape'},
        {value: 'watermelon', label: 'Watermelon'},
    ]

    const handleChange = (selectedValue)=>{
        setSelectedOptions(selectedValue);
    }
  return (
    <div>
        <h2>
            Select Fruits:
        </h2>
        <Select
        isMulti
        options={option}
        value={selectedOptions}
        onChange={handleChange}
        placeholder="Search and select fruits...."
        />

        <div>
            <h3>
                Selected  Options are :

            </h3>
            <ul>
                {
                    selectedOptions.map((option)=>(
                        <li key={option.value}>
                            {
                                option.label
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Challenge39