import React from "react";
// import ServiceNavIcon from "@/../public/assets/images/Service/serviceNavIcon.png";
// import ServiceFrame from "@/../public/assets/images/Service/ServiceFrame.png";
// import ServiceDeliveryIcon from "@/../public/assets/images/Service/ServiceDeliveryIcon.png";
// import ServiceAgileMethodology from "@/../public/assets/images/Service/ServiceAgileMethodology.png";
// import ServiceCost from "@/../public/assets/images/Service/ServiceCost.png";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";


const links = [
  [
    {
      text: "Software Development",
      link: "/services/software-development-agency",
    },
    {
      text: "Blockchain Development",
      link: "/services/blockchain-development-company",
    },
    {
      text: "UI/UX Design",
      link: "/services/ui-ux-design-services",
    },
  ],
  [
    {
      text: "Web Development",
      link: "/services/web-development-company",
    },
    {
      text: "Mobile App Development",
      link: "/services/mobile-app-development-company",
    },
    {
      text: "Staff Augmentation",
      link: "/services/staff-augmentation",
    },
  ],
];

const ServiceSubMenuDesktop = ({ open, handleItemHover }) => {
  return (
    <motion.div
      className="xl:block hidden w-full  border-b-4 border-b-primary absolute bg-white z-50"
      onMouseEnter={() => handleItemHover("service", true)}
      onMouseLeave={() => handleItemHover("service", false)}
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
      }}
      transition={{ duration: 0.2, delay: 0.2 }}
      style={{ overflow: "hidden", borderTopWidth: 2 }}
    >
      <div className="border-b-2 py-7 px-20 grid grid-cols-10">
        <div className="col-span-4 p-2">
          <div className="flex items-center">
            {/* <Image src={ServiceNavIcon} alt="ServiceNavIcon" /> */}
            <p className="my-4 font-semibold text-2xl ml-4">Services</p>
          </div>
          <div className="flex my-2 ml-10 gap-12">
            {links.map((itemarr, i) => (
              <ul
                className="flex flex-col gap-2 justify-between list-disc marker:text-primary marker:text-2xl"
                key={i}
              >
                {itemarr.map((item, i) => (
                  <Link href={item.link} key={i}>
                    <li
                      className="xl:text-lg 2xl:text-xl cursor-pointer hover:text-primary"
                      onClick={() => handleItemHover("service", false)}
                    >
                      {item.text}
                    </li>
                  </Link>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div
          className="col-span-6 relative"
          onClick={() => handleItemHover("service", false)}
        >
          <Link href={"/contact-us#contact_us_form"}>
            {/* <Image
              src={ServiceFrame}
              alt="ServiceFrame"
              style={{ width: "1080px", height: "210px" }}
            /> */}
            <div className="absolute top-0 left-10 h-full flex items-center justify-center">
              <div className="text-black">
                <p className="text-2xl font-thin">Let’s build it together</p>
                <p className="text-xl flex items-center gap-2 font-bold text-primary border-primary border-b-2 w-[114px]">
                  Contact Us <BsArrowRight />
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 py-5">
        <div className="col-span-4 flex justify-center border-r-2">
          <div className="flex items-center">
            {/* <Image src={ServiceDeliveryIcon} alt="ServiceDeliveryIcon" /> */}
            <p className="my-4 text-xl ml-4">On-time delivery</p>
          </div>
        </div>
        <div className="col-span-4 flex justify-center border-r-2">
          <div className="flex items-center">
            {/* <Image
              src={ServiceAgileMethodology}
              alt="ServiceAgileMethodology"
            /> */}
            <p className="my-4 text-xl ml-4">Agile methodology</p>
          </div>
        </div>
        <div className="col-span-4 flex justify-center">
          <div className="flex items-center">
            {/* <Image src={ServiceCost} alt="ServiceCost" /> */}
            <p className="my-4 text-xl ml-4">Cost-effective solutions</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceSubMenuDesktop;
