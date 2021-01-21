import axios from 'axios';
import {ContentRatingResponse} from '../types/ContentRating.type';
import {Media, MediaResponse} from '../types/Media.type';
import {MediaDetail} from '../types/MediaDetail.type';
import {MediaType, MediaTypes} from '../types/MediaTypes.enum';
import {
  Recommendation,
  RecommendationsResponse,
} from '../types/Recommendations.type';
import {Video, VideosResponse} from '../types/Video.type';

const apiKey = '?api_key=8e7136c2b32f9f1008b865e9b0412842';
const baseUrl = 'https://api.themoviedb.org/3';

export const getImageUrl = (pathSuffix, width: number = 200) =>
  `https://image.tmdb.org/t/p/w${width}/${pathSuffix}`;

export function getMediaList(
  mediaType: MediaType = MediaTypes.MOVIE,
  id: string = 'popular',
) {
  const url = `${baseUrl}/${mediaType}/${id}${apiKey}&language=en-US`;
  return get<MediaResponse>(url);
}

export function getDetails(item: Media) {
  const isTv = item.mediaType === MediaTypes.TV;
  return Promise.all([getBaseDetails(item), isTv ? getRating(item) : null]);
}

export function getBaseDetails(item: Media) {
  const url = `${baseUrl}/${item.mediaType}/${item.id}${apiKey}&language=en-US`;
  return get<MediaDetail>(url);
}

export function getRating(item: Media): Promise<string> {
  const url = `${baseUrl}/${item.mediaType}/${item.id}/content_ratings${apiKey}&language=en-US`;
  return get<ContentRatingResponse>(url).then((response) => {
    const value = response?.results
      .filter(({iso_3166_1}) => iso_3166_1 === 'US')
      .map(({rating}) => rating)
      .shift();
    return value || '';
  });
}

export function getRecommendations(item: Media): Promise<Recommendation[]> {
  const url = `${baseUrl}/${item.mediaType}/${item.id}/recommendations${apiKey}&language=en-US`;
  return get<RecommendationsResponse>(url).then((response) => response.results);
}

export function getVideos(item: Media): Promise<Video[]> {
  const url = `${baseUrl}/${item.mediaType}/${item.id}/videos${apiKey}&language=en-US`;
  return get<VideosResponse>(url).then((response) => response.results);
}

async function get<T>(url: string) {
  const {data} = await axios.get<T>(url);
  return data;
}
