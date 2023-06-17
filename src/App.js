import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About'
// {}: Javascript
// {{}}: Jvascript ka object hai (Majorly used to change the style of the app)

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-danger');
  }

  const [mode, setMode] = useState('light');

  const toggleMode = (cls) => {
    removeBodyClasses();

    if (cls) {
      document.body.classList.add('bg-' + cls);
      handleAlert("Background color has been changed!!","success")
      if (cls === 'primary' && document.getElementById('btn-1')) {
        for (let i = 1; i < 7; i++) {
          document.getElementById('btn-' + i.toString()).classList.remove('btn-primary');
          document.getElementById('btn-' + i.toString()).classList.add('btn-success');
        }
      }
      else if((cls !== 'primary' && document.getElementById('btn-1'))){
        for (let i = 1; i <= 6; i++) {
          document.getElementById('btn-' + i.toString()).classList.add('btn-primary');
          document.getElementById('btn-' + i.toString()).classList.remove('btn-success');
        }
      }
    }
    else if (mode === 'light' && !cls) {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(25 38 62)';
      document.body.style.color = 'White';
      handleAlert("Dark Mode has been enabled!", "success")
    }
    else if (mode === 'dark' && !cls) {
      setMode('light');
      document.body.style.backgroundColor = 'White';
      document.body.style.color = 'Black';
      handleAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes>
          <Route path="/" element = { <TextForm title="Enter the Text" mode={mode} handleAlert={handleAlert} />}/>
          <Route path="/about" element ={<About  mode={mode} handleAlert={handleAlert}/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
