import React from "react";

import ImgChoosePlan from "@/assets/img/choose-plan.png";
import ImgSubmitTask from "@/assets/img/submit-task.png";
import ImgDelivery from "@/assets/img/delivery.png";
import Image from "next/image";

type Props = {};

const WorkWithUsSection = (props: Props) => {
  return (
    <section className="min-h-screen px-4 pt-10 md:px-[100px] md:pt-[75px]">
      <h4 className="text-center text-[#FFE606] uppercase font-noto-sans-display font-semibold text-xs md:text-xl mb-5">
        WORK WITH US
      </h4>
      <h3 className="text-center text-white font-noto-sans leading-[100%] font-semibold text-2xl md:text-[50px]">
        Start work with us in 3 simple step
      </h3>

      <div className="flex flex-col gap-10 mt-14">
        <div className="bg-[#0A191C] rounded-[30px] md:max-w-[1084px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pl-14 p-10 md:p-0">
            <p className="mb-4 text-white font-noto-sans-display font-semibold text-3xl">
              Choose a plan
            </p>
            <p className="text-white font-noto-sans-display text-lg md:text-xl">
              Opt for either our monthly fixed-cost plans or a one-time bucket
              of hours tailored to your specific project needs.
            </p>
            <a
              href="#pricing"
              className="mt-8 text-[#0C1F23] bg-[#ffe606] block w-fit py-3 px-10 text-xl font-noto-sans-display font-normal rounded-md"
            >
              Subscribe Now
            </a>
          </div>
          <div className="flex px-6 md:px-0 items-center justify-center w-full h-[400px] md:w-[440px] md:h-[440px] rounded-[30px] bg-gradient-to-b from-[#202BD7] from-0% to-[#8724EF] to-100%">
            <Image
              src={ImgChoosePlan}
              width={356}
              height={183}
              alt="choose plan"
            />
          </div>
        </div>
        <div className="bg-[#0A191C] rounded-[30px] max-w-[1084px] mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between">
          <div className="md:w-1/2 md:pl-14 p-10 md:p-0">
            <p className="mb-4 text-white font-noto-sans-display font-semibold text-2xl md:text-3xl">
              Submit a Task
            </p>
            <p className="text-white font-noto-sans-display text-lg md:text-xl">
              Whether it involves building a new site, performing maintenance,
              implementing SEO strategies, or providing support, we&apos;ve got
              you covered. Just inform us about your requirements.
            </p>
            <a
              href="#pricing"
              className="mt-8 text-[#0C1F23] bg-[#ffe606] block w-fit py-3 px-10 text-xl font-noto-sans-display font-normal rounded-md"
            >
              Subscribe Now
            </a>
          </div>
          <div className="flex items-center justify-center w-full md:w-[440px] h-[440px] max-h-[440px] rounded-[30px] bg-gradient-to-b from-[#9624E4] from-0% to-[#E92970] to-100%">
            <Image
              src={ImgSubmitTask}
              width={268}
              height={218}
              alt="submit task"
            />
          </div>
        </div>
        <div className="bg-[#0A191C] rounded-[30px] md:max-w-[1084px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pl-14 p-10 md:p-0">
            <p className="mb-4 text-white font-noto-sans-display font-semibold text-2xl md:text-3xl">
              Delivery
            </p>
            <p className="text-white font-noto-sans-display text-lg md:text-xl">
              We guarantee delivery within 24-48 hours or will revise until you
              are satisfied before proceeding to the next task.
            </p>
            <a
              href="#pricing"
              className="mt-8 text-[#0C1F23] bg-[#ffe606] block w-fit py-3 px-10 text-xl font-noto-sans-display font-normal rounded-md"
            >
              Subscribe Now
            </a>
          </div>
          <div className="flex items-center justify-center w-full md:w-[440px] h-[440px] max-h-[440px] rounded-[30px] bg-gradient-to-b from-[#F1326B] from-0% to-[#F15F3B] to-100%">
            <Image src={ImgDelivery} width={230} height={300} alt="delivery" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
