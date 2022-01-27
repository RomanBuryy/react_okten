import React from 'react';

import css from './Post.module.css';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div className={css.post}>
            <p> Post #{id} {title} </p>
            <Link to={post.id.toString()} state={post}>
                <button>Post details</button>
            </Link>
        </div>
    );
};

export default Post;