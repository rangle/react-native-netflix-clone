import {MediaTypes} from '../types/MediaTypes.enum';

export interface MediaResponse {
  page: number;
  results: Media[];
  total_results: number;
  total_pages: number;
}

export interface Media {
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
  mediaType: MediaTypes;
}
