import Users from "./components/Users/Users";

import './App.css';
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";


function App() {
  return (
    <div>
        <div className={'col'}>
            <Users/>
            <Posts/>
        </div>
        <div>
            <Comments/>

        </div>


    </div>
  );
}

export default App;
