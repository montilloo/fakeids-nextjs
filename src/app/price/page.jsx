"use client";
import Image from "next/image";
import ALABAMAFront from "/public/ALABAMA  front.jpg";

export default function Price() {
  const divs = new Array(33).fill();

  const onProductClick = (item) => {
    console.log("onProductClick", item);
  };
  return (
    <div className={"container"}>
      <div className={"min-h-screen grid grid-cols-2 lg:grid-cols-4 gap-8"}>
        {divs.map((item, index) => {
          return (
            <div
              className={"overflow-hidden hover:cursor-pointer"}
              key={index}
              onClick={() => onProductClick(index)}
            >
              <Image
                className={
                  "transition-transform duration-200 ease-in-out hover:scale-110 hover:rotate-3 "
                }
                src={ALABAMAFront}
                width={360}
                height={224}
                alt={"ALABAMA front"}
              ></Image>
              <h6 className={"font-semibold text-center pt-3"}>ALABAMA</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
