import { createSlice } from '@reduxjs/toolkit'
import { MoviesState } from '../../../Typings/Models/movies'
import {
  getPopularMovies,
  gettopRatedMovies,
  getupcomingMovies,
  searchMovies,
  getMovieDetail
} from './moviesThunk'

const initialState: MoviesState = {
  status: 'idle'
}

const MoviesSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers: {
  },
  extraReducers:
    builder => {
      builder
        .addCase(getPopularMovies.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(getPopularMovies.fulfilled, (state, action) => {
          const { results } = action.payload
          state.status = 'idle'
          state.popularMovies = results
        })
        .addCase(getPopularMovies.rejected, (state) => {
          state.status = 'idle'
        })
        .addCase(gettopRatedMovies.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(gettopRatedMovies.fulfilled, (state, action) => {
          const { results } = action.payload
          state.status = 'idle'
          state.topRatedMovies = results
        })
        .addCase(gettopRatedMovies.rejected, (state) => {
          state.status = 'idle'
        })
        .addCase(getupcomingMovies.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(getupcomingMovies.fulfilled, (state, action) => {
          const { results } = action.payload
          state.status = 'idle'
          state.upcomingMovies = results
        })
        .addCase(getupcomingMovies.rejected, (state) => {
          state.status = 'idle'
        })
        .addCase(searchMovies.pending, (state) => {
          state.status = 'loading'
          state.foundedMovies = undefined
        })
        .addCase(searchMovies.fulfilled, (state, action) => {
          state.status = 'idle'
          state.foundedMovies = action.payload
        })
        .addCase(searchMovies.rejected, (state) => {
          state.status = 'idle'
        })
        .addCase(getMovieDetail.pending, (state) => {
          state.status = 'loading'
          state.movieDetail = undefined
        })
        .addCase(getMovieDetail.fulfilled, (state, action) => {
          state.status = 'idle'
          state.movieDetail = action.payload
        })
        .addCase(getMovieDetail.rejected, (state) => {
          state.status = 'idle'
        })
    }
})

export default MoviesSlice.reducer
