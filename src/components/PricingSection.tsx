import React from "react";
import ChecklistIcon from "./icons/ChecklistIcon";
import { PopupButton } from "react-calendly";

type Props = {};

const PricingSection = (props: Props) => {
  return (
    <section
      id="pricing"
      className="min-h-screen px-4 pt-10 md:px-[100px] md:pt-[75px]"
    >
      <h4 className="text-center text-[#FFE606] uppercase font-noto-sans-display font-semibold text-xs md:text-xl mb-5">
        JOIN NOW
      </h4>
      <h3 className="mx-auto text-center text-white font-noto-sans leading-[100%] font-semibold text-2xl md:text-[50px]">
        Membership Pricing
      </h3>
      <p className="text-center font-semibold text-white font-noto-sans mt-6 text-lg">
        Don&apos;t know what fit you?{" "}
        <a
          target="_blank"
          href="https://calendly.com/wpenigma/consultation-call"
          className="italic font-extralight underline"
        >
          Book a free discovery call here
        </a>
      </p>

      <div className="flex flex-col md:flex-row items-start justify-center gap-10 text-white font-noto-sans mt-10">
        <div className="md:w-1/3 bg-[#0A191C] rounded-[30px] px-8 py-10">
          <div className="mb-4">
            <p className="font-semibold text-2xl">Pro</p>
            {/* <p className="font-normal text-base">Get started plan</p> */}
          </div>
          <div className="mb-[30px]">
            <p className="font-semibold text-3xl">
              $1,500<span className="font-extralight text-xl">/month</span>
            </p>
            <p className="font-extralight text-base">3-4 hour per day</p>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-white/0 via-[#CCCCCC] to-white/0"></div>

          <ul className="mt-[30px] flex flex-col gap-4 font-normal text-lg">
            <li className="flex items-center gap-2">
              <ChecklistIcon color="light" />
              <span>1 request at a time</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="light" />
              <span>Unlimited task</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="light" />
              <span>Invite unlimited user</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="light" />
              <span>Premium theme</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="light" />
              <span>Unlimited stock photos</span>
            </li>
          </ul>
          <button className="mt-10 w-full py-4 text-center bg-gradient-to-r from-[#202BD7] to-[#8724EF] rounded-md text-white font-noto-sans text-lg font-bold">
            Subscribe
          </button>
        </div>

        <div className="md:w-1/3 relative overflow-clip bg-white text-[#0A191C] rounded-[30px] px-8 py-10">
          <div className="z-20 absolute -top-[380px] -right-[200px] w-[440px] h-[440px] bg-gradient-radial from-[#202BD7] to-[#8724EF] rounded-full"></div>
          <div className="z-10 absolute -top-[400px] -right-[120px] w-[440px] h-[440px] bg-gradient-radial from-[#F1326B] to-[#F15F3B] rounded-full"></div>
          <div className="mb-4">
            <p className="font-semibold text-2xl">Business</p>
            {/* <p className="font-normal text-base">Get started plan</p> */}
          </div>
          <div className="mb-[30px]">
            <p className="font-semibold text-3xl">
              $2,650<span className="font-extralight text-xl">/month</span>
            </p>
            <p className="font-extralight text-base">6-8 hour per day</p>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-white/0 via-[#CCCCCC] to-white/0"></div>

          <ul className="mt-[30px] flex flex-col gap-4 font-normal text-lg">
            <li className="flex items-center gap-2">
              <ChecklistIcon color="dark" />
              <span>2 request at a time</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="dark" />
              <span>Unlimited task</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="dark" />
              <span>Invite unlimited user</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="dark" />
              <span>Premium theme</span>
            </li>
            <li className="z-30 flex items-center gap-2">
              <ChecklistIcon color="dark" />
              <span>Unlimited stock photos</span>
            </li>
          </ul>

          <button className="mt-10 w-full py-4 text-center bg-gradient-to-r from-[#202BD7] to-[#8724EF] rounded-md text-white font-noto-sans text-lg font-bold">
            Subscribe
          </button>
        </div>

        <div className="md:w-1/3 bg-[#0A191C] rounded-[30px] px-8 py-10">
          <div className="mb-4">
            <p className="font-semibold text-2xl">Basic</p>
            {/* <p className="font-normal text-base">Get started plan</p> */}
          </div>
          <div className="mb-[30px]">
            <p className="font-semibold text-3xl">
              $700<span className="font-extralight text-xl">/month</span>
            </p>
            <p className="font-extralight text-base">1-2 hour per day</p>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-white/0 via-[#CCCCCC] to-white/0"></div>

          <ul className="mt-[30px] flex flex-col gap-4 font-normal text-lg">
            <li className="flex items-center gap-2">
              <ChecklistIcon color="light" />
              <span>1 request at a time</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="light" />
              <span>Unlimited task</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="light" />
              <span>Invite unlimited user</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="light" />
              <span>Premium theme</span>
            </li>
            <li className="flex items-center gap-2">
              <ChecklistIcon color="light" />
              <span>Unlimited stock photos</span>
            </li>
          </ul>
          <button className="mt-10 w-full py-4 text-center bg-gradient-to-r from-[#202BD7] to-[#8724EF] rounded-md text-white font-noto-sans text-lg font-bold ">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
