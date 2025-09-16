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
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import { MdOutlinePlayArrow } from "react-icons/md";
import { getMoviesTrailer } from "@/utils/get-data";

type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

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
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent
                    className="aspect-video max-h-[600px] p-6 bg-cover bg-center rounded-xl"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    }}
                  >
                    <div className="flex flex-col justify-center gap-2 h-full ml-35 text-white">
                      <span className="font-normal text-[25px]">
                        Now Playing:
                      </span>
                      <span className="text-4xl font-semibold text-white">
                        {movie.title}
                      </span>
                      <div className="flex items-center gap-3 text-2xl">
                        <span>{movie.vote_average}/10</span>
                        <FaStar color="#FDE047" />
                      </div>
                      <span className="w-[300px] mt-4">{movie.overview}</span>

                      <Button className="w-35 mt-3 h-10 bg-white text-black hover:bg-gray-400">
                        <MdOutlinePlayArrow />
                        Watch Trailer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
      <div className="flex gap-2 justify-center position: absolute w-full">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`rounded-full size-4 -mt-15 position: relative flex justify-center ${
              index + 1 === current ? "bg-white" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
}
