import React from "react";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard"
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <div className="App">
      {/* {!isLoggedIn && <Login />}
      {isLoggedIn && <Dashboard />} */}
      <Dashboard />
    </div>
  );
}

export default App;
