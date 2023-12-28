// Create a dynamic form that allows users to add or remove input fields. Each input field should have a label, and the form should keep track of the values entered. Use the useCallback hook to memoize callback functions.


// The useCallback hook is a built-in hook in React that is used to memoize functions. It's particularly useful in scenarios where passing callbacks to child components or creating callback functions inside components can lead to unnecessary re-renders.

import React, { useState, useCallback } from 'react'

const Challenge21 = () => {


    const [fields, setFields] = useState([{ id: 1, value: '' }]);

    const addField = useCallback(() => {
        const newField = { id: fields.length + 1, value: '' };
        setFields([...fields, newField]);
    }, [fields])

    const removeField = useCallback((id)=>{
        const filterField = fields.filter((field) => field.id !== id);
        setFields(filterField);
    }, [fields])

    const handleInputChange = useCallback((id, value) => {
        const updatedFields = fields.map((field) =>
            field.id === id ? { ...field, value } : field);
        setFields(updatedFields)
    }, [fields])
    return (
        <div>
            <h1>
                Dynamic form
            </h1>
            {
                fields && fields.map((field) => (
                    <div key={field.id}>
                        <label>
                            {`Field ${field.id}:`}
                        </label>
                        <input
                            type='text'
                            value={field.value}
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                        />
                        <button onClick={()=> removeField(field.id)}>
                            Delete Field
                        </button>
                    </div>
                ))
            }
            <button onClick={addField}>
                Add Field
            </button>
        </div>
    )
}

export default Challenge21

