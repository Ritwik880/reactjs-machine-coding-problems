// Create a Responsive Timeline Component:
// Develop a responsive timeline component that displays events.

import React from "react";
const eventsData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1567853042143-8d8480f022ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Event 1',
        description: 'Description for Event 1',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1567853042143-8d8480f022ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Event 2',
        description: 'Description for Event 2',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1567853042143-8d8480f022ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Event 3',
        description: 'Description for Event 3',
    },
];

const Challenge38 = () => {
    return (
        <section className="timeline-landing">
            <div className="row container">
                <div className="timeline">
                    <div className="timeline-line"/>
                        {
                            eventsData.map((event, index) => (
                                <div key={index} className="timeline-event">
                                    <div className="timeline-event-content">
                                        <img src={event.image} alt="image" className="timeline-image" />
                                        <div className="event-details">
                                            <h3>
                                                {event.title}
                                            </h3>
                                            <p>
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                    {index < eventsData.length -1 && <div className="timeline-connector"/>}
                                </div>
                            ))
                        }
                </div>
            </div>
        </section>
    )
}

export default Challenge38
