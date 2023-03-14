import "./App.css";
import AppRouter from "./Routes/AppRouter";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
