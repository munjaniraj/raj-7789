import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
// import useScrollRestoration from "@/components/useScrollRestoration";
const CustomToastContainer = dynamic(() =>
  import("@/components/CustomToastContainer")
);
const Layout = dynamic(() => import("@/components/Layouts"));

export default function App({ Component, pageProps }) {
  // useScrollRestoration();

  // Variables
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <title>Custom Web and Mobile App Development Services USA</title>
        <meta
          name="description"
          content="Looking for a custom software development agency? Transform your ideas into reality with our expert custom web and mobile app development services."
        />
        <meta
          name="keywords"
          content="Custom software Development Services,
          Custom software Development agency,
          Custom software Development Agency,
          Custom Web Development Company,
          Custom Web Development Agency,
          Custom Web Development Services,
          Mobile App Development Services,
          Mobile App Development Company,
          Mobile App Development Agency"
        />
        <link
          rel="canonical"
          href={"https://dharmainfotech.com"}
          key="canonical"
        />
      </Head>

      <AnimatePresence mode="wait">
        {getLayout(<Component {...pageProps} />)}
      </AnimatePresence>
      <CustomToastContainer />
    </>
  );
}
