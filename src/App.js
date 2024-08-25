import ReactGA from "react-ga4";
import React, { useState } from "react";
import "./App.css";
// src/index.js
import "./index.css";
import { Modal } from "./components/Modal"; // Import the Modal component
import Switch from "./components/Switch"; // Import the Switch component
import Card from "./components/Card"; // Import the Card component
import { themes } from "./themes"; // Import the themes object
import { ReactTyped } from "react-typed";
import mImage from "./M.png";
import nImage from "./Picture1.png";
import rImage from "./robocop.png";
import tImage from "./movavg.png";

//function test() {
  //console.log("test");
//}

const App = () => {


  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");
  const oncardclick = (title, text) => {
    setModalTitle(title);
    setModalText(text);    
    setModalOpen(true);

  };
  const handleOutsideClick = () => {
    setModalOpen(false);
  };
  ReactGA.initialize("G-HRLWE6S8SB");
  return (
    <div className="App">
      <div className="topnav">
        <b className="active"> </b>
        <div className="nav-right">
          <div class="dropdown">
            <button class="dropbtn">links</button>
            <div class="dropdown-content">
              <a href="https://linkedin.com/in/adamali123/">LinkedIn</a>
              <a href="https://www.instagram.com/adam.osmn/">Instagram</a>
            </div>
          </div>
          <Switch />
        </div>
      </div>

      <div class="blocks">
        <h1>
          <ReactTyped
            strings={[
              "Hi, I'm Adam.",
              "I study EIE at ICL.",
              "I play Chess.",
              "I like Logic Design.",
            ]}
            typeSpeed={100}
            backSpeed={70}
            backDelay={7500}
            loop
          />{" "}
        </h1>
        <p1>
          I've just finished my second year at Imperial College London, where I
          study Electronics and Information Engineering (MEng, graduating 2026).
          I'm particularly interested in Trading and Computer Architecture as
          two broad areas, and looking to pursue either in a summer internship
          or placement for 2025.
        </p1>
      </div>
      <div class="blocks">
        <h1>Projects.</h1>
      </div>

      <div className="card-container">
        <div onClick={()=>oncardclick("FX Bot",
          "to be updated")}>
          <Card
            title="FX Bot"
            subtitle="Trading"
            description="Live bot deployed on server to trade FX pairs using custom trade strategy. Implements portfolio optimization and connected to a front end trader dashboard."
            image={tImage}
            theme={themes.cremeTheme}
          />
        </div>
        <div onClick={() => oncardclick("RISCV CPU",
          "To be updated"
        )}>
          <Card
            title="RISC-V CPU"
            subtitle="Computer Architecture"
            description="Single Cycle and Pipelined RISCV32i with Cache implemented in SystemVerilog. Currently adding different static/dynamic branch-prediction schemes."
            image={mImage}
            theme={themes.nidoTheme}
          />
        </div>
        <div onClick={() => oncardclick("BalanceBot", "to be updated")}>
          <Card
            title="BalanceBot"
            subtitle="Web Development, Computer Vision"
            description="Self-balancing, remote control rover with object-detection capabilities. UI communication with onboard Pi and Arduino via Node.js server on AWS. "
            image={rImage}
            theme={themes.blackTheme}
          />
        </div>
      </div>
      <div className="card-container">
      <div onClick={() => oncardclick("pplTrackrr", "to be updated")}>          <Card
            title="pplTrackrr"
            subtitle="Computer Vision"
            description="Inspired by COVID-19 room occupancy limits, this project uses OpenCV object-detection on an overhead Raspberry Pi to detect live occupancy."
            theme={themes.blackTheme}
          />{" "}
        </div>
        <div onClick={() => oncardclick("Price-Prediction", "to be updated")}>
        <Card
          title="Price-Prediction"
          subtitle="Neural Networks"
          description={
            <span>
              Predicting the 'close price' of a stock by feeding historical data
              from Yahoo Finance into a neural network. Credit to:{" "}
              <a href="https://www.linkedin.com/in/thapahemant/?originalSubdomain=uk">
                Hemant Thapa
              </a>
            </span>
          }
          image={nImage}
          theme={themes.greenTheme}
        />
        </div>
        <div onClick={() => oncardclick("Blah", "to be updated ")}>
        <Card
          title="Blah"
          subtitle="Blah, blah, blah"
          description="hmmm who knows what the future holds? "
          theme={themes.default}
        />
        </div>
      </div>
      {modalOpen && (
        <Modal
          onClose={handleOutsideClick}
          title={modalTitle}
          content={modalText}
        />
      )}
    </div>
  );
};

export default App;
