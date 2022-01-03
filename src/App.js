
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode =()=> {
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor ="#042743"
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ="white"
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
  <>
  <Navbar mode ={mode} toggleMode={toggleMode}/>
  <Alert alert = {alert}/>

  <div className="container my-5"> 
  <TextForm showAlert={showAlert} heading='Enter Your Text To Analyze' mode ={mode}/>
  </div>
  </>
  );
}

export default App;
