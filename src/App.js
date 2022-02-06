

import './App.css';
import {useEffect, useState} from "react";
import {userService as moviesService} from "./services/movies.service";



function App() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesService.getAll().then((movie) => {
            setMovies(movie)
        })
    }, []);

    console.log(movies)






  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
