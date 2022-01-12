import React from 'react';
import './User.css'


const User = (props) => {
    const {name, username, email} = props;

    return (
        <div className={'user'}>
            <h3>name: {name}</h3>
            <p>username: {username}</p>
            <p>email: {email}</p>
        </div>
    );
};

export default User;