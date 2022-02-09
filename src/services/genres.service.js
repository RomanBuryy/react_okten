import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const genresService = {
    getAll: ()=> axiosService.get(urls.genres).then(value => value.data),
    getCurrentGenre: (genreID)=> axiosService.get(`${urls.genres}/${genreID}`)
}