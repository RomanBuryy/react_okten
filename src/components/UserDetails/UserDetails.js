import React from 'react';

const UserDetails = ({oneUser, getPosts}) => {
    const {id, name, email, username, phone, website} = oneUser;
    return (
        <div className={'user__details'}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{username}</p>
            <p>{phone}</p>
            <p>{website}</p>
            {id&&<button onClick={() => getPosts(id)}>Posts of current user</button>}
        </div>
    );
};

export default UserDetails;