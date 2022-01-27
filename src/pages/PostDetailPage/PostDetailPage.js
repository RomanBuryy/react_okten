import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";

import css from './PostDetailPage.module.css'

const PostDetailPage = () => {

    const {state} = useLocation();

    return (
        <div>
            <div className={css.post_detail}>
                <p>{state.body}</p>
                <Link to={'comments'} state={state}>
                    <button>Comments</button>
                </Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostDetailPage;