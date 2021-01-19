export enum MediaTypes {
  TV = 'tv',
  MOVIE = 'movie',
}

export type MediaType = MediaTypes.MOVIE | MediaTypes.TV;

export interface ListOptions {
  mediaType: MediaType;
  id: string;
  title: string;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Movie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
