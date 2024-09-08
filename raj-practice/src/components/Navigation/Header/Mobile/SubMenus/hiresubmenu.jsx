import React, { useState } from "react";
import { motion } from "framer-motion";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";
import Link from "next/link";
import { HeaderHireNavigators } from "../../../../../navigators";

function HireSubMenu({ open, handleClick }) {
  const [subNavOpen, setSubNavOpen] = useState(
    HeaderHireNavigators.reduce((acc, menuItem) => ({
      ...acc,
      [menuItem.type]: false,
    }))
  );

  const handleItemClick = (key) => {
    setSubNavOpen((prevSubNavOpen) => ({
      ...Object.fromEntries(Object.keys(prevSubNavOpen).map((k) => [k, false])),
      [key]: !prevSubNavOpen[key],
    }));
  };

  return (
    <motion.ul
      className="ml-10"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{ overflow: "hidden" }}
    >
      {HeaderHireNavigators.map((menuItem) => (
        <React.Fragment key={menuItem.type}>
          <li
            className="my-2 flex items-center justify-between"
            onClick={() => handleItemClick(menuItem.type)}
          >
            <span>{menuItem.title}</span>
            {subNavOpen[menuItem.type] ? <PiMinusBold /> : <PiPlusBold />}
          </li>
          {menuItem.listItems && (
            <motion.ul
              className="pl-10 list-disc marker:text-primary marker:text-2xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: subNavOpen[menuItem.type] ? "auto" : 0,
                opacity: subNavOpen[menuItem.type] ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{ overflow: "hidden" }}
            >
              {menuItem.listItems.map((subItem, index) => (
                <Link href={subItem.url} key={index}>
                  <li className="my-2" onClick={handleClick}>
                    {subItem.text}
                  </li>
                </Link>
              ))}
            </motion.ul>
          )}
        </React.Fragment>
      ))}
    </motion.ul>
  );
}

export default HireSubMenu;
