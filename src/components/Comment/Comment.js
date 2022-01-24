import React from 'react';

import css from './Comment.module.css';

const Comment = ({comment}) => {

    const {name, email, body} = comment;


    return (
        <div className={css.comment}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;