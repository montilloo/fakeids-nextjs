"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Rating as ReactRating } from "@smastrom/react-rating";

const KeyRecommend = ({ product }) => {
  const { image, name, rate } = product;
  return (
    <div className={"flex flex-col items-center justify-between"}>
      <Image src={image} alt={name} width={400} height={254} />
      <h6 className={"mt-5"}>{name}</h6>
      <ReactRating className={"my-2"} style={{ maxWidth: 100 }} value={rate} />
      <Button
        className={
          "rounded-none w-3/4 hover:bg-transparent hover:text-black hover:border"
        }
      >
        ORDER
      </Button>
    </div>
  );
};

export default KeyRecommend;
