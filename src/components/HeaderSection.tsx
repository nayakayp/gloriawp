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
    <section className="min-h-screen flex flex-col items-center justify-center section-bg">
      <div className="flex flex-col items-center gap-[20px]">
        <Image
          src="/logo.png"
          alt="wp enigma logo"
          width={285}
          height={57}
          className="mb-4"
        />
        {/* <h2 className="font-noto-sans font-normal text-white rounded-full border-white border w-fit py-4 px-6 text-xs uppercase bg-gradient-to-r from-[#D9D9D9] from-0% to-[#737373]/0 to-100%"> */}
        {/*   Unlimited Wordpress Development */}
        {/* </h2> */}
        <h1 className="text-white font-noto-sans font-bold text-[130px] leading-[123px] text-center">
          Build unlimited custom wordpress website
        </h1>{" "}
      </div>
      <div className="flex items-center gap-[100px] pt-28 justify-center">
        <Image
          src={ImgElementor}
          width={250}
          height={50}
          alt="elementor-logo"
        />
        <Image src={ImgOxygen} width={170} height={28} alt="elementor-logo" />
        <Image src={ImgWordpress} width={50} height={50} alt="elementor-logo" />
        <Image
          src={ImgWoocommerce}
          width={248}
          height={50}
          alt="elementor-logo"
        />
        <Image src={ImgAcf} width={91} height={40} alt="elementor-logo" />
      </div>
    </section>
  );
};

export default HeaderSection;
