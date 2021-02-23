import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../../../Typings/Models/users'

const initialState: UserState = {
  favorites: [],
  watchlist: [],
  menuDrawer: false
}

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload.favorites
    },
    setWatchList: (state, action) => {
      state.watchlist = action.payload.watchlist
    },
    toogleDrawer: (state) => {
      state.menuDrawer = !state.menuDrawer
    }
  }
})

export const { setFavorites, toogleDrawer, setWatchList } = UserSlice.actions

export default UserSlice.reducer
