import { getMovieGenres } from "@/utils/get-data";
import { GenreResponseType } from "@/types";
import { Badge } from "@/components/ui/badge";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";

export const GenreSidebar = async () => {
  const genresResponse: GenreResponseType = await getMovieGenres();

  return (
    <div className="h-[1257px] flex flex-col gap-2">
      <h3 className="text-[30px] font-bold">Search by genre</h3>
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
  );
};
