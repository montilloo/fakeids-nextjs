"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProductCard = ({ className = "", data }) => {
  const { title, description, image, tag } = data;
  return (
    <>
      <div className={`relative flex flex-col bg-transparent ${className}`}>
        <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 overflow-hidden z-1 group">
          <Image className="" src={image} alt="offers" />
          <Button className={"absolute top-3 left-0 z-10 rounded-none"}>
            {tag}
          </Button>
        </div>

        <div className="space-y-4 px-2.5 pt-5 pb-2.5">
          <div>
            <h2 className="nc-ProductCard__title text-base font-semibold transition-colors">
              {title}
            </h2>
            <p className={`text-sm text-slate-500 dark:text-slate-400 mt-1 `}>
              {description}
            </p>
          </div>

          <div className="flex justify-between items-end ">
            <div className="flex items-center mb-0.5">
              <span className="text-sm ms-1 text-slate-500 dark:text-slate-400"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
