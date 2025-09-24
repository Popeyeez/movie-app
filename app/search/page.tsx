"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSearchedMovies } from "@/utils/get-data";
import { movieResponseType } from "@/types";
import { MovieCard } from "@/components/home";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const value = searchParams.get("value") || "";
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );

  useEffect(() => {
    if (value.length > 0) {
      getSearchedMovies(value).then((data) => setFoundMovies(data));
    }
  }, [value]);

  return (
    <div className="px-20 pt-13">
      <h3 className="text-[30px] font-bold">Search results</h3>
      {foundMovies?.results.length} results for "{value}"
      <div className="flex sm:gap-10 flex-wrap pt-3 gap-3 justify-center sm:justify-start">
        {foundMovies?.results.map((movie) => (
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
  );
}
