
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //state variable that tell whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
          setAlert({
            msg: message,
            type: type
          })
          setTimeout(() => {
            setAlert(null)
          }, 1500);
  }
  const enbDarkMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    //jsx(which has both js and html) start.......//<> it is jsx fragment used to get multiple division....bable compile jsx..
    <>
    <BrowserRouter>
    
      <Navbar title="Moddy" aboutText="AboutUs" mode={mode} enbDarkMode={enbDarkMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        <Route path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />}/>
        <Route path="/about" element={<About/>}/>
          </Routes>
        
        {/* <About/> */}
      </div>
      </BrowserRouter>
    </>
    //jsx ends





  );
}

export default App;
