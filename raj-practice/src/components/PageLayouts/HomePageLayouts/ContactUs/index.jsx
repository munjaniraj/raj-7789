
// import HomeContactUsForm from "./Form";
// import { motion } from "framer-motion";

// const HomeContactUs = ({ counters }) => {
//   return (
//     <motion.section className="container mx-auto mt-12 lg:mt-[100px] lg:px-0 px-4">
//       <motion.div
//         className="flex flex-wrap items-center justify-center rounded"
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 0.3 }}
//         variants={{
//           visible: { opacity: 1 },
//           hidden: { opacity: 0 },
//         }}
//         viewport={{ once: true, amount: 0.3 }}
//         style={{ overflow: "hidden" }}
//       >
//         <motion.div
//           className="hidden lg:block lg:w-1/2 p-10"
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 0.3 }}
//           variants={{
//             visible: { opacity: 1, x: 0 },
//             hidden: { opacity: 0, x: -100 },
//           }}
//           viewport={{ once: true, amount: 0.3 }}
//           style={{ overflow: "hidden" }}
//         >
//           <div className="text-3xl lg:text-4xl mb-2 flex flex-col">
//             <h5 className="font-nunito font-bold">Contact Us</h5>
//             <span className="bg-primary rounded my-2 w-32 h-1" />
//           </div>
//           <p className="text-xl my-12 opacity-75">
//             Once you fill out this form, our sales representatives will contact
//             you within 24 hours.
//           </p>
//           <div className="h-72 flex capitalize">
//             <div className="h-72 flex capitalize gap-10">
//               <div className="flex flex-col h-full gap-10">
//                 <div className="items-center justify-center h-1/2">
//                   <p className="font-bold text-4xl text-primary relative">
//                     <span className="border-b-2 border-[#BCBCBC] w-max">
//                       {counters?.[0].count}+
//                     </span>
//                   </p>
//                   <p className="mt-2 w-screen lg:w-auto">
//                     {counters?.[0].title}
//                   </p>
//                 </div>
//                 <div className="items-center justify-center h-1/2">
//                   <p className="font-bold text-4xl text-primary relative">
//                     <span className="border-b-2 border-[#BCBCBC] w-max">
//                       {counters?.[2]?.count}+
//                     </span>
//                   </p>
//                   <p className="mt-2 w-screen lg:w-auto">
//                     {counters?.[2].title}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-col h-full gap-10">
//                 <div className="items-center justify-center h-1/2 relative">
//                   <p className="font-bold text-4xl text-primary relative">
//                     <span className="border-b-2 border-[#BCBCBC] w-max">
//                       {counters?.[3]?.count}+
//                     </span>
//                   </p>
//                   <p className="mt-2 w-screen lg:w-auto">
//                     {counters?.[3].title}
//                   </p>
//                 </div>
//                 <div className="items-center justify-center h-1/2">
//                   <p className="font-bold text-4xl text-primary relative">
//                     <span className="border-b-2 border-[#BCBCBC] w-max">
//                       {counters?.[1]?.count}+
//                     </span>
//                   </p>
//                   <p className="mt-2 w-screen lg:w-auto">
//                     {counters?.[1].title}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="lg:w-1/2 lg:p-10"
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 0.3 }}
//           variants={{
//             visible: { opacity: 1, x: 0 },
//             hidden: { opacity: 0, x: 100 },
//           }}
//           viewport={{ once: true, amount: 0.3 }}
//           style={{ overflow: "hidden" }}
//         >
//           <div className="lg:hidden block">
//             <div className="text-3xl lg:text-4xl flex items-center flex-col">
//               <p className="font-nunito font-bold">Contact Us</p>
//               <span className="bg-primary rounded my-2 w-32 h-1" />
//             </div>
//             <p className="text-xl text-start max-w-lg mt-4">
//               Once you fill out this form, our sales representatives will
//               contact you within 24 hours.
//             </p>
//           </div>
//           <HomeContactUsForm />
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default HomeContactUs;
