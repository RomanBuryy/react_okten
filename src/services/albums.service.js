import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const albumsService = {
    getById: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data)
}