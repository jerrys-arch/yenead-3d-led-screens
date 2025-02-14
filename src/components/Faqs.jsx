import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "General Information: Questions about 3D technology, advertising rates, contract terms, etc.",
      answer:
        "This section provides insights on the 3D technology used, how to get pricing details, and the terms of our contracts for 3D services.",
    },
    {
      question:
        "Technical Details: How 3D content is created, delivery formats, and technical specifications needed.",
      answer:
        "3D content is created using advanced modeling software. We provide content in various formats like FBX, OBJ, and glTF, depending on your project needs.",
    },
    // Add more FAQs as needed
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full mx-auto py-12 bg-[url('https://img.freepik.com/free-photo/3d-technology-geometric-black-background_53876-97124.jpg?t=st=1739542977~exp=1739546577~hmac=7f253a46316ddcb6e6357677d7916295dbd2238765c0d330e96a1e1c494b09a7&w=996')] bg-cover bg-center text-white"
      id="faqs"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-8 text-indigo-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="space-y-6 ml-2">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-300 pb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Add delay for each item
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="text-2xl font-semibold w-full text-white bg-transparent hover:text-teal-200 focus:outline-none transition-all duration-300"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <p className="mt-4 text-lg text-gray-300">{faq.answer}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
