import React from "react";
import "./Button.css";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children} {/*Para ficar com o nome que lhe enviarmos*/}
    </button>
  );
};

export default Button;
