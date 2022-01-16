import {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";


function App() {

    const [oneUser, setOneUser] = useState([]);
    const [posts, setPosts] = useState([]);

    let getPosts = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(value => value.json())
            .then(value => setPosts(value));

    }

    let giveMeOneUser = (user) => {
        setOneUser(user);
        setPosts(null)
    }

    return (
        <div className="App">
            <Users giveMeOneUser={giveMeOneUser}/>
            <UserDetails oneUser={oneUser} getPosts={getPosts}/>
            <Posts posts={posts}/>


        </div>
    );
}

export default App;