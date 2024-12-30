"use client";
import googleLogo from "@/assets/Google.png";
import googlePlayLogo from "@/assets/Google Play.png";
import instagramLogo from "@/assets/Instagram.png";
import linkedinLogo from "@/assets/Linkedin.png";
import redditLogo from "@/assets/Reddit.png";
import xLogo from "@/assets/X.png";
import mediumLogo from "@/assets/Medium.png";
import appleLogo from "@/assets/Apple.png";
import productHuntLogo from "@/assets/Product Hunt.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-purple-200">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white,transparent)]">
          <motion.div
            className="flex gap-32 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={redditLogo}
              alt="Red Logo"
              className="logo-ticker-image"
            />
            <Image
              src={xLogo}
              alt="x Logo"
              className="logo-ticker-image"
            />
            <Image
              src={googleLogo}
              alt="g Logo"
              className="logo-ticker-image"
            />
            <Image
              src={googlePlayLogo}
              alt="gp Logo"
              className="logo-ticker-image"
            />
            <Image
              src={instagramLogo}
              alt="i Logo"
              className="logo-ticker-image"
            />
            <Image
              src={linkedinLogo}
              alt="l Logo"
              className="logo-ticker-image"
            />
            <Image
              src={mediumLogo}
              alt="m Logo"
              className="logo-ticker-image"
            />
            <Image
              src={appleLogo}
              alt="a Logo"
              className="logo-ticker-image"
            />
            <Image
              src={productHuntLogo}
              alt="ph Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos for animation */}
            <Image
              src={redditLogo}
              alt="r Logo"
              className="logo-ticker-image"
            />
            <Image
              src={xLogo}
              alt="x Logo"
              className="logo-ticker-image"
            />
            <Image
              src={googleLogo}
              alt="g Logo"
              className="logo-ticker-image"
            />
            <Image
              src={googlePlayLogo}
              alt="gp Logo"
              className="logo-ticker-image"
            />
            <Image
              src={instagramLogo}
              alt="i Logo"
              className="logo-ticker-image"
            />
            <Image
              src={linkedinLogo}
              alt="l Logo"
              className="logo-ticker-image"
            />
            <Image
              src={mediumLogo}
              alt="m Logo"
              className="logo-ticker-image"
            />
            <Image
              src={appleLogo}
              alt="a Logo"
              className="logo-ticker-image"
            />
            <Image
              src={productHuntLogo}
              alt="ph Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
