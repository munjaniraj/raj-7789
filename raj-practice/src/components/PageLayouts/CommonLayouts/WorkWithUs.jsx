import Image from "next/image";
import Marquee from "react-fast-marquee";

const WorkWithUs = ({ BlogWorkWithUs }) => {
  return (
    <div className="container mx-auto mt-12 px-4 lg:mt-[100px]">
      <div className="text-3xl lg:text-4xl mb-4 text-center flex flex-col items-center">
        <h2 className="max-w-xs lg:max-w-max font-bold font-nunito">
          {BlogWorkWithUs.title}
        </h2>
        <span className="bg-primary rounded my-3 w-28 h-1" />
      </div>
      <p className="text-xl text-start mb-10 lg:text-center">
        {BlogWorkWithUs.description}
      </p>
      <div className="flex mb-4">
        <Marquee
          autoFill={true}
          className="flex justify-between gap-5 text-center"
        >
          <div className="grid grid-cols-2">
            <div className="p-1">
              <Image
                alt="gallery"
                className="block h-full rounded-2xl object-cover object-center"
                src={BlogWorkWithUs.image1}
              />
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className=" p-1">
                <Image
                  alt="gallery"
                  className="block rounded-2xl object-cover object-center"
                  src={BlogWorkWithUs.image2}
                />
              </div>
              <div className="p-1">
                <Image
                  alt="gallery"
                  className="block rounded-2xl object-cover object-center"
                  src={BlogWorkWithUs.image3}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-1">
              <Image
                alt="gallery"
                className="block h-full rounded-2xl object-cover object-center"
                src={BlogWorkWithUs.image4}
              />
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="p-1">
                <Image
                  alt="gallery"
                  className="block rounded-2xl object-cover object-center"
                  src={BlogWorkWithUs.image5}
                />
              </div>
              <div className="p-1">
                <Image
                  alt="gallery"
                  className="block rounded-2xl object-cover object-center"
                  src={BlogWorkWithUs.image6}
                />
              </div>
            </div>
          </div>
        </Marquee>
      </div>
      <div className="flex">
        <Marquee
          autoFill={true}
          className="flex justify-between gap-5 text-center"
          direction="rtl"
        >
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-between items-center">
              <div className=" p-1">
                <Image
                  alt="gallery"
                  className="block rounded-2xl object-cover object-center"
                  src={BlogWorkWithUs.image7}
                />
              </div>
              <div className="p-1">
                <Image
                  alt="gallery"
                  className="block rounded-2xl object-cover object-center"
                  src={BlogWorkWithUs.image8}
                />
              </div>
            </div>
            <div className="p-1">
              <Image
                alt="gallery"
                className="block h-full rounded-2xl object-cover object-center"
                src={BlogWorkWithUs.image9}
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-between items-center">
              <div className="p-1">
                <Image
                  alt="gallery"
                  className="block rounded-2xl object-cover object-center"
                  src={BlogWorkWithUs.image10}
                />
              </div>
              <div className="p-1">
                <Image
                  alt="gallery"
                  className="block rounded-2xl object-cover object-center"
                  src={BlogWorkWithUs.image11}
                />
              </div>
            </div>
            <div className="p-1">
              <Image
                alt="gallery"
                className="block h-full rounded-2xl object-cover object-center"
                src={BlogWorkWithUs.image12}
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default WorkWithUs;
