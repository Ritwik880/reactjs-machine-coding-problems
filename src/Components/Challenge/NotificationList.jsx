// NotificationList.js
import React, { useEffect } from 'react';
import { useNotification } from '../react-context/NotificationContext';

const Notification = ({ id, message }) => {
    const { removeNotification } = useNotification();

    const handleRemove = () => {
        removeNotification(id);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeNotification(id);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [id, removeNotification]);

    return <div className="notification">
        {message}
        <button onClick={handleRemove}>Dismiss</button>
    </div>
};

const NotificationList = () => {
    const { notifications } = useNotification();

    return (
        <div className="notification-list">
            {notifications.map((notification) => (
                <Notification key={notification.id} id={notification.id} message={notification.message} />
            ))}
        </div>
    );
};

export default NotificationList;
