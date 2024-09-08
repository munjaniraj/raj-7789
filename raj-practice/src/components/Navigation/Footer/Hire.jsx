import React from "react";
import { FooterHirenavigators } from "../../../navigators";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";
import SubMenu from "@/components/Submenu";
import Link from "next/link";


const HireFooter = ({ isSubNavOpen, handleItemClick }) => {
  return (
    <div>
      {/* Desktop View */}
      <div className="mt-12 sm:block hidden">
        <strong className="text-primary text-xl border-b-2 border-primary pb-4">
          Hire
        </strong>
        <ul className="text-lg mt-8">
          {FooterHirenavigators().map((value, i) => (
            <Link href={value.link} key={i}>
              <li className="my-5">
                {value.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Mobile View */}
      <div
        className="text-xl mt-8 text-primary flex items-center justify-between sm:hidden"
        onClick={() => handleItemClick("hire")}
      >
        <strong className="text-xl">Hires</strong>
        {isSubNavOpen.hire ? <PiMinusBold /> : <PiPlusBold />}
      </div>
      <SubMenu
        open={isSubNavOpen.hire}
        navigators={FooterHirenavigators()}
        className="ml-10"
      />
    </div>
  );
};

export default HireFooter;
