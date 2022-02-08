import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Layout.module.css';

const Layout = () => {
    return (
        <div className={css.layout}>
            <div className={css.menu}>
                <div className={css.menu_item}><NavLink to={'/movies'}>Movies</NavLink> </div>
                <div className={css.menu_item}><NavLink to={'genres'}>Genres</NavLink></div>
            </div>

                <Outlet/>


        </div>


    );
};

export default Layout;