import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {albumsService} from "../../services/albums.service";
import Album from "../../components/Album/Album";

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);
const {id} = useParams();


    useEffect(() => {
        albumsService.getById(id).then((value) => setAlbums(value));
    }, [id]);




    return (
        <div>

            {albums && albums.map(value => <Album key={value.id} album={value}/>)}

            <Outlet/>
        </div>
    );
};

export default AlbumsPage;