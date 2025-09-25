import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import { MovieCarousel } from "./MovieCarousel";
import { MoviesContainer } from "./MoviesContainer";
import { List } from "./List";

export const HomePage = async () => {
  const upComingMovies: movieResponseType = await getMoviesList("upcoming", 1);
  const popularMovies: movieResponseType = await getMoviesList("popular", 1);
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated", 1);
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing",
    1
  );

  return (
    <div>
      <MovieCarousel movies={nowPlayingMovies.results} />
      <div className="sm:flex sm:justify-center">
        <div className="flex gap-8 sm:px-20 px-16 flex-wrap sm:w-360">
          <List title="Upcoming" href="/upcoming" />
          <MoviesContainer movies={upComingMovies.results} />
          <List title="Popular" href="/popular" />
          <MoviesContainer movies={popularMovies.results} />
          <List title="Top Rated" href="/top_rated" />
          <MoviesContainer movies={topRatedMovies.results} />
        </div>
      </div>
    </div>
  );
};
