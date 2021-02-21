import React, { useLayoutEffect, useState } from 'react'
import './styles.css'
import SearchIcon from '@material-ui/icons/Search'
import { InputBase, IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

const Search: React.FC = () => {
  const history = useHistory()
  const [width] = useWindowSize()
  const [search, setSearch] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleSearchButton = () => {
    history.push({
      pathname: '/search',
      search: `?page=1&query=${search}`
    })
  }

  return (
    <div className="Search_Container">
      {width > 900 &&
        <InputBase id="Big"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          placeholder="Search for movies, tv shows or person biography"
          className="Search_Input"
          inputProps={{ 'aria-label': 'search' }}
        />
      }
      {width < 900 &&
        <InputBase id="Small"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          placeholder="Search..."
          className="Search_Input"
          inputProps={{ 'aria-label': 'search' }}
        />
      }
      <IconButton onClick={() => handleSearchButton()} className="Search_Button" edge="start" aria-label="menu">
        <SearchIcon className="Search_icon" />
        Search
      </IconButton>
    </div>

  )
}

export default React.memo(Search)
