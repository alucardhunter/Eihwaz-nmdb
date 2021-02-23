import React, { useEffect } from 'react'
import './styles.css'
import { Grid } from '@material-ui/core'
import Banner from '../../Components/Banner'
import MovieScroller from '../../Components/MovieScroller'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/rootReducer'
import { AppDispatch } from '../../Store/store'
import { getPopularMovies, gettopRatedMovies, getupcomingMovies } from '../../Store/Modules/Movies/moviesThunk'

const Welcome: React.FunctionComponent = () => {
  const dispatch = AppDispatch.dispatch
  const { favorites } = useSelector((state: RootState) => state.User)
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector((state: RootState) => state.Movies)

  const loadMovies = async () => {
    await dispatch(getPopularMovies())
    await dispatch(gettopRatedMovies())
    await dispatch(getupcomingMovies())
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <Grid container className="Container" spacing={0}>
      <Banner />
      <section className="Movies_Section">
        <h1 className="Section_Title">Your Favorite Movies</h1>
        <MovieScroller data={favorites} />
      </section>
      <section className="Movies_Section">
        <h1 className="Section_Title">Our Most Popular Movies</h1>
        <MovieScroller data={popularMovies} />
      </section>
      <section className="Movies_Section">
        <h1 className="Section_Title">Top Rated Movies</h1>
        <MovieScroller data={topRatedMovies} />
      </section>
      <section className="Movies_Section">
        <h1 className="Section_Title">Upcoming Movies</h1>
        <MovieScroller data={upcomingMovies} />
      </section>
    </Grid>
  )
}

export default Welcome
