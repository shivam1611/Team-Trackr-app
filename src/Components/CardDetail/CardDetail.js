import React from "react";
import { useState } from "react";
import "./CardDetail.css";

function CardDetail({ setViewCardDetail, selectedPerson, setEmployeList, employeList, setDeleteUpdate }) {
  // Local States

  const [viewWarningBox, setViewWarningBox] = useState(false);



  function handleDeleteWarning() {
    setViewWarningBox(true);
  }
  

  function handleDeleterecord(id) {
    setEmployeList((employeList)=>employeList.filter((person)=>person.employeeID !== id))
    setViewWarningBox(false)
    setViewCardDetail(false)
    setDeleteUpdate(true)

  }

  function handleCancelDelete() {
    setViewWarningBox(false);
  }

  return (
    <div className="card-detail-bg">
      <div className="detail-card"
      
      >
        <div className="top-summary">
          <div className="img-id-section">
            <img src={selectedPerson?.imgurl} alt="" />
          </div>
          <div className="summary">
            <div className="cube">
              <label htmlFor="id">Employee ID:</label>
              <p className="no-effect">{selectedPerson?.employeeID}</p>
            </div>
            <div className="cube">
              <label htmlFor="id">name:</label>
              <p className="capitalize">{`${selectedPerson?.fname} ${selectedPerson?.lname}`}</p>
            </div>
            <div className="cube">
              <label htmlFor="id">Designation:</label>
              <p className="capitalize">{selectedPerson?.designation}</p>
            </div>
            <div className="cube">
              <label htmlFor="id">Department:</label>
              <p className="capitalize">{selectedPerson?.dpt}</p>
            </div>
          </div>
        </div>
        {/* ######################################################################## */}
        {/* <p className="detail-seperator"></p> */}

        {/* ######################################################  */}

        <div className="bottom-details">
          <div className="detail-box">
            <p className="detail-title">Personal Details</p>
            <div className="dep">
              <div className="cube">
                <label htmlFor="id">Phone:</label>
                <p className="no-effect">{selectedPerson?.phone}</p>
              </div>
              <div className="cube">
                <label htmlFor="id">Email ID:</label>
                <p className="no-effect">{selectedPerson?.email}</p>
              </div>
              <div className="cube">
                <label htmlFor="id">Date Of Birth:</label>
                <p className="no-effect">{selectedPerson?.dob}</p>
              </div>
              <div className="cube">
                <label htmlFor="id">Aadhaar Number:</label>
                <p className="no-effect">{selectedPerson?.adhaar}</p>
              </div>
            </div>
          </div>

          <div className="detail-box">
            <p className="detail-title">Financial Details</p>
            <div className="dep">
              <div className="cube">
                <label htmlFor="id">Bank A/C Number:</label>
                <p className="no-effect">{selectedPerson?.accountNumber}</p>
              </div>
              <div className="cube">
                <label htmlFor="id">IFSC Code:</label>
                <p className="no-effect">{selectedPerson?.ifsc}</p>
              </div>
              <div className="cube">
                <label htmlFor="id">PAN Number:</label>
                <p className="no-effect">{selectedPerson?.panNumber}</p>
              </div>
            </div>
          </div>
          <div className="detail-box">
            <p className="detail-title">Address:</p>
            <div className="dep">
              <div className="cube">
                <label htmlFor="id">Area:</label>
                <p className="capitalize">{selectedPerson?.area}</p>
              </div>
              <div className="cube">
                <label htmlFor="id">City:</label>
                <p className=" capitalize">{selectedPerson?.city}</p>
              </div>
              <div className="cube">
                <label htmlFor="id">Pincode:</label>
                <p>{selectedPerson?.pincode}</p>
              </div>
              <div className="cube">
                <label htmlFor="id">State:</label>
                <p className="capitalize">{selectedPerson?.state}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-section">
          <button
            className="emp-number-status accept-btn"
            onClick={() => setViewCardDetail(false)}
          >
            Okay
          </button>
          <button
            className="emp-number-status delete-btn"
            onClick={() => handleDeleteWarning()}
          >
            Delete Record
          </button>
        </div>
      </div>

      {/* Warning Boc that will warn before deleting the ID  */}
      {viewWarningBox && (
        <div className="warning-box-bg">
          <div className="warning-box">
            <p className="warning">Do you really want to delete this record?</p>
            <div className="deleting-details">
              <p className="deleting-data">
                Employe's Name:{" "}
                <span className="data">
                  {selectedPerson?.fname + " " + selectedPerson?.lname}
                </span>
              </p>
              <p className="deleting-data">
                Employe's ID:{" "}
                <span className="data">{selectedPerson?.employeeID} </span>
              </p>
            </div>
            <div className="button-section" id="warning-btn-section">
              <button
                className="warning-btn accept"
                onClick={() => handleDeleterecord(selectedPerson?.employeeID)}
              >
                Delete
              </button>
              <button
                className="warning-btn no-accept"
                onClick={() => handleCancelDelete()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update that will show after deleting the ID  */}

      
    </div>
  );
}

export default CardDetail;
