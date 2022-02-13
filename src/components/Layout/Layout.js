import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

import css from './Layout.module.css';
import user from '../../images/user.png'

const Layout = () => {
    return (
        <div className={css.layout}>
            <div className={css.menu}>
                <div className={css.logo}>
                    <Link to={'/'}>Netflik</Link>
                </div>

                <div className={css.menu_items}>
                    <div className={css.menu_item}><NavLink to={'/movies'}>Movies</NavLink> </div>
                    <div className={css.menu_item}><NavLink to={'genres'}>Genres</NavLink></div>
                </div>

                <div className={css.user}>
                    <div className={css.user_icon}>
                        {<img src={user} alt="asd"/>}
                    </div>

                </div>


            </div>

            <Outlet/>


        </div>


    );
};

export default Layout;