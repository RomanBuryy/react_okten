import {useState} from "react";

import './App.css';
import User from "./components/User";


function App() {

    const [word, setWord] = useState('Hello');

    const adder = () => {
        setWord(word + '!');
        console.log(word);
    }

    return (
        <div>
            <button onClick={() => adder()}>Click</button>
            {word}
          <User name={'Roman'}></User>


        </div>
    );
}

export default App;
