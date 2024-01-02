import React, { useState } from 'react';

const useForm = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(values);
  };

  const resetForm = () => {
    setValues(initialValue);
  };

  return { values, handleChange, handleSubmit, resetForm };
};

export default useForm;
