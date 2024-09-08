import React from "react";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";
import SubMenu from "@/components/Submenu";
import { Servicenavigators } from "../../../navigators";
import Link from "next/link";


const ServiceFooter = ({ isSubNavOpen, handleItemClick }) => {
  return (
    <div>
      {/* Desktop View */}
      <div className="mt-12 sm:block hidden">
        <strong className="text-primary text-xl border-b-2 border-primary pb-4">
          Services
        </strong>
        <ul className="text-lg mt-8">
          {Servicenavigators().map((value, i) => (
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
        onClick={() => handleItemClick("service")}
      >
        <strong className="text-xl">Services</strong>
        {isSubNavOpen.service ? <PiMinusBold /> : <PiPlusBold />}
      </div>
      <SubMenu open={isSubNavOpen.service} navigators={Servicenavigators()} className='ml-10'/>
    </div>
  );
};

export default ServiceFooter;
