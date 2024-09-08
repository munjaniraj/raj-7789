import { Fragment } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { scaleAnimeVarient } from "../../../../utils/animation.utils";

// Custom previous arrow component
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} lg:block hidden before:text-primary before:content-['←'] before:text-5xl z-50 left-[50px]`}
      id="asd"
      onClick={onClick}
    />
  );
};

// Custom previous arrow component
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} lg:block hidden before:text-primary before:content-['→'] before:text-5xl z-50 right-[70px]`}
      id="asd"
      onClick={onClick}
    />
  );
};

const ClientTestimonials = ({ testimonials }) => {
  const settings = {
    dotsClass: "client-testimonials-slick-dots slick-dots",
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      {/* Desktop View */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={scaleAnimeVarient}
        viewport={{ amount: 0.5, once: true }}
      >
        <Slider
          {...settings}
          className="bg-white rounded-2xl drop-shadow-primary lg:block hidden"
        >
          {testimonials.map((client, i) => (
            <Fragment key={i}>
              <div className="flex gap-7 items-center">
                <img
                  src={`/api/image${client.desktopImage}`}
                  alt="clientimage"
                  className="rounded-l-2xl w-1/2"
                  width="auto"
                />
                <div className="flex flex-col">
                  <strong className="text-3xl mb-5">{client.clientName}</strong>
                  <p className="text-2xl mb-7">{client.city}</p>
                  <p className="text-xl max-w-md">{client.description}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </Slider>
      </motion.div>
      {/* Mobile View */}
      <Slider
        {...settings}
        className="bg-white rounded-2xl drop-shadow-primary block lg:hidden"
      >
        {testimonials.map((client, i) => (
          <Fragment key={i}>
            <div className="flex flex-col justify-between items-center p-9 gap-10">
              <div id="images" className="relative">
                <img
                  src={`/api/image${client.mobileImage}`}
                  className="rounded-full shadow-lg w-28"
                  alt="ClientMobileImage"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="max-w-md mb-5">{client.description}</p>
                <strong className="text-xl">{client.clientName}</strong>
                <p className="text-lg mb-5">{client.city}</p>
              </div>
            </div>
          </Fragment>
        ))}
      </Slider>
    </>
  );
};

export default ClientTestimonials;
