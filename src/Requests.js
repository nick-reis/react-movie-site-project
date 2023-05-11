import {createState, useState, createStore} from 'state-pool';

const key = 'f147e13bbc70124b306f41c0b2996ed9'
const baseURL = 'https://api.themoviedb.org/3/'
const language = '&language=en-US&page=1'

let movie_type = "movie";

const store = createStore();
store.setState("movie_type", "movie");



export const movieRequests = {
    requestMovie: (movieID) => { return `${baseURL}/${movie_type}/${movieID}?api_key=${key}${language}`;},
    requestSimilar: (movieID) => { return `${baseURL}/movie/${movieID}/similar?api_key=${key}${language}`;},
    requestPopular: `${baseURL}/${movie_type}/popular?api_key=${key}${language}`,
    requestTopRated: `${baseURL}/${movie_type}/top_rated?api_key=${key}${language}`,
    requestUpcoming: `${baseURL}/${movie_type}/upcoming?api_key=${key}${language}`
}

export const imageRequests = {
    originalImage: 'https://image.tmdb.org/t/p/original' ,
    w500Image: 'https://image.tmdb.org/t/p/w500'
}

export const newType = ({ mtype } ) => {
    const [type, setType] = useState("movie_type");

    setType(mtype);
    movie_type = type;
}
