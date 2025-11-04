import { List, MovieCard } from "@/components/home";
import { TrailerMovie } from "@/components/home/TrailerMovie";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";

import {
  MovieCreditsType,
  movieResponseType,
  MovieType,
  VideoResponseType,
} from "@/types";
import {
  getMoviesCredits,
  getMoviesByDetails,
  getMoviesSimilar,
  getMoviesTrailer,
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
  const movieCredits: MovieCreditsType = await getMoviesCredits(id);
  const movieSimilar: movieResponseType = await getMoviesSimilar(id, 1);
  const directors = movieCredits.crew;
  const writers = movieCredits.crew;
  const stars = movieCredits.cast;
  const movieTrailer: VideoResponseType = await getMoviesTrailer(id);
  const trailerKey = movieTrailer?.results?.[0]?.key;

  console.log("Trailer", movieTrailer);
  console.log("Actors,Writers", movieCredits);
  console.log("Similar Movies", movieSimilar);
  console.log("Movie Details", movieResponse);

  return (
    <div className="px-45">
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
              {Math.floor(movieResponse.vote_average * 10) / 10}
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
          src={`https://image.tmdb.org/t/p/w500/${movieResponse.poster_path}`}
          alt={movieResponse.title}
          width={350}
          height={550}
          className="rounded-sm"
          priority
        />

        <CardContent
          className="aspect-video w-full max-h-[550px] bg-cover rounded-sm"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieResponse.backdrop_path})`,
          }}
        >
          <div className="flex items-end h-full pb-6">
            {trailerKey && (
              <TrailerMovie trailerLink={trailerKey}></TrailerMovie>
            )}
          </div>
        </CardContent>
      </div>
      <div className="flex gap-5 flex-col">
        <div className="pt-6 flex gap-3">
          {movieResponse?.genres?.map((genre) => (
            <Link key={genre.id} href={`/genre?id=${genre.id}`}>
              <Badge variant="outline">{genre.name}</Badge>
            </Link>
          ))}
        </div>
        {movieResponse.overview}
        <div className="flex gap-13">
          <span className="text-[16px] font-bold">Director</span>
          <div>
            {directors?.slice(0, 1).map((d) => (
              <span key={d.credit_id}>{d.name} </span>
            ))}
          </div>
        </div>
        <div className="flex gap-14">
          <span className="text-[16px] font-bold">Writers</span>
          <div>
            {writers?.slice(1, 6).map((w) => (
              <span key={w.credit_id}>{w.name} </span>
            ))}
          </div>
        </div>
        <div className="flex gap-[74px]">
          <span className="text-[16px] font-bold">Stars</span>
          <div>
            {stars?.slice(0, 5).map((s) => (
              <span key={s.id}>{s.name + " "}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        <List title="More like this" href={`/detail/${id}/similar`} />

        {movieSimilar?.results?.slice(0, 10).map((movie) => (
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
