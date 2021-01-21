import {ListOption} from '../types/ListOption.type';
import {MediaTypes} from '../types/MediaTypes.enum';

export const billboardMovie: ListOption = {
  mediaType: MediaTypes.MOVIE,
  id: 'popular',
  title: 'Billboard',
};

export const homeLists: ListOption[] = [
  {
    mediaType: MediaTypes.MOVIE,
    id: 'popular',
    title: 'Popular Movies',
  },
  {
    mediaType: MediaTypes.TV,
    id: 'popular',
    title: 'Popular TV Shows',
  },
  {
    mediaType: MediaTypes.MOVIE,
    id: 'top_rated',
    title: 'Top Rated Movies',
  },
  {
    mediaType: MediaTypes.TV,
    id: 'top_rated',
    title: 'Top Rated TV Shows',
  },
  {
    mediaType: MediaTypes.MOVIE,
    id: 'now_playing',
    title: 'Latest Movies',
  },
  {
    mediaType: MediaTypes.TV,
    id: 'on_the_air',
    title: 'Latest TV Shows',
  },
];
