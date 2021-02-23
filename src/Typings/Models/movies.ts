export interface Movies {
  adult?: boolean,
  backdrop_path?: string,
  genre_ids?: number[],
  id?: number,
  original_language?: string,
  original_title?: string,
  overview?: string,
  popularity?: number,
  poster_path?: string,
  release_date?: string,
  title?: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number
}

export interface Genres {
  id?: number,
  name?: string
}

export interface ProductionCompanies {
  id?: number,
  logo_path?: string | null,
  name?: string,
  origin_country?: string
}

export interface ProductionCountries {
  iso_3166_1?: string,
  name: string
}

export interface SpokenLanguages {
  english_name?: string,
  iso_639_1?: string,
  name?: string
}

export interface MovieDetail extends Movies {
  belongs_to_collection?: object,
  budget?: number,
  genres?: Genres[],
  homepage?: string,
  imdb_id?: string,
  production_companies?: ProductionCompanies[],
  production_countries?: ProductionCountries[],
  revenue?: number,
  runtime?: number,
  spoken_languages?: SpokenLanguages[],
  status?: string,
  tagline?: string,
  videos?: VideoResponse
}

export interface Video {
  id?: string,
  iso_639_1?: string,
  iso_3166_1?: string,
  key?: string,
  name?: string,
  site?: string,
  size?: number,
  type?: string
}

export interface VideoResponse {
  results?: Video[]
}

export interface MoviesResponse {
  page?: number,
  total_pages?: number,
  total_results?: number,
  results?: Movies[]
}

export interface MoviesDetailResponse extends MovieDetail {
}

export interface MoviesSearchPayload {
  search?: string,
  page?: number,
}

export type MoviesState = {
  popularMovies?: Movies[],
  topRatedMovies?: Movies[],
  upcomingMovies?: Movies[],
  foundedMovies?: MoviesResponse,
  movieDetail?: MovieDetail,
  status: string,
}
