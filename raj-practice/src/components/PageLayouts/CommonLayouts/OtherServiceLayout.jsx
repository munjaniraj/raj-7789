import Slider from "react-slick";
import { ourServices } from "@/constants/ourServicesData";

import { motion } from "framer-motion";
import Link from "next/link";

const OtherServiceLayout = ({ cardNotShowId }) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const leftVariants = {
    closed: { x: -50, opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring", damping: 40 } },
  };

  const rightVariants = {
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const cardVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring", damping: 40 } },
  };

  const mainVariants = {
    open: {
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="container mx-auto mt-12 lg:mt-[100px] px-4">
      <motion.div
        className="text-2xl lg:text-4xl mb-4 text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 10 },
        }}
        viewport={{ amount: 0.5, once: true }}
      >
        <h2 className="font-nunito font-bold">Other Services</h2>
        <span className="bg-primary rounded my-2 w-32 h-1" />
      </motion.div>
      <p className="text-lg lg:text-center lg:px-32 block lg:hidden">
        We provide comprehensive IT solutions to help businesses stay
        competitive and innovative in today digital world.
      </p>
      <motion.div
        className="mt-14 justify-between lg:flex hidden"
        initial="closed"
        whileInView="open"
        variants={mainVariants}
        viewport={{ amount: 0.5, once: true }}
      >
        <motion.div className="w-1/5 self-center" variants={leftVariants}>
          <div className="h-min py-10 px-5 border-2 border-primary/40 rounded-2xl">
            <p className="mb-3 text-xl font-semibold w-2/3">
              Other Services We Offer
            </p>
            <p className="text-lg">
              We provide comprehensive IT solutions to help businesses stay
              competitive and innovative in today digital world.
            </p>
          </div>
        </motion.div>
        <motion.div className="flex" variants={rightVariants}>
          {ourServices.map(
            (item, i) =>
              item.id !== cardNotShowId && (
                <motion.div
                  className={`lg:w-60 xl:w-[18rem] ${
                    !i == 0 && "-ml-[7.5rem]"
                  } gap-2 p-5 text-lg bg-white drop-shadow-primary rounded-2xl transform duration-200 group hover:z-10 hover:bg-primary`}
                  key={i}
                  variants={cardVariants}
                >
                  <Link href={item.link}>
                    <div className="flex flex-col group-hover:text-white text-gray-500">
                      <h4 className="text-2xl mb-5 font-semibold text-primary/40 group-hover:text-white">
                        {item.title}
                      </h4>
                      <p>We offer…</p>
                      <ul className="list-decimal mb-5 flex flex-col gap-2 ml-10 ">
                        {item.list.map((value, i) => (
                          <li key={i}>{value}</li>
                        ))}
                      </ul>
                      <p>{item.content}</p>
                    </div>
                  </Link>
                </motion.div>
              )
          )}
        </motion.div>
      </motion.div>
      <Slider {...settings} className="block lg:hidden mt-10">
        {ourServices.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className="w-full lg:w-1/4">
              <div className="mx-auto border-1 rounded-lg overflow-hidden border border-primary/40 shadow-md p-4">
                <div className="items-center text-lg gap-1 text-primary flex font-bold py-2">
                  {item.title}
                </div>
                <p>We offer…</p>
                <ul className="list-decimal mb-5 flex flex-col gap-2 ml-10 ">
                  {item.list.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
                <p className="mb-2">{item.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default OtherServiceLayout;
