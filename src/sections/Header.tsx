'use client'

import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/churnFox.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleJoinWaitlistClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeYGyRhyOUBlay63K-shFmf7hM9tZSiRzm-9FrJlBA1V_y-Qg/viewform?usp=dialog", "_blank");
  };

  const toggleMenu = () => {
    // document.body.classList.toggle('overflow-hidden');
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* <div className="flex justify-center items-center py-3 bg-black text-white text-small">
        <p className="text-white/60 hidden">Automate your analysis and make smarter decisions, faster.</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div> */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div style={{ cursor: 'pointer' }}>
              <Image onClick={() => window?.scrollTo(0, 0)} src={Logo} alt="Churnfox Logo" height={40} width={40} />
            </div>
            <button
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            <nav className="hidden md:flex gap-6 text-black items-center">
              {['Features', 'Pricing', 'Contact', 'Blog'].map((link) => (
                <div className="relative group" key={link}>
                  <a href={'#' + link} className="relative z-10">{link}</a>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block">
                    {link != 'Features' && <div className="bg-black text-white text-xs rounded py-1 px-2">
                      Coming soon!
                    </div>}
                    {/* <div className="w-3 h-3 bg-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div> */}
                  </div>
                </div>
              ))}
              <button className="bg-[#490f74] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                <a href="#waitlist">Join Waitlist</a>
              </button>
            </nav>
          </div>

          {menuOpen &&
            (
              <div className="flex items-center justify-center">
                <nav className="md:hidden gap-6 mt-6 text-black text-center">
                  {['Features', 'Pricing', 'Contact', 'Blog'].map((link) => (
                    <div className="relative group py-2" key={link}>
                      <a href={"#" + link} className="relative z-10">{link}</a>
                    </div>
                  ))}
                  <button className="bg-[#490f74] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight mt-6">
                    <a href="#waitlist">Join Waitlist</a>
                  </button>
                </nav>
              </div>
            )}
        </div>
      </div>
    </header>
  );
};
