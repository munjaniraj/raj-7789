import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { scaleAnimeVarient } from "../../../utils/animation.utils";
import { Tabs } from "@/components/Tabs";
import HireDedicatedStep from "../HirePageLayouts/HireDedicatedStep";

const TabPanel = ({ content }) => {
  return (
    <div
      className="pt-4 flex lg:flex-row flex-col"
      style={{ overflow: "hidden" }}
    >
      <motion.div
        className="flex-1 self-center"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        viewport={{ amount: 0.5, once: true }}
      >
        <Image
          src={content.image}
          alt={content.imageTitle}
          title={content.imageTitle}
          className="mx-auto md:w-96 md:h-96 w-52 h-52"
        />
      </motion.div>
      <motion.div
        className="flex-1 flex flex-col gap-5 mt-6"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 50 },
        }}
        viewport={{ amount: 0.5, once: true }}
      >
        <p className="text-lg opacity-70">{content.title}</p>
        <p className="text-lg lg:text-2xl font-nunito font-semibold tracking-wide">
          {content.title2}
        </p>
        <ul className="h-max ml-7 lg:grid-cols-2 grid text-lg list-disc marker:text-primary marker:text-3xl">
          {content.contentlist.map((value, index) => (
            <li className="opacity-70" key={index}>
              {value}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const HireSection = ({ tabSection , hireButton }) => { 
  const [activeTab, setActiveTab] = useState(tabSection.TabsTitle[0].value);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section className="container mx-auto mt-12 lg:mt-[100px] px-4">
      <motion.div
        className="text-2xl lg:text-4xl mb-10 text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={scaleAnimeVarient}
        viewport={{ amount: 0.5, once: true }}
      >
        <h2 className="font-nunito font-bold px-4">Hiring Model</h2>
        <span className="bg-primary rounded my-2 w-32 h-1" />
      </motion.div>

      <motion.div
        className="flex lg:justify-center justify-center gap-5 mb-4 overflow-x-auto snap-x snap-mandatory"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        viewport={{ amount: 0.5, once: true }}
      >
        <Tabs
          activeTab={activeTab}
          TabsTitle={tabSection.TabsTitle}
          handleTabClick={handleTabClick}
        />
      </motion.div>

      <TabPanel content={tabSection.TabContent[activeTab]} />

      <section className="container mx-auto mt-12 lg:mt-[100px] px-4">
        <motion.h2
          className="text-2xl lg:text-4xl text-center flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          variants={scaleAnimeVarient}
          viewport={{ amount: 0.3, once: true }}
        >
          <h2 className="font-nunito font-bold">
            Hire Remote Developers in 3 Steps
          </h2>
          <span className="bg-primary rounded my-2 w-32 h-1" />
        </motion.h2>
        <HireDedicatedStep />
      </section>

      <div className="w-full text-center mt-8 text-primary">
        <Link href="#contact-form">
          <button className="px-7 py-3 border-2 text-center font-bold bg-primary text-white border-primary rounded hover:bg-primary hover:text-white transform duration-300">
            {hireButton}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HireSection;
