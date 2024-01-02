import React, {useState, useRef} from 'react';

function Challenge06() {
    
 
    // const handleEmailChange = (e)=>{
    //     setEmail(e.target.value)
    // }
    // const handlePasswordChange = (e)=>{
    //     setPassword(e.target.value)
    // }

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        console.log('Email:', emailValue);
        console.log('Password:', passwordValue);

    }

    return (
        <section className='landing-section'>
            <div className="row container">
                <form className='form' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input ref={passwordRef} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </section>
    );
}

export default Challenge06;
