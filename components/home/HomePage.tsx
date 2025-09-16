import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import { MovieCarousel } from "./MovieCarousel";
import { MoviesContainer } from "./MoviesContainer";
import { List } from "./List";

export async function HomePage() {
  const upComingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  return (
    <div>
      <MovieCarousel movies={nowPlayingMovies.results} />
      <div className="flex gap-8 flex-wrap px-20 ">
        <List title="Upcoming" />
        <MoviesContainer movies={upComingMovies.results} />
        <List title="Popular" />
        <MoviesContainer movies={popularMovies.results} />
        <List title="Top Rated" />
        <MoviesContainer movies={topRatedMovies.results} />
      </div>
    </div>
  );
}
