import { MovieCard } from "@/components/home";
import { GoChevronRight } from "react-icons/go";
import { GenreResponseType, movieResponseType } from "@/types";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getMovieGenres, getMoviesByGenreId } from "@/utils/get-data";
import { PaginationDemo } from "@/components/home/PaginationDemo";
type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string; page: string }>;
};
const genresResponse: GenreResponseType = await getMovieGenres();

export const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;
  const page = params.page || "1";

  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  return (
    <div className="px-20 pt-13">
      <h3 className="text-[30px] font-bold">Search Filter</h3>
      {name}
      <div className="flex pt-8">
        <div className="h-[1257px]  flex flex-col gap-2">
          <h3 className="text-[30px] font-bold">Genres</h3>
          <span className="text-[16px] font-normal">
            See lists of movies by genre
          </span>
          <div className="flex flex-wrap gap-2 items-center pt-5 text-4xl">
            {genresResponse.genres.map((genre) => (
              <Link
                key={genre.id}
                href={`/genre?id=${genre.id}&name=${genre.name}`}
              >
                <Badge variant="outline">
                  {genre.name}
                  <GoChevronRight />
                </Badge>
              </Link>
            ))}
          </div>
        </div>
        <div className="pl-10 flex flex-col">
          <h3 className="text-[30px] font-bold">
            {id} titles in {name} {page}
          </h3>

          <div className="flex gap-8 flex-wrap pt-8">
            {filteredMoviesResponse.results.slice(0, 12).map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
              />
            ))}
          </div>
        </div>
      </div>
      <PaginationDemo />
    </div>
  );
};

export default Genre;
