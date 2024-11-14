import React from 'react';
import ResumeImage from '../assets/ATUL-RANJAN.jpg';

function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ResumeImage;
    link.download = 'ATUL-RANJAN-Resume.jpg';
    link.click();
  };

  return (
    <div className='resume-container'>
      <div className="download-btn">
        <button onClick={handleDownload}>Download</button>
      </div>
      <div className="resume-image">
        <img src={ResumeImage} alt="Atul Ranjan's Resume" />
      </div>
    </div>
  );
}

export default Resume;
