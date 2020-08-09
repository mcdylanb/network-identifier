import React, { useState } from "react";
import "./App.css";


const App = ({ data }) => {
  const [usersNumber, setUsersNumber] = useState("");
  const [usersNetwork, setUsersNetwork] = useState("");

  const checksUsersNumber = () => {
    let network = "";
    data.forEach(e => {
      if (e.numbers.includes(usersNumber)) {
        network = e.network;
      }
    });
    setUsersNetwork(network);
    return network;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUsersNumber(e.target.value);
    checksUsersNumber();
  };

  const handleChangeNumber = e => {
    console.log(e.target.value);
    setUsersNumber(e.target.value);
  } 

  return (
    <div className="App">
      <div className="tittle">
        <h3>The Network Detector</h3>
        <h5>Identifies what cellular network you are using, only in the PHIL</h5>
      </div>
      {/* Users identified Network */} 
      <div className="yourNetwork">
        <h3>
          your network
        </h3>
        <h1>{usersNetwork}</h1>
      </div>
      {/* User input form */} 
      <div>
        <form onSubmit={handleSubmit}>
        <h4>TYPE IN YOUR NUMBER</h4>
        <p>PHONE NUMBER</p>
        <div>
          <input value={usersNumber} onChange={handleChangeNumber} />
        </div>
          <div><button type="submit"> Check</button></div>
        </form>
      </div>
    </div>
  );
};

export default App;
