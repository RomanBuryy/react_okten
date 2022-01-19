import React from 'react';

const User = ({user}) => {

    const {name, username, email} = user;

    return (
        <div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    );
};

export default User;