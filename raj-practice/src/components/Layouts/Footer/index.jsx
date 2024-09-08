import Image from "next/image";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Twitter from "@/../public/assets/images/Socials/Twitter.svg";
import Facebook from "@/../public/assets/images/Socials/Facebook.svg";
import Instagram from "@/../public/assets/images/Socials/Instagram.svg";
import Linkedin from "@/../public/assets/images/Socials/Linkedin.svg";
import behance from "@/../public/assets/images/Socials/behance.svg";
import dribbble from "@/../public/assets/images/Socials/dribbble.svg";
import ServiceFooter from "@/components/Navigation/Footer/Service";
import HireFooter from "@/components/Navigation/Footer/Hire";
import Link from "next/link";
import footerForBusiness from "@/../public/assets/images/footerForBusiness.svg";
import footerForJob from "@/../public/assets/images/footerForJob.svg";
import topClutchMetaverse from "@/../public/assets/images/Socials/top_clutch.co_metaverse_development_company_india_2024.svg";
import topClutchSoftware from "@/../public/assets/images/Socials/top_clutch.co_software_developers_utilities_india.svg";
import AboutFooter from "@/components/Navigation/Footer/About";

const Footer = () => {
  const [isSubNavOpen, setIsSubNavOpen] = useState({
    service: false,
    hire: false,
    about: false,
  });

  const handleItemClick = (key) => {
    setIsSubNavOpen((prevSubNavOpen) => ({
      ...Object.fromEntries(Object.keys(prevSubNavOpen).map((k) => [k, false])),
      [key]: !prevSubNavOpen[key],
    }));
  };

  return (
    <div className="bg-MobileFooterBg md:bg-FooterBg w-full px-4 text-white tracking-wide bg-no-repeat bg-cover mt-12 footer">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2">
          <ServiceFooter
            isSubNavOpen={isSubNavOpen}
            handleItemClick={handleItemClick}
          />

          <HireFooter
            isSubNavOpen={isSubNavOpen}
            handleItemClick={handleItemClick}
          />

          <AboutFooter
            isSubNavOpen={isSubNavOpen}
            handleItemClick={handleItemClick}
          />

       

          <div className="mt-12">
            <strong className="text-primary text-xl border-b-2 border-primary pb-4">
              Contact Us
            </strong>
            <ul className="text-lg mt-8">
              <li className="my-5 text-[#8E8E8E] font-bold tracking-wider">
                Business Query
              </li>
              <Link
                href="https://wa.me"
                className="my-5 flex items-center gap-2 "
              >
                <BsWhatsapp />
                +91 0000000000
              </Link>
              <Link
                href={"mailto:inquire@test.com"}
                className="my-5 flex items-center gap-2 "
              >
                <MdMail />
                inquire@test.com
              </Link>
              <li className="my-5 text-[#8E8E8E] font-bold tracking-wider">
                HR & Employment Verification
              </li>
              <Link
                href="https://wa.me"
                className="my-5 flex items-center gap-2 "
              >
                <BsWhatsapp />
                +91 00000000
              </Link>
              <Link
                href={"mailto:career@test.com"}
                className="my-5 flex items-center gap-2"
              >
                <MdMail />
                career@test.com
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center relative md:mt-0 mt-8">
          <div className="md:block hidden md:w-2/4 lg:w-3/4 xl:w-4/5 h-px bg-white absolute top-1/2 left-0" />
          <div className="flex md:w-auto w-full justify-center md:justify-end z-10 md:self-end">
            <div className="relative md:w-auto w-full flex">
              <Image
                src={footerForBusiness}
                className="absolute right-2 -top-3"
                alt="for business"
              />
              <Link
                href={"/contact-us#contact_us_form"}
                className="md:w-auto w-full text-center bg-primary text-white py-3 px-3 md:py-4 md:px-10 rounded-md mr-2"
              >
                <p className="font-bold">Contact Us</p>
              </Link>
            </div>
            <div className="relative md:w-auto w-full flex">
              <Image
                src={footerForJob}
                alt="for job"
                className="absolute right-0 -top-3"
              />
              <Link
                href={"/contact-us#career_form"}
                className="md:w-auto w-full text-center bg-primary text-white py-3 px-3 md:py-4 md:px-10 rounded-md ml-2"
              >
                <p className="font-bold">Apply Here</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:grid grid-cols-2 lg:grid-cols-4 mb-10 lg:flex lg:justify-between">
          <div className="mt-12 md:mr-4">
            <strong className="text-primary text-xl border-b-2 border-primary pb-4">
              Address
            </strong>
            <Link href="https://goo.gl/maps" target="_blank">
              <p className="text-lg md:w-60 mt-8">
               test
              </p>
            </Link>
          </div>
          

          <div className="mt-12 justify-center sm:grid grid-cols-2 place-content-center lg:-ml-7 gap-8  hidden">
            <Link
              href="https://clutch.co"
              target="_blank"
            >
              <Image
                src={topClutchSoftware}
                alt="Top Clutch Software Developers Utilities India"
                className="w-auto "
              />
            </Link>
            <Link
              href="https://clutch.co"
              target="_blank"
            >
              <Image
                src={topClutchMetaverse}
                alt="Top Clutch Metaverse Development Company India 2023"
                className="w-auto"
              />
            </Link>
          </div>
          <div className="mt-12 md:justify-self-end">
            <strong className="text-primary text-xl border-b-2 border-primary pb-4">
              Contact With Us
            </strong>
            <div className="text-lg mt-8 flex items-center gap-6">
              <Link
                href="https://www.linkedin.com"
                target="_blank"
              >
                <Image src={Linkedin} alt="Linkedin" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
              >
                <Image src={Instagram} alt="Instagram" />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
              >
                <Image src={Facebook} alt="Facebook" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Image src={Twitter} alt="Twitter" />
              </Link>
              <Link
                href="https://www.behance.net"
                target="_blank"
              >
                <Image src={behance} alt="behance" />
              </Link>
              <Link
                href="https://dribbble.com"
                target="_blank"
              >
                <Image src={dribbble} alt="dribbble" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-white" />
        <div className="lg:flex lg:justify-between">
          <div className="mt-6 pb-10 text-center sm:text-[16px] text-[10px]">
            Copyright © 2024. All Rights Reserved by
            <span className="ml-1 text-primary">Dharma Infotech</span>
          </div>
          <div className="lg:mt-6 pb-10 sm:flex hidden items-center justify-center gap-1 ">
            <Link href="/privacy-policy">
              <p className="hover:text-primary text-[#b8b7b7]">
                Privacy Policy
              </p>
            </Link>
            <span className="h-4 border-r"></span>
            <Link href="/sitemap">
              <p className="hover:text-primary text-[#b8b7b7]">Sitemap</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
