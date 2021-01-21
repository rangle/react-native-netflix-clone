export interface RecommendationsResponse {
  page: number;
  results: Recommendation[];
  total_pages: number;
  total_results: number;
}

export interface Recommendation {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  networks: Network[];
  popularity: number;
}

interface Network {
  id: number;
  logo: Logo;
  name: string;
  origin_country: string;
}

interface Logo {
  path: string;
  aspect_ratio: number;
}
