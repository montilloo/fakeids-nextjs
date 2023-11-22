"use client";

import { BoxModelIcon } from "@radix-ui/react-icons";
import SectionHero from "@/components/SectionHero/SectionHero";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import Features from "@/components/Features";
import FeedbackSlider from "@/components/FeedbackSlider";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main className={"relative overflow-hidden"}>
      <SectionHero />
      <div className={" container w-full  py-16"}>
        <div className="bg-[#F8F8F8] flex items-center justify-center font-semibold p-4 mb-10">
          <BoxModelIcon />
          <h6 className={"ml-2"}>Why Choose USAFakeID</h6>
        </div>
        <p className="text-foreground">
          USAFakeID is your trusted fake store providing you with premium
          quality fake IDs. We pride ourselves in our work as we have two
          incredible teams available at your service. One group makes the IDs,
          and the other checks the quality control before shipping. As a result,
          our efficiency and speed are way faster. In addition, we have trained
          professionals with a streamlined process to cater for many fakes as
          possible.
        </p>
      </div>
      <div className={""}>
        <div className="container bg-[#F8F8F8] flex items-center justify-center font-semibold p-4 mb-10">
          <BoxModelIcon />
          <h6 className={"ml-2"}>What we offer</h6>
        </div>
        <SectionSliderProductCard className={"container"} />
        <Features />
        <FeedbackSlider className={"bg-[#222] opacity-70"} />
        <Subscribe />
      </div>
    </main>
  );
}
