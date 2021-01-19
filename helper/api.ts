import axios from 'axios';
import {MoviesResponse, MediaType, MediaTypes} from './types';

const apiKey = '?api_key=8e7136c2b32f9f1008b865e9b0412842';
const baseUrl = 'https://api.themoviedb.org/3';
const limit = '&language=en-US&page=1';

export const getImagePath = (pathSuffix, width: number = 200) =>
  `https://image.tmdb.org/t/p/w${width}/${pathSuffix}`;

export async function getMedia(
  mediaType: MediaType = MediaTypes.MOVIE,
  id: string = 'popular',
) {
  const url = `${baseUrl}/${mediaType}/${id}${apiKey}${limit}`;
  const {data} = await axios.get<MoviesResponse>(url);
  return data;
}
