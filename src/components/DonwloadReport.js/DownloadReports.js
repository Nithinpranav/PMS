// DownloadReport.js
import React, { useState } from 'react';
import './DownloadReports.css';

const DownloadReport = () => {
  const [reportType, setReportType] = useState('');

  const handleDownload = () => {
    // Here, you can add logic to generate and download the report
    console.log('Downloading report:', reportType);
  };

  return (
    <div className="download-report">
      <h2>Download Report</h2>
      <div>
        <label htmlFor="reportType">Report Type:</label>
        <select
          id="reportType"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="">Select report type</option>
          <option value="medical">Medical Report</option>
          <option value="billing">Billing Report</option>
        </select>
      </div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadReport;