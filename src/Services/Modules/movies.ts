import api from '../api'
import { MoviesResponse, MoviesSearchPayload, MoviesDetailResponse } from '../../Typings/Models/movies'

const getPopularMovies = async (): Promise<MoviesResponse> => {
  try {
    const response = await api.get('/movie/popular')
    return response.data
  } catch (error) {
    if (error) {
      console.log(error)
    }
    throw error
  }
}

const gettopRatedMovies = async (): Promise<MoviesResponse> => {
  try {
    const response = await api.get('/movie/top_rated')
    return response.data
  } catch (error) {
    if (error) {
      console.log(error)
    }
    throw error
  }
}

const getupcomingMovies = async (): Promise<MoviesResponse> => {
  try {
    const response = await api.get('/movie/upcoming')
    return response.data
  } catch (error) {
    if (error) {
      console.log(error)
    }
    throw error
  }
}

const searchMovies = async (payload: MoviesSearchPayload): Promise<MoviesResponse> => {
  let query = ''
  if (payload.search) {
    query = payload.search
  } else {
    query = ' '
  }
  let url = `/search/movie?query=${query}`
  if (payload.page) {
    url = `/search/movie?page=${payload.page}&query=${query}`
  }
  try {
    const response = await api.get(url)
    return response.data
  } catch (error) {
    if (error) {
      console.log(error)
    }
    throw error
  }
}

const getMovieDetail = async (id: number): Promise<MoviesDetailResponse> => {
  try {
    const response = await api.get(`/movie/${id}?append_to_response=videos`)
    return response.data
  } catch (error) {
    if (error) {
      console.log(error)
    }
    throw error
  }
}

export default {
  getPopularMovies,
  gettopRatedMovies,
  getupcomingMovies,
  searchMovies,
  getMovieDetail
}
