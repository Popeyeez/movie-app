import { Button } from "@/components/ui/button";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { GenreResponseType, GenreType } from "@/types";
import { getMovieGenres } from "@/utils/get-data";

export async function DropdownMenuDemo() {
  const genresResponse: GenreResponseType = await getMovieGenres();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <GoChevronDown />
          Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[577px] h-[333px] flex flex-col px-5 ml-60 mt-3">
        <div className="py-3">
          <DropdownMenuLabel className="flex flex-col gap-2">
            <span className="text-[24px] font-bold ">Genres</span>
            <span className="text-[16px] font-normal">
              See lists of movies by genre
            </span>
          </DropdownMenuLabel>
        </div>

        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:!bg-transparent flex flex-wrap text-4xl">
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
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
