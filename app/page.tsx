import { MovieCard, List } from "@/components/home";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-8 flex-wrap px-20 ">
      <img className="mt-6 w-full" src="/images/mainpic1.jpg" alt="" />

      <List />
      <div className="flex-wrap flex gap-8">
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
        <MovieCard title="The Order" score={6.9} image="/images/theorder.jpg" />
        <MovieCard title="Y2K" score={6.9} image="/images/y2k.jpg" />

        <MovieCard
          title="Solo Leveling: ReAwakening"
          score={6.9}
          image="/images/sololeveling.jpg"
        />
        <MovieCard title="Get Away" score={6.9} image="/images/getaway.jpg" />
        <MovieCard
          title="Sonic the Hedgehog 3"
          score={6.9}
          image="/images/sonic.png"
        />
      </div>
    </div>
  );
}
