// Create an EMI (Equated Monthly Installment) calculator using React.js. The application should allow users to input the principal amount, interest rate, and loan tenure (in months). Upon clicking a button, the application should calculate and display the corresponding EMI.

import React, {useState} from 'react'

const Challenge43 = () => {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [tenure, setTenure] = useState('');
    const [emi, setEmi] = useState(null);

    const calculateEMI = ()=>{
        const p = parseFloat(principal);
        const r = parseFloat(interestRate) / (12 * 100) //Monthly interest rate
        const n = parseFloat(tenure); //Loan tenures in months

        if (p > 0 && r>0 && n>0) {
            const emiValue = (p * r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1);
            setEmi(emiValue.toFixed(2));
        } else{
            setEmi(null)
        }
    }
  return (
    <section className='timeline-landing'>
        <div className='row container'>
            <h2 className='heading-text'>
                EMI Calculator
            </h2>
            <div>
                <label className='heading-text'>
                    Loan Amount:
                </label>
                <input type='number' placeholder='Enter your loan amount' value={principal} onChange={e=>setPrincipal(e.target.value)}/>
            </div>
            <div>
                <label className='heading-text'>
                    Interest Rate (%):
                </label>
                <input type='number' placeholder='Interest rate' value={interestRate}  onChange={e=>setInterestRate(e.target.value)}/>
            </div>
            <div>
                <label className='heading-text'>
                    Loan Tenure (Months):
                </label>
                <input type='number' placeholder='Loan tenures' value={tenure}  onChange={e => setTenure(e.target.value)}/>
            </div>
            <button className='emi-calculate-btn' onClick={calculateEMI}>
                Calculate EMI
            </button>

            {
                emi !== null && <h1 className='heading-text'>
                    EMI: {emi}
                </h1>
            }
        </div>
    </section>
  )
}

export default Challenge43