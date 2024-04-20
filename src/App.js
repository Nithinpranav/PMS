// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appointment from './components/Appointments/Appointment';
import Dashboard from './components/Dashboard/Dashboard';
import DownloadReport from './components/DonwloadReport.js/DownloadReports';
import LoginPage from './components/LoginPage/Login';
import ProfilePage from './components/ProfilePage/Profile';
import Treatment from './components/Treatment/SetTreatment';

const App = () => {
  return (
  //   <Router>
  //   <div>
  //     <Routes>
  //       <Route path="/login">
  //         <LoginPage />
  //       </Route>
  //       <Route path="/dashboard">
  //         <Dashboard />
  //       </Route>
  //       <Route path="/profile">
  //         <ProfilePage />
  //       </Route>
  //       <Route path="/appointment">
  //         <Appointment />
  //       </Route>
  //       <Route path="/treatment">
  //         <Treatment />
  //       </Route>
  //       <Route path="/download-report">
  //         <DownloadReport />
  //       </Route>
  //     </Routes>
  //   </div>
  // </Router>

    <div>
      <h2>Patient Management System </h2>
      <LoginPage />
      <Dashboard />
      <ProfilePage />
      <Appointment />
      <Treatment />
      <DownloadReport />
    </div>
  );
};

export default App;

