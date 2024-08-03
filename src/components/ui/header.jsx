import ButtonUsage from "./Button";
import Items from './List';
import { motion } from "framer-motion";

function Header({ title, text }) {
  return (
    <div className="bg-red-900 p-1 pb-8">
      <motion.div
        className="flex flex-col justify-center items-center p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}  // Start immediately
      >
        <div className="flex justify-between items-center w-full max-w-7xl">
          <motion.h1
            className="text-white font-bold text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}  // Staggered delay
          >
            TravelEase
          </motion.h1>
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}  // Staggered delay
          >
            <ButtonUsage />
          </motion.div>
        </div>
        <motion.div
          className="hidden lg:block w-full mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}  // Staggered delay
        >
          <Items />
        </motion.div>
        <motion.h4
          className="mx-4 text-white font-bold text-4xl lg:text-5xl mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}  // Staggered delay
        >
          {title}
        </motion.h4>
        <motion.h1
          className="mx-4 text-sm text-white lg:text-xl mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}  // Staggered delay
        >
          {text}
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default Header;
