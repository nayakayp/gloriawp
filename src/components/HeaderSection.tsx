import Image from "next/image";
import React from "react";

import ImgElementor from "@/assets/img/elementor-logo.png.png";
import ImgOxygen from "@/assets/img/oxygen-builder-logo.png.png";
import ImgWordpress from "@/assets/img/wordpress-logo.png.png";
import ImgWoocommerce from "@/assets/img/woocommerce-logo.png.png";
import ImgAcf from "@/assets/img/acf-logo.png.png";

type Props = {};

const HeaderSection = (props: Props) => {
  return (
    <section className="md:min-h-screen flex flex-col items-center justify-center section-bg px-4">
      <div className="pt-10 md:pt-0 flex flex-col items-center gap-[20px]">
        <div className="w-40 md:w-[285px]">
          <Image
            src="/logo.png"
            alt="wp enigma logo"
            width={285}
            height={57}
            className="mb-4"
          />
        </div>
        {/* <h2 className="font-noto-sans font-normal text-white rounded-full border-white border w-fit py-4 px-6 text-xs uppercase bg-gradient-to-r from-[#D9D9D9] from-0% to-[#737373]/0 to-100%"> */}
        {/*   Unlimited Wordpress Development */}
        {/* </h2> */}
        <h1 className="text-white font-noto-sans font-bold text-3xl md:text-[130px] md:leading-[123px] text-center">
          Build unlimited custom wordpress website
        </h1>
      </div>
      <div className="flex items-center gap-4 md:gap-[100px] pt-28 justify-center w-full max-w-screen-md md:max-w-screen-lg overflow-hidden">
        <div className="flex items-center justify-center md:w-[250px] w-[120px] h-[50px]">
          <Image
            src={ImgElementor}
            width={250}
            height={50}
            alt="elementor-logo"
          />
        </div>
        <div className="flex items-center justify-center md:w-[170px] w-[100px] h-[28px]">
          <Image src={ImgOxygen} width={170} height={28} alt="oxygen-logo" />
        </div>
        <div className="flex items-center justify-center md:w-[50px] w-[30px] h-[50px]">
          <Image
            src={ImgWordpress}
            width={50}
            height={50}
            alt="elementor-logo"
          />
        </div>
        <div className="flex items-center justify-center  md:w-[248px] w-[100px] h-[50px]">
          <Image
            src={ImgWoocommerce}
            width={248}
            height={50}
            alt="elementor-logo"
          />
        </div>
        <div className="flex items-center justify-center md:w-[91px] w-[50px] h-[40px]">
          <Image src={ImgAcf} width={91} height={40} alt="elementor-logo" />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
