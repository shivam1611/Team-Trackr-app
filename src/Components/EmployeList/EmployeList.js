import React, { useState } from "react";
import "./EmployeList.css";
import Card from "../Card/Card";
import server from './server.png'

function EmployeList({ employeList, setViewCardDetail, handleShowDetails, setViewInputForm }) {
  return (
    <div className="employe-list">
      {employeList.length ? (
        employeList.map((person) => (
          <Card
            key={person.employeeID}
            person_name={person.fname + " " + person.lname}
            person_designation={person.designation}
            person_dpt={person.dpt}
            person_phone={person.phone}
            person_email={person.email}
            person_id={person.employeeID}
            handleShowDetails={handleShowDetails}
            setViewCardDetail={setViewCardDetail}
            img={person.imgurl}
          />
        ))
      ) : (
        <div className="no-detail-section">
          <img src={server} alt="" className="server-icon"/>
          <p className="para-detail">No details to show.</p>
          <button className="add-btn" onClick={()=>setViewInputForm(true)}>Add Employee</button>
        </div>
      )}
      {/* <Card /> */}
    </div>
  );
}

export default EmployeList;
