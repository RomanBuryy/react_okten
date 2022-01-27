import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {photosService} from "../../services/photos.service";

const PhotosPage = () => {

    const {id, photoId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photosService.getById(photoId).then(value => setPhotos(value));
    }, [photoId])

    return (
        <div>
            {photos.map((photo) => {
                const list = (
                    <>
                        <ul>
                            <li>Id: {photo.id}</li>
                            <img alt={photo.id} key={photo.id} src={photo.thumbnailUrl}/>
                        </ul>
                    </>
                );
                return list;
            })}
        </div>
    );
};

export default PhotosPage;