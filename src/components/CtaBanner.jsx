import React from "react";
import { motion } from "framer-motion"; // Import motion

const CtaBanner = ({
  message,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
  button3Text,
  button3Link,
}) => {
  return (
    <motion.div
      className="bg-[url('https://img.freepik.com/free-photo/3d-technology-geometric-black-background_53876-97124.jpg?t=st=1739542977~exp=1739546577~hmac=7f253a46316ddcb6e6357677d7916295dbd2238765c0d330e96a1e1c494b09a7&w=996')] bg-cover bg-center text-white text-center py-6 px-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-2xl font-semibold mb-4">{message}</p>
      <div className="flex justify-center space-x-4 mt-6">
        {/* Button 1 */}
        <a
          href={button1Link}
          className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-300"
        >
          {button1Text}
        </a>
        {/* Button 2 */}
        <a
          href={button2Link}
          className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-300"
        >
          {button2Text}
        </a>
        {/* Button 3 */}
        <a
          href={button3Link}
          className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-300"
        >
          {button3Text}
        </a>
      </div>
    </motion.div>
  );
};

export default CtaBanner;
