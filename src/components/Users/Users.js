import React, {useEffect, useState} from 'react';

import User from "../User/User";

const Users = (props) => {
    const {giveMeOneUser} = props
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    return (
        <div className={'users'}>
            {users && users.map(value => <User key={value.id} user={value} giveMeOneUser={giveMeOneUser}/>)}
        </div>
    );
};

export default Users;