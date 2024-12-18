"use client";
import productImage from "@/assets/dashboard.png";
import starImage from "@/assets/star_blue.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import insightsImage from "@/assets/AI insights.png";
import sourcesImage from "@/assets/Sources.png";
import CheckIcon from "@/assets/check.svg";

const pricingTiers = [
  {
    title: "1. Listen",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    desc: "Let AI monitor your brand across review sites, social media, and digital channels.",
    features: [
      "Universal feedback capture.",
      "Real-time brand monitoring.",
      "Smart mention tracking.",
      // "2GB storage",
      // "Integrations",
      // "Basic support",
    ],
  },
  {
    title: "2. Learn",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    desc: "Convert customer voices into business intelligence with advanced AI analysis.",
    features: [
      "Sentiment trends.",
      "Customer satisfaction metrics.",
      "Predictive analytics."
      // "50GB storage",
      // "Integrations",
      // "Priority support",
      // "Advanced support",
      // "Export support",
    ],
  },
  {
    title: "3. Leverage",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    desc: "Turn insights into impact with automated recommendations and growth opportunities.",
    features: [
      "ROI-focused actions.",
      "Retention strategies.",
      "Revenue optimization."
    ],
  },
];

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-white pb-24 overflow-x-clip"
    >
      <div className="container">
        <div className="w-full items-center justify-center flex">
          <Image src={productImage} alt="Product Image" className="size-9/12" />
        </div>

        <div className="section-heading pt-5">
          {/* <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div> */}
          <p className="section-description">
            Every interaction matters - gather intel from social media, customer reviews, and support tickets in one unified view. Keep tabs on competitors and track custom keywords to stay ahead of market trends. Spot viral conversations early with smart hashtag monitoring that keeps you in the loop.
          </p>
        </div>

        {/* <div className='md:flex items-center pt-14 pb-24'>
          <div className='md:w-[348px]'>

            <ul className="text-lg text-[#010D3E] tracking-tight mt-6">
              <li className="py-8 flex gap-4 items-center">
                &#8226; Our AI-powered insights platform turns thousands of customer mentions and reviews into clear, structured themes. Instantly see the size and impact of each theme.
              </li>
              <li className="py-8 flex gap-4 items-center">
                &#8226; Each theme comes with an AI-generated summary highlighting key evidence, opportunities, and actionable recommendations.
              </li>
              <li className="py-8 flex gap-4 items-center">
                &#8226; Explore the evidence behind each theme with ease. Access original feedback and customer quotes instantly by a direct link.
              </li>
            </ul>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <Image src={insightsImage} alt='Cog image' className='md:absolute md:h-full md:w-auto md:max-w-none' />
          </div>
        </div> */}


        <div className="section-heading">
          <h2 className="section-title pt-52">
            A smarter way to understand your customers
          </h2>
        </div>
        <div className="md:flex items-center pt-8">
          <div className="flex flex-col gap-6 items-center md:items-end md:justify-end md:w-[548px]">
            <div className={twMerge(
              "card"
            )}
            >
              <p className="text-base py-4 flex items-center">
                &#8226; Our AI-powered insights platform turns thousands of customer mentions and reviews into clear, structured themes. Instantly see the size and impact of each theme.
              </p>
              <p className="text-base py-4 flex items-center">
                &#8226; Each theme comes with an AI-generated summary highlighting key evidence, opportunities, and actionable recommendations.
              </p>
              <p className="text-base py-4 flex items-center">
                &#8226; Explore the evidence behind each theme with ease. Access original feedback and customer quotes instantly by a direct link.
              </p>
            </div>
          </div>
          <Image src={insightsImage} alt="Insights" className="flex md:items-start md:justify-start md:size-8/12" />
        </div>

        <div id="Features" className="section-heading pt-48">
          <h2 className="section-title">How it works</h2>
          {/* <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p> */}
        </div>
        <div className="md:flex items-center pt-8">
          <Image src={sourcesImage} alt="Product Image" className="flex md:items-start md:justify-start md:size-5/12" />

          <div className="flex flex-col gap-6 items-center ml-24 md:items-start md:justify-start md:w-[548px]">
            {pricingTiers.map(
              ({
                title,
                monthlyPrice,
                buttonText,
                popular,
                inverse,
                features,
                desc
              }, index) => (
                <div
                  className={twMerge(
                    "card",
                    inverse === true && "border-black bg-black text-white"
                  )}
                  key={index}
                >
                  <div key={index} className="flex justify-between">
                    <h3
                      className="text-2xl font-bold text-purple-700"
                    >
                      {title}
                    </h3>
                  </div>
                  <p className="text-base flex items-center">{desc}</p>
                  <ul className="flex flex-col lg:w-200">
                    {features.map((feature, index) => (
                      <li key={index} className="text-base flex items-center">
                        <CheckIcon className="h-4 w-4 inline-flex justify-center items-center mr-3" />
                        <p className="flex items-center">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
