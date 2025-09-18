import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
type MovieCardProps = {
  title: string;
  score: number;
  image: string;
  id: number;
};

export const MovieCard = ({ title, score, image, id }: MovieCardProps) => {
  return (
    <Link href={`/detail/${id}`}>
      <Card className="w-[230px] bg-secondary p-0 overflow-hidden gap-2">
        <CardContent className="p-0">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            alt=""
            width={230}
            height={340}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-2">
          <CardDescription className="flex gap-2">
            <FaStar color="#FDE047" />
            <span>{Math.floor(score * 10) / 10}/10</span>
          </CardDescription>
          <CardTitle className="text-[18px] font-normal">{title}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
