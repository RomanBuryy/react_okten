
import './App.css';
import Users from "./components/Users/Users";
import {useDispatch, useSelector} from "react-redux";
import {addUser, getAllUsers} from "./store";

function App() {
    const {users} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    dispatch(addUser(users));


  return (
    <div className="App">
        <Users/>




    </div>
  );
}

export default App;
