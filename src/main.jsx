import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Apps/App.jsx'
import './main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAccount from './Create-Account.jsx';
import LoginPage from './Login.jsx';
import App2 from './Apps/App2.jsx'
import App3 from './Apps/App3.jsx';
import AdminLoginPage from './Admin-Login.jsx';
import Terminate from './Components/Terminate.jsx';
import Crew from './Components/Crew/Crew.jsx';
import Flight from './Components/Flights/Flight.jsx'; 
import About from './Components/About/About.jsx';
import TravelLocations from './Components/Travel/Travel.jsx';
import { AdminLoginProvider } from './AdminLoginContext.jsx';
import FlightRoster from './Components/FlightRoster.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AdminLoginProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/app2" element={<App2/>}/>
        <Route path="/app3" element={<App3/>}/>
        <Route path="/admin-login" element={<AdminLoginPage/>}/>
        <Route path="/terminate" element={<Terminate/>}/>
        <Route path="/Flight" element={<Flight/>}/>
        <Route path="/Crew" element={<Crew/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Travel" element={<TravelLocations/>}/>
        <Route path="/FlightRoster" element={<FlightRoster/>}/>
      </Routes>
    </Router>
  </AdminLoginProvider>
);