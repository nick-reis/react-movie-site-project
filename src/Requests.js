import {createState, useState, createStore} from 'state-pool';
import { createGlobalState } from 'react-hooks-global-state';

const key = 'f147e13bbc70124b306f41c0b2996ed9'
const baseURL = 'https://api.themoviedb.org/3/'
const language = '&language=en-US&page=1'



export const { setGlobalState, useGlobalState } = createGlobalState({
    mType: "movie",
    home: true
})


export const movieRequests = {
    requestMovie: (movie_type, movieID) => { return `${baseURL}/${movie_type}/${movieID}?api_key=${key}${language}`;},
    requestSimilar: (movie_type,  movieID) => { return `${baseURL}/movie/${movieID}/recommendations?api_key=${key}${language}`;},
    requestPopular: (movie_type) => { return`${baseURL}/${movie_type}/popular?api_key=${key}${language}`},
    requestTopRated: (movie_type) => { return`${baseURL}/${movie_type}/top_rated?api_key=${key}${language}`},
    requestUpcoming: (movie_type) => { return`${baseURL}/${movie_type}/upcoming?api_key=${key}${language}`},
    requestCast: (movie_type, movieID) =>  { return `${baseURL}/movie/${movieID}/credits?api_key=${key}${language}` },
    search :(movie_type, query) => { return `${baseURL}/search/${movie_type}?api_key=${key}&query=${query}`;} 
 
}

export const miscRequest = {
    requestTitle: (state, movie) => {
        if(state === "movie"){
            return movie?.title
        } else{
            return movie?.name

        }
    },
    requestActor: (id) => {
        return`${baseURL}/person/${id}?api_key=${key}${language}`
    },
    
    requestDate: (state, movie) => {
        if(state === "movie"){
            return movie?.release_date
        } else{
            return movie?.first_air_date

        }
    
    }
}

export const imageRequests = {
    originalImage: 'https://image.tmdb.org/t/p/original' ,
    w500Image: 'https://image.tmdb.org/t/p/w500'
}

