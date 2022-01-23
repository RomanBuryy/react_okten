import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import css from './UsersPage.module.css'

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then((users) => {
            setUsers(users)
        })
    }, []);


    return (
        <div className={css.users}>
            <div>
            { users && users.map( user => <User key={user.id} user={user}/> )}
            </div>
            <Outlet/>

        </div>
    );
};

export default UsersPage;