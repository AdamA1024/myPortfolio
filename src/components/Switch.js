import React from "react";
import "./Switch.css";


const Switch = () => {
  const setDarkMode = () => {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");  };

  const setLightMode = () => {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    }
    else{
      setLightMode();
    }
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={toggleTheme} />
      <span className="slider" />
    </label>
  );
};

export default Switch;
