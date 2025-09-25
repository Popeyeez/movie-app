import { MovieType } from "@/types";
import { MovieCard } from "./MovieCard";

type MoviesContainerProps = {
  movies: MovieType[];
};

export const MoviesContainer = ({ movies }: MoviesContainerProps) => {
  return (
    <div className="flex gap-12 sm:gap-8 flex-wrap sm:justify-center">
      {movies.slice(0, 10).map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          score={movie.vote_average}
          image={movie.poster_path}
        />
      ))}
    </div>
  );
};
