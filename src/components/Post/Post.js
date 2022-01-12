import React from 'react';

const Post = (props) => {
    const {title} = props;
    return (
        <div className={'post'}>
            <p>Post title {title}</p>
        </div>
    );
};

export default Post;