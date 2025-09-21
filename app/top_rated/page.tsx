import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import { MovieCard } from "@/components/home";
import { PaginationTopRated } from "@/components/home/PaginationTopRated";

type TopRatedPageProps = {
  searchParams: { page?: string };
};

const TopRated = async ({ searchParams }: TopRatedPageProps) => {
  const page = Number(searchParams.page) || 1;
  const topRatedMovies: movieResponseType = await getMoviesList(
    "top_rated",
    page
  );

  return (
    <div className="px-20 py-6">
      <h1 className="text-2xl font-bold mb-6">Top Rated</h1>
      <div className="flex flex-wrap gap-5 mb-10">
        {topRatedMovies.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>

      <PaginationTopRated
        currentPage={page}
        totalPages={topRatedMovies.total_pages}
      />
    </div>
  );
};

export default TopRated;
