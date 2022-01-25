import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Album = ({album}) => {

    const {id} = useLocation();

    return (
        <div>
            <p>{album.title}</p>

            {/*<Link to={id.toString()+'/photos'}> <button>Photos</button> </Link>*/}
        </div>
    );
};

export default Album;