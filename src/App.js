import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#22223b";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Dark Mode Enabled";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 2500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
