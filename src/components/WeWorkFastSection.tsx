import React from "react";
import ImgElementor from "@/assets/img/elementor-logo-branded.png";
import ImgBeaverBuilder from "@/assets/img/beaver-builder-branded.png";
import ImgSiteOrigin from "@/assets/img/siteorigin-branded.png";
import ImgOxygen from "@/assets/img/oxygen-builder-branded.png";
import ImgWpBakery from "@/assets/img/wpbakery-logo-branded.png";
import ImgSeedPro from "@/assets/img/seedpro-branded.png";
import ImgLiveComposer from "@/assets/img/livecomposer-branded.png";
import ImgPageBuilderSandwich from "@/assets/img/pagebuildersandwich-branded.png";

import Image from "next/image";

type Props = {};

const WeWorkFastSection = (props: Props) => {
  return (
    <section className="px-4 pt-16 md:px-[100px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-[50px]">
        <div className="grid grid-cols-3 gap-2 grid-rows-3 w-[300px] h-[300px] md:w-[440px] md:h-[440px] p-4 bg-gradient-to-br from-[#F1326B] to-[#F15F3B] rounded-[16px]">
          <div className="p-2 md:p-0 bg-white rounded-[8px] flex items-center justify-center">
            <Image
              src={ImgElementor}
              width={120}
              height={28}
              alt="elementor logo branded"
            />
          </div>
          <div className="p-2 md:p-0 bg-white rounded-[8px] flex items-center justify-center">
            <Image
              src={ImgBeaverBuilder}
              width={200}
              height={28}
              alt="elementor logo branded"
            />
          </div>
          <div className="p-2 md:p-0 bg-white rounded-[8px] flex items-center justify-center">
            <Image
              src={ImgSiteOrigin}
              width={100}
              height={28}
              alt="elementor logo branded"
            />
          </div>
          <div className="p-2 md:p-0 bg-white rounded-[8px] flex items-center justify-center">
            <Image
              src={ImgOxygen}
              width={100}
              height={28}
              alt="elementor logo branded"
            />
          </div>
          <div className="p-2 md:p-0 bg-white rounded-[8px] flex items-center justify-center">
            <Image
              src={ImgWpBakery}
              width={100}
              height={28}
              alt="elementor logo branded"
            />
          </div>
          <div className="p-2 md:p-0 bg-white rounded-[8px] flex items-center justify-center">
            <Image
              src={ImgSeedPro}
              width={100}
              height={28}
              alt="elementor logo branded"
            />
          </div>
          <div className="p-2 md:p-0 bg-white rounded-[8px] flex items-center justify-center">
            <Image
              src={ImgLiveComposer}
              width={100}
              height={28}
              alt="elementor logo branded"
            />
          </div>
          <div className="p-2 md:p-0 bg-white rounded-[8px] flex items-center justify-center">
            <Image
              src={ImgPageBuilderSandwich}
              width={100}
              height={28}
              alt="elementor logo branded"
            />
          </div>
          <div className="bg-white rounded-[8px] flex items-center justify-center">
            <p className="text-[#0A191C] font-noto-sans text-xs text-center">
              Your request here
            </p>
          </div>
          {/* <div className="bg-white flex items-center justify-center rounded-[8px] h-28 drop-shadow-sm"> */}
          {/*   <Image */}
          {/*     src={ImgElementor} */}
          {/*     width={100} */}
          {/*     height={28} */}
          {/*     alt="elementor logo branded" */}
          {/*   /> */}
          {/* </div> */}
        </div>
        <div className="md:w-1/2">
          <h4 className="text-[#FFE606] uppercase font-noto-sans-display font-semibold text-xs md:text-xl mb-5">
            HOW WE WORK FAST
          </h4>
          <h3 className="text-white font-noto-sans leading-[100%] font-semibold text-2xl md:text-[50px]">
            We work faster by using page builders
          </h3>
          <div className="text-white font-noto-sans-display text-lg md:text-xl mt-10">
            <p>
              We collaborate with all major page builders, such as Elementor.
              Whether you want to utilize the existing functionality of a page
              builder or require custom add-ons, we&apos;ve got you covered.{" "}
            </p>
            <br />
            <p>
              When it come to us, we will recommend using oxygen builder. As it
              is make both website speed & creation speed faster.
            </p>
            <br />
            <p className="">
              Uncertain if your preferred builder is supported? Feel free to
              inquire in the chat!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeWorkFastSection;
