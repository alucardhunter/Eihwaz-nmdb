import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../../../Typings/Models/users'

const initialState: UserState = {
  favorites: [],
  menuDrawer: false
}

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload.favorites
    },
    toogleDrawer: (state) => {
      state.menuDrawer = !state.menuDrawer
    }
  }
})

export const { setFavorites, toogleDrawer } = UserSlice.actions

export default UserSlice.reducer
