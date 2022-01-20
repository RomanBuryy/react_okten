import React from 'react';
import {Link, NavLink ,Outlet} from "react-router-dom";

import css from './Layout.module.css';


const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>

            <Outlet/>
        </div>
    );
};

export default Layout;