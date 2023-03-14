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

      <div className="how-it-works section">
        <div className="container">
          <div className="how-it-works-title section-title">
            <h2>How It Works</h2>
            <p>Our platform makes it easy to connect with freelance developers</p>
          </div>
          <div className="how-it-works-content">
            <div className="how-it-works-item">
              <div className="how-it-works-item-icon">
                <img src="/icons/1.png" alt="icon" />
              </div>
              <div className="how-it-works-item-content">
                <h3>Enter your needs in our AI chatbot.</h3>
              </div>
            </div>
            <div className="how-it-works-item">
              <div className="how-it-works-item-icon">
                <img src="/icons/2.png" alt="icon" />
              </div>
              <div className="how-it-works-item-content">
                <h3>Answer a few questions to help us find the right developer for you.</h3>
              </div>
            </div>
            <div className="how-it-works-item">
              <div className="how-it-works-item-icon">
                <img src="/icons/3.png" alt="icon" />
              </div>
              <div className="how-it-works-item-content">
                <h3>Be connected with a freelance developer instantly.</h3>
              </div>
            </div>
            <div className="how-it-works-item">
              <div className="how-it-works-item-icon">
                <img src="/icons/4.png" alt="icon" />
              </div>
              <div className="how-it-works-item-content">
                <h3>Collaborate on your project and enjoy the benefits of our AI code automation.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="benefits section">
        <div className="container">
          <div className="benefits-title section-title">
            <h2>Benefits</h2>
            <p>Our platform makes it easy to connect with freelance developers:</p>
          </div>
          <div className="benefits-content">
            <div className="benefits-item">
              <div className="benefits-item-icon">
                <img src="/icons/5.png" alt="icon" />
              </div>
              <div className="benefits-item-content">
                <h3>Instant access to a developer.</h3>
              </div>
            </div>
            <div className="benefits-item">
              <div className="benefits-item-icon">
                <img src="/icons/6.png" alt="icon" />
              </div>
              <div className="benefits-item-content">
                <h3>Improved collaboration thanks to AI code automation.</h3>
              </div>
            </div>
            <div className="benefits-item">
              <div className="benefits-item-icon">
                <img src="/icons/7.png" alt="icon" />
              </div>
              <div className="benefits-item-content">
                <h3>Less experienced developers can earn money with the help of our AI code automation and guidelines.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="join-now section">
        <div className="container">
          <div className="join-now-title section-title">
            <h2>Join Now</h2>
            <p>Ready to get started? Fill out the form below and we’ll send you an invitation to join our platform.</p>
          </div>
          <div className="join-now-content">
            <form action="#" method="POST">
              <div className="join-now-item">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" required />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; HackrHQ 2023</p>
      </div>
        
    </>
  );
}
