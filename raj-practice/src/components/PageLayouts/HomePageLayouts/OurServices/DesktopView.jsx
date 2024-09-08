import Link from "next/link";
import { motion } from "framer-motion";
import { scaleAnimeVarient } from "../../../../utils/animation.utils";
import { findService } from "./ServiceData";
import { Card } from "./Card";


const HomeOuerServiceDesktopView = ({ HideShow }) => {
  return (
    <div className={HideShow}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-14 items-center text-center">
        <div className="gap-12 flex-col flex">
          <Card details={findService("Software Development")} />
          <Card details={findService("Staff Augmentation")} />
        </div>
        <div className="gap-12 flex-col flex">
          <Card details={findService("Web Development")} />
          <motion.div
            className="bg-primary tracking-wide rounded-2xl drop-shadow-primary group py-10 items-center gap-5 flex justify-center flex-col"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={scaleAnimeVarient}
            viewport={{ amount: 0.3, once: true }}
          >
            <p className="text-2xl font-bold text-white">
              Don’t know what to choose?
            </p>
            <p className="text-2xl font-bold text-white -mt-5">
              Drop us a line.
            </p>
            <Link
              href={"/contact-us#contact_us_form"}
              className="text-lg bg-white text-primary border-2 border-white rounded py-3 px-12 font-semibold" 
              rel="preload"
            >
              Boost Your Business
            </Link>
          </motion.div>
          <Card details={findService("Mobile App Development")} />
        </div>
        <div className="gap-12 flex-col flex">
          <Card details={findService("Blockchain Development")} />
          <Card details={findService(`UI\UX Design`)} />
        </div>
      </div>
    </div>
  );
};

export default HomeOuerServiceDesktopView;
