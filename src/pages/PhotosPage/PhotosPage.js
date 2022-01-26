import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {photosService} from "../../services/photos.service";
import {findAllByDisplayValue} from "@testing-library/react";

const PhotosPage = () => {

    const {id, photoId} = useParams();
    console.log(id, 'userId')
    console.log(photoId, 'photoId')

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photosService.getById(photoId).then(value => setPhotos(value));
    }, [photoId])

    console.log(photos);


    return (
        <div>
            {photos && photos.map(value => {
                return (
                    <div>{value.thumbnailUrl}</div>
                )
            })}
        </div>
    );
};

export default PhotosPage;