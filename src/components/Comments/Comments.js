import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments => setComments(comments) );
    }, []);



    return (
        <div className={'comments'}>
            {comments.map(value => <Comment name={value.name} body={value.body}/>)}
        </div>
    );
};

export default Comments;