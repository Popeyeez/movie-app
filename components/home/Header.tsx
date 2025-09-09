import { ThemeToggler, DropdownMenuDemo, InputDemo } from "@/components/home";
import { FiFilm } from "react-icons/fi";
export function Header() {
  return (
    <div>
      <div className="h-15 w-full flex gap-3">
        <div className="flex justify-between items-center gap-95">
          <div className="flex items-center gap-2">
            <FiFilm color="#4338CA" />
            <span className="text-indigo-700 text-[16px] font-bold italic">
              Movie Z
            </span>
          </div>
          <DropdownMenuDemo />
        </div>
        <div className="flex justify-between items-center gap-80">
          <InputDemo />
          <ThemeToggler />
        </div>
      </div>

      <img className="mt-6" src="/images/mainpic1.jpg" alt="" />
    </div>
  );
}
