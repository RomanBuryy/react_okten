import {Route, Routes, Link, Navigate} from 'react-router-dom'

import './App.css';
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import UserPostPage from "./pages/UserPostPage/UserPostPage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";
import PostCommentsPage from "./pages/PostCommentsPage/PostCommentsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>

                        <Route path={':id'} element={<PostDetailPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>

                    </Route>



                </Route>
            </Routes>
        </div>

)
    ;
}

export default App;
