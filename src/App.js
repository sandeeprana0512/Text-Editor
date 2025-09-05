import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message,type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(()=>{
            setAlert(null);
        }, 1500);
    }

    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#021f2c';
            showAlert("Dark mode has been enabled", "Success");
            document.title = "TextUtils - Dark Mode";
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "Success");
            document.title = "TextUtils - Light Mode";
        }
    }
    return (
        <>
            <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} />
            <div className="container my-3">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </div>
        </>
    );
}

export default App;