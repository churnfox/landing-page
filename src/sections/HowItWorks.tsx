// "use client";
// import ArrowRight from "@/assets/arrow-right.svg";
// import { twMerge } from "tailwind-merge";
// import { motion } from "framer-motion";
// import painpointsImage from "@/assets/painpoints.png";
// import Image from "next/image";

// const pricingTiers = [
//   {
//     title: "1. Connect Sources",
//     monthlyPrice: 0,
//     buttonText: "Get started for free",
//     popular: false,
//     inverse: false,
//     features: [
//       "Automatically gather feedback from 25+ sources, including reviews, social media mentions, and customer interactions.",
//       "Get real-time updates with smart filtering to focus on what matters most.",
//       // "2GB storage",
//       // "Integrations",
//       // "Basic support",
//     ],
//   },
//   {
//     title: "2. Gain Insights",
//     monthlyPrice: 9,
//     buttonText: "Sign up now",
//     popular: false,
//     inverse: false,
//     features: [
//       "Understand your audience with sentiment analysis and keyword tracking.",
//       "Identify trends, uncover pain points, and compare performance over time.",
//       // "50GB storage",
//       // "Integrations",
//       // "Priority support",
//       // "Advanced support",
//       // "Export support",
//     ],
//   },
//   {
//     title: "3. Make Decisions",
//     monthlyPrice: 19,
//     buttonText: "Sign up now",
//     popular: false,
//     inverse: false,
//     features: [
//       "Receive tailored action plans powered by AI. Address issues, amplify strengthsm, and seize new opportunities.",
//       "Download reports and collaborate with your team to drive results.",
//     ],
//   },
// ];

// export const HowItWorks = () => {
//   return (
//     <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
//       <div className="container">
//         <div className="section-heading">
//           <h2 className="section-title">How it works</h2>
//           {/* <p className="section-description mt-5">
//             Free forever. Upgrade for unlimited tasks, better security, and
//             exclusive features.
//           </p> */}
//         </div>
//         <div className="flex flex-col gap-6 items-center mt-10 md:flex-row md:items-start md:justify-center">
//           {pricingTiers.map(
//             ({
//               title,
//               monthlyPrice,
//               buttonText,
//               popular,
//               inverse,
//               features,
//             }) => (
//               <div
//                 className={twMerge(
//                   "card",
//                   inverse === true && "border-black bg-black text-white"
//                 )}
//               >
//                 <div className="flex justify-between">
//                   <h3
//                     className={twMerge(
//                       "text-lg font-bold text-black/75",
//                       inverse === true && "text-white/60"
//                     )}
//                   >
//                     {title}
//                   </h3>
//                 </div>
//                 <ul className="flex flex-col w-64 gap-5 mt-1">
//                   {features.map((feature) => (
//                     <li className="text-sm flex items-center gap-4">
//                       {/* <ArrowRight className="h-6 w-6" /> */}
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           )}
//         </div>
//         <Image src={painpointsImage} alt="Product Image" className="mt-20" />
//       </div>
//     </section>
//   );
// };
