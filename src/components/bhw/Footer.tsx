import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="min-h-screen px-4 pt-10 md:px-[100px] md:pt-[75px] section-bg flex flex-col justify-center">
      <div className="flex flex-col items-center gap-10">
        <div className="max-w-screen-sm mx-auto ">
          <h4 className="text-center text-white uppercase font-noto-sans-display font-semibold text-xs md:text-xl mb-5">
            GET STARTED
          </h4>
          <h3 className="mx-auto text-center text-white font-noto-sans leading-[100%] font-semibold text-2xl md:text-[50px]">
            Order now via BHW or contact detail below
          </h3>
        </div>
        <a
          target="_blank"
          href="https://t.me/potahbhw"
          className="text-[#0C1F23] bg-white py-4 px-10 text-lg md:text-2xl font-noto-sans-display font-medium mx-auto rounded-md"
        >
          Message via Telegram
        </a>
      </div>
    </section>
  );
};

export default Footer;
