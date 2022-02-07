import {Route, Routes, Navigate} from 'react-router-dom'
import './App.css';


import Layout from "./components/Layout/Layout";
import MoviesPage from "./pages/MoviesPage/MoviesPage";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'genres'} element={<MoviesPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
