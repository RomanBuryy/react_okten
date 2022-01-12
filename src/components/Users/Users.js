import React, {useEffect, useState} from 'react';
import User from "../user/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => {
                setUsers(value)
            });


    }, []);


    return (
        <div className={'users'}>
            {users.map(value => <User key={value.id} name={value.name} username={value.username} email={value.email}/>)}
        </div>
    );
};

export default Users;