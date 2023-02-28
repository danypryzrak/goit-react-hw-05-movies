import axios from "axios"

const KEY = '68e3775246544a4b01e0cb7df43b357c'
const BASE_URL = 'https://api.themoviedb.org/3/'
axios.defaults.baseURL = BASE_URL



export async function dataLoad(page=1) {
    const response = await axios("trending/all/day", { params: { api_key: KEY, page } })
    return response.data.results
    
}

export async function getSearchFilms(query, page) {
    const response = await axios('/search/movie', { params: { api_key: KEY, page, query } })
    return response.data.results
}

export async function getDetails(id) {
    const response = await axios(`/movie/${id}`, { params: { api_key: KEY, } })
    return response.data
}

export async function getCasts(id) {
    const response = await axios(`/movie/${id}/credits`, { params: { api_key: KEY, } })
    return response.data.cast
}

export async function getReviews(id) {
    const response = await axios(`/movie/${id}/reviews`, { params: { api_key: KEY, } })
    return response.data.results
}

