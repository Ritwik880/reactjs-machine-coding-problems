import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

    const handleGenerate = () => {
        const uppercaseChars = 'ABCDEFGIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?/';

        let validChars = '';
        if (includeUppercase) {
            validChars += uppercaseChars
        }
        if (includeLowercase) {
            validChars += lowercaseChars
        }
        if (includeNumbers) {
            validChars += numberChars
        }
        if (includeSpecialChars) {
            validChars += specialCharacters
        }

        let generatedPassword = '';

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            generatedPassword += validChars[randomIndex];
        }

        setPassword(generatedPassword);
    }

    return (
        <section className="landing-section">
            <div className="row container">
                <div>
                    <h1 className='heading'>Password Generator</h1>
                    <div className='mb-2'>
                        <label className='form-label'>Password Length: </label>
                        <input
                            type="number"
                            className='form-control input-box'
                            value={passwordLength}
                            onChange={(e) => setPasswordLength(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Include Uppercase: </label>
                        <input
                            type="checkbox"
                            className='form-check-input mx-2'
                            checked={includeUppercase}
                            onChange={() => setIncludeUppercase(!includeUppercase)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Include Lowercase: </label>
                        <input
                            type="checkbox"
                            className='form-check-input mx-2'
                            checked={includeLowercase}
                            onChange={() => setIncludeLowercase(!includeLowercase)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Include Numbers: </label>
                        <input
                            type="checkbox"
                            className='form-check-input mx-2'
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Include Special Characters: </label>
                        <input
                            type="checkbox"
                            className='form-check-input mx-2'
                            checked={includeSpecialChars}
                            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                        />
                    </div>
                    <button className='btn btn-primary' onClick={handleGenerate}>Generate Password</button>
                    <div className='mt-3'>
                        <label className='form-label'>Password: </label>
                        <input type="text" value={password} readOnly className='form-control input-box' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PasswordGenerator;
