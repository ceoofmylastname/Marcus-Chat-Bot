
import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  "Remembers Every Conversation",
  "Books Calls Automatically",
  "Learns Your Business in Minutes",
  "Integrates Seamlessly with GoHighLevel",
  "24/7 AI Support — No Breaks. No Missed Leads.",
  "Understands Complex Queries"
];

const BenefitCard = ({ text, index }: { text: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 0px 30px rgba(59, 130, 246, 0.3)",
      borderColor: "rgba(59, 130, 246, 0.5)"
    }}
    className="p-6 sm:p-8 h-full rounded-2xl bg-gray-900/50 border border-gray-800 cursor-pointer"
  >
    <h3 className="text-xl font-bold text-white">{text}</h3>
  </motion.div>
);

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Your Digital Employee, <span className="gradient-text">Always On.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Discover the advantages of an AI assistant that works tirelessly for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            // FIX: Wrapped BenefitCard in a React.Fragment and moved the key to it.
            // This resolves a TypeScript error where the 'key' prop was being incorrectly
            // checked against the custom component's props.
            <React.Fragment key={i}>
              <BenefitCard text={benefit} index={i} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

// This needs to be imported to be used.
import { AnimatePresence } from 'framer-motion';

export default BenefitsSection;