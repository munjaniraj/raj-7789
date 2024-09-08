import { Tabs } from "@/components/Tabs";
import dynamic from "next/dynamic";
import Head from "next/head"; 
import ContactUsDesktopBanner from "@/../public/assets/images/ContactUs/ContactUsBanner.png";
import { useRouter } from "next/router"; 
import FormAndInfo from "@/components/PageLayouts/ContactUsPageLayouts/FormAndInfo";

const Maps = dynamic(() =>
  import("@/components/PageLayouts/ContactUsPageLayouts/Maps")
);
// const FormAndInfo = dynamic(() =>
//   import("@/components/PageLayouts/ContactUsPageLayouts/FormAndInfo")
// ); 

// const ContactUsBanner = dynamic(() =>
//   import("@/components/Layouts/Banners/ContactUsBanner")
// );
// const Counter = dynamic(() => import("@/components/Layouts/Counter"));

const ContactUs = () => { 

  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Contact Dharma Infotech LLP - A Software Development Agency
        </title>
        <meta
          name="description"
          content="If you are looking for a reliable partner or services provider for your software, web, blockchain, mobile application, or game development, we can build it for you."
        />
        <meta
          name="keywords"
          content="Dharma Infotech LLP,
            Contact Dharma Infotech LLP,
            Contact Us,
            Contact Dharma"
        />
        <link
          rel="canonical"
          href={"https://dharmafotech.com/contact-us#contact_us_form"}
          key="canonical"
        />
        <meta
          property="og:title"
          content=" Contact Empiric Infotech LLP - A Software Development Agency"
        />
        <meta
          property="og:description"
          content="If you are looking for a reliable partner or services provider for your software, web, blockchain, mobile application, or game development, we can build it for you."
        />
        <meta property="og:image" content={ContactUsDesktopBanner.src} />
      </Head>

      {/* <ContactUsBanner  ContactUsDesktopBanner={ContactUsDesktopBanner}/> */}
      {/* <Counter /> */}

      <FormAndInfo Tabs={Tabs} router={router} />
      <Maps Tabs={Tabs} />
    </>
  );
};

export default ContactUs;
