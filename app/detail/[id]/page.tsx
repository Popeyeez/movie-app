import { List, MovieCard } from "@/components/home";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { movieResponseType, MovieType } from "@/types";
import {
  getMoviesCredits,
  getMoviesByDetails,
  getMoviesSimilar,
} from "@/utils/get-data";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};

const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieResponse: MovieType = await getMoviesByDetails(id);
  const movieCredits: MovieType = await getMoviesCredits(id);
  const movieSimilar: movieResponseType = await getMoviesSimilar(id);

  console.log("credits", movieResponse);
  // console.log("similar", movieResponse);

  return (
    <div className="px-20">
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[36px] font-bold">{movieResponse.title}</span>
          <span>{movieResponse.release_date}</span>
        </div>
        <div className="mr-2">
          <span>Rating</span>
          <div className="flex items-center gap-1">
            <FaStar color="#FDE047" />
            <span className="text-[16px] font-bold">
              {movieResponse.vote_average}
            </span>
            /10
          </div>
          <span className="text-[12px] font-normal text-[#71717A]">
            {movieResponse.popularity}
          </span>
        </div>
      </div>
      <div className="flex mt-6 gap-8">
        <Image
          className="rounded-sm"
          src={`https://image.tmdb.org/t/p/w500/${movieResponse.poster_path}`}
          alt=""
          width={290}
          height={430}
        />
        <CardContent
          className="aspect-video w-full bg-cover bg-center rounded-sm"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieResponse.backdrop_path})`,
          }}
        />
      </div>
      <div className="flex gap-5 flex-col">
        <div className="pt-6 flex gap-3">
          {movieResponse.genres.map((genre) => (
            <Link key={genre.id} href={`/genre?id=${genre.id}`}>
              <Badge variant="outline">{genre.name}</Badge>
            </Link>
          ))}
        </div>
        {movieResponse.overview}
        <span className="text-[16px] font-bold">Director</span>
        {movieResponse.id}
      </div>
      <div className="flex flex-wrap gap-5">
        <List title="More like this" />

        {movieSimilar.results.slice(0, 5).map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailDynamicPage;
