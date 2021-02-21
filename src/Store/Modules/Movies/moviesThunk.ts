import { createAsyncThunk } from '@reduxjs/toolkit'
import Api from '../../../Services/Modules/movies'
import { MoviesSearchPayload } from '../../../Typings/Models/movies'

export const getPopularMovies = createAsyncThunk(
  'movies/getMovies',
  async () => {
    try {
      const response = await Api.getPopularMovies()
      return response
    } catch (err) {
      console.log(err)
      throw err.response.data
    }
  }
)

export const gettopRatedMovies = createAsyncThunk(
  'movies/gettopRatedMovies',
  async () => {
    try {
      const response = await Api.gettopRatedMovies()
      return response
    } catch (err) {
      console.log(err)
      throw err.response.data
    }
  }
)

export const getupcomingMovies = createAsyncThunk(
  'movies/getupcomingMovies',
  async () => {
    try {
      const response = await Api.getupcomingMovies()
      return response
    } catch (err) {
      console.log(err)
      throw err
    }
  }
)

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (payload: MoviesSearchPayload) => {
    try {
      const response = await Api.searchMovies(payload)
      return response
    } catch (err) {
      console.log(err)
      throw err.response.data
    }
  }
)

export const getMovieDetail = createAsyncThunk(
  'movies/getMovieDetail',
  async (id: number) => {
    try {
      const response = await Api.getMovieDetail(id)
      return response
    } catch (err) {
      console.log(err)
      throw err.response.data
    }
  }
)
