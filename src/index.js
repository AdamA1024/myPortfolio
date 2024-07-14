// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Switch from "./components/Switch"; // Import the Switch component
import Card from "./components/Card"; // Import the Card component
import { themes } from "./themes"; // Import the themes object
import { ReactTyped } from "react-typed";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="topnav">
      <b className="active"> </b>
      <div className="nav-right">
        <div class="dropdown">
          <button class="dropbtn">
            links
          </button>
          <div class="dropdown-content">
            <a href="www.linkedin.com/in/adamali123">LinkedIn</a>
            <a href="https://www.instagram.com/adam.osmn/">Instagram</a>
          </div>
        </div>
        <Switch />
      </div>
    </div>
    <div className="main">
      <App />
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
        I'm particularly interested in Trading and Computer Architecture as two
        broad areas, and looking to pursue either in a summer internship or
        placement for 2025.
      </p1>
    </div>

    <div class="blocks">
      <h1>Projects.</h1>
    </div>
    <div className="card-container">
      <Card
        title="TradingBlog"
        subtitle="Trading"
        description="To be updated with more specific projects in future"
        image="src/tr.jpg"
        theme={themes.nidoTheme}
      />
      <Card
        title="RISC-V CPU"
        subtitle="Computer Architecture"
        description="Single Cycle and Pipelined RISCV32i with Cache implemented in SystemVerilog."
        image="src/tr.jpg"
        theme={themes.greenTheme}
      />

      <Card
        title="BalanceBot"
        subtitle="Web Development, Computer Vision"
        description="Self-balancing, remote control rover with object-detection capabilities. UI communication with onboard Pi and Arduino via Node.js server on AWS. "
        image="src/tr.jpg"
        theme={themes.blackTheme}
      />
    </div>
    <div className="card-container">
      <Card
        title="pplTrackrr"
        subtitle="Computer Vision"
        description="Occupancy tracking using OpenCV and Python, inspired by COVID-19 room occupancy limits."
        image="src/tr.jpg"
        theme={themes.blackTheme}
      />
      <Card
        title="Price-Prediction"
        subtitle="Neural Networks"
        description={
          <span>
            Predicting the 'close price' of a stock given historical data from
            Yahoo Finance. Credit to{" "}
            <a href="https://www.linkedin.com/in/thapahemant/?originalSubdomain=uk">
              Hemant Thapa
            </a>
          </span>
        }
        image="src/tr.jpg"
        theme={themes.cremeTheme}
      />

      <Card
        title="Blah"
        subtitle="Blah, blah, blah"
        description="hmmm who knows what the future holds? "
        image="src/tr.jpg"
        theme={themes.default}
      />
    </div>
  </React.StrictMode>
);

reportWebVitals();
