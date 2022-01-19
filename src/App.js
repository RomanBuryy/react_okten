import {useEffect, useState} from "react";

import Users from "./components/Users/Users";
import './App.css';

function App() {
    const [form, setForm] = useState({name: '', username: '', email: ''});
    const [users, setUsers] = useState([]);
    const [filteredUsers, setfilteredUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                    setUsers(value)
                    setfilteredUsers(value)
                }
            )
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        let arr = [...users];

        if (form.name) {
            arr = arr.filter(user => user.name.toLowerCase().includes(form.name.toLowerCase()));
        }
        if (form.username) {
            arr = arr.filter(user => user.username.toLowerCase().includes(form.username.toLowerCase()));
        }
        if (form.email) {
            arr = arr.filter(user => user.email.toLowerCase().includes(form.email.toLowerCase()));
        }
        setfilteredUsers(arr);
    }

    const objFromFormHandler = (e) => {
        const data = {...form, [e.target.name]: e.target.value}
        setForm({...data});
    }

    return (
        <div className="App">
            <form>
                <div>
                    <label>Name: <input type='text' name={'name'} value={form.name}
                                        onChange={objFromFormHandler}/></label>
                    <label>Username: <input type='text' name={'username'} value={form.username}
                                            onChange={objFromFormHandler}/></label>
                    <label>Email: <input type='text' name={'email'} value={form.email}
                                         onChange={objFromFormHandler}/></label>
                </div>
                <button onClick={onSubmit}>Send</button>
            </form>
            <Users users={filteredUsers}/>
        </div>
    );
}

export default App;
