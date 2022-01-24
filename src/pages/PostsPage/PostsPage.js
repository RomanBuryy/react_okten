import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import css from './PostsPage.module.css'

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then((post) => {
            setPosts(post)
        })
    }, []);


    return (
        <div className={css.posts}>
            <div>
                {posts && posts.map(value => <Post key={value.id} post={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export default PostsPage;