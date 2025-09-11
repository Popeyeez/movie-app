import { Button } from "@/components/ui/button";
import { GoChevronRight } from "react-icons/go";
type props = {
  title: string;
};
export const List = ({ title }: props) => {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-[24px] font-bold">{title}</span>

      <Button variant="outline" className="flex items-center gap-1">
        See more
        <GoChevronRight />
      </Button>
    </div>
  );
};
