import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import { MovieCard, PaginationGenre } from "@/components/home";

type SimilarPageProps = {
  params: { id: string };
  searchParams: { name?: string; page?: string };
};

const Upcoming = async ({ params, searchParams }: SimilarPageProps) => {
  const { id } = params;
  const name = searchParams.name || "";
  const page = Number(searchParams.page) || 1;
  const upComingMovies: movieResponseType = await getMoviesList("upcoming");
  const pageMovies: movieResponseType = await getMoviesList("upcoming");

  return (
    <div className="px-20 py-6">
      <h1 className="text-2xl font-bold mb-6">Upcoming</h1>
      <div className="flex flex-wrap gap-5 mb-10">
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

      <PaginationGenre
        id={id}
        name={name}
        currentPage={page}
        totalPages={pageMovies.total_pages}
      />
    </div>
  );
};

export default Upcoming;
