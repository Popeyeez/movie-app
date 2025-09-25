import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import { MovieCard } from "@/components/home";
import { PaginationUpcoming } from "@/components/home/PaginationUpcoming";

type UpcomingPageProps = {
  searchParams: { page?: string };
};

const Upcoming = async ({ searchParams }: UpcomingPageProps) => {
  const page = Number(searchParams.page) || 1;
  const upComingMovies: movieResponseType = await getMoviesList(
    "upcoming",
    page
  );

  return (
    <div className="sm:flex sm:justify-center">
      <div className="sm:px-20 py-6 px-19 sm:w-360">
        <h1 className="text-2xl font-bold mb-6">Upcoming</h1>
        <div className="flex flex-wrap gap-8 mb-10 justify-center">
          {upComingMovies.results.slice(0, 10).map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>

        <PaginationUpcoming
          currentPage={page}
          totalPages={upComingMovies.total_pages}
        />
      </div>
    </div>
  );
};

export default Upcoming;
