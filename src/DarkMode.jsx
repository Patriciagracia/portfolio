import React, { useState, useEffect } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (darkMode) {
      bodyClass.add("dark-mode");
    } else {
      bodyClass.remove("dark-mode");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(function (currentDarkMode) {
      return !currentDarkMode;
    });
  }

  return (
    <div className="form-check form-switch d-flex justify-content: center">
      <span className="sun">☀️</span>
      <span>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
      </span>
      <span className="moon">🌙</span>
    </div>
  );
}
