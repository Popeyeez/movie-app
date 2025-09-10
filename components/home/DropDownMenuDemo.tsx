import { Button } from "@/components/ui/button";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
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
        <div className="py-6">
          <DropdownMenuLabel className="flex flex-col gap-2">
            <span className="text-[24px] font-bold ">Genres</span>
            <span className="text-[16px] font-normal">
              See lists of movies by genre
            </span>
          </DropdownMenuLabel>
        </div>

        <DropdownMenuGroup className="flex flex-wrap gap-2">
          <Link href="/genre">
            <DropdownMenuItem>
              Action
              <GoChevronRight />
            </DropdownMenuItem>
          </Link>

          <Link href="/genre">
            <DropdownMenuItem>
              Adventure
              <GoChevronRight />
            </DropdownMenuItem>
          </Link>

          <Link href="/genre">
            <DropdownMenuItem>
              Animation
              <GoChevronRight />
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem>
            Biography
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Comedy
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Crime
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Documentary
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Drama
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Family
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Fantasy
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Film-Noir
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Game-Show
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            History
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Horror
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Music
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Musical
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Mystery
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            News
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Reality-TV
            <GoChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Romance
            <GoChevronRight />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
