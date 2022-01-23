import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";



const UserDetailsPage = () => {

    const userParams = useParams();

    const {state} = useLocation();



    return (
        <div>
            <div>

                <p>{state.address.city}</p>
                <p>{state.address.street}</p>
                <p>{state.email}</p>
                <p>{state.phone}</p>

                <Link to={'posts'} state={state}>  <button>Details</button> </Link>

            </div>



            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export default UserDetailsPage;