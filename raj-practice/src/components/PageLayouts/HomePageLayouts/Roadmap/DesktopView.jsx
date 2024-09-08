import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Roadmapdata } from "./Roadmapdata";
import Image from "next/image";

const RoadmapDesktopView = ({ DesRoadmap }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Automatically change the active index
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Define the li item styles
  const getLiItemStyles = (index) => {
    if (index === activeIndex) {
      return "text-black font-bold";
    }
    return "text-black/50 font-bold";
  };

  return (
    <div className="lg:flex hidden mt-14 HelpBusiness">
      <motion.div className="w-1/3  RodMap">
        <motion.div
          className="flex  justify-center items-center lg:h-80 lg:w-80  xl:h-96 xl:w-96 xlg:h-[31rem] xlg:w-[31rem] relative"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 50 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* make Circle */}
          <div className="h-full w-full rounded-full border-dashed border-2 border-gradient-to-r from-white border-gray-500 absolute" />
          {/* Circle Gradient */}
          <div className="bg-white absolute left-0 z-10 w-1/2 h-full" />
          <div className="bg-gradient-to-r from-white z-50 w-1/2 absolute top-0 bottom-0" />
          {/* list of the circle */}
          <ul className="absolute -right-[10.7rem] flex flex-col h-full justify-evenly">
            <li
              className="mb-1 mr-[5.4rem] flex items-center gap-2"
              onClick={() => setActiveIndex(0)}
            >
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <h4
                className={`text-xl ${getLiItemStyles(
                  0
                )} relative cursor-pointer`}
              >
                Tell Us Your Idea
                {activeIndex == 0 && (
                  <span className="absolute text-7xl text-primary/40 right-0 -mt-6 font-extrabold">
                    1
                  </span>
                )}
              </h4>
            </li>
            <li
              className="mb-1 ml-[3.25rem] flex items-center gap-2"
              onClick={() => setActiveIndex(1)}
            >
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <h4
                className={`text-xl ${getLiItemStyles(
                  1
                )} relative cursor-pointer`}
              >
                Kickoff With Team
                {activeIndex == 1 && (
                  <span className="absolute text-7xl text-primary/40 right-0 -mt-6 font-extrabold">
                    2
                  </span>
                )}
              </h4>
            </li>
            <li
              className="mb-1 ml-[3.25rem] flex items-center gap-2"
              onClick={() => setActiveIndex(2)}
            >
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <h4
                className={`text-xl ${getLiItemStyles(
                  2
                )} relative cursor-pointer`}
              >
                Design and Develop
                {activeIndex == 2 && (
                  <span className="absolute text-7xl text-primary/40 right-0 -mt-6 font-extrabold">
                    3
                  </span>
                )}
              </h4>
            </li>
            <li
              className="mb-1 mr-[5.4rem] flex items-center gap-2"
              onClick={() => setActiveIndex(3)}
            >
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <h4
                className={`text-xl ${getLiItemStyles(
                  3
                )} relative cursor-pointer`}
              >
                Launch
                {activeIndex == 3 && (
                  <span className="absolute text-7xl text-primary/40 right-0 -mt-6 font-extrabold">
                    4
                  </span>
                )}
              </h4>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="px-16 py-10 w-2/3 flex flex-col justify-center gap-5 RodMapImage"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center select-none">
          <p className="text-5xl font-semibold tracking-wide text-gray-400">
            {DesRoadmap[activeIndex].title}
          </p>
          <Image
            className="w-80 mx-auto"
            src={DesRoadmap[activeIndex].image}
            alt="GIF Image"
            width={500}
            height={500}
            sizes="(max-width: 600px) 100vw, 50vw"
            srcSet={`${DesRoadmap[activeIndex].image} 1200w, ${DesRoadmap[activeIndex].image} 600w`}
          />
        </div>
        <div className="flex justify-center text-xl">
          <p className="max-w-xs xl:max-w-lg text-center">
            {DesRoadmap[activeIndex].content}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapDesktopView;
