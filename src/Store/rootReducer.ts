import { combineReducers } from '@reduxjs/toolkit'
import Auth from './Modules/Auth/authSlice'
import User from './Modules/User/userSlice'
import Movies from './Modules/Movies/moviesSlice'

const rootReducer = combineReducers({
  Auth: Auth,
  User: User,
  Movies: Movies
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
