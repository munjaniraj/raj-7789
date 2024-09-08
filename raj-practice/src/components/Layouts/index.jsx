import Header from "./Header";
import Footer from "./Footer";


// import { useRef } from "react";
// import { useRouter } from "next/router";

const Layout = ({ children }) => {
  //   const containerRef = useRef(null);
  //   const { asPath, route } = useRouter();

  return (
    <>
      <Header />
      {/* <Banner />
          <Counter /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
