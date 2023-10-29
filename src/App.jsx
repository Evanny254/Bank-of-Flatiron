import React from "react";
import './App.css';
import AccountInformation from "./Components/AccountInformation";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountInformation />
    </div>
  );
}

export default App;