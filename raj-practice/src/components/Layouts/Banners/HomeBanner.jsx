import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HomeBanner = ({ Bannerpage }) => {
  return (
    <div className="relative text-white ">
      <Image
        src={Bannerpage.Desktop.image}
        alt="Banner Image"
        className="mx-auto md:block hidden"
        loading="eager"
        layout="responsive"
        width={1200}
        height={600}
      />
      <Image
        src={Bannerpage.Mobile.image}
        alt="Banner Image"
        className="mx-auto w-full md:hidden block"
        loading="eager"
        layout="responsive"
        width={1200}
        height={600}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
        <h2 className="text-sm ssm:text-base md:text-lg lg:text-xl xl:text-2xl capitalize">
          {Bannerpage.Desktop.title}
        </h2>
        <p className="ssm:text-2xl xsm:text-xsm md:text-4xl lg:text-5xl xl:text-7xl ssm:w-[21rem] xsm:w-[27.5rem] md:w-[31rem] lg:w-[42rem] xl:w-[63rem] m-4 font-nunito relative">
          We Deliver <span className="text-primary font-nunito">Services</span>{" "}
          That Make Our Clients Faces Happy
          <span className="flex justify-end -mt-3 xl:-mt-4">
            <Image
              src={Bannerpage.Smile.image}
              alt="Smile"
              className="mr-14 sm:-mr-8 w-16 lg:w-24 xl:w-auto"
              loading="eager"
              property
            />
          </span>
        </p>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-10">
          <Link
            href="https://calendly.com/"
            target="_blank"
            rel="preload"
          >
            <button className="px-5 pulseButton ssm:px-8 md:mt-0 mt-6 lg:px-10 xl:px-14 py-3 text-sm ssm:text-base md:text-lg font-semibold border-2 border-primary rounded-lg bg-primary text-white transform duration-300 ">
              {Bannerpage.Desktop.buttonName}
            </button>
          </Link>
          <TypeAnimation
            sequence={[
              "Software Development Services",
              1000,
              "Web Development Services",
              1000,
              "Blockchain Development Services",
              1000,
              "Mobile App Development Services",
              1000,
              "UI/UX Design Services",
              1000,
            ]}
            wrapper="h3"
            speed={10}
            repeat={Infinity}
            className="md:text-xl text-start lg:text-2xl xl:text-3xl after:text-primary md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
