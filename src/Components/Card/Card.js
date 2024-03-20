import React from "react";
import "./Card.css";

function Card({
  person_name,
  person_designation,
  person_dpt,
  person_phone,
  person_email,
  person_id,
  handleShowDetails,
  img
}) {
  return (
    <div className="card" onClick={() => handleShowDetails(person_id)}>
      <div className="detail-header"></div>
      <div className="img-section">
        <img src={img} alt="" className="profile-image" />
      </div>
      <div className="emp-id">ID: {person_id}</div>
      <div className="detail-section">
        <p className="name-text">{person_name}</p>
        <p className="designation">{person_designation}</p>
        <div className="dpt">{person_dpt}</div>
        <div className="other">
          <p className="detail">
            <span className="icon">
              <i class="fa-solid fa-phone"></i>
            </span>
            {person_phone}
          </p>
          <p className="detail">
            <span className="icon">
              <i class="fa-solid fa-envelope"></i>
            </span>
            {person_email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
