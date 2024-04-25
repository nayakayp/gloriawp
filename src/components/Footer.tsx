import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="min-h-screen px-[100px] pt-[75px] section-bg flex flex-col justify-center">
      <div className="flex flex-col items-center gap-10">
        <div className="max-w-screen-sm mx-auto ">
          <h4 className="text-center text-white uppercase font-noto-sans-display font-semibold text-xl mb-5">
            GET STARTED WITH US
          </h4>
          <h3 className="mx-auto text-center text-white font-noto-sans leading-[100%] font-semibold text-[50px]">
            Stop wasting time, and get your first task done
          </h3>
        </div>
        <a
          target="_blank"
          href="https://calendly.com/wpenigma/consultation-call"
          className="text-[#0C1F23] bg-white py-4 px-10 text-2xl font-noto-sans-display font-medium mx-auto rounded-md"
        >
          Book a Call
        </a>
      </div>
      {/* <div> */}
      {/*   <div className="grid grid-cols-3 gap-32"> */}
      {/*     <div className=""> */}
      {/*       <Image */}
      {/*         src="/logo.png" */}
      {/*         width={200} */}
      {/*         height={57} */}
      {/*         alt="wp enigma logo" */}
      {/*       /> */}
      {/*       <p className="mt-4 font-noto-sans-display text-white font-light"> */}
      {/*         A team of passionate wordpress developer to help you with your */}
      {/*         business needs. */}
      {/*       </p> */}
      {/*     </div> */}
      {/*     <div className=""> */}
      {/*       <p>Navigation</p> */}
      {/*       <ul> */}
      {/*         <li>Nav 1</li> */}
      {/*         <li>Nav 2</li> */}
      {/*         <li>Nav 3</li> */}
      {/*       </ul> */}
      {/*     </div> */}
      {/*     <div className=""> */}
      {/*       {" "} */}
      {/*       <p>Navigation</p> */}
      {/*       <ul> */}
      {/*         <li>Nav 1</li> */}
      {/*         <li>Nav 2</li> */}
      {/*         <li>Nav 3</li> */}
      {/*       </ul> */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <div className="w-full h-[1px] my-8 bg-white/50"></div> */}
      {/*   <div className="pb-10"> */}
      {/*     <p className="text-white/80 font-noto-sans-display text-xs"> */}
      {/*       Copyright &copy;2024 WPEnigma. All rights reserved. */}
      {/*     </p> */}
      {/*   </div> */}
      {/* </div> */}
    </section>
  );
};

export default Footer;
