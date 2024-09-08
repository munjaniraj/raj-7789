import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Tabs } from "@/components/Tabs";


const TabPanel = ({ images, button, urlquerys }) => {
  return (
    <>
      <div className="flex justify-evenly flex-wrap py-10 pawn">
        {images.map((value, i) => (
          <motion.div
            key={i}
            className="hover:bg-white hover:drop-shadow-primary h-32 w-40 lg:w-52 text-center rounded flex flex-col justify-center items-center transform duration-300"
            whileHover={{ scale: 1.1 }} // Zoom in to 1.2 times the original size on hover
            transition={{ duration: 0.1 }} // Transition duration in seconds
          >
            <Image src={value.image} alt={value.name} className="h-14 w-14" />
            <p className="mt-3 lg:text-xl">{value.name}</p>
          </motion.div>
        ))}
      </div>
      {button && (
        <div className="w-full text-center text-primary">
          <Link href={"/contact-us#contact_us_form"} rel="preload">
            <button className="border-2 bg-primary text-white hover:bg-primary hover:text-white transform duration-300 border-primary py-2 lg:py-3 px-8 rounded font-bold tracking-wide lg:text-lg">
              {button}
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

const Technologies = ({ Technologie }) => { 
  const [activeTab, setActiveTab] = useState(Technologie.Tabstitle[0].value);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <motion.div
        className="flex lg:gap-0 justify-between gap-5  overflow-x-auto snap-x snap-mandatory"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Tabs
          TabsTitle={Technologie.Tabstitle}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab ? activeTab : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <TabPanel
            images={Technologie.TabPanelValue[activeTab]}
            button={Technologie.TabPanelButton[activeTab]}
            urlquerys={Technologie.TabPanelButtonLinkquerys[activeTab]}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Technologies;
