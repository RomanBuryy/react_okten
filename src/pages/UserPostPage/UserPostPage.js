import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";


const UserPostPage = () => {

    const {state} = useLocation();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(state.id).then((post) => {
            setUserPosts(post)
        })
    }, [state]);

    return (
        <div>
            {userPosts && userPosts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default UserPostPage;