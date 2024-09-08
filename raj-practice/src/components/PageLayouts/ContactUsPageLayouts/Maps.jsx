import { useState } from "react";

const Maptabs = [
  {
    title: "Adajan",
    value: "Adajan",
  },
  {
    title: "Yogichowk",
    value: "Yogichowk",
  },
];

const Maps = ({ Tabs }) => {
  const [mapActiveTab, setmapActiveTab] = useState("Adajan");

  const handlemapTabClick = (tabIndex) => {
    setmapActiveTab(tabIndex);
  };
  return (
    <div section className="container mx-auto mt-12 lg:mt-[100px] px-4">
      <div className="flex justify-center gap-10 mb-12">
        <Tabs
          activeTab={mapActiveTab}
          TabsTitle={Maptabs}
          handleTabClick={handlemapTabClick}
        />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.0331087237977!2d72.78525356961661!3d21.18689734923633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4bed5e6b8f%3A0xf19d7d336c62528e!2sEmpiric%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1690355122337!5m2!1sen!2sin"
        width="100%"
        height="450"
        className={`${mapActiveTab == "Adajan" ? "block" : "hidden"}`}
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5495787793607!2d72.88728747582908!3d21.21004478152621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2043e82c2f%3A0xaeb8dfc69357bb5c!2sEmpiric%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1690355021689!5m2!1sen!2sin"
        width="100%"
        height="450"
        className={`${mapActiveTab == "Yogichowk" ? "block" : "hidden"}`}
      ></iframe>
    </div>
  );
};

export default Maps;
