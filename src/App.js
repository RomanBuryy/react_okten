import {Route, Routes, Link} from 'react-router-dom'

import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";


function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>

                </Route>

            </Routes>



        </div>


)
    ;
}

export default App;
