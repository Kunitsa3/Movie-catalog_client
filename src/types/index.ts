export interface registerData {
  email: string;
  username: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
}

export interface logInData {
  email: string;
  password: string;
}

export interface logOutData {
  email: string;
  password: string;
}

export interface APIMovie {
  adult: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface APIMovieData {
  results: APIMovie[];
}

export interface Params {
  page?: number;
  id?: number;
  year?: number;
  genres?: string[];
  withoutGenres?: string[];
  sortBy?: string;
}
