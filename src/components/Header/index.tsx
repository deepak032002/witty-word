"use client";

import React from "react";
import Typography from "../ui/typography";
import { Raleway } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";

const raleway = Raleway({ subsets: ["latin"] });
const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={`py-2 container ${
        pathname === "/" ? "text-current" : "text-black"
      }`}
    >
      <div className="w-full flex items-center justify-between text-current">
        <div className="left flex gap-10 items-center text-current">
          <div className="logo">
            <Link href={"/"}>
              <Typography
                className={`${raleway.className} text-current`}
                size="h4"
              >
                Witty Word
              </Typography>
            </Link>
          </div>

          <div className="menu md:flex hidden gap-5 items-center">
            <Link href={"/"}>
              <Typography size="p" className="text-current">
                Home
              </Typography>
            </Link>
            <Link href={"/about"}>
              <Typography size="p" className="text-current">
                About
              </Typography>
            </Link>
            <Link href={"/contact"}>
              <Typography size="p" className="text-current">
                Contact
              </Typography>
            </Link>
          </div>
        </div>
        <Button variant={"ghost"} className="md:hidden">
          <HiMenuAlt3 className="text-black text-xl" />
        </Button>

        <div className="right md:block hidden">
          <Button>Subscribe</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
