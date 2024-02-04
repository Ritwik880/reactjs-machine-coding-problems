// NotificationContext.js
import React, { createContext, useContext, useReducer } from 'react';

const NotificationContext = createContext();

const initialState = {
    notifications: [],
};

const notificationReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return {
                ...state,
                notifications: [...state.notifications, action.payload],
            };
        case 'REMOVE_NOTIFICATION':
            return {
                ...state,
                notifications: state.notifications.filter(
                    (notification) => notification.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export const NotificationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notificationReducer, initialState);

    const addNotification = (notification) => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: { ...notification, id: new Date().getTime() },
        });
    };

    const removeNotification = (id) => {
        dispatch({
            type: 'REMOVE_NOTIFICATION',
            payload: id,
        });
    };

    return (
        <NotificationContext.Provider
            value={{ notifications: state.notifications, addNotification, removeNotification }}
        >
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
