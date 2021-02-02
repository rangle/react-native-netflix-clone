export enum MediaTypes {
  TV = 'tv',
  MOVIE = 'movie',
  ALL = 'all',
}

export type MediaType = MediaTypes.MOVIE | MediaTypes.TV | MediaTypes.ALL;
