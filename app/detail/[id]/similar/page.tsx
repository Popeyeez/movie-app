import { movieResponseType } from "@/types";
import { getMoviesSimilar } from "@/utils/get-data";
import { MovieCard } from "@/components/home";
import { PaginationSimilar } from "@/components/home/PagniationSimilar";

type SimilarPageProps = {
  params: { id: string };
  searchParams: { name?: string; page?: string };
};

const SimilarPage = async ({ params, searchParams }: SimilarPageProps) => {
  const { id } = params;
  const name = searchParams.name || "";
  const page = Number(searchParams.page) || 1;
  const similarMovies: movieResponseType = await getMoviesSimilar(id, page);

  return (
    <div className="px-20 py-6">
      <h1 className="text-2xl font-bold mb-6">More like this</h1>
      <div className="flex flex-wrap gap-5 mb-10">
        {similarMovies?.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>

      <PaginationSimilar
        id={id}
        name={name}
        currentPage={page}
        totalPages={similarMovies.total_pages}
      />
    </div>
  );
};

export default SimilarPage;
