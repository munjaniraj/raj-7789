import { useEffect, useState } from "react";
import CareerForm from "./CareerForm";
import { countryCode1 } from "@/constants/countryCode";

const FormAndInfo = ({ router }) => {
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(
        window.location.hash.substring(1)
      );
      if (element) {
        // Temporarily disable smooth scrolling
        const originalScrollBehavior =
          document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
        element.scrollIntoView();
        // Re-enable smooth scrolling
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      }
    }
  }, []);

  useEffect(() => {
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    function getCountryCodeFromTimezone(timezone) {
      return countryCode1[timezone] || "Unknown";
    }
    const countryCode2 = getCountryCodeFromTimezone(localTimeZone);
    setCountryCode(countryCode2.toLowerCase());
  }, []);

  return (
    <span id="career_form">
      <div
        section
        className="container mx-auto mt-12 lg:pt-[100px] px-4"
      >
        <div className="flex flex-col gap-10 lg:gap-10 lg:flex-row">
          <div className="flex-1 gap-5 lg:bg-white lg:drop-shadow-primary lg:p-12 rounded-2xl">
            {/* <!--Tabs content--> */}
            <div className="mb-6">
              <div className="opacity-100 transition-opacity duration-150 ease-linear">
                <CareerForm
                  jobtitle={router?.query?.title}
                  countryCode={countryCode}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default FormAndInfo;
