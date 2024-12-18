"use client";
import productImage from "@/assets/Components.png";
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
    title: "1. Listen: AI-Powered Brand Monitoring",
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
    title: "2. Learn: Transform Feedback into Insights",
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
    title: "3. Leverage: Drive Actionable Growth",
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

        <div className="md:w-full md:flex px-20 md:items-center md:justify-center pt-10">
          {/* <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div> */}
          {/* <p className="section-description">
            Every interaction matters - gather intel from social media, customer reviews, and support tickets in one unified view. Keep tabs on competitors and track custom keywords to stay ahead of market trends. Spot viral conversations early with smart hashtag monitoring that keeps you in the loop.
          </p> */}
          <div className="flex flex-col items-center pb-5 md:pb-0 md:items-start md:justify-start md:w-[33%] md:pl-5 border-solid border-l-2 border-[#490f74]">
            <p className="text-lg text-[#490f74]"><strong>Track Keywords</strong></p>
            <p className="w-[70%] text-sm text-black/75">Monitor keywords on social media, forums, news sites, podcasts, and more to stay on top of relevant conversations.</p>
          </div>
          <div className="flex flex-col items-center pb-5 md:pb-0 md:items-start md:justify-start md:w-[33%] md:pl-5 border-solid border-l-2 border-[#490f74] ">
            <p className="text-lg text-[#490f74]"><strong>Analyze Reach</strong></p>
            <p className="w-[70%] text-sm text-black/75">Measure the success of hashtag campaigns, discover top influencers, and analyze reach and engagement metrics.</p>
          </div>
          <div className="flex flex-col items-center pb-5 md:pb-0 md:items-start md:justify-start md:w-[33%] md:pl-5 border-solid border-l-2 border-[#490f74] ">
            <p className="text-lg text-[#490f74]"><strong>Generate Reports</strong></p>
            <p className="w-[70%] text-sm text-black/75">Create quick, downloadable reports with actionable insights, trending keywords & hashtags, and performance data.</p>
          </div>
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
          <h2 className="section-title pt-48">
            A smarter way to understand your customers
          </h2>
          <p className="section-description py-5">Our AI-powered platform transforms thousands of customer mentions and reviews into structured themes, giving you a clear view of what matters most.</p>
        </div>
        <div className="md:flex items-center pt-8 pb-24">
          <div className="flex flex-col gap-6 items-center md:items-end md:justify-end md:w-[548px]">
            <div className={twMerge(
              "card"
            )}
            >
              <div className="flex flex-col items-center pb-5 md:pb-0 md:my-5 md:items-start md:justify-start md:pl-5 border-solid border-l-2 border-[#490f74]">
                <p className="text-lg text-[#490f74]"><strong>Themes and Impact</strong></p>
                <p className="w-[70%] text-sm text-black/75">Quickly identify the most critical themes and understand their influence on your brand.</p>
              </div>
              <div className="flex flex-col items-center pb-5 md:pb-0 md:my-5 md:items-start md:justify-start md:pl-5 border-solid border-l-2 border-[#490f74] ">
                <p className="text-lg text-[#490f74]"><strong>AI Summaries</strong></p>
                <p className="w-[70%] text-sm text-black/75">Get concise summaries with key insights, evidence, and opportunities for growth, complete with actionable recommendations.</p>
              </div>
              <div className="flex flex-col items-center pb-5 md:pb-0 md:my-5 md:items-start md:justify-start md:pl-5 border-solid border-l-2 border-[#490f74] ">
                <p className="text-lg text-[#490f74]"><strong>Explore Evidence</strong></p>
                <p className="w-[70%] text-sm text-black/75">Dive into the details behind each theme. Access original feedback and customer quotes with direct links — all in one place.</p>
              </div>
            </div>
          </div>
          <Image src={insightsImage} alt="Insights" className="flex md:items-start md:justify-start md:size-8/12" />
        </div>

        <div id="Features" className="section-heading pt-24">
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
                      className="text-lg font-bold text-[#490f74] pb-1"
                    >
                      {title}
                    </h3>
                  </div>
                  {/* <p className="text-base flex items-center">{desc}</p> */}
                  <ul className="flex flex-col lg:w-200">
                    {features.map((feature, index) => (
                      <li key={index} className="text-base flex items-center">
                        <CheckIcon className="h-3 w-3 inline-flex justify-center items-center mr-3" />
                        <p className="flex items-center text-sm text-black/75">{feature}</p>
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
