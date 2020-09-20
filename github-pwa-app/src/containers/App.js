import React from "react";
import "./App.css";
import logo from "../assets/logo.svg";
import Header from "../components/Header/Header";
import Profile from "../containers/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
