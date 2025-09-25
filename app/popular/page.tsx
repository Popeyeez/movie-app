import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import { MovieCard } from "@/components/home";
import { PaginationPopular } from "@/components/home/PaginationPopular";

type PopularPageProps = {
  searchParams: { page: string };
};

const Popular = async ({ searchParams }: PopularPageProps) => {
  const page = Number(searchParams.page) || 1;
  const popularMovies: movieResponseType = await getMoviesList("popular", page);

  return (
    <div className="sm:flex sm:justify-center">
      <div className="sm:px-20 py-6 px-19 sm:w-360">
        <h1 className="text-2xl font-bold mb-6">Popular</h1>
        <div className="flex flex-wrap gap-8 mb-10 justify-center">
          {popularMovies.results.slice(0, 10).map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>

        <PaginationPopular
          currentPage={page}
          totalPages={popularMovies.total_pages}
        />
      </div>
    </div>
  );
};

export default Popular;
