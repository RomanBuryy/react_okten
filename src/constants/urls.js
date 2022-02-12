const baseURL = 'https://api.themoviedb.org/3'
const apiKey = '5118b3b515f320b4cfe57cc9e4793445'

export default baseURL;

export const urls = {
    movies: `/discover/movie?api_key=${apiKey}`,
    genres: `/genre/movie/list?api_key=${apiKey}&language=en-US`,




}

