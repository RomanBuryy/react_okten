
import './App.css';
import Form from "./components/Form/Form";
import {useState} from "react";
import Cars from "./components/Cars/Cars";


function App() {
    const [cars, setCars] = useState([]);
    
    const getFormData = (data) => {
      setCars([...cars, {id: new Date().getTime(), ...data}])
    }
    return (
        <div className="App">
            <Form getFormData={getFormData}/>
            <Cars/>
    </div>
  );
}

export default App;
