import React from 'react';

const User = ({user}) => {

    const {id, name, username} = user;

    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
        </div>
    );
};

export default User;