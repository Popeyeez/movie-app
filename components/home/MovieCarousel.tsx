"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType, VideoResponseType } from "@/types";
import { getMoviesTrailer } from "@/utils/get-data";
import { FaStar } from "react-icons/fa";
import { TrailerMovie } from "./TrailerMovie";

type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-screen">
        <CarouselContent>
          {movies.map((movie, index) => (
            <MovieCarouselItem key={index} movie={movie} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>

      <div className="flex gap-2 justify-center absolute w-full">
        {Array.from({ length: count })
          .slice(0, 5)
          .map((_, index) => (
            <div
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`rounded-full size-4 -mt-15 position: relative flex justify-center ${
                index + 1 === current ? "bg-white" : "bg-gray-600"
              }`}
            ></div>
          ))}
      </div>
    </>
  );
}

const MovieCarouselItem = ({ movie }: { movie: MovieType }) => {
  const [trailerKey, setTrailerKey] = React.useState("");

  const getTrailerData = async () => {
    const trailerData: VideoResponseType = await getMoviesTrailer(
      movie.id.toString()
    );

    const trailer = trailerData.results.find((item) => item.type === "Trailer");
    setTrailerKey(trailer?.key || "");
  };

  React.useEffect(() => {
    getTrailerData();
  }, []);

  return (
    <CarouselItem>
      <div className="p-1">
        <Card>
          <CardContent
            className="aspect-video  max-h-[800px] p-6 bg-cover rounded-xl"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          >
            <div className="flex flex-col justify-center gap-2 h-full ml-35 text-white">
              <span className="font-normal text-[25px]">Now Playing:</span>
              <span className="text-4xl font-semibold text-white">
                {movie.title}
              </span>
              <div className="flex items-center gap-3 text-2xl">
                <span>{movie.vote_average}/10</span>
                <FaStar color="#FDE047" />
              </div>
              <span className="w-[300px] mt-4 mb-3">{movie.overview}</span>

              <TrailerMovie trailerLink={trailerKey} />
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};
