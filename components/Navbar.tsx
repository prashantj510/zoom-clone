import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className=" flex-between fixed z-50 w-full px-6 py-4 bg-dark-1 lg:px-10">
      <Link href="/" className=" flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Zoom"
          className="max-sm:size-10"
        />
        <p className="text-white font-extrabold text-[26px] max-sm:hidden">
          Zoom
        </p>
      </Link>
      <div className="flex-between gap-5 ">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
