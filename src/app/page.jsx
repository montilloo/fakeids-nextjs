"use client";

import { BoxModelIcon } from "@radix-ui/react-icons";
import { OFFERS, LATESTPRODUCTS } from "@/data/data";
import SectionHero from "@/components/SectionHero/SectionHero";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import KeyRecommend from "@/components/KeyRecommend";

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
        <SectionSliderProductCard className={"container"} data={OFFERS} />
        <div className="container bg-[#F8F8F8] flex items-center justify-center font-semibold p-4 mb-10">
          <BoxModelIcon />
          <h6 className={"ml-2"}>Latest Products</h6>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {LATESTPRODUCTS.map((product) => (
            <KeyRecommend product={product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
