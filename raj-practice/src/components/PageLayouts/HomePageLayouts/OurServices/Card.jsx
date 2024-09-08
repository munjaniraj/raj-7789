import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { scaleAnimeVarient } from "../../../../utils/animation.utils";
import Link from "next/link";
import Image from "next/image";

export const Card = ({ details }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl drop-shadow-primary group  transform duration-500 p-6 items-center gap-5 flex justify-center flex-col"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      variants={scaleAnimeVarient}
      viewport={{ amount: 0.5, once: true }}
    >
      <div className="flex justify-center items-center h-40">
        <Image
          className="w-48 self-center"
          src={details.videoSrc}
          alt="Image"
          width={600}
          height={600}
        />
      </div>
      <h2 className="text-2xl font-bold ">{details.title}</h2>
      <p className="text-xl ">{details.about}</p>
      <motion.div
        initial="hidden"
        whileHover="visible"
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { x: 0 },
          visible: { x: 10 },
        }}
      >
        <Link
          href={details.link}
          rel="preload"
          className="text-xl text-primary font-semibold  flex gap-1 items-center"
        >
          Explore {details.title}
          <BsArrowRight />
        </Link>
      </motion.div>
    </motion.div>
  );
};
