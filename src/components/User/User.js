import React from 'react';


const User = ({user, giveMeOneUser}) => {
    const {name} = user

    return (
        <div className={'user'}>
            <h3>{name}</h3>
            <button onClick={() => giveMeOneUser(user)}>details</button>
        </div>
    );
};

export default User;