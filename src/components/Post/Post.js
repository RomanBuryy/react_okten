import React from 'react';

const Post = ({post}) => {

    const {id,title} = post;


    return (
        <div>
            <p> Post #{id} {title} </p>
        </div>
    );
};

export default Post;