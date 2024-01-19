// Create a Multi-step Form:
// Build a multi-step form with a progress indicator. Each step should have its set of inputs, and users should be able to navigate between steps.

// A multi-step form is a form that is divided into multiple steps or sections, allowing users to input information gradually rather than all at once. This can enhance the user experience, especially for lengthy or complex forms. Each step typically represents a specific set of information or actions, and users navigate through the steps until they complete the entire form.

import React, {useState} from 'react';
import '../../MultiStepForm.css'

const Challenge32 = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        step1: '',
        step2: '',
        step3: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleNext = ()=>{
        setCurrentStep(currentStep + 1);
    }
    const handlePrev = ()=>{
        setCurrentStep(currentStep - 1);
    }

    const handleSubmit = ()=>{
        console.log('from submitted successfully!', formData);
        setIsSubmitted(true);

    }
  return (
    <section className='landing-section'>
        <div className='row container'>
            <div className='multi-step-form'>
                <h2>
                    Multi-Step-Form - Step {currentStep}
                </h2>
                <div className='progress-indicator'>
                    <span className={currentStep === 1 ? 'active': ''}>
                        1
                    </span>
                    <span className={currentStep === 2 ? 'active border': ''}>
                        2
                    </span>
                    <span className={currentStep === 3 ? 'active border': ''}>
                        3
                    </span>
                </div>

                {
                    currentStep === 1 && 
                    <div>
                        <label>
                            Step 1: Enter Your Name
                        </label>
                        <input type="text" name="step1" placeholder='Name' value={formData.step1} onChange={handleChange}/>
                        <button onClick={handleNext}>
                            Next    
                        </button>
                    </div>
                }
                {
                    currentStep === 2 && 
                    <div>
                        <label>
                            Step 1: Enter Your Email
                        </label>
                        <input type="email" name="step2" placeholder='test@hotmail.com' value={formData.step2} onChange={handleChange}/>
                        <button onClick={handlePrev}>
                            Previous    
                        </button>
                        <button onClick={handleNext}>
                            Next    
                        </button>
                    </div>
                }

                {
                    currentStep === 3 && 
                    <div>
                        <label>
                            Step 1: Enter Your Designation
                        </label>
                        <input type="text" name="step3" placeholder='SDE' value={formData.step3} onChange={handleChange}/>
                        <button onClick={handlePrev}>
                            Previous    
                        </button>
                        <button onClick={handleSubmit}>
                            Submit    
                        </button>
                    </div>
                }

                <div className='form-data-display'>
                    {
                        isSubmitted ? (
                            <div>
                            <h3>
                                Form Data
                            </h3>
                            <pre>
                                {JSON.stringify(formData, null, 2)}
                            </pre>
                            </div>
                        ) : (
                            <p>
                                No form data submitted yet.
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Challenge32