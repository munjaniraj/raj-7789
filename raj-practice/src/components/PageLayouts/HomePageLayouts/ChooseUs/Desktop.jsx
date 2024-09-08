import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";

const DesktopChooseUs = ({ChooseUsList}) => {
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
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  const settings = {
    dotsClass: "client-testimonials-slick-dots slick-dots",
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <motion.div
        className="lg:flex flex-wrap justify-center items-center text-center mt-14 hidden"
        initial="closed"
        whileInView="open"
        variants={mainVariants}
        viewport={{ amount: 0.5, once: true }}
      >
        {ChooseUsList.map((item, i) => (
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
            variants={child1Variants}
            transition={{ duration: 0.3 }}
            key={i}
          >
            <div className="p-6 pt-10 m-3 border border-primary/50 rounded-lg">
              <div className="relative">
                <p className="text-7xl font-bold text-primary/10 absolute -top-8 right-0 left-0">
                  0{i + 1}
                </p>
                <Image src={item.image} className="mx-auto " alt={item.title} />
              </div>

              <h4 className="font-semibold tracking-wide mt-3">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Slider {...settings} className="block lg:hidden">
        {ChooseUsList.map((item, i) => (
          <div
            className="w-full flex justify-center items-center text-center"
            key={i}
          >
            <div className="p-6 pt-10 m-3 border border-primary/50 rounded-lg">
              <div className="relative">
                <p className="text-7xl font-bold text-primary/10 absolute -top-8 right-0 left-0">
                  0{i + 1}
                </p>
                <Image src={item.image} className="mx-auto" alt={item.title} />
              </div>

              <p className="font-semibold tracking-wide mt-3">{item.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default DesktopChooseUs;
