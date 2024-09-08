import Link from "next/link";
import { motion } from "framer-motion";
import { scaleAnimeVarient } from "../utils/animation.utils";
// import { mysqlqueryPromise } from "../configs/dbConfig";

import { Bannerpage } from "@/constants/Homepage/Bannerpage";

import {
  TabPanelButton,
  TabPanelButtonLinkquerys,
  TabPanelValue,
  Tabstitle,
} from "@/constants/Technologies";
import { Roadmapdata } from "@/components/PageLayouts/HomePageLayouts/Roadmap/Roadmapdata";
import { ChooseUsList } from "@/components/PageLayouts/HomePageLayouts/ChooseUs/ChooseUsData";
import dynamic from "next/dynamic";


const HomeBanner = dynamic(() =>
  import("@/components/Layouts/Banners/HomeBanner")
);

const ReviewLayout = dynamic(() =>
  import("@/components/PageLayouts/CommonLayouts/ReviewLayout")
);
const HomeOuerServiceDesktopView = dynamic(() =>
  import("@/components/PageLayouts/HomePageLayouts/OurServices/DesktopView")
);
const HomeOurServiceMobileView = dynamic(() =>
  import("@/components/PageLayouts/HomePageLayouts/OurServices/MobileView")
);
;
const Technologies = dynamic(() =>
  import("@/components/PageLayouts/HomePageLayouts/Technologies")
);

const RoadmapDesktopView = dynamic(() =>
  import("@/components/PageLayouts/HomePageLayouts/Roadmap/DesktopView")
);
const RoadMapMobileView = dynamic(() =>
  import("@/components/PageLayouts/HomePageLayouts/Roadmap/MobileView")
);

const DesktopChooseUs = dynamic(() =>
  import("@/components/PageLayouts/HomePageLayouts/ChooseUs/Desktop")
);
export default function Home(props) {
  
  return (
    <>
      <HomeBanner Bannerpage={Bannerpage} />

      <section className="container mx-auto mt-12 lg:mt-[100px] px-4">
        <div className="text-3xl lg:text-4xl mb-4 text-center flex flex-col items-center">
          <motion.h1
            className="font-nunito font-bold"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={scaleAnimeVarient}
            viewport={{ amount: 0.3, once: true }}
          >
            Web and Mobile App Development Services
          </motion.h1>
          <span className="bg-primary rounded my-2 w-32 h-1" />
        </div>
        <motion.p
          className="text-xl text-start lg:text-center "
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          variants={scaleAnimeVarient}
          viewport={{ amount: 0.3, once: true }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </motion.p>

        <HomeOuerServiceDesktopView HideShow="lg:block hidden" />

        <HomeOurServiceMobileView HideShow="block lg:hidden" />
      </section>

      <section className="container mx-auto mt-12 lg:mt-[100px] px-4">
        <div className="text-3xl lg:text-4xl mb-10 text-center flex flex-col items-center">
          <motion.h2
            className="font-nunito font-bold"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={scaleAnimeVarient}
            viewport={{ amount: 0.3, once: true }}
          >
            Technologies and Platforms We Use
          </motion.h2>
          <span className="bg-primary rounded my-2 w-32 h-1" />
        </div>
        <Technologies
          Technologie={{
            TabPanelButton,
            TabPanelButtonLinkquerys,
            TabPanelValue,
            Tabstitle,
          }}
        />
      </section>

      <section className="mt-12 lg:mt-20 px-4">
        <div className="text-3xl lg:text-4xl mb-4 text-center flex flex-col items-center">
          <motion.h2
            className="font-nunito font-bold"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={scaleAnimeVarient}
            viewport={{ amount: 0.3, once: true }}
          >
            Roadmap To Your Success
          </motion.h2>
          <span className="bg-primary rounded my-2 w-32 h-1" />
        </div>

        <RoadmapDesktopView DesRoadmap={Roadmapdata} />
        <div className="pl-2 mt-10 block lg:hidden">
          <RoadMapMobileView DesRoadmap={Roadmapdata} />
        </div>

        <div className="pt-8 text-center">
          <Link href={"/contact-us#contact_us_form"} rel="preload">
            <button className="border-2 hover:bg-primary bg-primary text-white hover:text-white transform duration-300 border-primary py-2 lg:py-3 px-8 rounded  font-bold tracking-wide lg:text-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto mt-12 lg:mt-[100px] px-4 relative">
        <div className="text-3xl lg:text-4xl mb-4 text-center flex flex-col items-center">
          <motion.h2
            className="font-nunito font-bold"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={scaleAnimeVarient}
            viewport={{ amount: 0.3, once: true }}
          >
            Why Choose Us for Web and Mobile App Development Needs?
          </motion.h2>
          <span className="bg-primary rounded my-2 w-32 h-1" />
        </div>
        <motion.p
          className="text-xl text-start lg:text-center lg:px-4"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          variants={scaleAnimeVarient}
          viewport={{ amount: 0.3, once: true }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </motion.p>

        <DesktopChooseUs ChooseUsList={ChooseUsList} />
      </section>

      <ReviewLayout />
    </>
  );
}

export async function getServerSideProps() {
  try {
    // const getServicesQuery = `SELECT * FROM testimonial ORDER BY id DESC`;
    // const result = await mysqlqueryPromise(getServicesQuery);
    return {
      props: {
        // testimonials: JSON.parse(JSON.stringify(result)),
        // HomeBanner: JSON.parse(JSON.stringify(Bannerpage)),
        // desRoadmapdata: JSON.parse(JSON.stringify(Roadmapdata)),
        // ChooseUsData: JSON.parse(JSON.stringify(ChooseUsList)),
        // Portfolio: JSON.parse(JSON.stringify(PortfolioData)),
        // Technologie: JSON.parse(
        //   JSON.stringify({
        //     TabPanelButton,
        //     TabPanelButtonLinkquerys,
        //     TabPanelValue,
        //     Tabstitle,
        //   })
        // ),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
