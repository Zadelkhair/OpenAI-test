import "./App.css";
import AppRouter from "./Routes/AppRouter";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <div className="header">
          <h1 className="site-logo">OpenAI Search</h1>
          <div className="menu">
            <a href="#signup" className="signup-btn">
              Sign In
            </a>
          </div>
        </div>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
