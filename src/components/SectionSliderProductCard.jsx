"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Glide from "@glidejs/glide/dist/glide.esm";
import ProductCard from "./ProductCard";
import { OFFERS } from "@/data/data";

const SectionSliderProductCard = ({
  className = "",
  itemClassName = "",
  data = OFFERS,
}) => {
  const sliderRef = useRef(null);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const OPTIONS = {
      perView: 3,
      gap: 32,
      bound: true,
      autoplay: 3000,
      breakpoints: {
        /*
				*
				* 								TailwindCSS默认断点
					断点前缀	最小宽度	CSS
					sm	640px	@media (min-width: 640px) { ... }
					md	768px	@media (min-width: 768px) { ... }
					lg	1024px	@media (min-width: 1024px) { ... }
					xl	1280px	@media (min-width: 1280px) { ... }
					2xl	1536px	@media (min-width: 1536px) { ... }
				* */
        1024: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    };
    if (!sliderRef.current) return;

    let slider = new Glide(sliderRef.current, OPTIONS);
    slider.mount();
    setIsShow(true);
    return () => {
      slider.destroy();
    };
  }, [sliderRef]);

  return (
    <div className={className}>
      <div ref={sliderRef} className={`flow-root ${isShow ? "" : "invisible"}`}>
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {data.map((item, index) => (
                <li key={index} className={`glide__slide ${itemClassName}`}>
                  <ProductCard data={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderProductCard;
