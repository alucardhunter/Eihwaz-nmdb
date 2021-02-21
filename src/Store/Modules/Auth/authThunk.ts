import { createAsyncThunk } from '@reduxjs/toolkit'
import Api from '../../../Services/Modules/auth'
import {
  LoginPayload
} from '../../../Typings/Models/auth'

export const Auth = createAsyncThunk(
  'user/login',
  async (payload: LoginPayload) => {
    try {
      const response = await Api.login(payload)
      return response
    } catch (err) {
      console.log(err)
      throw err
    }
  }
)
