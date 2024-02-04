import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
// import DataProvider from './Components/useContext/Provider.jsx';
// import { AuthProvider } from './AuthContext.jsx';
import { NotificationProvider } from './Components/react-context/NotificationContext.jsx';
import NotificationList from './Components/Challenge/NotificationList.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <NotificationProvider>
        <App />
        <NotificationList />
      </NotificationProvider>
    </Router>
  </React.StrictMode>,
)
