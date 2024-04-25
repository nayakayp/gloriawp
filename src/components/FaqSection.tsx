import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/accordion";

type Props = {};

const FaqSection = (props: Props) => {
  return (
    <section className="min-h-screen px-[100px] pt-[75px] mb-[100px]">
      <div className="max-w-[780px] mx-auto ">
        <h4 className="text-center text-[#FFE606] uppercase font-noto-sans-display font-semibold text-xl mb-5">
          FREQUENTLY ASK QUESTIONS
        </h4>
        <h3 className="mx-auto text-center text-white font-noto-sans leading-[100%] font-semibold text-[50px]">
          Essential information you&apos;ll want to discover
        </h3>
      </div>

      <div className="mt-12 max-w-screen-lg mx-auto">
        <Accordion>
          <AccordionItem>
            <AccordionTrigger>
              How long does it take to get one website done?
            </AccordionTrigger>
            <AccordionContent>
              Every website is different, depending on the number of pages,
              complexity of the design, third party integrations, custom theme
              vs using page builders, and functionalities outside of WordPress
              core. We can only give ballpark estimates from our experience. You
              can get three to four landing pages developed in one week of a Pro
              plan. Typically a five unique template page website takes 3 weeks
              on our Pro package. Custom designed sites with a custom theme and
              custom field (ACFPro) typically takes 3 weeks on our Business
              plan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>
              How long does it take to complete task?
            </AccordionTrigger>
            <AccordionContent>
              That depends. Small and medium tasks have a typical turnaround
              time of 24-48 hours, and the type of task determines it. There is
              no task too big for us to handle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>
              I saw similar service, but how can you are so cheap?
            </AccordionTrigger>
            <AccordionContent>
              I know you will be skeptical regarding with quality that we will
              delliver. It is because all of our developer is coming from 3rd
              world country, what you paid is very high relative what we get
              here. What you paid can make us hire high quality developer and
              deliver maximum result but still with affordable price.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionTrigger>
              Can I really have unlimited tasks?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can create and assign an unlimited amount of tasks to our
              WP Experts. We&apos;ll handle one task at a time. Once the task on
              hand is complete, we&apos;ll proceed with the next task. We do not
              limit the type of task or time limit for each task.
              <br />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>
              What kinds of websites do you help with?
            </AccordionTrigger>
            <AccordionContent>
              We are only focused on helping those with WordPress websites of
              all shapes and sizes, including personal websites, small business
              websites, large scale websites, membership, WooCommerce/eCommerce,
              and e-Learning sites.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>
              How can I share my requests and communicate with you?
            </AccordionTrigger>
            <AccordionContent>
              Every client gets access to a personal dashboard where you can
              easily create and manage all your requests in one place. There,
              you can also communicate with the person handling your request.
              But we are open to other ways of collaborating like Slack, etc.
              Please reach out to us to discuss how we can collaborate and
              support you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>How many revisions do I get?</AccordionTrigger>
            <AccordionContent>
              There is no limitation on the number of revisions you can get for
              any given task. So be happy to request as many revision until you
              are satisfied
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>What is your refund policy?</AccordionTrigger>
            <AccordionContent>
              We have a 7-day risk free period to test our services during sign
              up. If you do not wish to proceed with our services, a refund will
              be issued for your order on request.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>What payment you are accepting?</AccordionTrigger>
            <AccordionContent>
              We accept Bitcoin, ETH, Credit Card, Transerwise, Paypal
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
