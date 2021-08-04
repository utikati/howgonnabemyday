import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import "./components/Button.css";
import MsgDay from "./components/MsgDay";

const App = () => {
  const arrayD = [
    "Shitty Day",
    "Beautifull Day",
    "You gonna be fired",
    "You gonna be smashed by a car",
    "You gonna be violated by a Bear",
    "You will drink poison",
    "I gonna have sex... in YOUR ASS",
    "Win Euromilhoes",
  ];

  const [msgOfDay, setMsgOfDay] = useState();

  const changeMsg = () => {
    setMsgOfDay(arrayD[Math.floor(Math.random() * 8)]);
  };

  return (
    <div className="container">
      <div className="add-task-button-container">
        {msgOfDay && <MsgDay title={msgOfDay} />}
        <Button onClick={changeMsg}>See How Gonna Be</Button>
      </div>
    </div>
  );
};

export default App;
