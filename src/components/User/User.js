import React from 'react';

import css from './User.module.css'
import {Link} from "react-router-dom";


const User = ({user}) => {


    return (
        <div className={css.user}>
            <div>{user.name}</div>
            <div>{user.username}</div>

            <Link to={user.id.toString()} state={user}>
                <button>Details</button>
            </Link>
            <Link to={user.id.toString() + '/albums'} state={user}>
                <button>Albums</button>
            </Link>

        </div>
    );
};

export default User;