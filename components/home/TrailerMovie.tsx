import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type TrailerMovieProps = {
  trailerLink: string;
};

export const TrailerMovie = ({ trailerLink }: TrailerMovieProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <span className="w-25 h-9 rounded-lg text-black bg-white  flex justify-center items-center hover:bg-gray-500 hover:text-white">
            Play trailer
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <iframe
                className="w-full h-150"
                src={`https://www.youtube-nocookie.com/embed/${trailerLink}`}
              ></iframe>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
