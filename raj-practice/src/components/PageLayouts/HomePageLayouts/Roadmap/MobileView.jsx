import Image from "next/image";
import activeimage from "@/../public/Group 51405.svg";

const RoadMapMobileView = ({ DesRoadmap }) => {
  return (
    <div className="h-full w-full border-l-2 border-dashed border-black relative">
      <div className="bg-gradient-to-t from-white z-50 w-3 h-96 absolute bottom-0 -left-1" />
      {DesRoadmap.map((item, i) => (
        <div className="pb-8 flex flex-col gap-5" key={i}>
          <div className="text-lg flex -ml-3 font-bold tracking-wide">
            <Image src={activeimage} className="bg-white" alt="activeimage" />
            {item.title}
          </div>
          <Image
            className="w-44 self-center"
            src={item.image}
            alt="GIF Image"
            width={100}
            height={100}
            sizes="(max-width: 600px) 100vw, 50vw"
            srcSet={`${item.image} 1200w, ${item.image} 600w`}
          />
          <div className="flex justify-center px-5 text-xl">
            <p className="max-w-lg text-center">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadMapMobileView;
