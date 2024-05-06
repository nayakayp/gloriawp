import React from "react";

type Props = {};

const PortfolioSection = (props: Props) => {
  return (
    <section className="-mt-10 flex p-4 overflow-x-scroll gap-4">
      <img
        src="https://assets-global.website-files.com/5beab1239ac8840644a660b4/65f916c637abbc1c8ab1cd08_thumbnail.-p-500.png"
        alt=""
        className="w-[300px] h-full md:max-w-[800px] rounded-lg"
      />
      <img
        src="https://assets-global.website-files.com/5beab1239ac8840644a660b4/6538637d97d1ff07355ef9d0_Verve%20Webflow%20Template-p-500.png"
        alt=""
        className="w-[300px] h-full md:max-w-[800px] rounded-lg"
      />
      <img
        src="https://assets-global.website-files.com/5beab1239ac8840644a660b4/6538663b51e5dc4010c54425_Bale%20Webflow%20Template-p-500.png"
        alt=""
        className="w-[300px] h-full md:max-w-[800px] rounded-lg"
      />
      <img
        src="https://assets-global.website-files.com/5beab1239ac8840644a660b4/653864f6ae530245969ad7bf_Onyx%20Webflow%20Template-p-500.png"
        alt=""
        className="w-[300px] h-full md:max-w-[800px] rounded-lg"
      />
      <img
        src="https://assets-global.website-files.com/5beab1239ac8840644a660b4/65386804d134f7ba039cf9ba_Spectra%20Framer%20Template-p-500.png"
        alt=""
        className="w-[300px] h-full md:max-w-[800px] rounded-lg"
      />
      <img
        src="https://assets-global.website-files.com/5beab1239ac8840644a660b4/653866563b98de70bb8e3bcb_Accord%20Framer%20Template-p-500.png"
        alt=""
        className="w-[300px] h-full md:max-w-[800px] rounded-lg"
      />
    </section>
  );
};

export default PortfolioSection;
