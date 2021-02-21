import React from 'react'
import './styles.css'
import { Movies } from '../../Typings/Models/movies'
import MovieCard from '../../Components/MovieCard'

interface MovieScrollerProps {
  data?: Movies[]
}

const MovieScroller: React.FC<MovieScrollerProps> = (props: MovieScrollerProps): JSX.Element => {
  const { data } = props

  const renderPosters = (): JSX.Element[] => {
    return data!.map(el => {
      return <MovieCard key={el.id?.toString()} data={el} />
    })
  }

  return (
    <div className="Movie_Scroller">
      <div className="Movie_Scroller_Container">
        {(data && data.length > 0)
          ? renderPosters()
          : (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <h4>There&apos;s no movies to show!</h4>
            </div>)
        }
        <div className="Spacer" />
      </div>
    </div>
  )
}

export default React.memo(MovieScroller)
