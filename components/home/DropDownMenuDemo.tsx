import { Button } from "@/components/ui/button";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const GENRES = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <GoChevronDown />
          Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[577px] h-[333px] flex flex-col px-5">
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
            {GENRES.map((genre) => (
              <Link href="/genre" key={genre.id}>
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
