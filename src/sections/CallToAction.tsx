"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/cog.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const [waitlistData, setWaitlistData] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('')
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  function validateEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  function submitWaitlist(data: any) {
    if (!data.email) {
      setError("Please enter your email");
      return;
    }
    if (validateEmail(data.email) === false) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);

    data.waitlist_id = 23128;
    data.referral_link = document.URL;

    fetch("https://api.getwaitlist.com/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((data) => {
        setWaitlistData(data);
        setLoading(false);
        setWaitlistSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred. Please try again later.");
      });
  }

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container" id="waitlist">
        <div className="section-heading relative">
          <h2 className="section-title py-2">Ready to turn insights into growth?</h2>
          <p className="section-description mt-5">
            Join our waitlist and get exclusive early access to AI-powered analytics! We’ve got more in store, and you won’t want to miss it. Secure your spot now and be ahead of the curve.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <form onSubmit={(e) => e.preventDefault()} className="py-10">
            <div className="flex flex-col items-center justify-center gap-2">
              <label htmlFor="email" className="section-description">
                <strong>Get insights 3x faster than traditional analysis methods.</strong>
              </label>
              <label htmlFor="email" className="section-description text-purple-800">
                First 50 waitlist members get 50% lifetime discount!
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border border-purple-400 p-3 w-96 rounded-xl"
                autoComplete="email"
                required
                disabled={waitlistSuccess || loading}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
              />
              {error && <p className="text-red-500">{error}</p>}
              {/* @ts-ignore */}
              {waitlistSuccess && <p className="text-green-800">Thank you for joining the waitlist! You are #{waitlistData.priority} in line.</p>}
              <div className="pt-5">
                <button disabled={waitlistSuccess || loading} className="btn btn-primary text-lg px-5" onClick={() => { submitWaitlist({ email: email }) }}>
                  {loading ? "Joining..." : "Join Waitlist"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
