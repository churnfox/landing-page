import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import HowItWorks from "@/sections/HowItWorks";
import Features from "@/sections/Features";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <LogoTicker /> */}
      <Features />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  )
}