import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { toastConfig } from "../../../utils/toast.utils";
import { SyncLoader } from "react-spinners";
import ReCAPTCHA from "react-google-recaptcha";
import Select from "react-select";
import { useRouter } from "next/router";
import { RECAPTCHA_SITE_KEY } from "@/constants/public_env";

const CareerForm = ({ jobtitle ,countryCode }) => {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const recaptchaRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [selectValue, setSelectValue] = useState();

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
      .required("File is required")
      .test("fileType", "Only PDF and DOC files are allowed", (value) => {
        return (
          value &&
          [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(value.type)
        );
      })
      .test("fileSize", "File size must be less than 10 MB", (value) => {
        if (value) {
          return value.size <= 10 * 1024 * 1024; // 10 MB in bytes
        }
        return true; // If no file is provided, it's considered valid
      }),
    lookingfor: yup.string().required("Please Select One Option"),
  });

  // const handleFormSubmit = (data, formactions) => {
  //   setIsLoading(true);

  //   const formData = new FormData();
  //   formData.append("subject", "Career inquiry");
  //   formData.append("name", data.name);
  //   formData.append("email", data.email);
  //   formData.append("phoneNumber", data.phoneNumber);
  //   formData.append("captchaToken", data.captchaToken);
  //   formData.append("lookingfor", data.lookingfor);
  //   formData.append("thumbnail_image", data.file);
  //   if (data.message) formData.append("message", data.message);

  //   if (jobtitle) {
  //     formData.append("title", jobtitle);
  //   }

  //   axios
  //     .post("/api/contact_form", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => {
  //       if (response.status == 200) {
  //         toast.success(response.data.message, toastConfig.success);
  //         formactions.resetForm();
  //         formactions.setFieldValue("file", "");
  //         if (fileInputRef.current) {
  //           fileInputRef.current.value = "";
  //         }
  //         recaptchaRef.current.reset();
  //         setIsLoading(false);
  //         router.push("/thank-you");
  //       }
  //     })
  //     .catch((error) => {
  //       toast.error("Something happent wrong", toastConfig.error);
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   const init = async () => {
  //     const { Select, initTE } = await import("tw-elements");
  //     initTE({ Select });
  //   };
  //   init();
  // }, []);

  return (
    <>
     
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          file: "",
          message: "",
          captchaToken: "",
          lookingfor: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          handleFormSubmit(values, actions);
        }}
      >
        {({ values, setFieldValue, handleBlur }) => (
          <Form className="mx-auto bg-slate-100 lg:bg-white lg:border lg:border-gray-600 p-4 lg:p-8 rounded-2xl">
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4">
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
              <div className="w-full md:w-1/2 px-2 mb-4">
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
              <div className="w-full md:w-1/2 px-2 mb-4">
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
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="file" className="block mb-1">
                  Upload Resume/ CV
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
              <div className="relative w-full px-2 mb-4">
                <label htmlFor="lookingfor" className="block mb-1">
                  I AM :
                </label>
                <Select
                  value={selectValue}
                  onChange={(e) => {
                    setSelectValue(e);
                    setFieldValue("lookingfor", e.value);
                  }}
                  onBlur={handleBlur}
                  inputId="lookingfor"
                  name="lookingfor"
                  options={[
                    {
                      value: "Software Developer",
                      label: "Software Developer",
                    },
                    { value: "Web Designer", label: "Web Designer" },
                    {
                      value: "Blockchain Developer",
                      label: "Blockchain Developer",
                    },
                    {
                      value: "Mobile App Developer",
                      label: "Mobile App Developer",
                    },
                    { value: "UI/UX Designer", label: "UI/UX Designer" },
                    { value: "SEO Executive", label: "SEO Executive" },
                    { value: "BDE/BDM", label: "BDE/BDM" },
                    { value: "Business Analyst", label: "Business Analyst" },
                    { value: "QA Engineer", label: "QA Engineer" },
                    { value: "Content writer", label: "Content writer" },
                    { value: "AI/ML Developer", label: "AI/ML Developer" },
                    { value: "HR Recruiter", label: "HR Recruiter" },
                  ]}
                />
                <ErrorMessage
                  name="lookingfor"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="w-full px-2 mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <Field
                  id="message"
                  name="message"
                  className="w-full bg-transparent resize-none rounded-lg p-2 border border-black/20 focus:outline-none"
                  rows="4"
                  placeholder="Message"
                  as="textarea"
                />
                <ErrorMessage
                  name="message"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="w-full px-2 mb-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(token) => setFieldValue("captchaToken", token)}
                />
                <ErrorMessage
                  name="captchaToken"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="text-lg px-2 mb-4">We will contact you soon.</div>
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
    </>
  );
};

export default CareerForm;
