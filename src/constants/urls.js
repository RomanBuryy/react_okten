const baseURL = 'https://api.themoviedb.org/3'
const apiKey = '5118b3b515f320b4cfe57cc9e4793445'

export default baseURL;

export const urls ={
    movies: `/discover/movie?api_key=${apiKey}`
}

//https://api.themoviedb.org/3/discover/movie?api_key=5118b3b515f320b4cfe57cc9e4793445&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=10&with_watch_monetization_types=flatrate