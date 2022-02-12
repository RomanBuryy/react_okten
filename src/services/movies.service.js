import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const moviesService = {
    getAll: () => axiosService.get(urls.movies).then(value => value.data),
    getAllWithGenre: (id)=> axiosService.get(urls.movies+`&with_genres=${id}`).then(value => value.data),
    getById: (id)=> axiosService.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5118b3b515f320b4cfe57cc9e4793445&language=en-US`)


}

