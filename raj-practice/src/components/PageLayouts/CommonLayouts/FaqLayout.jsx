import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { scaleAnimeVarient } from "../../../utils/animation.utils";
import dynamic from "next/dynamic";
const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});
const FaqLayout = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const markdownRef = useRef();
  return (
    <div className="container mx-auto mt-12 lg:mt-[100px] px-4">
      <motion.div
        className="text-2xl lg:text-4xl text-center flex flex-col items-center mb-10"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={scaleAnimeVarient}
        viewport={{ amount: 0.5, once: true }}
      >
        <h2 className="font-nunito font-bold capitalize">
          Frequently Asked Questions (FAQs)
        </h2>
        <span className="bg-primary rounded my-2 w-32 h-1" />
      </motion.div>

      {faqs &&
        faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              className="flex flex-col  border-b border-black/20"
              key={index}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 10 },
              }}
              viewport={{ amount: 0.5, once: true }}
            >
              <div
                className={`flex items-center justify-between p-4 cursor-pointer`}
                onClick={() => toggleItem(index)}
              >
                <p className="text-xl">{faq.question}</p>
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={isOpen ? "minus" : "plus"}
                    initial={{
                      rotate: isOpen ? -90 : 90,
                    }}
                    animate={{
                      zIndex: 1,
                      rotate: 0,
                      transition: {
                        type: "tween",
                        duration: 0.15,
                        ease: "circOut",
                      },
                    }}
                    exit={{
                      zIndex: 0,
                      rotate: isOpen ? -90 : 90,
                      transition: {
                        type: "tween",
                        duration: 0.15,
                        ease: "circIn",
                      },
                    }}
                  >
                    {!isOpen ? (
                      <PiPlusBold className="text-primary text-xl" />
                    ) : (
                      <PiMinusBold className="text-primary text-xl" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.4,
                        },
                        opacity: {
                          duration: 0.25,
                          delay: 0.15,
                        },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.4,
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      },
                    }}
                    key="test"
                    className="font-light"
                  >
                    {typeof faq.answer == "string" ? (
                      <MarkdownPreview
                        ref={markdownRef}
                        className="ml-4 text-[16px] text-[#000000de] leading-7	mt-2 mb-2 "
                        source={faq.answer}
                        onChange={() => generateContentArray()}
                        rehypeRewrite={(node, index, parent) => {
                          if (
                            node.tagName === "a" &&
                            parent &&
                            /^h(1|2|3|4|5|6)/.test(parent.tagName)
                          ) {
                            parent.children = parent.children.slice(1);
                          }
                        }}
                      />
                    ) : (
                      <div className="p-4 pt-0 flex flex-col gap-2 text-lg opacity-70">
                        {faq.answer}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

      <div className="w-full text-center mt-8 text-primary">
        <Link href="/faqs">
          <button className="border-2 bg-primary text-white hover:bg-primary hover:text-white transform duration-300 border-primary py-2 lg:py-3 px-8 rounded font-bold tracking-wide lg:text-lg">
            View All FAQs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FaqLayout;
