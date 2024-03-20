import React, { useEffect, useRef } from "react";

import "./InputForm.css";

function InputForm({
  closeInputForm,
  submitDetail,
  fname,
  lname,
  setFname,
  setLname,
  phone,
  setPhone,
  email,
  setEmail,
  gender,
  setGender,
  area,
  setArea,
  city,
  setCity,
  state,
  setState,
  pincode,
  clearAll,
  setPinCode,
  designation,
  setDesignation,
  dpt,
  setViewIntro,
  dob,
  setDob,
  bankName,
  setBankName,
  accountNumber,
  setAccountNumber,
  ifscCode,
  setIfscCode,
  setDpt,
  adhaar,
  imgUrl,
  setImgUrl,
  setAdhaar,
  panNumber,
  setPanNumber,
}) {
  return (
    <div
      className="card-detail-bg"
      initial={{ opacity: .5, y:'-2', scale:'-5' }}
      animate={{ opacity: 1, y:'0',scale:'1' }}
      transition={{ type: "spring", duration: 0.2, stiffness: 150 }}
    >
      <div className="input-card">
        <h1 className="title">Register New Employee</h1>
        <form onSubmit={(e) => submitDetail(e)}>
          {/* ############################################ Personal Details form section ##############################################################  */}

          <div className="panner">
            <p className="subtitle">Personal Details</p>
            <div className="form-section">
              <div className="col">
                <label htmlFor="fname-field" className="label">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                  id="fname-field"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="lname-field" className="label">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-field"
                  id="lname-field"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="dob-field" className="label">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="input-field"
                  id="dob-field"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="phone-field" className="label">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="Phone number"
                  className="input-field"
                  id="phone-field"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="img-field" className="label">
                  Profile Image URL
                </label>
                <input
                  type="text"
                  placeholder="Enter Image URL"
                  className="input-field"
                  id="img-field"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="email-field" className="label">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input-field"
                  id="email-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="gender-field" className="label">
                  Gender
                </label>
                <select
                  className="input-field"
                  id="gender-field"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Others</option>
                </select>
              </div>
            </div>
          </div>

          {/* #################################################### Bank Details Form Section #######################################################  */}

          <div className="panner">
            <p className="subtitle">Bank Details</p>
            <div className="form-section">
              <div className="col">
                <label htmlFor="account-number-field" className="label">
                  Bank Account Number
                </label>
                <input
                  type="text"
                  placeholder="Bank Account Number"
                  className="input-field"
                  id="account-number-field"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="ifsc-field" className="label">
                  IFSC Code
                </label>
                <input
                  type="text"
                  placeholder="IFSC Code"
                  className="input-field"
                  id="ifsc-field"
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="Pan-number-field" className="label">
                  Personal Account Number (PAN)
                </label>
                <input
                  type="text"
                  placeholder="PAN Number"
                  className="input-field"
                  id="pan-number-field"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="adhaar-field" className="label">
                  Adhaar Number
                </label>
                <input
                  type="text"
                  placeholder="Aadhar Number"
                  className="input-field"
                  id="aadhar-field"
                  value={adhaar}
                  onChange={(e) => setAdhaar(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <lable htmlFor="bank-field" className="label">
                  Bank Name
                </lable>
                <select
                  className="input-field"
                  id="bank-field"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  required
                >
                  <option value="Bank Of Baroda">Bank of Baroda</option>
                  <option value="State bank Of India">
                    State Bank of India
                  </option>
                  <option value="Canara Bank">Canara Bank</option>
                  <option value="HDFC Bank">HDFC Bank</option>
                  <option value="Andhra Bank">Andhra Bank</option>
                  <option value="Punjab National Bank">
                    Punjab National Bank
                  </option>
                  <option value="ICICI Bank">ICICI Bank</option>
                  <option value="Indian Oriental Bank">
                    Indian Oriental Bank
                  </option>
                  <option value="Sarkari Bank">Sarkari Bank</option>
                  <option value="Paytem payment Bank">
                    paytem Payment Bank
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="panner">
            <p className="subtitle">Professional Details</p>
            <div className="form-section">
              <div className="col">
                <label htmlFor="designation-field" className="label">
                  Designation
                </label>
                <input
                  type="text"
                  placeholder="Designation"
                  className="input-field"
                  id="designation-field"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="department-field" className="label">
                  Department
                </label>
                <input
                  type="text"
                  placeholder="Department Name"
                  className="input-field"
                  id="department-field"
                  value={dpt}
                  onChange={(e) => setDpt(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="panner">
            <p className="subtitle">Other Details</p>
            <div className="form-section">
              <div className="col">
                <label htmlFor="area-field" className="label">
                  Area
                </label>
                <input
                  type="text"
                  placeholder="Area"
                  className="input-field"
                  id="area-field"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="city-field" className="label">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="input-field"
                  id="city-field"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="pincode-field" className="label">
                  Pincode
                </label>
                <input
                  type="number"
                  placeholder="Pincode"
                  className="input-field"
                  id="pincode-field"
                  value={pincode}
                  onChange={(e) => setPinCode(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="state-field" className="label">
                  State
                </label>
                <input
                  type="text"
                  placeholder="state"
                  className="input-field"
                  id="state-field"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="input-field-btn submit-btn">
            {" "}
            Add Details
          </button>
        </form>
        <div className="button-section">
          <button
            onClick={() => {
              clearAll();
            }}
            className=" back-btn"
            id="clear-btn"
          >
            Clear All
          </button>
          <button
            onClick={() => {
              closeInputForm();
              // setViewIntro(true);
              clearAll();
            }}
            className=" back-btn"
          >
            Cancel
          </button>
        </div>

        <div />
      </div>
    </div>
  );
}

export default InputForm;
