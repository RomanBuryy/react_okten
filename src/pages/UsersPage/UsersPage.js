import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import {Link, NavLink ,Outlet} from "react-router-dom";


const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));

    }, [])


    return (
        <div className={'col'}>
            <div className={'users'}>
            {users && users.map(user => <User key={user.id} user={user}/>)}
            </div>

                <Outlet/>

        </div>
    );
};

export default UsersPage;