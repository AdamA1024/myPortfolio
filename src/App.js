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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const oncardclick = (title, text) => {
    setModalTitle(title);
    setModalText(text);    
    setModalOpen(true);

  };
  const toggleTheme = (isDark) => {
    setIsDarkMode(isDark);
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
          <Switch onToggle={toggleTheme}/>
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
          `To be updated once completed but current concepts extend to:
          - FX currency pairs
          - Cloud deployment
          - Backtesting
          - Trade idea conception
          - Porfolio optimization
          - Trader dashboard UI
          `
          )}>
          <Card
            title="FX Bot"
            subtitle="Trading"
            description="*in progress* Live bot deployed on AWS to trade FX pairs using custom trade strategy. Implements portfolio optimization and connected to a front end trader dashboard."
            image={tImage}
            theme={themes.cremeTheme}
          />
        </div>
        <div onClick={() => oncardclick("RISCV CPU",
          `This was a project undertaken in a group of 4 for the Instruction Architecture and Compilers module at Imperial College London. The core task was to implement a RISC-V32i Single-Cycle CPU in SystemVerilog, before moving onto a pipelined version. As an extension, teams could also implement a Cache.
          We were able to implement all parts, including a directly-mapped cache, therefore ranking us in the top teams. The project was an instrumental learning experience in terms of understanding computer architecture, and the importance of well-synchronised teamwork, since each member is responsible for different modules.
          Personally, I thoroughly enjoyed learning SystemVerilog, and since then I have read books on digital design. As such, I am currently extending the CPU to include static or dynamic branch-prediction schemes;
          
          - BTFNT: The "Backwards taken, forwards not taken" strategy is well-suited to programs operating in loops, where we often branch back to the start of the loop at the end of each iteration.
          - 2-bit saturating counter: This is a simple scheme that requires two consecutive mispredictions to change the assumption of taking a branch or not.
          - 2-level adaptive predictor: This is more complex, using a global history register to predict the outcome of a branch based on the history of all branches in the program. This works well with programs that exhibit patterns in their branching behaviour.`
          
         
        )}>
          <Card
            title="RISC-V CPU"
            subtitle="Computer Architecture"
            description="Single Cycle and Pipelined RISCV32i with Cache implemented in SystemVerilog. Currently adding different static/dynamic branch-prediction schemes."
            image={mImage}
            theme={themes.nidoTheme}
          />
        </div>
        <div onClick={() => oncardclick("BalanceBot", 
          `This was the 2nd year final project undertaken in a group of 2 EIE students and 4 EEE students at Imperial College London. There were several objectives for this:
          - Designing a control algorithm to achieve self-balancing (both stationary and in motion)
          - Designing current sensing circuitry to monitor power output and battery life
          - Be remotely controlled via a web interface and the onboard ESP32 (WiFi module)
          - Meet a wider purpose. For this we decided to implement object-detection for various toy animals that would be placed in the test arena.
          
          On the EIE subteam: we trained a YOLO object-detection model using pre-processed images from the Google Open Image Dataset, leveraging Google Colab's hardware acceleration in the process.
          Ran a Node.js server on an AWS EC2 instance, to communicate with the React UI and the onboard Arduino (motor control)+Raspberry Pi(computer vision using Pi camera ) via HTTP.
          Created a video stream from onboard the rover to the UI. The user can then prompt the object-detection based on what they see, which should return the name of the animal, and a textual description retrieved from a DynamoDB database.`)}>
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
      <div onClick={() => oncardclick("pplTrackrr", `This was a summer project undertaken in a trio in Year 12 at Wilson's Grammar School as part of the CREST program, for which we achieved a Gold.
        The project aim was to accurately calculate the number of occupants inside a room at any given time. It started off by using IR light gates to detect when a beam was broken, representing an occupant crossing the room boundary.
        
        The approach was primitive for a number of reasons, but largely due to only being suited to stores with separate entrances and exits. Instead, our next iteration was using an object-detection model from OpenCV to identify "people" and discern the direction they were moving in. This was enabled by placing a Pi camera and Raspberry Pi running the code directly above the store entrance.
        
        Each "person" becomes a "centroid", uniquely identified by an ID and the (x,y) coordinates of the centre of the bounding box around the person. The direction of motion is discerned by looking at the y coordinate of consecutive frames. Lastly, if an ID is detected to be missing for a number of frames, then it is removed from being tracked. This approach allows multiple centroids to be tracked whilst keeping an accurate count of store occupancy.`)}>          
        <Card
            title="pplTrackrr"
            subtitle="Computer Vision"
            description="Inspired by COVID-19 room occupancy limits, this project uses OpenCV object-detection on an overhead Raspberry Pi to detect live occupancy."
            theme={themes.blackTheme}
          />
        </div>
        <div onClick={() => oncardclick("Price-Prediction", `*Disclaimer: not my work* Neural network taking historical data from AAPL close prices to determine the next day's close price for MSFT.
          Used Yahoo finance to obtain historic data, and polynomial features transformation.`)}>
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
        <div onClick={() => oncardclick("Blah", "to be updated. Most likely will be a trading FPGA related project. ")}>
        <Card
          title="Blah"
          subtitle="Blah, blah, blah"
          description="hmmm who knows what the future holds?"
          theme={themes.default}
        />
        </div>
      </div>
      {modalOpen && (
        <Modal
          onClose={handleOutsideClick}
          title={modalTitle}
          content={modalText}
          theme={isDarkMode}
        />
      )}
    </div>
  );
};

export default App;
