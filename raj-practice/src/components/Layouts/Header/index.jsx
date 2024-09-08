import React, { useEffect, useState } from "react";
import Image from "next/image";
import SiteLog from "@/../public/assets/images/SiteLog.svg";
import HamBurger from "@/../public/assets/images/HamBurger.svg";
import { IoClose } from "react-icons/io5";
import style from "@/styles/NavStyle.module.css";
import MobileNavBar from "@/components/Navigation/Header/Mobile/MobileNavBar";
import ServiceSubMenuDesktop from "@/components/Navigation/Header/Desktop/ServiceSubMenu";
import HireSubMenuDesktop from "@/components/Navigation/Header/Desktop/HireSubMenu";
import CompanySubMenuDesktop from "@/components/Navigation/Header/Desktop/CompanySubMenu";
import Link from "next/link";


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [SubNavOpen, setSubNavOpen] = useState({
    service: false,
    hire: false,
    company: false,
  });

  const handleItemHover = (key, status) => {
    setSubNavOpen((prevSubNavOpen) => ({
      ...Object.fromEntries(Object.keys(prevSubNavOpen).map((k) => [k, false])),
      [key]: status,
    }));
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div
      className="sticky top-0 z-[9999] drop-shadow-xl bg-white px-4"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#stick"
    >
      <header className="bg-white px-4 py-4  xl:py-0 lg:px-0 relative">
        <div className="flex container mx-auto items-center justify-between">
          <div className="xl:py-5">
            <Link href={"/"}>
              <Image src={SiteLog} alt="Site Logo" className="w-36" />
            </Link>
          </div>
          <nav className="xl:block hidden">
            <ul
              className={`flex lg:gap-12 xl:gap-14 2xl:gap-20 ${style.navbar_nav_items}  h-24 text-center items-center`}
              onMouseLeave={() => handleItemHover(false)}
            >
              <Link href={"/"}>
                <li
                  className="text-xl relative hover:text-primary cursor-pointer"
                  onMouseEnter={() => handleItemHover("Home", true)}
                  // onMouseLeave={() => handleItemHover("Home", false)}
                >
                  Home
                </li>
              </Link>
              <li
                className="text-xl relative hover:text-primary cursor-pointer"
                onMouseEnter={() => handleItemHover("service", true)}
                // onMouseLeave={() => handleItemHover("service", false)}
              >
                Services
              </li>
              <li
                className="text-xl relative hover:text-primary cursor-pointer"
                onMouseEnter={() => handleItemHover("hire", true)}
                // onMouseLeave={() => handleItemHover("hire", false)}
              >
                Hire Developers
              </li>
              <li
                className="text-xl relative hover:text-primary cursor-pointer"
                onMouseEnter={() => handleItemHover("company", true)}
                // onMouseLeave={() => handleItemHover("company", false)}
              >
                Company
              </li>
              <div className="hidden xl:block">
                {/* <div className="flex"> */}
                <Link
                  href="https://calendly.com"
                  target="_blank"
                >
                  <button className="px-5 pulseButton ssm:px-8 md:mt-0 mt-6 lg:px-10 xl:px-14 py-3 text-sm ssm:text-base md:text-lg font-semibold border-2 border-primary rounded-lg bg-primary text-white transform duration-300">
                    Book a Free Consultation
                  </button>
                </Link>
                {/* </div> */}
              </div>
            </ul>
          </nav>

          <div className="xl:hidden">
            <button
              className="bg-white py-1 rounded-md font-bold text-xl"
              onClick={toggleNav}
            >
              {isNavOpen ? (
                <IoClose />
              ) : (
                <Image src={HamBurger} alt="HamBurger" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile navigation */}
        <MobileNavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </header>

      {/* Service SubNav */}
      <ServiceSubMenuDesktop
        open={SubNavOpen.service}
        handleItemHover={handleItemHover}
      />

      {/* Hire SubNav */}
      <HireSubMenuDesktop
        open={SubNavOpen.hire}
        handleItemHover={handleItemHover}
      />

      {/* Company SubNav */}
      <CompanySubMenuDesktop
        open={SubNavOpen.company}
        handleItemHover={handleItemHover}
      />
    </div>
  );
};

export default Header;
