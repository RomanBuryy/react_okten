import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        postService.getAll().then(value => setPosts([...value]))
    },[]);

    return (
        <div>
            {posts && posts.map(value=> <Post key={value.id} post={value}/> )}
        </div>
    );
};

export default PostsPage;