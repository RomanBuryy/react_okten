import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";
import {albumsService} from "../../services/albums.service";
import Album from "../../components/Album/Album";

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);

    const {state} = useLocation();
    console.log(state)

    useEffect(() => {
        albumsService.getById(state.id).then((value) => setAlbums(value));
    }, [state]);

    console.log(albums);


    return (
        <div>


            {albums && albums.map(value => <Album key={value.id} album={value}/>)}


            <Outlet/>
        </div>
    );
};

export default AlbumsPage;