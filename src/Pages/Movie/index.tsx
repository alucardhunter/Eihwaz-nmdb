import React, { useEffect } from 'react'
import './styles.css'
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import MovieDetailPoster from '../../Components/MovieDetailPoster'
import AppDispatch from '../../Store/store'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/rootReducer'
import { getMovieDetail } from '../../Store/Modules/Movies/moviesThunk'

interface MovieParam {
  movie: string
}

const Movie: React.FC = () => {
  const dispatch = AppDispatch.dispatch
  const { movie } = useParams<MovieParam>()
  const { movieDetail } = useSelector((state: RootState) => state.Movies)

  useEffect(() => {
    dispatch(getMovieDetail(+movie))
  }, [dispatch])
  return (
    <Grid className="Movie_Page_Container">
      {movieDetail &&
        <MovieDetailPoster data={movieDetail} />
      }
    </Grid>
  )
}

export default Movie
