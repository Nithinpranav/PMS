// Appointment.js
import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add logic to save the appointment details or make API calls
    console.log('Appointment Details:', { appointmentDate, appointmentTime, reason });
  };

  return (
    <div className="appointment">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="appointmentDate">Date:</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="appointmentTime">Time:</label>
          <input
            type="time"
            id="appointmentTime"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;