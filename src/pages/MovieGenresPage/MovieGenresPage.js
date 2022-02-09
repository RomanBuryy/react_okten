import React from 'react';
import {useParams} from "react-router-dom";

const MovieGenresPage = () => {

 const params = useParams();

    console.log(params);

    return (
        <div>
            MovieGenresPage
        </div>
    );
};

export default MovieGenresPage;