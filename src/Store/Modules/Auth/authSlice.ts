import { createSlice } from '@reduxjs/toolkit'
import {
  AuthState
} from '../../../Typings/Models/auth'
import { Auth } from './authThunk'

const initialState: AuthState = {
  status: 'idle',
  error: '',
  token: '',
  domain: 'https://image.tmdb.org/t/p/w220_and_h330_face/'
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    TestState: (state) => {
      state.token = 'teste'
    }
  },
  extraReducers:
    builder => {
      builder.addCase(Auth.pending, (state, action) => {
        state.status = 'loading'
      })
        .addCase(Auth.fulfilled, (state, action) => {
          const { token } = action.payload
          state.status = 'idle'
          state.error = ''
          state.token = token
        })
        .addCase(Auth.rejected, (state, action) => {
          const { message } = action.error
          state.status = 'idle'
          state.error = message
        })
    }
})
export const { TestState } = AuthSlice.actions
export default AuthSlice.reducer
