import Image from "next/image";
import Award1 from "@/public/assets/images/HomePage/Awards/Award1.svg";
import Award2 from "@/public/assets/images/HomePage/Awards/Award2.svg";
import Award3 from "@/public/assets/images/HomePage/Awards/Award3.svg";
import Award4 from "@/public/assets/images/HomePage/Awards/Award4.svg";
import Award5 from "@/public/assets/images/HomePage/Awards/Award5.svg";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { scaleAnimeVarient } from "../../../../utils/animation.utils";

const imageUrls = [Award1, Award2, Award3, Award4, Award5];

const AwardsRecognition = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      variants={scaleAnimeVarient}
      viewport={{ amount: 0.8, once: true }}
    >
      <Marquee autoFill={true} gradient>
        {imageUrls.map((value, i) => (
          <Image src={value} key={i} alt="award" className="mx-5 w-40 h-40" />
        ))}
      </Marquee>
    </motion.div>
  );
};

export default AwardsRecognition;
