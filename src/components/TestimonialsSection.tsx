import React from "react";
import TestimonialCard from "@/components/TestimonialCard";

type Props = {};

const TestimonialsSection = (props: Props) => {
  return (
    <section
      id="testimonials"
      className="section-bg px-4 py-[50px] mt-10 md:px-[100px] md:pt-[75px]"
    >
      <h4 className="text-center text-white uppercase font-noto-sans-display font-semibold text-xs md:text-xl mb-5">
        TESTIMONIAL
      </h4>
      <h3 className="mx-auto text-center text-white font-noto-sans leading-[100%] font-semibold text-2xl md:text-[50px]">
        What our clients say
      </h3>
      <p className="text-center text-white font-light font-noto-sans text-sm mt-2">
        Don’t take our words. Check out what our users have to say about WP
        Enigma and you’ll understand why!
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <TestimonialCard
          id={"1"}
          name="Luca"
          title="Owner Resikel"
          content="We’ve been working with them for about 6-8 months now and i couldn’t recommend them more, I’ve worked with many different service providers and very different areas of my business and by far he’s probably the top 3/top 2."
          imgOverlay=""
          videoUrl=""
        />
        <TestimonialCard
          id={"2"}
          name="Anya"
          title="Owner XpatCapitalism"
          content="We’ve been working with them for about 6-8 months now and i couldn’t recommend them more, I’ve worked with many different service providers and very different areas of my business and by far he’s probably the top 3/top 2."
          imgOverlay=""
          videoUrl=""
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
