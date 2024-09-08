import React from "react";
// import SkillandExperienced from "@/../public/assets/images/Hire/SkillandExperienced.svg";
// import Transparency from "@/../public/assets/images/Hire/Transparency.svg";
// import Flexible from "@/../public/assets/images/Hire/Flexible.svg";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { HeaderHireNavigators } from "../../../../navigators";


const HireSubMenuDesktop = ({ open, handleItemHover }) => {
  return (
    <motion.div
      className={`xl:block hidden w-full  border-b-4 border-b-primary absolute bg-white z-50`}
      onMouseEnter={() => handleItemHover("hire", true)}
      onMouseLeave={() => handleItemHover("hire", false)}
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
      }}
      transition={{ duration: 0.2, delay: 0.2 }}
      style={{ overflow: "hidden", borderTopWidth: 2 }}
    >
      <div className="border-b-2 flex justify-between py-8 xlg:px-8 lg:px-3 ">
        {HeaderHireNavigators.map((item, index) => (
          <div key={index} className="w-fit">
            <div className="flex items-center gap-2">
              <Image src={item.imageSrc} alt={item.title} />
              <strong className="text-xl"> {item.title}</strong>
            </div>
            <ul className="list-disc marker:text-primary marker:text-2xl ml-10">
              {item.listItems.map((listItem, i) => (
                <Link href={listItem.url} key={i}>
                  <li
                    className="text-lg my-1 cursor-pointer hover:text-primary"
                    onClick={() => handleItemHover("hire", false)}
                  >
                    {listItem.text}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12 py-5 xlg:pr-8 lg:px-3">
        <div className="col-span-3 flex justify-center border-r-2">
          <div className="flex items-center">
            {/* <Image src={SkillandExperienced} alt="SkillandExperienced" /> */}
            <p className="my-4 text-xl ml-4">
              Skilled and experienced developers
            </p>
          </div>
        </div>
        <div className="col-span-3 flex justify-center border-r-2">
          <div className="flex items-center">
            {/* <Image src={Transparency} alt="Transparency" /> */}
            <p className="my-4 text-xl ml-4">100% Transparency</p>
          </div>
        </div>
        <div className="col-span-3 flex justify-center">
          <div className="flex items-center">
            {/* <Image src={Flexible} alt="Flexible" /> */}
            <p className="my-4 text-xl ml-4">Flexible hiring models</p>
          </div>
        </div>
        <div className="col-span-3">
          <div className=" border-2 rounded border-primary">
            <div className="ml-2 h-full flex flex-col justify-center p-2">
              <p className="text-xl">
                Harness the Full Potential of Your Business
              </p>
              <Link
                href="https://calendly.com"
                target="_blank"
                className="flex items-center gap-1 text-lg"
              >
                <strong className="text-primary tracking-wide">
                  “Hire Us Now!”
                </strong>
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HireSubMenuDesktop;
