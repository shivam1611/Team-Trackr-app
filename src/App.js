import { useEffect, useRef, useState } from "react";
import "./App.css";
import InputForm from "./Components/InputFrom/InputForm";
import UpdateBox from "./Components/UpdateBox/UpdateBox";
import EmployeList from "./Components/EmployeList/EmployeList";
import addEmp from "./add-emp.png";
import search_emp from "./search-employee.png";
import showEmp from "./youth.png";
import Banner from "./Components/Banner/Banner";
import CardDetail from "./Components/CardDetail/CardDetail";
import SearchWindow from "./Components/SearchWindow/SearchWindow";
import Card from "./Components/Card/Card";
import { clear } from "@testing-library/user-event/dist/clear";

function App() {
  // Setting View of the defferent sections

  const [viewInputForm, setViewInputForm] = useState(false);
  const [viewUpdate, setViewUpdate] = useState(false);
  const [viewIntro, setViewIntro] = useState(true);
  const [viewCardDetail, setViewCardDetail] = useState(false);
  const [deleteAllupdate, setDeleteAllUpdate] = useState(false);
  const [viewSearch, setViewSearch] = useState(false);
  const [deleteupdate, setDeleteUpdate] = useState();
  const [deleteAllWarning, setDeleteAllWarning] = useState(false);
  const [viewNavigation, setViewNagivation] = useState(false);

  // States of the Input Form

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState(Number(""));
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPinCode] = useState(Number(""));
  const [state, setState] = useState("");
  const [designation, setDesignation] = useState("");
  const [dpt, setDpt] = useState("");
  const [empID, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [inputQuery, setInputQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState();
  const [dob, setDob] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [adhaar, setAdhaar] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // Array where the data of each employee will store as an object (inside following array)

  const [employeList, setEmployeList] = useState([
    {
      fname: "Shivam",
      lname: "Sharma",
      phone: "7251985596",
      email: "shivamsharma755@gmail.com",
      gender: "Male",
      area: "Jaunpur",
      city: "kotdwara",
      state: "Uttrakhand",
      employeeID: "12365",
      dob: "23'-3-2323",
      pincode: "125487",
      bankName: "Canara Bank",
      accountNumber: "1245784512458",
      panNumber: "jdjsdj",
      ifsc: "sbdvuhsbv",
      adhaar: "126365485",
      dpt: "VCCS",
      designation: "Apprentice",
      imgurl:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708387200&semt=ais",
    },
    {
      fname: "Shivam",
      lname: "Rathod",
      phone: "9917023998",
      email: "shivamrathod@gmail.com",
      gender: "Male",
      panNumber: "jdjsdj",
      dob: "23'-3-2323",
      area: "Jaunpur",
      bankName: "Canara Bank",
      accountNumber: "1245784512458",
      ifsc: "sbdvuhsbv",
      city: "kotdwara",
      state: "Uttrakhand",
      employeeID: "44859",
      dpt: "VCCS",
      adhaar: "126365485",
      imgurl:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708387200&semt=ais",
      pincode: "125487",
      designation: "Apprentice",
    },
    {
      fname: "Neha",
      lname: "Rajput",
      phone: "9012017244",
      bankName: "Canara Bank",
      panNumber: "jdjsdj",
      accountNumber: "1245784512458",
      ifsc: "sbdvuhsbv",
      email: "neharajput@gmail.com",
      dob: "23'-3-2323",
      gender: "Female",
      area: "Kiratpur",
      pincode: "125487",
      imgurl:
        "https://media.istockphoto.com/id/1292015292/photo/business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=5fVekQtkJuYn_NGKBCnNpmHCmXc-Ii1551buml0bR84=",
      city: "Shahabad",
      adhaar: "126365485",
      state: "uttar Pradesh",
      employeeID: "58945",
      dpt: "VCCS",
      designation: "Apprentice",
    },
    {
      fname: "Mohit",
      lname: "Sharma",
      bankName: "Canara Bank",
      accountNumber: "1245784512458",
      panNumber: "jdjsdj",
      ifsc: "sbdvuhsbv",
      phone: "7251985596",
      dob: "23'-3-2323",
      email: "mohtirawat5@gmail.com",
      gender: "Male",
      area: "Manpur",
      city: "kotdwara",
      adhaar: "126365485",
      pincode: "125487",
      imgurl:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708387200&semt=ais",
      state: "Uttrakhand",
      employeeID: "85266",
      dpt: "VCCS",
      designation: "Trainee engineer",
    },
    {
      fname: "Nikita",
      lname: "chauhan",
      phone: "7598632458",
      bankName: "Canara Bank",
      panNumber: "jdjsdj",
      accountNumber: "1245784512458",
      ifsc: "sbdvuhsbv",
      dob: "23'-3-2323",
      email: "nikitachauhan34@gmail.com",
      adhaar: "126365485",

      gender: "Female",
      area: "bel road",
      city: "kotdwara",
      state: "Uttrakhand",
      pincode: "125487",
      employeeID: "34952",
      dpt: "vccs",
      imgurl:
        "https://media.istockphoto.com/id/1292015292/photo/business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=5fVekQtkJuYn_NGKBCnNpmHCmXc-Ii1551buml0bR84=",
      designation: "Trainee Engineer",
    },
    {
      fname: "sumedha",
      lname: "aggarwal",
      phone: "6533859755",
      panNumber: "jdjsdj",
      dob: "23'-3-2323",
      email: "sumi18274@gmail.com",
      gender: "Female",
      area: "bel road",
      adhaar: "126365485",
      bankName: "Canara Bank",
      accountNumber: "1245784512458",
      ifsc: "sbdvuhsbv",
      city: "kotdwara",
      state: "Uttrakhand",
      pincode: "125487",
      imgurl:
        "https://media.istockphoto.com/id/1292015292/photo/business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=5fVekQtkJuYn_NGKBCnNpmHCmXc-Ii1551buml0bR84=",
      employeeID: "34527",
      dpt: "VCCS",
      designation: "Senior engineer",
    },
    {
      fname: "digisha",
      panNumber: "jdjsdj",
      lname: "dhuliya",
      phone: "7685115249",
      email: "digishababy@gmail.com",
      gender: "Female",
      dob: "23'-3-2323",
      pincode: "125487",
      area: "manpur",
      city: "kotdwara",
      state: "Uttrakhand",
      bankName: "Canara Bank",
      accountNumber: "1245784512458",
      ifsc: "sbdvuhsbv",
      imgurl:
        "https://media.istockphoto.com/id/1292015292/photo/business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=5fVekQtkJuYn_NGKBCnNpmHCmXc-Ii1551buml0bR84=",
      employeeID: "31645",
      dpt: "iafdss",
      adhaar: "126365485",
      designation: "Apprentice",
    },
    {
      fname: "tanisha",
      lname: "rauthan",
      phone: "9852146658",
      panNumber: "jdjsdj",
      email: "tannu5655@gmail.com",
      gender: "Female",
      area: "Sector.50",
      city: "noida",
      pincode: "125487",
      dob: "23'-3-2323",
      imgurl:
        "https://media.istockphoto.com/id/1292015292/photo/business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=5fVekQtkJuYn_NGKBCnNpmHCmXc-Ii1551buml0bR84=",
      adhaar: "126365485",
      bankName: "Canara Bank",
      accountNumber: "1245784512458",
      ifsc: "sbdvuhsbv",
      state: "uttar pradesh",
      employeeID: "25896",
      dpt: "iafdss",
      designation: "Senior engineer",
    },
    {
      fname: "Shivam",
      lname: "Sharma",
      phone: "7251985596",
      pincode: "125487",
      email: "shivamsharma755@gmail.com",
      gender: "Male",
      dob: "23'-3-2323",
      panNumber: "jdjsdj",
      area: "Jaunpur",
      city: "kotdwara",
      imgurl:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708387200&semt=ais",
      state: "Uttrakhand",
      employeeID: "123654",
      adhaar: "126365485",
      dpt: "VCCS",
      designation: "Apprentice",
    },
  ]);

  // Function that will run when we submit the form
  const section = useRef(null);

  function submitDetail(e) {
    e.preventDefault();
    const id = generateID();
    const person = {
      fname: fname,
      lname: lname,
      phone: phone,
      email: email.toLowerCase(),
      gender: gender,
      area: area,
      city: city,
      pincode: pincode,
      state: state,
      employeeID: id,
      dpt: dpt,
      designation: designation,
      adhaar: adhaar,
      dob: dob,
      bankName: bankName,
      ifsc: ifscCode,
      panNumber: panNumber,
      accountNumber: accountNumber,
      imgurl: imgUrl,
    };
    console.log(person);
    setEmployeList((employeList) => [person, ...employeList]);
    setName(person.fname + " " + person.lname);
    setEmpId(person.employeeID);
    setViewUpdate(true);
    setViewInputForm(false);
    setViewIntro(false);
    setLname("");
    setFname("");
    setPhone("");
    setEmail("");
    setArea("");
    setCity("");
    setPinCode("");
    setState("");
    setDesignation("");
    setDpt("");
    setDob("");
    setAdhaar("");
    setAccountNumber("");
    setIfscCode("");
    setImgUrl("");
  }

  // Function that will clear the Input Form
  function clearAll() {
    setLname("");
    setFname("");
    setPhone("");
    setEmail("");
    setArea("");
    setCity("");
    setPinCode("");
    setState("");
    setDesignation("");
    setDpt("");
    setDob("");
    setAdhaar("");
    setAccountNumber("");
    setIfscCode("");
    setImgUrl("");
  }

  // Function that closes the input window

  function closeInputForm() {
    setViewInputForm(false);
  }

  // Function that is generating a ID number for each employee

  function generateID() {
    var i = 0,
      id = "";
    for (i; i < 6; i++) {
      const random_number = Math.floor(Math.random() * 9).toString();
      id += random_number;
      console.log(typeof id);
    }
    return id;
  }

  // funtion that work when we search for an employee

  function handleSearchQuery(e) {
    setInputQuery(e.target.value);
    setEmployeList((employeList) =>
      employeList.find((person) => person.employeeID === inputQuery)
    );
    console.log(employeList);
  }

  // Function that will show the details  of an selected employee
  function handleShowDetails(person_id) {
    setViewCardDetail(true);
    setSelectedPerson(
      employeList.find((person) => person.employeeID === person_id)
    );
  }

  function handleDeleteAll() {
    setEmployeList([]);
    setDeleteAllWarning(false);
    setDeleteAllUpdate(true);
  }
  function handleCancelDeleteAll() {
    setDeleteAllWarning(false);
  }

  const navigation = document.querySelector(".sidebar");

  // RETURNED JSX

  return (
    <div className="app">
      {/* Upper Header  */}

      <div className="header">
        <p className="logo">TeamTrackr</p>
        <div className="right-section">
          {!viewIntro && employeList.length && (
            <button
              id="delete-all-btn"
              onClick={() => setDeleteAllWarning(true)}
            >
              Delete All
            </button>
          )}
          <p className="emp-number-status">Total: {employeList.length} </p>
        </div>
        {deleteAllWarning && (
          <div className="warning-box-bg">
            <div className="warning-box" id="warning-all-box">
              <p className="warning">
                Do you really want to delete all records ?
              </p>
              <div className="button-section" id="warning-all-delete">
                <button
                  className="emp-number-status delete-btn"
                  onClick={() => handleDeleteAll()}
                >
                  Delete All
                </button>
                <button
                  className="emp-number-status cancel-btn"
                  onClick={() => handleCancelDeleteAll()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {deleteAllupdate && (
          <div className="warning-box-bg">
            <div className="warning-box">
              <p className="warning">All records have been deleted.</p>
              <button
                className="emp-number-status mt"
                onClick={() => setDeleteAllUpdate(false)}
              >
                {" "}
                Okay
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom container containing Navigation and Main Panel  */}
      <div className="box">
        {/* when we add a employee sucessfully this update pop up will shown on screen  */}
        {viewUpdate && (
          <UpdateBox setViewUpdate={setViewUpdate} id={empID} name={name} />
        )}

        {/* This is the Navigation Bar on the side which shows all operations  */}

        <div
          className="handle-section"
          onClick={() => {
            setViewNagivation((a) => !a);
            setViewIntro(true)
          }}
        >
          <i class="fa-solid fa-bars hamburger"></i>
        </div>
        {viewInputForm && (
          <InputForm
            setViewIntro={setViewIntro}
            submitDetail={submitDetail}
            closeInputForm={closeInputForm}
            fname={fname}
            setFname={setFname}
            setLname={setLname}
            lname={lname}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            gender={gender}
            setGender={setGender}
            area={area}
            setArea={setArea}
            city={city}
            setCity={setCity}
            pincode={pincode}
            setPinCode={setPinCode}
            dob={dob}
            setDob={setDob}
            accountNumber={accountNumber}
            setAccountNumber={setAccountNumber}
            imgUrl={imgUrl}
            setImgUrl={setImgUrl}
            bankName={bankName}
            setBankName={setBankName}
            ifscCode={ifscCode}
            setIfscCode={setIfscCode}
            state={state}
            setState={setState}
            designation={designation}
            setDesignation={setDesignation}
            dpt={dpt}
            setDpt={setDpt}
            adhaar={adhaar}
            setAdhaar={setAdhaar}
            setPanNumber={setPanNumber}
            clearAll={clearAll}
            panNumber={panNumber}
          />
        )}
        {viewNavigation && (
          <div className="sidebar-bg">
            <section className="sidebar">
              {/* When we press the Add Employee button, Input Form Component will Appear  */}

              {/* When we press the Search Employee Button, Search Window will appear  */}
              {viewSearch && (
                <SearchWindow
                  setViewSearch={setViewSearch}
                  setViewIntro={setViewIntro}
                  inputQuery={inputQuery}
                  setInputQuery={setInputQuery}
                  handleSearchQuery={handleSearchQuery}
                />
              )}

              {/* This is the Default Home section of our navigation Bar  */}

              <div className="section" ref={section}>
                <img src={showEmp} alt="add-employee" className="action-icon" />
                <button
                  onClick={() => {
                    setViewIntro(false);
                    setViewNagivation(false);
                  }}
                  className="action-btn"
                >
                  Show Employee
                </button>
              </div>
              <div className="section" ref={section}>
                <img src={addEmp} alt="add-employee" className="action-icon" />
                <button
                  onClick={() => {
                    setViewInputForm(true);
                    setViewNagivation(false);
                  }}
                  className="action-btn"
                >
                  Add Employee
                </button>
              </div>
              <div className="section">
                <img
                  src={search_emp}
                  alt="add-employee"
                  className="action-icon"
                />

                <button
                disabled
                  onClick={() => {
                    setViewSearch(true);
                    setViewIntro(false);
                    // setViewNagivation(false)
                  }}
                  className="action-btn"
                >
                  Search Employe
                </button>
              </div>
            </section>
          </div>
        )}

        <div className="main-box">
          {viewIntro ? (
            <Banner setViewIntro={setViewIntro} />
          ) : (
            <EmployeList
              employeList={employeList}
              setViewCardDetail={setViewCardDetail}
              handleShowDetails={handleShowDetails}
              setViewInputForm={setViewInputForm}
            />
          )}
          {viewCardDetail && (
            <CardDetail
              setViewCardDetail={setViewCardDetail}
              selectedPerson={selectedPerson}
              setEmployeList={setEmployeList}
              employeList={employeList}
              setDeleteUpdate={setDeleteUpdate}
            />
          )}
          {deleteupdate && (
            <div className="warning-bg">
              <div className="warning-box">
                <p className="warning">Record has been deleted.</p>
                <button
                  className="emp-number-status mt"
                  onClick={() => setDeleteUpdate(false)}
                >
                  okay
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
