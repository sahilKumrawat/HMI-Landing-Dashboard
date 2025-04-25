"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing Plans"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        {/* <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Trial Plan"
            price={"11"}
            duration={isMonthly ? "15-days" : "yr"}
            subtitle="15 days trial with 10 credits"
          >
            <OfferList text="10 Credits" status="active" />
            <OfferList text="15-day access" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Monthly Plan"
            price={"20"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="1 month access with 60 credits"
          >
            <OfferList text="60 Credits" status="active" />
            <OfferList text="1-month access" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Annual Basic"
            price={"100"}
            duration={"yr"}
            subtitle="1 year access with 250 credits"
          >
            <OfferList text="250 Credits" status="active" />
            <OfferList text="1-year access" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Annual Pro"
            price={"499"}
            duration={"yr"}
            subtitle="1 year access with 2000 credits"
          >
            <OfferList text="2000 Credits" status="active" />
            <OfferList text="1-year access" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Annual Elite"
            price={"999"}
            duration={"yr"}
            subtitle="1 year access with 5000 credits"
          >
            <OfferList text="5000 Credits" status="active" />
            <OfferList text="1-year access" status="active" />

          </PricingBox>

          <PricingBox
            packageName="Annual Max"
            price={"2000"}
            duration={"yr"}
            subtitle="1 year access with 15000 credits"
          >
            <OfferList text="15000 Credits" status="active" />
            <OfferList text="1-year access" status="active" />
          </PricingBox>

          <PricingBox
            packageName="AI Mock Interviews"
            price={"4.99"}
            duration={"mo"}
            subtitle="Get mock interviews with instant feedback."
          >
            <OfferList text="AI-powered interviewer" status="active" />
            <OfferList text="Instant feedback and scoring" status="active" />
            <OfferList text="Behavioral + technical rounds" status="active" />
            <OfferList text="Voice & transcript review" status="active" />
            <OfferList text="Progress tracking" status="active" />

          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
