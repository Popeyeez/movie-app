import { Button } from "@/components/ui/button";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";

type props = {
  title: string;
  href?: string;
};

export const List = ({ title, href }: props) => {
  return (
    <div className="flex items-center justify-between w-full mt-5">
      <span className="text-[24px] font-bold">{title}</span>

      {href && (
        <Link href={href}>
          <Button variant="outline" className="flex items-center gap-1">
            See more
            <GoChevronRight />
          </Button>
        </Link>
      )}
    </div>
  );
};
