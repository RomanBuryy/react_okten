import React from 'react';

const Comment = (props) => {

    const {name, body} = props;


    return (
        <div className={'comment'}>
            <p>Name {name}</p>
            <p>Body {body}</p>
        </div>
    );
};

export default Comment;