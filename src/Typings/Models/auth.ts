import { User } from './users'

export interface LoginResponse {
  user: User,
  token: string
}

export type LoginPayload = {
  username: string,
  password: string,
}

export type AuthState = {
  status: string,
  error?: string,
  token: string,
  domain: string,
}
