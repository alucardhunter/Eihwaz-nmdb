import React, { useState } from 'react'
import './styles.css'
import { MovieDetail } from '../../Typings/Models/movies'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/rootReducer'
import moment from 'moment'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import StarBorder from '@material-ui/icons/StarBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { Button, Modal } from '@material-ui/core'
import YouTube, { Options } from 'react-youtube'
import { setFavorites } from '../../Store/Modules/User/userSlice'
import { AppDispatch } from '../../Store/store'

interface MovieDetailPosterProps {
  data: MovieDetail
}

const MovieDetailPoster: React.FC<MovieDetailPosterProps> = (props: MovieDetailPosterProps) => {
  const { data } = props
  const dispatch = AppDispatch.dispatch
  const { domain } = useSelector((state: RootState) => state.Auth)
  const { favorites } = useSelector((state: RootState) => state.User)
  const [showModal, setShowModal] = useState(false)
  const domainBackdrop = 'http://image.tmdb.org/t/p/w1920_and_h800_multi_faces'
  let imageUrl = domainBackdrop + data.poster_path
  if (data.backdrop_path !== null) {
    imageUrl = domainBackdrop + data.backdrop_path
  }

  const renderGenres = () => {
    let genresText: string = ''
    if (data.genres!.length >= 1) {
      data.genres!.map((el, index) => {
        if (index > 0) {
          genresText = genresText + ', ' + el.name
        } else {
          genresText = genresText + el.name
        }
        return genresText
      })
    }
    return (
      <h4 className="Movies_Details_Section_Text">{genresText}</h4>
    )
  }

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

  const renderYoutube = () => {
    const opts: Options = {
      // height: '390',
      // width: '640',
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 1
      }
    }
    if (data.videos!.results!.length > 0) {
      return (
        <YouTube
          videoId={data.videos!.results![0].key}
          opts={opts}
        />
      )
    } else {
      return null
    }
  }

  const handleTrailerClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="Movies_Detail_Container" style={{ backgroundImage: 'url(' + imageUrl + ')' }}>
      <div className="Movies_Detail_Poster_Wraper">
        <div className="Movies_Detail_Poster_Container">
          <div className="Movies_Detail_Poster">
            <img className="Movie_Detail_Image" src={domain + data.poster_path} alt="Movie poster" />
          </div>
        </div>
        <div className="Movies_Detail_Information_Container" style={{ width: '70%' }}>
          <div className="Movies_Detail_Titles_Container">
            <h1 className="Movie_Detail_Title">{data.title}</h1>
            <h3 className="Movie_Detail_SubTitle">({moment(data.release_date).format('YYYY')})</h3>
          </div>
          <div className="Movies_Detail_Genres_Container">
            <h2 className="Movies_Details_Section_Title">Genres</h2>
            {renderGenres()}
          </div>
          <div className="Movies_Detail_Genres_Container">
            <h2 className="Movies_Details_Section_Title">Overview</h2>
            <h4 className="Movies_Details_Section_Text">{data.overview}</h4>
          </div>
          <div className="Movies_Detail_Genres_Container">
            <Button
              className="Movies_Detail_Buttons"
              variant="contained"
              startIcon={<ListAltIcon />}
              onClick={() => handleTrailerClick()}
            >
              Add to Watch List
            </Button>
            <Button
              className="Movies_Detail_Buttons"
              variant="contained"
              startIcon={<StarBorder />}
              onClick={() => {
                if (checkFavorite()) {
                  handleRemoveFavorite()
                } else {
                  handleSetFavorite()
                }
              }}
            >
              {checkFavorite() ? 'Remove From Favorite' : 'Set as Favorite'}
            </Button>
            {data.videos!.results!.length > 0 &&
              <Button
                variant="contained"
                color="secondary"
                startIcon={<PlayCircleOutlineIcon />}
                onClick={() => handleTrailerClick()}
              >
                Trailer
            </Button>
            }
          </div>
        </div>
      </div>
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        aria-labelledby="Movie Trailler"
        aria-describedby="Movie Trailler"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div>
          {renderYoutube()}
        </div>
      </Modal>
    </div>
  )
}

export default React.memo(MovieDetailPoster)
