import React, {useEffect, useState} from 'react';


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/users', {
            mode: 'no-cors'
        })
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    console.log(users)

    return (
        <div>
            {users && users.map(value => <div>{value.username}</div>)}
        </div>
    );
};

export default Users;