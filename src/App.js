import "./App.css";
import Alert from "./modules/alert";
// import About from "./modules/About";
import Navbar from "./modules/navbar";
import TextForm from "./modules/textform";
import React, { useState } from "react";
//import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// const element = <FontAwesomeIcon icon={faEnvelope} />;

// ReactDOM.render(element, document.body)

function App() {
  const [mode, modeSetter] = useState("light");
  const [alert, alertsetter] = useState("");
  const setteralert = (message, type) => {
    alertsetter({
      msg: message,
      ty: type,
    });
    setTimeout(() => {
      alertsetter(null);
    }, 2000);
  };
  const Toggler = () => {
    if (mode === "light") {
      modeSetter("dark");
      document.body.style.backgroundColor = "#343a40 ";
      setteralert("Joined the Dark Side", "Success");
    } else {
      modeSetter("light");
      document.body.style.backgroundColor = "white ";
      setteralert("Let there be light", "Success");
    }
  };
  return (
    
    <div className="jarod">
      
        <Navbar title="textutils" mode={mode} Toggler={Toggler} />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
      
           

            <TextForm
                heading="Enter text here"
                mode={mode}
                setter={setteralert}
              />
             
            
        </div>
     
    </div>
   
  );
}

export default App;
