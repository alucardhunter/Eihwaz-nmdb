import React from 'react'
import './styles.css'
import { Movies } from '../../Typings/Models/movies'
import { RootState } from '../../Store/rootReducer'
import { useSelector } from 'react-redux'
import { AppDispatch } from '../../Store/store'
import { setFavorites } from '../../Store/Modules/User/userSlice'
import { IconButton } from '@material-ui/core'
import StarBorder from '@material-ui/icons/StarBorder'
import Star from '@material-ui/icons/Star'
import Wallpaper from '@material-ui/icons/Wallpaper'
import moment from 'moment'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

export interface FoundMovieCardProps {
  data: Movies
}

const FoundMovieCard: React.FC<FoundMovieCardProps> = (props: FoundMovieCardProps) => {
  const { data } = props
  const dispatch = AppDispatch.dispatch
  const { domain } = useSelector((state: RootState) => state.Auth)
  const { favorites } = useSelector((state: RootState) => state.User)
  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

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
    <div className="Found_Movie_Card_Holder">
      <div className="Found_Movie_Poster">
        <a href={`movie/${data?.id}`} className="Movie_Found_Image">
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
      <div className="Found_Movie_Information">
        <div className="Found_Movie_Wrapper">
          <a href={`/movie/${data.id}`} className="Found_Movie_Title">
            <ResponsiveEllipsis
              text={data.title}
              maxLine='2'
              ellipsis='...'
              trimRight
            />
          </a>
          <h2 className="Found_Movie_Date">{moment(data?.release_date).format('MMM DD,YYYY')}</h2>
          {data.overview &&
            <div className="Found_Movie_Overview">
              <ResponsiveEllipsis
                text={data.overview}
                maxLine='2'
                ellipsis='...'
                trimRight
              />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(FoundMovieCard)
