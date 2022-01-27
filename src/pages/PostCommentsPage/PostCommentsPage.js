import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import {postService} from "../../services/post.service";
import Comment from "../../components/Comment/Comment";

const PostCommentsPage = () => {

    const {state} = useLocation();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getByPostId(state.id).then(value => {
            setComments(value)
        })
    }, [state.id]);

    return (
        <div>
            {comments && comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export default PostCommentsPage;