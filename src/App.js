import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Toast } from "toaster-js"; // const { Toast } = require("toaster-js/umd.js");
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function App() {
  // state
  const [search, setSearch] = useState("");
  // loading state
  const [loading, setLoading] = useState(false);

  const submitSearch = () => {
    // check if its loading
    if (loading) {
      return;
    }

    // check if the search is not empty
    if (!search) {
      // display error message
      Toastify({
        text: "Please enter a search",
        duration: 3000,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
      }).showToast();

      return;
    }

    // set start loading
    setLoading(true);

    // send post request to http://localhost:3080/search with message
    axios
      .post("http://localhost:3080/search", {
        search,
      })
      .then((response) => {
        // set loading to false
        setLoading(false);

        // Your request has been sent
        Toastify({
          text: response.data.data,
          duration: 3000,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();

        // clear the search
        setSearch("");

      })
      .catch(() => {
        // set loading to false
        setLoading(false);

        // display error message
        Toastify({
          text: "Error sending search",
          duration: 3000,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
          stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();
      });
  };

  return (
    <div className="app">
      <div className="header">
        <h1 className="site-logo">OpenAI Search</h1>
        <div className="menu">
          <a href="#signup" className="signup-btn">
            Sign In
          </a>
        </div>
      </div>

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

          {loading && (
             <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          )}

          <button disabled={loading} onClick={submitSearch}>Search</button>

        </div>
      </div>
    </div>
  );
}

export default App;
