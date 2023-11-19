import React from "react";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
  faPlane,
  faMoneyCheckAlt,
  faCreditCard,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
const Features = ({ className }) => {
  return (
    <div className={` ${className} bg-[#F5F5F5] pt-9`}>
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div className={"flex flex-col items-center mb-9"}>
          <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-full">
            <FontAwesomeIcon
              className={"hover:scale-x-[-1] transition-transform duration-300"}
              icon={faPlane}
              style={{ fontSize: 20, color: "black" }}
            />
          </div>
          <h6 className={"mt-4"}>SHIPPING WORLD WIDE</h6>
        </div>

        <div className={"flex flex-col items-center mb-9"}>
          <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-full">
            <FontAwesomeIcon
              className={"hover:scale-x-[-1] transition-transform duration-300"}
              icon={faMoneyCheckAlt}
              style={{ fontSize: 20, color: "black" }}
            />
          </div>
          <h6 className={"mt-4 uppercase"}>100% money back guarantee</h6>
        </div>

        <div className={"flex flex-col items-center mb-9"}>
          <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-full">
            <FontAwesomeIcon
              className={"hover:scale-x-[-1] transition-transform duration-300"}
              icon={faCreditCard}
              style={{ fontSize: 20, color: "black" }}
            />
          </div>
          <h6 className={"mt-4 uppercase"}>Many payment gatways</h6>
        </div>

        <div className={"flex flex-col items-center mb-9"}>
          <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-full">
            <FontAwesomeIcon
              className={"hover:scale-x-[-1] transition-transform duration-300"}
              icon={faHeadset}
              style={{ fontSize: 20, color: "black" }}
            />
          </div>
          <h6 className={"mt-4 uppercase"}>24/7 online support</h6>
        </div>
      </div>
    </div>
  );
};

export default Features;
