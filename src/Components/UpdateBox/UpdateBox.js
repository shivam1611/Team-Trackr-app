import React from "react";
import './UpdateBox.css'
function UpdateBox({setViewUpdate, id,name}) {
  return <div className='update-box'>
    
    <h1 className="update-text">Data Uploaded <br/> Successfully !!</h1>
    <p className="statement">Employee's Name : <span className="capitalize">{name}</span></p>
    <p className="statement">Employee ID :<span>{id}</span></p>
    <button className="emp-number-status okay-btn" onClick={()=>setViewUpdate(false)}>Okay</button>
  </div>;
}

export default UpdateBox;
