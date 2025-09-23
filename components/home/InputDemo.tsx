"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { movieResponseType } from "@/types";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { getSearchedMovies } from "@/utils/get-data";
import Image from "next/image";
import { Badge } from "../ui/badge";

export const InputDemo = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await getSearchedMovies(value);
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setFoundMovies(foundData);
  };
  return (
    <div>
      <Input
        value={searchValue}
        onChange={handleChange}
        className="pl-10 w-[250px]"
        placeholder="Search.."
      />
      <div>
        <Popover open={isOpen}>
          <PopoverTrigger className="hidden"></PopoverTrigger>

          <PopoverContent
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
            className="w-80 flex flex-col gap-3"
          >
            {foundMovies?.results.slice(0, 5).map((movie) => {
              return (
                <div
                  key={movie.id}
                  className="flex items-center gap-4 border-2 rounded-md"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Link href={`/detail/${movie.id}`}>{movie.title}</Link>
                </div>
              );
            })}
            <Link
              className="flex justify-center mt-3"
              href={`/searchvalue=${searchValue}`}
            >
              <Badge className="text-[14px]">
                See all results for "{searchValue}"
              </Badge>
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
