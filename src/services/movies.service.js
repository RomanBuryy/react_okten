import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const moviesService = {
    getAll: () => axiosService.get(urls.movies).then(value => value.data)


}