import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

import { motion } from "framer-motion";

const OurWebDevelopmentServices = ({ content }) => {
  const settings = {
    dotsClass: "client-testimonials-slick-dots slick-dots",
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="container mx-auto mt-12 lg:mt-[100px] px-4">
      <div className="flex flex-col lg:gap-5 lg:grid lg:grid-cols-2">
        <div
          className="col-span-1 h-fit lg:self-start self-center lg:sticky lg:top-32"
          id="left"
        >
          <motion.div>
            <div className="text-2xl lg:text-4xl flex flex-col mb-4 lg:mb-12 lg:items-start items-center lg:text-start text-center">
              <h2 className="font-nunito font-bold">{content.title}</h2>
              <span className="bg-primary rounded my-2 w-32 h-1" />
            </div>
            <div className="flex flex-col gap-4 lg:gap-8 text-lg">
              {content.content.map((value, i) => (
                <p
                  key={i}
                  className="opacity-70"
                  dangerouslySetInnerHTML={{
                    __html: value,
                  }}
                />
              ))}
            </div>
            <div className="lg:block hidden w-full text-center mt-8 text-primary">
              <Link href="#contact-form" >
                <button className="px-7 py-3 border-2 text-center font-bold bg-primary text-white border-primary rounded hover:bg-primary hover:text-white transform duration-300">
                  Submit Your Requirements
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Desktop view */}
        <motion.div className="lg:block hidden" id="right">
          {content.cardContent.map((item, index) => (
            <div
              className="flex drop-shadow-primary bg-white mb-4 rounded-xl"
              key={index}
            >
              <div className="p-8 rounded-lg">
                <div className="flex items-center">
                  <div className=" flex justify-center">
                    <Image
                      src={item.image}
                      alt="Image"
                      className="border-2 border-primary/60 rounded-lg p-2"
                    />
                  </div>
                  <h3 className="ml-5 text-2xl font-semibold capitalize font-nunito">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-end py-2">
                  <p
                    className="text-lg opacity-70"
                    dangerouslySetInnerHTML={{
                      __html: item.content,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile View */}
        <Slider
          {...settings}
          className="block lg:hidden mt-10 drop-shadow-primary rounded-xl bg-white"
        >
          {content.cardContent.map((item, index) => (
            <div className="flex  w-full lg:m-6 my-6" key={index}>
              <div className="p-8 rounded-lg">
                <div className="flex items-center">
                  <div className="flex justify-center">
                    <Image
                      src={item.image}
                      alt="Image"
                      className="border-2 w-20 border-primary/60 rounded-lg p-2"
                    />
                  </div>
                  <p className="ml-4 text-xl font-semibold capitalize font-nunito">
                    {item.title}
                  </p>
                </div>
                <div className="flex justify-end py-2">
                  <p
                    className="lg:w-3/4 opacity-70"
                    dangerouslySetInnerHTML={{
                      __html: item.content,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="w-full text-center mt-8 text-primary block lg:hidden">
          <Link href="#contact-form">
            <button className="px-10 tracking-wide py-3 border-2 text-center font-bold border-primary rounded hover:bg-primary hover:text-white transform duration-300">
            Submit Your Requirements
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurWebDevelopmentServices;
