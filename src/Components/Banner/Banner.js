import React from 'react'
import './Banner.css'

function Banner({setViewIntro}) {
  return (
    <div className='banner'>
        <p className="main-title">TeamTrackr</p>
        <p className="main-subtitle">Employee Data Management System</p>
        <p className="details">Welcome to TeamTrackr, the comprehensive employee data management solution designed to seamlessly add, store, edit, and search employee information, ensuring your organization's HR processes are efficient, secure, and compliant.</p>
        <button className="entry-btn" onClick={()=>setViewIntro(false)}>Show Employees</button>
    </div>
  )
}

export default Banner