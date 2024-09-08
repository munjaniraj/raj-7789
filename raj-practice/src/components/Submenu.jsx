import { motion } from "framer-motion";
import Link from "next/link";

const SubMenu = ({ open, navigators, className, handleItemClick }) => {
  return (
    <motion.ul
      className={`list-disc marker:text-primary marker:text-2xl ${
        className ? className : "pl-10"
      }`}
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      style={{ overflow: "hidden" }}
    >
      {navigators &&
        navigators.map((value, i) => (
          <Link href={value.link} key={i} target={value.target}>
            <li className="my-2" onClick={handleItemClick}>
              {value.title}
            </li>
          </Link>
        ))}
    </motion.ul>
  );
};

export default SubMenu;
