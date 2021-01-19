import axios from 'axios';
import {MoviesResponse, MediaType, MediaTypes} from './types';

const apiKey = '?api_key=8e7136c2b32f9f1008b865e9b0412842';
const baseUrl = 'https://api.themoviedb.org/3';

export const getImageUrl = (pathSuffix, width: number = 200) =>
  `https://image.tmdb.org/t/p/w${width}/${pathSuffix}`;

export const getListUrl = (
  mediaType: MediaType = MediaTypes.MOVIE,
  id: string = 'popular',
) => `${baseUrl}/${mediaType}/${id}${apiKey}&language=en-US`;

export async function getMedia(url: string) {
  const {data} = await axios.get<MoviesResponse>(url);
  return data;
}
