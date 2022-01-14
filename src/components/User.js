import React from 'react';

const User = (props) => {
        const {name, email} = props

    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <button>details</button>
        </div>
    );
};

export default User;