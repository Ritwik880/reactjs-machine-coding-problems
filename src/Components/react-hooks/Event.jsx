import React from 'react';

const Event = () => {
    const handleChildClick = (e) => {
        e.stopPropagation();
        console.log('Child component clicked!');
    };

    const handleParentClick = () => {
        console.log('Parent component clicked!');
    };

    return (
        <section className='landing-section'>
            <div className='row container'>
                <div className='landing-div' onClick={handleParentClick}>
                    <button onClick={handleChildClick} className='btn btn-primary'>Click Me</button>
                </div>
            </div>
        </section>
    );
};

export default Event;
