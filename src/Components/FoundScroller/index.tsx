import React from 'react'
import './styles.css'
import { Movies } from '../../Typings/Models/movies'
import FoundMovieCard from '../FoundMovieCard'

interface FoundScrollerProps {
  data?: Movies[]
}

const FoundScroller: React.FC<FoundScrollerProps> = (props: FoundScrollerProps): JSX.Element => {
  const { data } = props

  const renderMovies = (): JSX.Element[] => {
    return data!.map(el => {
      return (
        <FoundMovieCard key={el.id?.toString()} data={el} />
      )
    })
  }

  return (
    <div className="Found_Scroller_Container">
      {(data && data.length > 0)
        ? renderMovies()
        : (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <h4>There&apos;s no movies that match the query!</h4>
          </div>)
      }
    </div>
  )
}

export default React.memo(FoundScroller)
