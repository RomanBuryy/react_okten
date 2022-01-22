import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/user.service";

const UserDetailsPage = () => {

    const {id} = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}));

    }, [id])
    console.log(user)



    return (
        <div className={'user_details'}>
            {user && (<div>User name is {user.name}</div>)}
        </div>
    );
};

export default UserDetailsPage;