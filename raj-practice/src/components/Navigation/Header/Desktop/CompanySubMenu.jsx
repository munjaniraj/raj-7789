import React from "react";
import { BsArrowRight, BsWhatsapp } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Company from "@/../public/assets/images/Company/Company.svg";
import ContactUs from "@/../public/assets/images/Company/ContactUs.svg";
import CompanyBanner from "@/../public/assets/images/Company/CompanyBanner.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Companynavigators } from "../../../../navigators";;

const CompanySubMenuDesktop = ({ open, handleItemHover }) => {
  return (
    <motion.div
      className="xl:block hidden w-full border-t-2 border-b-4 border-b-primary absolute bg-white z-50"
      onMouseEnter={open ? () => handleItemHover("company", true) : null}
      onMouseLeave={() => handleItemHover("company", false)}
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
      }}
      transition={{ duration: 0.2, delay: 0.2 }}
      style={{ overflow: "hidden" }}
    >
      <div className="border-b-2 py-7 px-8 flex justify-between">
        <div className="mr-12">
          <div className="flex items-center gap-2">
            <Image src={Company} alt="Company Icon" />
            <strong className="text-xl"> Company</strong>
          </div>
          <ul className="list-disc marker:text-primary marker:text-2xl ml-10 py-5">
            {Companynavigators().map((item, i) => (
              <Link href={item.link} key={i} target={item.target}>
                <li
                  className="text-lg hover:text-primary"
                  onClick={() => handleItemHover("company", false)}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Image src={ContactUs} alt="ContactUs" />
            <strong className="text-xl"> Contact Us</strong>
          </div>
          <div className="ml-6 py-5 text-lg flex xlg:gap-10 pr-2">
            <div className="flex flex-col gap-3">
              <strong className="text-slate-700 tracking-wide">
                Business Query
              </strong>
              <Link
                href="https://wa.me"
                className="text-slate-700 tracking-wide flex items-center gap-2"
              >
                <BsWhatsapp className="text-primary" />
                +91 0000 000000
              </Link>
              <Link
                href="mailto:inquire@dharmainfotech.com"
                className="text-slate-700 tracking-wide flex items-center gap-2"
              >
                <MdMail className="text-primary" />
                inquire@dharmainfotech.com
              </Link>
              <Link suppressHydrationWarning href="/contact-us#contact_us_form">
                <button
                  className="border-2 rounded hover:bg-primary mt-2 hover:text-white transform duration-300 border-primary text-primary px-12 tracking-wider py-[6px]"
                  onClick={() => handleItemHover("company", false)}
                >
                  Submit Inquiry
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <strong className="text-slate-700 tracking-wide">
                HR & Employment Verification
              </strong>
              <Link
                href="https://wa.me"
                className="text-slate-700 tracking-wide flex items-center gap-2"
              >
                <BsWhatsapp className="text-primary" />
                +91 0000 000000
              </Link>
              <Link
                href="mailto:career@dharmainfotech.com"
                className="text-slate-700 tracking-wide flex items-center gap-2"
              >
                <MdMail className="text-primary" />
                career@dharmainfotech.com
              </Link>
              <Link suppressHydrationWarning href="/contact-us#career_form">
                <button
                  className="border-2 rounded hover:bg-primary mt-2 hover:text-white transform duration-300 border-primary text-primary px-12 tracking-wider py-[6px]"
                  onClick={() => handleItemHover("company", false)}
                >
                  Apply for Job
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <Link
            href="/career#current-opening"
            onClick={() => handleItemHover("company", false)}
          >
            <Image
              src={CompanyBanner}
              alt="CompanyBanner"
              style={{ width: "880px", height: "280px" }}
            />
            <div className="absolute top-0 left-10 h-full flex items-center justify-center">
              <div className="text-black">
                <p className="xlg:text-3xl lg:text-xl font-thin mb-2">
                  Current Openings
                </p>

                <p className="xlg:text-xl flex items-center gap-2 text-bold text-primary border-primary border-b-2 w-[114px]">
                  Apply Now <BsArrowRight />
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="py-5">
        <p className="flex justify-center text-xl">
          One Stop Solution - Mobile, Web & NFT Development
        </p>
      </div>
    </motion.div>
  );
};

export default CompanySubMenuDesktop;
