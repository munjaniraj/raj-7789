import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";
import HireSubMenu from "./SubMenus/hiresubmenu";
import SubMenu from "@/components/Submenu";
import { Companynavigators, Servicenavigators } from "../../../../navigators";
import Link from "next/link";


const MobileNavBar = ({ isNavOpen, setIsNavOpen }) => {
  const [isSubNavOpen, setIsSubNavOpen] = useState({
    service: false,
    company: false,
    hire: false,
  });

  const handleItemClick = (key) => {
    setIsSubNavOpen((prevSubNavOpen) => ({
      ...Object.fromEntries(Object.keys(prevSubNavOpen).map((k) => [k, false])),
      [key]: !prevSubNavOpen[key],
    }));
  };

  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.nav
          className="xl:hidden container mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ul className="flex flex-col mt-4">
            <Link href={"/"}>
              <li
                className="text-xl mb-2 text-primary"
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </li>
            </Link>

            <li
              className="text-xl mb-2 text-primary flex items-center justify-between"
              onClick={() => handleItemClick("service")}
            >
              <span>Services</span>
              {isSubNavOpen.service ? <PiMinusBold /> : <PiPlusBold />}
            </li>
            <SubMenu
              navigators={Servicenavigators()}
              open={isSubNavOpen.service}
              handleItemClick={() => {
                handleItemClick("service");
                setIsNavOpen(false);
              }}
            />

            <li
              className="text-xl mb-2 text-primary flex items-center justify-between"
              onClick={() => handleItemClick("hire")}
            >
              <span>Hire Developers</span>
              {isSubNavOpen.hire ? <PiMinusBold /> : <PiPlusBold />}
            </li>
            <HireSubMenu
              open={isSubNavOpen.hire}
              handleClick={() => {
                handleItemClick("hire");
                setIsNavOpen(false);
              }}
            />

            <li
              className="text-xl mb-2 text-primary flex items-center justify-between"
              onClick={() => handleItemClick("company")}
            >
              <span>Company</span>
              {isSubNavOpen.company ? <PiMinusBold /> : <PiPlusBold />}
            </li>
            <SubMenu
              navigators={Companynavigators()}
              open={isSubNavOpen.company}
              handleItemClick={() => {
                handleItemClick("company");
                setIsNavOpen(false);
              }}
            />
          </ul>

          <div className="flex justify-center mt-3">
            <Link href="https://calendly.com" target="_blank">
              <button
                className="px-5 pulseButton ssm:px-8 md:mt-0 mt-6 lg:px-10 xl:px-14 py-3 text-sm ssm:text-base md:text-lg font-semibold border-2 border-primary rounded-lg bg-primary text-white transform duration-300"
                onClick={() => setIsNavOpen(false)}
              >
                Book a Free Consultation
              </button>
            </Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNavBar;
