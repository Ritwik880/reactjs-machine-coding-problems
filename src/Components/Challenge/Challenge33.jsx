// Build a Dynamic Form Generator:

// Develop a dynamic form generator that takes a configuration object and dynamically renders a form based on the provided specifications.

import React, { useState } from 'react'

const Challenge33 = () => {
  const [formData, setFormData] = useState({
    fields: [{ name: '', value: '' }],
  });
  const addField = ()=>{
    setFormData({fields: [...formData.fields, {name: '', value: ''}]});
  }
  const removeField = (index) => {
    const newFields = [...formData.fields];
    newFields.splice(index, 1);
    setFormData({ fields: newFields });
  }
  const handleInputChange = (index, event) => {
    const newFields = [...formData.fields];
    newFields[index][event.target.name] = event.target.value;
    setFormData({ fields: newFields });
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(formData.fields);

  }
  return (
    <section className='landing-section'>
      <div className='row container'>
        <form onSubmit={handleSubmit}>
          {formData.fields.map((field, index) => (
            <div key={index}>
              <input
                type='text'
                placeholder='Name'
                name='name'
                value={field.name}
                onChange={(e) => handleInputChange(index, e)}
              />
              <input
                type='text'
                placeholder='Value'
                name='value'
                value={field.value}
                onChange={(e) => handleInputChange(index, e)}
              />
              <button type='button' onClick={() => removeField(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type='button' onClick={addField} className='mt-2'>
            Add Field
          </button>
          <button type='submit'>
            Submit
          </button>


        </form>
      </div>
    </section>
  )
}

export default Challenge33