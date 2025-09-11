import { MovieCard } from "@/components/home";
import { GoChevronRight } from "react-icons/go";

import React from "react";
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
type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

export async function Genre() {
  const getUpComingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };
  const upComingMovies: movieResponseType = await getUpComingMovies();
  return (
    <div className="px-20 pt-13">
      <h3 className="text-[30px] font-bold">Search Filter</h3>
      <div className="flex pt-8">
        <div className="h-[1257px]  flex flex-col gap-2">
          <h3 className="text-[30px] font-bold">Genres</h3>
          <span className="text-[16px] font-normal">
            See lists of movies by genre
          </span>
          <div className="flex flex-wrap gap-2 items-center pt-5">
            Action
            <GoChevronRight />
            Adventure
            <GoChevronRight />
            Animation
            <GoChevronRight />
            Biography
            <GoChevronRight />
            Comedy
            <GoChevronRight />
            Crime
            <GoChevronRight />
            Documentary
            <GoChevronRight />
            Family
            <GoChevronRight />
            Fantasy
            <GoChevronRight />
            Film-Noir
            <GoChevronRight />
            <GoChevronRight />
            Game-Show
            <GoChevronRight />
            History
            <GoChevronRight />
            Horror
            <GoChevronRight />
            Musical
            <GoChevronRight />
            Mystery
            <GoChevronRight />
            News
            <GoChevronRight />
            Reality-TV
            <GoChevronRight />
          </div>
        </div>
        <div className="pl-10 flex flex-col">
          <h3 className="text-[30px] font-bold">81 titles in “Animation”</h3>

          <div className="flex gap-8 flex-wrap pt-8">
            {upComingMovies.results.map((movie) => (
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
    </div>
  );
}

export default Genre;
