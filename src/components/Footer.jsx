"use client";
import Image from "next/image";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import VisaPng from "public/visa.png";
import Visa2Png from "public/visa2.png";
import ExpressCardPng from "public/expresscard.png";
import MasterCardPng from "public/mastercard.png";
import MasterCard2Png from "public/mastercard2.png";

export function Footer() {
  return (
    <footer className={"pt-8"}>
      <section className={"text-gray-700 p-4"}>
        <div className="container mx-auto grid lg:grid-cols-4 grid-cols-1 gap-4">
          {/* Footer Section 1 */}
          <div>
            <h5 className="font-bold text-lg mb-2">USAFakeID</h5>
            <p className="mb-1 text-gray-500">
              usafakeid.com is an online fake id website dedicated to providing
              quality official documents like identity cards to individuals
              across the globe but mostly in the United States.
            </p>
          </div>

          {/* Footer Section 2 */}
          <div>
            <h5 className="font-bold text-lg mb-2">QUICK LINKS</h5>
            <p className="mb-1 text-gray-500">Order Fake ID</p>
            <p className="mb-1 text-gray-500">View all Fake IDs</p>
          </div>

          {/* Footer Section 3 */}
          <div>
            <h5 className="font-bold text-lg mb-2">INFORMATION</h5>
            <p className="mb-1">About Us</p>
            <p className="mb-1 text-gray-500">FAQ&apos;s</p>
            <p className="mb-1 text-gray-500">Contact Us</p>
          </div>

          {/* Footer Section 4 */}
          <div>
            <h5 className="font-bold text-lg mb-2">CONTACT US</h5>
            <p className="inline-flex items-center mb-1 text-gray-500">
              <EnvelopeClosedIcon className={"mr-2"} />
              Email Us: order@usafakeid.com
            </p>
          </div>
        </div>
      </section>
      <section className={"bg-[#f1f1f1] py-2.5 "}>
        <div
          className={
            "container flex flex-col justify-center items-center lg:flex-row lg:justify-between"
          }
        >
          <p className={"text-sm leading-relaxed mt-2 text-gray-500 md:mt-0"}>
            &copy;Copyright {new Date().getFullYear()} USAFakeID. All Rights
            Reserved.
          </p>
          <ul className={"flex mt-2"}>
            <li>
              <Image src={VisaPng} width={47} height={37} alt="visa" />
            </li>
            <li>
              <Image src={Visa2Png} width={47} height={36} alt="visa2" />
            </li>
            <li>
              <Image src={ExpressCardPng} width={48} height={36} alt="visa" />
            </li>
            <li>
              <Image src={MasterCardPng} width={48} height={37} alt="visa" />
            </li>
            <li>
              <Image src={MasterCard2Png} width={48} height={37} alt="visa" />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
