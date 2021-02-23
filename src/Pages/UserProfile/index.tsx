import React from 'react'
import './styles.css'
import { Grid } from '@material-ui/core'
import MovieScroller from '../../Components/MovieScroller'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/rootReducer'

const UserProfile: React.FC = () => {
  const { favorites } = useSelector((state: RootState) => state.User)
  const { watchlist } = useSelector((state: RootState) => state.User)

  return (
    <Grid container className="User_Profile_Container" spacing={0}>
      <div className="Title_Container">
        <h1 className="Title">User Profile</h1>
      </div>
      <section className="User_Profile_Section">
        <h1 className="Section_Title">Your Favorite Movies</h1>
        <MovieScroller data={favorites} />
      </section>
      <section className="User_Profile_Section">
        <h1 className="Section_Title">Your Watch List</h1>
        <MovieScroller data={watchlist} />
      </section>
    </Grid>
  )
}

export default UserProfile
