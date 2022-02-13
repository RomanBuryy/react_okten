import React from 'react';
import {NavLink} from "react-router-dom";

import css from './genre.module.css'

const Genre = ({genre}) => {
    return (
        <div className={css.genre}>
            <NavLink to={genre.id.toString()}>
                <div>{genre.name}</div>
            </NavLink>
        </div>
    );
};

export default Genre;