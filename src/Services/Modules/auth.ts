import api from '../api'
import { LoginResponse, LoginPayload } from '../../Typings/Models/auth'

async function login (payload: LoginPayload): Promise<LoginResponse> {
  try {
    const response = await api.post('/login', { username: payload.username, password: payload.password })
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default {
  login
}
