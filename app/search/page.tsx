import { getSearchedMovies } from "@/utils/get-data";
import { movieResponseType } from "@/types";
import { MovieCard } from "@/components/home";
import { GenreSidebar } from "@/components/home/GenreSideBar";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { value?: string };
}) {
  const value = searchParams.value || "";
  let foundMovies: movieResponseType;
  foundMovies = await getSearchedMovies(value);

  return (
    <div className="sm:flex pt-13 px-20">
      <div className="flex sm:gap-8 flex-col pb-5 sm:w-900">
        <div className="flex gap-5 items-center sm:flex-col sm:items-start">
          <h3 className="text-[30px] font-bold">Search results</h3>
          <span className="text-[20px] font-normal">
            {foundMovies?.results.length || 0} results for "{value}"
          </span>
        </div>
        <div className="flex flex-wrap sm:gap-8 gap-3 sm:pt-0 pt-5">
          {foundMovies?.results?.slice(0, 12).map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>
      </div>
      <GenreSidebar />
    </div>
  );
}
