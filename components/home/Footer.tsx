import Link from "next/link";
import React from "react";
import { FiFilm } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-indigo-700  h-[280px] mt-15 flex px-20 py-10 justify-between">
      <div className="text-white flex flex-col gap-2">
        <div className="flex items-center gap-2 ">
          <FiFilm color="white" />
          <Link href="/">
            <span className="text-white text-[16px] font-bold italic flex">
              Movie Z
            </span>
          </Link>
        </div>
        © 2024 Movie Z. All Rights Reserved
      </div>
      <div className="pl-30 text-white flex flex-col gap-3">
        Contact Information
        <div className="flex items-center gap-3">
          <HiOutlineMail className="w-[25px] h-[25px]" />
          <div className="flex flex-col">
            Email:
            <span>support@movieZ.com</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlinePhone className="w-[25px] h-[25px]" />
          <div className="flex flex-col">
            Phone:
            <span>+976 (11) 123-4567</span>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col gap-2">
        Follow us
        <div className="flex items-center gap-2 ">
          <Link href="https://www.facebook.com">Facebook </Link>
          <Link href="https://www.instagram.com">Instagram </Link>
          <Link href="https://www.twitter.com">Twitter </Link>
          <Link href="https://www.youtube.com">Youtube </Link>
        </div>
      </div>
    </div>
  );
};
