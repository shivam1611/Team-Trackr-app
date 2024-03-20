import React from "react";
import './SearchWindow.css'

function SearchWindow({ setViewSearch, setViewIntro, setInputQuery, inputQuery, handleSearchQuery }) {
  return (
    <div className="input-form">
      <button
        onClick={() => {
          setViewSearch(false);
          setViewIntro(true);
        }}
        className=" back-btn"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
        <div className="search-box">
            <h1>Search by Name</h1>
            <input type="text" value={inputQuery} onChange={(e)=>setInputQuery(e.target.value)} />
            <button className="search" onClick={(e)=>handleSearchQuery(e)}>Search</button>
        </div>
    </div>
  );
}

export default SearchWindow;
