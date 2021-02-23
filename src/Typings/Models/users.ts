import {Movies, MoviesDetailResponse} from './movies'

export interface User {
  userName: string
}

export type UserState = {
  user?: User,
  menuDrawer: boolean,
  favorites: Movies[],
  watchlist: MoviesDetailResponse[],
}