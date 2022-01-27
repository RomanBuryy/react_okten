import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {

    return (
        <div>
            <p>{album.title}</p>
            <Link to={album.id.toString() + '/photos'}>
                <button>Photos</button>
            </Link>
        </div>
    );
};

export default Album;