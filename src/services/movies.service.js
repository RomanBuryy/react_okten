import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const moviesService = {
    getAll: () => axiosService.get(urls.movies).then(value => value.data),
    getAllWithGenre: (id)=> axiosService.get(urls.movies+`&with_genres=${id}`).then(value => value.data),
    getById: (id)=> axiosService.get(urls.movies+`/${id}`)


}

