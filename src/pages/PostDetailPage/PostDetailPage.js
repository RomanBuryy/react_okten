import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";
import {postService} from "../../services/post.service";


const PostDetailPage = () => {

    const {state} = useLocation();




    return (
        <div>
            <div>

                <p>{state.body}</p>


                <Link to={'comments'} state={state}>  <button>Comments</button> </Link>

            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostDetailPage;