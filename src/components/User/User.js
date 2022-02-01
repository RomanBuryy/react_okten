import React from 'react';

const User = ({user: {id, name}}) => {

    return (
        <div>
            {name}
        </div>
    );
};

export default User;