// create a React custom hook called useForm for handling forms in React? It's like having a special tool to make forms in React way easier to handle! 🚀

import React from 'react'
import useForm from '../react-custom-hook/useForm'
const Challenge15 = () => {
    const { values, handleChange, handleSubmit, resetForm } = useForm({
        username: '',
        password: ''
    })

    const handleFormSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <section className="landing-section">
            <div className="row container">

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={values.username} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='username' name='username' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={values.password} onChange={handleChange} id="exampleInputPassword1" placeholder='password' name='password' />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={resetForm}>Reset</button>
                </form>

            </div>
        </section>
    )
}

export default Challenge15