import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="absolute top-0 w-full pt-6 px-6 md:px-10">
      <div className="flex items-center justify-between">
        <div className="w-40 md:w-[185px]">
          <Image src="/logo.png" alt="wp enigma logo" width={285} height={57} />
        </div>
        <ul className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 shadow-sm font-medium shadow-white rounded-full text-sm z-50 flex bg-black md:translate-x-0 md:bg-transparent md:shadow-none md:p-0 md:static md:flex items-center text-white gap-8 font-noto-sans-display">
          <li>
            <Link href="#testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
        </ul>

        <a
          href="#pricing"
          className="text-[#0C1F23] bg-[#ffe606] block w-fit text-xs py-2 px-4 md:px-10 md:text-base font-noto-sans-display font-semibold rounded-md"
        >
          Subscribe Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
