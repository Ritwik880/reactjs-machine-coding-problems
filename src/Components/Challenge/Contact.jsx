// Build a Real-Time Notification Component:

// Create a real-time notification component that displays notifications when triggered. Use a state management solution (Redux or Context API) to manage and display notifications.


import React from 'react';
import { useNotification } from '../react-context/NotificationContext';

const Challenge42 = () => {
    const { addNotification } = useNotification();

    const handleClick = () => {
        addNotification({ message: 'This is a notification message' });
    };

    return (
        <section className='timeline-landing'>
            <div className='row container'>
                <button onClick={handleClick}>Trigger Notification</button>
            </div>
        </section>
    );
};

export default Challenge42;
