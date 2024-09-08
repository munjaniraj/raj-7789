import { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Services } from "./ServiceData";
import Image from "next/image";


const HomeOurServiceMobileView = ({ HideShow }) => {
  const settings = {
    dotsClass: "home-ourservice-slick-dots slick-dots",
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={HideShow}>
      <Slider
        {...settings}
        className="bg-white rounded-2xl drop-shadow-primary p-6 items-center mt-10"
      >
        {Services.map((serviceItem, i) => (
          <Fragment key={i}>
            <div className="flex flex-col items-center justify-center h-40">
              <Image
                className="w-48"
                src={serviceItem.videoSrc}
                alt="GIF Image"
                width={500}
                height={500} 
                sizes="(max-width: 600px) 100vw, 50vw"
                srcSet={`${serviceItem.videoSrc} 1200w, ${serviceItem.videoSrc} 600w`}
              />
            </div>
            <p className="text-2xl font-bold text-center">
              {serviceItem.title}
            </p>
            <p className="text-xl mt-5 mb-1">{serviceItem.about}</p>
            <Link
              href={serviceItem.link}
              className="text-xl text-primary font-semibold mt-5 border-b-2 border-b-primary" 
              rel="preload"
            >
              Explore {serviceItem.title}
            </Link>
          </Fragment>
        ))}
      </Slider>
      <div className="bg-primary tracking-wide rounded-2xl drop-shadow-primary group hover:bg-white py-10 items-center gap-5 flex justify-center flex-col mt-16">
        <p className="text-xl font-bold text-white/50">
          Don’t know what to choose?
        </p>
        <p className="text-xl group-hover:text-primary font-bold text-white">
          Drop us a line.
        </p>
        <Link
          href={"/contact-us#contact_us_form"} 
          rel="preload"
          className="text-lg text-white border-2 group-hover:border-primary group-hover:bg-primary border-white rounded py-3 px-12 font-semibold group-hover:text-white"
        >
          Boost Your Business
        </Link>
      </div>
    </div>
  );
};

export default HomeOurServiceMobileView;
