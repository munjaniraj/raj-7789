import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { toastConfig } from "../../../utils/toast.utils";
import { SyncLoader } from "react-spinners";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { RECAPTCHA_SITE_KEY } from "@/constants/public_env";
import { countryCode1 } from "@/constants/countryCode";

const ServiceContactUsForm = ({ content }) => {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const recaptchaRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [ReCAPTCHA, setReCAPTCHA] = useState(null);

  useEffect(() => {
    const loadReCAPTCHA = async () => {
      const { default: ReCAPTCHA } = await import("react-google-recaptcha");
      setReCAPTCHA(ReCAPTCHA);
    };
    loadReCAPTCHA();
  }, []);

  const validationSchema = yup.object({
    name: yup
      .string()
      .max(25, "You are enter name over the limit")
      .required("Name is required"),
    email: yup
      .string()
      .matches(
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        "Please enter valid Email Address"
      )
      .required("Email is required"),
    phoneNumber: yup.string().required("Phone is required"),
    captchaToken: yup
      .string()
      .required("Please verify that you are not a robot."),
    file: yup
      .mixed()
      .test("fileSize", "File size must be less than 10 MB", (value) => {
        if (value) {
          return value.size <= 10 * 1024 * 1024; // 10 MB in bytes
        }
        return true; // If no file is provided, it's considered valid
      }),
  });

  const handleFormSubmit = (data, formactions) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("subject", content.inqury);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("captchaToken", data.captchaToken);
    if (data.project_description)
      formData.append("project_description", data.project_description);
    if (data.file) formData.append("thumbnail_image", data.file);

    axios
      .post("/api/contact_form", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          toast.success(response.data.message, toastConfig.success);
          formactions.resetForm();
          formactions.setFieldValue("file", "");
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          recaptchaRef.current.reset();
          setIsLoading(false);
          router.push("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.data.message, toastConfig.error);
        setIsLoading(false);
      });
  };

  const [countryCode, setCountryCode] = useState("");
  useEffect(() => {
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    function getCountryCodeFromTimezone(timezone) {
      
      return countryCode1[timezone] || 'Unknown';
    }

    const countryCode2 = getCountryCodeFromTimezone(localTimeZone);
    setCountryCode(countryCode2.toLowerCase());
  }, []);

  return ( 
 

    <div className="lg:bg-gray-50 " id="contact-form">
      <section className="md:container md:mx-auto mt-12 lg:mt-[100px] px-4 pt-24 pb-24" >
        <div className="lg:hidden block">
          <p className="text-2xl lg:text-4xl text-center flex flex-col items-center">
            <strong className="font-nunito">{content.title}</strong>
            <span className="bg-primary rounded my-2 w-32 h-1" />
          </p>
          <p className="text-lg text-center lg:px-32 my-4">{content.content}</p>
        </div>

        <div className="flex justify-evenly ">
          {!content.rtl && (
            <Image
              src={content.image}
              alt="Your Image"
              className="lg:block hidden"
            />
          )}

          <div className="lg:w-1/2 lg:p-6 lg:pt-0 self-center">
            <div className="lg:block hidden">
              <p className="text-primary font-semibold mb-5">{content.title}</p>
              <p className="max-w-lg text-2xl font-semibold tracking-wide mb-5">
                {content.content}
              </p>
            </div>

            <Formik
              initialValues={{
                name: "",
                email: "",
                phoneNumber: "",
                file: "",
                project_description: "",
                captchaToken: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                handleFormSubmit(values, actions);
              }}
            >
              {({ values, setFieldValue, handleBlur }) => (
                <Form className="mx-auto bg-slate-100 lg:bg-white lg:border lg:border-gray-400 p-4 lg:p-8 rounded-2xl">
                  <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-8">
                      <label htmlFor="name" className="block mb-1">
                        Your Name
                      </label>
                      <Field
                        id="name"
                        name="name"
                        className="w-full bg-transparent py-2 border-b border-black/20 focus:outline-none"
                        type="text"
                        placeholder="Your Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-8">
                      <label htmlFor="email" className="block mb-1">
                        Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        className="w-full bg-transparent py-2 border-b border-black/20 focus:outline-none"
                        type="text"
                        placeholder="Enter your Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-8 ">
                      <label htmlFor="input3" className="block mb-1">
                        Your Phone
                      </label>
                      <PhoneInput
                        country={countryCode || "us"}
                        inputProps={{ name: "phoneNumber", id: "phoneNumber" }}
                        inputClass="form-control-white"
                        onBlur={handleBlur}
                        onChange={(formatedNumber) => {
                          setFieldValue("phoneNumber", formatedNumber);
                        }}
                        value={values.phoneNumber}
                        className={"border-b border-gray-300"}
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="span"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-8">
                      <label htmlFor="file" className="block mb-1">
                        Upload File
                      </label>
                      <input
                        id="file"
                        name="file"
                        className="w-full bg-transparent py-2 border-b border-black/20 focus:outline-none"
                        type="file"
                        ref={fileInputRef}
                        onBlur={handleBlur}
                        onChange={async (e) => {
                          if (e.target.files[0]) {
                            setFieldValue("file", e.target.files[0]);
                          }
                        }}
                      />
                      <ErrorMessage
                        name="file"
                        component="span"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className="w-full px-2 mb-4">
                      <label
                        htmlFor="project_description"
                        className="block mb-2"
                      >
                        Project
                      </label>
                      <Field
                        id="project_description"
                        name="project_description"
                        className="w-full bg-transparent resize-none rounded-lg p-2 border border-black/20 focus:outline-none"
                        rows="4"
                        placeholder="Project Description"
                        as="textarea"
                      />
                      <ErrorMessage
                        name="project_description"
                        component="span"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className="w-full px-2 mb-4">
                      {ReCAPTCHA && (
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={RECAPTCHA_SITE_KEY}
                          onChange={(token) =>
                            setFieldValue("captchaToken", token)
                          }
                        />
                      )}
                      <ErrorMessage
                        name="captchaToken"
                        component="span"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                  <button
                    className={`text-primary border-2 border-primary font-bold py-2 px-8 rounded ${
                      !isLoading && "hover:bg-primary hover:text-white"
                    } transform duration-200`}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <SyncLoader
                        color="#F8931F"
                        size={10}
                        margin={3}
                        speedMultiplier={0.5}
                      />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {content.rtl && (
            <Image
              src={content.image}
              alt="Your Image"
              className="lg:block hidden text-center "
            />
          )}
        </div>
      </section>
    </div>
   

  );
};

export default ServiceContactUsForm;
