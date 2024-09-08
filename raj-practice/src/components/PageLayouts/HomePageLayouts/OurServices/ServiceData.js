export const Services = [
  {
    videoSrc:
      "/assets/images/HomePage/OurServiceSection/software developmentt.gif",
    title: "Software Development",
    about:
      "Our custom software development services are designed to help businesses to achieve their goals and keep you ahead of the competition with scalable and effective software solutions.",
    link: "/services/software-development-agency",
  },
  {
    videoSrc: "/assets/images/HomePage/OurServiceSection/web developmentt.gif",
    title: "Web Development",
    about:
      "Want to make an effective online presence? We provide comprehensive web development solutions that include web design, front-end and back-end development, API ....",
    link: "/services/web-development-company",
  },
  {
    videoSrc:
      "/assets/images/HomePage/OurServiceSection/mobile app development.gif",
    title: "Mobile App Development",
    about:
      "Our application development services are designed to help businesses create customized mobile apps that meet their unique needs.We create high-quality applications using....",
    link: "/services/mobile-app-development-company",
  },
  {
    videoSrc: "/assets/images/HomePage/OurServiceSection/UI UX Designer.gif",
    title: `UI\UX Design`,
    about:
      "Want to enhance user experience and drive business growth? Our UI/UX design services are dedicated to creating stunning and user-centric design solutions. We offer...",
    link: "/services/ui-ux-design-services",
  },
  {
    videoSrc: "/assets/images/HomePage/OurServiceSection/Pair programming.gif",
    title: "Staff Augmentation",
    about:
      "We offer Staff Augmentation services to empower businesses with top-tier talent to seamlessly scale and conquer their technological challenges, fostering innovation and success....",
    link: "/services/staff-augmentation",
  },
  {
    videoSrc:
      "/assets/images/HomePage/OurServiceSection/blockchain development.gif",
    title: "Blockchain Development",
    about:
      "Looking to leverage the power of blockchain technology? Our blockchain development services are tailored to help businesses.Leverage the transformative potential with...",
    link: "/services/blockchain-development-company",
  },
];

export const findService = (service) => {
  return Services.find((item) => item.title == service);
};
