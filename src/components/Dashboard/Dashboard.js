// Dashboard.js
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Here, you can fetch appointments data from an API or local storage
    const mockAppointments = [
      { id: 1, date: '2023-05-01', time: '10:00', reason: 'Routine checkup' },
      { id: 2, date: '2023-05-15', time: '14:30', reason: 'Follow-up visit' },
    ];
    setAppointments(mockAppointments);
  }, []);

  return (
    <div className="dashboard">
      <h2>Patient Dashboard</h2>
      <div className="appointments">
        <h3>Upcoming Appointments</h3>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <p>Reason: {appointment.reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;