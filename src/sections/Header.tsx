'use client'

import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/churnFoxFooter.png";
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
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div style={{ cursor: 'pointer' }} onClick={() => window?.scrollTo(0, 0)} className="flex items-center">
            <Image src={Logo} alt="Churnfox Logo" height={40} width={40} />
            <span className="ml-2 text-xl font-bold text-white">Churnfox</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                <a href="#waitlist">Join Waitlist</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
