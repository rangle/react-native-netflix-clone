export interface ContentRatingResponse {
  results: ContentRating[];
  id: number;
}

export interface ContentRating {
  iso_3166_1: string;
  rating: string;
}
