"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/cog.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Zap } from "lucide-react";

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
    <section id="waitlist" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Retain More Customers with Churnfox
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Churnfox leverages AI-driven analysis to process reviews, feedback, and customer data, pinpointing churn triggers and retention opportunities. Get actionable insights to optimize customer experience and boost loyalty.
        </p>
        <div className="inline-flex items-center bg-purple-600/10 rounded-full px-6 py-3 mb-8">
          <Zap className="h-5 w-5 text-purple-600 mr-2" />
          <span className="text-gray-300">Get insights 3x faster than traditional analysis methods.</span>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col items-center justify-center gap-2">
              <label htmlFor="email" className="section-description text-purple-400">
                <strong>First 50 waitlist members get 50% lifetime discount!</strong>
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
                style={{
                  backgroundColor: waitlistSuccess ? "purple-600" : "transparent",
                }}
              />
              {error && <p className="text-red-500">{error}</p>}
              {/* @ts-ignore */}
              {waitlistSuccess && <p className="text-green-300">Thank you for joining the waitlist! You are #{waitlistData.priority} in line.</p>}
              <div className="pt-5">
                <button disabled={waitlistSuccess || loading} className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-600 transition-colors text-lg font-semibold" onClick={() => { submitWaitlist({ email: email }) }}>
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
