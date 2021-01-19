import {ListOptions, MediaTypes} from './types';

export const homeLists: ListOptions[] = [
  {
    mediaType: MediaTypes.MOVIE,
    id: 'popular',
    title: 'Popular Movies',
  },
  {
    mediaType: MediaTypes.MOVIE,
    id: 'top_rated',
    title: 'Top Rated Movies',
  },
  {
    mediaType: MediaTypes.MOVIE,
    id: 'now_playing',
    title: 'Latest Movies',
  },
  {
    mediaType: MediaTypes.TV,
    id: 'popular',
    title: 'Popular TV Shows',
  },
  {
    mediaType: MediaTypes.TV,
    id: 'top_rated',
    title: 'Top Rated TV Shows',
  },
  {
    mediaType: MediaTypes.TV,
    id: 'on_the_air',
    title: 'Latest TV Shows',
  },
];
