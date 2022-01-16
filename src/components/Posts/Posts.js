import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";




const Posts = ({posts}) => {






//posts.map

    return (
        <div>

            {posts && posts.map(value => <Post key={value.id} post={value} />)}



        </div>
    );
};

export default Posts;