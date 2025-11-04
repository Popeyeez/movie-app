import { MovieCard } from "@/components/home";
import { PaginationPopular } from "@/components/home/PaginationPopular";
import { PaginationTopRated } from "@/components/home/PaginationTopRated";
import { PaginationUpcoming } from "@/components/home/PaginationUpcoming";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

type CategoryPageProps = {
  params: { category: string };
  searchParams: { page?: string };
};

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { category } = params;
  const page = Number(searchParams.page) || 1;

  const movies: movieResponseType = await getMoviesList(category, page);
  let title = "";
  if (category === "popular") title = "Popular";
  else if (category === "top_rated") title = "Top Rated";
  else if (category === "upcoming") title = "Upcoming";

  let PaginationComponent;
  if (category === "popular") PaginationComponent = PaginationPopular;
  else if (category === "top_rated") PaginationComponent = PaginationTopRated;
  else if (category === "upcoming") PaginationComponent = PaginationUpcoming;

  return (
    <div className="px-20 py-6">
      <span className="text-[24px] font-bold">{title}</span>
      <div className="flex flex-wrap gap-5 my-5">
        {movies?.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>

      {PaginationComponent && (
        <PaginationComponent
          currentPage={page}
          totalPages={movies.total_pages}
        />
      )}
    </div>
  );
};

export default CategoryPage;
