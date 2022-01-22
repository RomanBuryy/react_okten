import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name, username} = user;

    return (
        <div className={'user'}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
            <Link to={id.toString()}> Details </Link>
        </div>
    );
};

export default User;