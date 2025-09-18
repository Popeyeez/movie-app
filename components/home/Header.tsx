import { ThemeToggler, DropdownMenuDemo, InputDemo } from "@/components/home";
import { FiFilm } from "react-icons/fi";
import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  return (
    <div className="h-15 w-full gap-3 flex justify-between px-20 items-center">
      <div className="flex items-center gap-2">
        <FiFilm color="#4338CA" />

        <Link href="/">
          <span className="text-indigo-700 text-[16px] font-bold italic flex">
            Movie Z
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <DropdownMenuDemo />

        <Search className="-mr-14" />
        <InputDemo />
      </div>

      <ThemeToggler />
    </div>
  );
}
