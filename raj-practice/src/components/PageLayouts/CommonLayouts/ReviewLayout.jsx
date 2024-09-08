import google from "@/../public/assets/images/Review/google.png";
import clutch from "@/../public/assets/images/Review/clutch.png";
import goodfirms from "@/../public/assets/images/Review/goodfirms.png";
import upwordk from "@/../public/assets/images/Review/upwork.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { scaleAnimeVarient } from "../../../utils/animation.utils";
import Link from "next/link";
import upworktop from "@/../public/assets/images/Review/upworktop.svg";
import freelancertop from "@/../public/assets/images/Review/freelancertop.svg";

const Review = [
  {
    image: clutch,
    rating: "5.0",
    link: "https://clutch.co",
  },
  {
    image: upwordk,
    rating: "5.0",
    link: "https://www.upwork.com",
    top: upworktop,
  },
  {
    image: goodfirms,
    rating: "5.0",
    link: "https://www.freelancer.com",
    top: freelancertop,
  },
  {
    image: google,
    rating: "5.0",
    link: "https://www.google.com",
  },
];

const ReviewLayout = () => {
  const child1Variants = {
    closed: { x: 150, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const mainVariants = {
    open: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
    transitionEnd: {
      overflow: "unset",
    },
  };

  return (
    <div className="container mx-auto mt-12 lg:mt-[100px] px-4">
      <motion.div
        className="text-2xl lg:text-4xl text-center flex flex-col items-center mb-10"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3 }}
        variants={scaleAnimeVarient}
        viewport={{ amount: 0.3, once: true }}
      >
        <h5 className="font-nunito font-bold">Reviews</h5>
        <span className="bg-primary rounded my-2 w-20 h-1" />
      </motion.div>

      <motion.div
        className="flex-wrap justify-evenly items-center self-center flex"
        initial="closed"
        whileInView="open"
        variants={mainVariants}
        viewport={{ amount: 0.3, once: true }}
        style={{ overflow: "hidden" }}
      >
        {Review.map((value, index) => (
          <motion.div
            key={index}
            className="w-1/2 lg:w-1/4 p-2 lg:p-4"
            variants={child1Variants}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link
              href={value.link}
              target="_blank"
              rel="preload"
            >
              <div className="bg-white drop-shadow-primary py-2 py-lg-6 rounded-md">
                <div className="flex justify-center flex-col items-center relative">
                  <Image
                    src={value.image}
                    loading="eager"
                    alt="award"
                    className="w-48 lg:w-auto h-full"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ReviewLayout;
