import {useState} from "react";

import './App.css';
import User from "./components/User";
import Users from "./components/Users";


function App() {

    const [word, setWord] = useState('Hello');

    const adder = () => {
        setWord(word + '!');
        console.log(word);
    }

    return (
        <div>
            <Users/>


        </div>
    );
}

export default App;
