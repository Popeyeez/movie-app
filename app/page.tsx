import { MovieCarousel, MoviesContainer, List } from "@/components/home";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

export default async function Home() {
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
