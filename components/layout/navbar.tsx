"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import UserDropdown from "./user-dropdown";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
          } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/seed-jr.jpg"
              alt="Seed Junior"
              width="30"
              height="30"
              className="mr-2 rounded-full border shadow"
            ></Image>
            <p>Home</p>
          </Link>
         
          <UserDropdown />

        </div>
      </div>
    </>
  );
}
