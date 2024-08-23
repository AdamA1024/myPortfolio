import ReactGA from "react-ga4";
import {useState} from "react";

import './App.css';


const App = () => {
  ReactGA.initialize("G-HRLWE6S8SB")
  const [modalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(false);
  }
  return (<div className = "App" > 
  </div>);
};

export default App;
