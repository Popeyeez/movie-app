import { MovieCard } from "@/components/home";

export default function Home() {
  return (
    <div className="flex gap-3">
      <MovieCard
        title="Alien Romulus"
        score={6.9}
        image="/images/alienromulus.png"
      />
      <MovieCard
        title="Alien Romulus"
        score={6.9}
        image="/images/alienromulus.png"
      />
      <MovieCard
        title="Alien Romulus"
        score={6.9}
        image="/images/alienromulus.png"
      />
      <MovieCard
        title="Alien Romulus"
        score={6.9}
        image="/images/alienromulus.png"
      />
    </div>
  );
}
