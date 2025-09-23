"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSearchedMovies } from "@/utils/get-data";
import { movieResponseType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

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
    <div className="p-5">
      <h1 className="text-xl mb-4">
        Search results for "{value.toUpperCase()}"
      </h1>
      <div className="flex flex-col gap-3">
        {foundMovies?.results.map((movie) => (
          <Link
            key={movie.id}
            href={`/detail/${movie.id}`}
            className="flex items-center gap-3"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width={50}
              height={50}
            />
            <span>{movie.title}</span>
          </Link>
        ))}
        {foundMovies && foundMovies.results.length === 0 && (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
