import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  // state
  const [search, setSearch] = useState("");
  // loading state
  // navigation
  const navigate = useNavigate();

  const submitSearch = () => {
    // redirect the user to /needs/1 with the search
    navigate("/needs", { state: search });
  };

  return (
    <>
      <div className="search">
        <h1>What are you looking for?</h1>
        <div class="search-container">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // when pressing enter
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                submitSearch();
              }
            }}
          />

          <button onClick={submitSearch}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
