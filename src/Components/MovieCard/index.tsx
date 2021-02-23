import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/rootReducer'
import { AppDispatch } from '../../Store/store'
import { Movies } from '../../Typings/Models/movies'
import { IconButton } from '@material-ui/core'
import StarBorder from '@material-ui/icons/StarBorder'
import Star from '@material-ui/icons/Star'
import Wallpaper from '@material-ui/icons/Wallpaper'
import moment from 'moment'
import { setFavorites } from '../../Store/Modules/User/userSlice'

export interface MovieCardProps {
  data: Movies
}

const MovieCard: React.FC<MovieCardProps> = (props: MovieCardProps): JSX.Element => {
  const dispatch = AppDispatch.dispatch
  const { domain } = useSelector((state: RootState) => state.Auth)
  const { favorites } = useSelector((state: RootState) => state.User)
  const { data } = props

  const checkFavorite = () => {
    const filter = favorites!.filter(el => el.id === data!.id)
    if (filter.length > 0) {
      return true
    }
    return false
  }

  const handleSetFavorite = () => {
    const newArray = [...favorites, data]
    dispatch(setFavorites({ favorites: newArray }))
  }

  const handleRemoveFavorite = () => {
    const newArray = favorites.filter(el => el.id !== data!.id)
    dispatch(setFavorites({ favorites: newArray }))
  }

  return (
    <div className="Movie_Card_Holder">
      <div className="Movie_Poster_Card">
        <a href={`movie/${data?.id}`} className="Movie_Image">
          {data.poster_path === null
            ? <div className="No_Image_Container">
              <Wallpaper className="Movies_Poster_noImage" />
            </div>
            : <img loading="lazy" className="Movie_poster_Image" src={domain + data.poster_path} alt="Movie Poster" />
          }
        </a>
        {checkFavorite()
          ? (<IconButton className="Movie_Card_Fav" onClick={() => handleRemoveFavorite()}>
            <Star />
          </IconButton>)
          : (<IconButton className="Movie_Card_Fav" onClick={() => handleSetFavorite()}>
            <StarBorder />
          </IconButton>)
        }
      </div>
      <h1 className="Movie_Title">{data?.title}</h1>
      <h2 className="Movie_Release">{moment(data?.release_date).format('MMM DD,YYYY')}</h2>
    </div>
  )
}

export default React.memo(MovieCard)
