import React from "react";
import CollaborationIcon from "./icons/CollaborationIcon";
import TaskIcon from "./icons/TaskIcon";
import PlatformIcon from "./icons/PlatformIcon";
import RateIcon from "./icons/RateIcon";
import TeamIcon from "./icons/TeamIcon";
import QuickIcon from "./icons/QuickIcon";

import Rive from "@rive-app/react-canvas";

type Props = {};

const Facility = (props: Props) => {
  return (
    <section className="min-h-screen px-4 pt-10 md:px-[100px] md:pt-[75px]">
      <div className="max-w-screen-md">
        <h4 className="text-[#FFE606] uppercase font-noto-sans-display font-semibold text-xs md:text-xl mb-5">
          Facility
        </h4>
        <h3 className="text-white font-noto-sans leading-[100%] font-semibold text-2xl md:text-[50px]">
          We develop custom website from scratch and others
        </h3>
      </div>

      <div className="relative mt-10 md:mt-[72px] overflow-clip flex justify-between flex-wrap gap-x-[60px] gap-y-4 bg-white py-[80px] px-8 md:px-[50px] rounded-[30px]">
        <div className="z-20 absolute -top-[362px] -left-[200px] w-[440px] h-[440px] bg-gradient-radial from-[#202BD7] to-[#8724EF] rounded-full"></div>
        <div className="z-10 absolute -top-[392px] -left-[100px] w-[440px] h-[440px] bg-gradient-radial from-[#F1326B] to-[#F15F3B] rounded-full"></div>
        <ul className="text-[#0A191C] font-semibold font-noto-sans text-base md:text-xl gap-y-4 md:gap-y-[70px] flex flex-col">
          <li>E-COMMERCE</li>
          <li>PSD TO WORDPRESS</li>
          <li>MOBILE OPTIMIZATION</li>
          <li>FIGMA TO WORDPRESS</li>
          <li>LANDING PAGE CREATION</li>
          <li>PAYMENT INTEGRATION</li>
        </ul>
        <div className="w-[2px] min-h-full vertical-divider hidden lg:block"></div>
        <ul className="text-[#0A191C] font-semibold font-noto-sans text-base md:text-xl gap-y-4 md:gap-y-[70px] flex flex-col">
          <li>E-LEARNING</li>
          <li>THEME CUSTOMIZATION</li>
          <li>FEATURE DEVELOPMENT</li>
          <li>ON-PAGE TECHNICAL SEO</li>
          <li>ALL PAGE BUILDERS</li>
          <li>MARKETING FUNNEL</li>
        </ul>
        <div className="w-[2px] min-h-full vertical-divider hidden lg:block"></div>
        <ul className="text-[#0A191C] font-semibold font-noto-sans text-base md:text-xl gap-y-4 md:gap-y-[70px] flex flex-col">
          <li>WORDPRESS FORUM</li>
          <li>SITE SPEED OPTIMIZATION</li>
          <li>WEBSITE REDESIGN</li>
          <li>ACF PRO</li>
          <li>THEME & PLUGIN UPDATE</li>
          <li>GOOGLE & FB ADS</li>
        </ul>
        <div className="z-20 absolute -bottom-[362px] -right-[200px] w-[440px] h-[440px] bg-gradient-radial from-[#202BD7] to-[#8724EF] rounded-full"></div>
      </div>

      <div className="mt-[60px] grid md:grid-cols-3 gap-16">
        <div>
          <TaskIcon />
          <div className="mt-4">
            <p className="text-white font-noto-sans text-xl md:text-2xl">
              Unlimited Task
            </p>
            <p className="text-white font-noto-sans-display font-light text-lg mt-2">
              Request as many tasks and revisions as you need and consider them
              completed.
            </p>
          </div>
        </div>
        <div>
          <QuickIcon />
          <div className="mt-4">
            <p className="text-white font-noto-sans text-xl md:text-2xl">
              Quick Turnaround
            </p>
            <p className="text-white font-noto-sans-display font-light text-lg mt-2">
              Most projects are completed within 24 to 72 hours, depending on
              their complexity.
            </p>
          </div>
        </div>
        <div>
          <TeamIcon />
          <div className="mt-4">
            <p className="text-white font-noto-sans text-xl md:text-2xl">
              Experienced Team
            </p>
            <p className="text-white font-noto-sans-display font-light text-lg mt-2">
              Our wordpress developer team have over 3 years of experience in
              website creation.
            </p>
          </div>
        </div>
        <div>
          <RateIcon />
          {/* <div className="w-[40px] h-[40px]"> */}
          {/*   <Rive */}
          {/*     src={"https://www.nayakayoga.com/facility.riv"} */}
          {/*     artboard="Rate" */}
          {/*   /> */}
          {/* </div> */}
          <div className="mt-4">
            <p className="text-white font-noto-sans text-xl md:text-2xl">
              Affordable Flat Rate
            </p>
            <p className="text-white font-noto-sans-display font-light text-lg mt-2">
              Pay a fixed monthly fee and say goodbye to expensive bills from
              design agencies and freelancers.
            </p>
          </div>
        </div>
        <div>
          <PlatformIcon />
          {/* <div className="w-[40px] h-[40px]"> */}
          {/*   <Rive */}
          {/*     src={"https://www.nayakayoga.com/facility.riv"} */}
          {/*     artboard="Platform" */}
          {/*   /> */}
          {/* </div> */}
          <div className="mt-4">
            <p className="text-white font-noto-sans text-xl md:text-2xl">
              Multiple Platform
            </p>
            <p className="text-white font-noto-sans-display font-light text-lg mt-2">
              We can work with various web platforms, including e-commerce,
              e-learning, forums, and more.
            </p>
          </div>
        </div>
        <div>
          <CollaborationIcon />
          <div className="mt-4">
            <p className="text-white font-noto-sans text-xl md:text-2xl">
              Easy Collaboration
            </p>
            <p className="text-white font-noto-sans-display font-light text-lg mt-2">
              Gain access to a dashboard and manage all your requests in one
              place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
