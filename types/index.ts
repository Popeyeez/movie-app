export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  popularity: number;
  genres: GenreType[];
};

export type movieResponseType = {
  page: number;
  total_pages: number;
  results: MovieType[];
  total_results: number;
};

export type GenreType = {
  id: number;
  name: string;
};
export type GenreResponseType = {
  genres: GenreType[];
};
export type CastType = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

export type CrewType = {
  id: number;
  name: string;
  department: string;
  job: string;
  gender: number;
  credit_id: string;
};
export type MovieCreditsType = {
  id: number;
  cast: CastType[];
  crew: CrewType[];
};

export type VideoType = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
};

export type VideoResponseType = {
  id: number;
  results: VideoType[];
};
