import { MovieCard } from "@/components/home";
import { GoChevronRight } from "react-icons/go";

import React from "react";

const Genre = () => {
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

          <div className="flex-wrap flex gap-8 pt-8">
            <MovieCard
              title="Dear Santa"
              score={6.9}
              image="/images/dearsanta.jpg"
            />
            <MovieCard
              title="How To Train Your Dragon Live Action"
              score={6.9}
              image="/images/dragon3d.jpg"
            />
            <MovieCard
              title="Alien Romulus"
              score={6.9}
              image="/images/alienromulus.jpg"
            />
            <MovieCard
              title="From the Ashes"
              score={6.9}
              image="/images/ashes.jpg"
            />
            <MovieCard
              title="From the Space Dogg"
              score={6.9}
              image="/images/spacedogg.jpg"
            />
            <MovieCard
              title="The Order"
              score={6.9}
              image="/images/theorder.jpg"
            />
            <MovieCard title="Y2K" score={6.9} image="/images/y2k.jpg" />

            <MovieCard
              title="Solo Leveling: ReAwakening"
              score={6.9}
              image="/images/sololeveling.jpg"
            />
            <MovieCard
              title="Get Away"
              score={6.9}
              image="/images/getaway.jpg"
            />
            <MovieCard
              title="Sonic the Hedgehog 3"
              score={6.9}
              image="/images/sonic.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
