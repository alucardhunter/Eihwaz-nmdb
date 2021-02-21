import React from 'react'
import './styles.css'
import Search from '../Search'

const Banner: React.FC = () => {
  return (
    <div className="Banner">
      <span className="Baner_Text_Big" >Welcome!</span>
      <span className="Baner_Text_Small" >To the new Movies, TV shows and People biography database, enjoy it! </span>
      <Search />
    </div>
  )
}

export default React.memo(Banner)
